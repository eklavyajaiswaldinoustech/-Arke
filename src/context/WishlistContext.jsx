import React, { createContext, useState, useCallback, useEffect, useRef } from "react";
import { api } from "../services/api";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadingRef = useRef(false);

  // ── Helper: Check if user is logged in ───────────────────
  const isLoggedIn = () => !!localStorage.getItem("arke_token");

  const getProductId = (item) =>
    String(
      item?.product?._id ||
      item?.product?.id ||
      item?.productId ||
      item?._id ||
      item?.id ||
      ""
    );

  // ── Load wishlist from backend ───────────────────────────
  const loadWishlist = useCallback(async () => {
    if (!isLoggedIn()) {
      setItems([]);
      return;
    }

    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const response = await api.getWishlist();

      // Handle error responses
      if (response?.httpStatus === 401 || response?.message?.toLowerCase().includes("unauthorized")) {
        console.warn("Wishlist: not authorized");
        setItems([]);
        return;
      }

      // Parse response based on backend format
      const raw =
        Array.isArray(response?.wishlist) ? response.wishlist :
        Array.isArray(response?.products) ? response.products :
        Array.isArray(response?.data) ? response.data :
        Array.isArray(response?.items) ? response.items :
        Array.isArray(response) ? response :
        [];

      setItems(raw);
    } catch (err) {
      console.error("loadWishlist error:", err);
      setError(err?.message || "Failed to load wishlist");
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, []);

  // ── Load wishlist on mount if logged in ──────────────────
  useEffect(() => {
    if (isLoggedIn()) {
      loadWishlist();
    }
  }, [loadWishlist]);

  // ── Sync wishlist when token changes (login/logout) ──────
  useEffect(() => {
    const syncAuthWishlist = () => {
      if (isLoggedIn()) {
        loadWishlist(); // logged in — load wishlist
      } else {
        setItems([]); // logged out — clear wishlist
      }
    };
    const handleStorage = (e) => {
      if (e.key === "arke_token") syncAuthWishlist();
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener("arke-auth-change", syncAuthWishlist);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("arke-auth-change", syncAuthWishlist);
    };
  }, [loadWishlist]);

  // ── Toggle wishlist item (add/remove) ────────────────────
  const toggleWishlist = useCallback(async (productOrId) => {
    if (!isLoggedIn()) {
      throw new Error("Please login to save items");
    }

    const productData = typeof productOrId === "object" && productOrId !== null ? productOrId : null;
    const productId =
      typeof productOrId === "string" || typeof productOrId === "number"
        ? String(productOrId)
        : getProductId(productOrId);

    if (!productId) throw new Error("productId is required");

    // Check if already in wishlist BEFORE optimistic update
    const isCurrentlyInWishlist = items.some((item) => getProductId(item) === productId);

    // Optimistic update - toggle locally
    setItems((prev) => {
      const inWishlist = prev.some((item) => getProductId(item) === productId);

      if (inWishlist) {
        // Remove from wishlist
        return prev.filter((item) => getProductId(item) !== productId);
      } else {
        // Add to wishlist - keep existing product data if available
        return [...prev, productData || { _id: productId, id: productId }];
      }
    });

    try {
      // Call correct backend API endpoint based on current state
      let response;
      if (isCurrentlyInWishlist) {
        // Remove from wishlist
        response = await api.removeWishlist(productId);
      } else {
        // Add to wishlist
        response = await api.addToWishlist(productId);
      }

      // Check if request was successful
      if (!response?.success && response?.message) {
        console.warn("Wishlist toggle response:", response.message);
      }

      // Refresh wishlist from server to ensure sync
      await loadWishlist();
    } catch (err) {
      console.error("toggleWishlist error:", err);
      // Revert optimistic update on error
      await loadWishlist();
      throw err;
    }
  }, [items, loadWishlist]);

  // ── Check if item is in wishlist ─────────────────────────
  const isInWishlist = useCallback(
    (productId) => {
      const id = typeof productId === "string" || typeof productId === "number"
        ? String(productId)
        : getProductId(productId);
      return items.some((item) => getProductId(item) === id);
    },
    [items]
  );

  // ── Get wishlist count ───────────────────────────────────
  const getWishlistCount = useCallback(() => {
    return items.length;
  }, [items]);

  // ── Clear wishlist (local only) ──────────────────────────
  const clearWishlist = useCallback(() => {
    setItems([]);
  }, []);

  // ── Remove item from wishlist ────────────────────────────
  const removeFromWishlist = useCallback(async (productId) => {
    return toggleWishlist(productId);
  }, [toggleWishlist]);

  const value = {
    items,
    wishlistCount: items.length,
    loading,
    error,
    toggleWishlist,
    removeFromWishlist,
    isInWishlist,
    getWishlistCount,
    clearWishlist,
    loadWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

// ── Custom Hook ───────────────────────────────────────────
export function useWishlist() {
  const context = React.useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
