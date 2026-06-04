import React, { createContext, useState, useCallback, useEffect } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);

  // ── Load wishlist from localStorage ──────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem("arke_wishlist");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to load wishlist:", err);
    }
  }, []);

  // ── Save wishlist to localStorage ────────────────────────
  const saveToStorage = useCallback((wishlistItems) => {
    try {
      localStorage.setItem("arke_wishlist", JSON.stringify(wishlistItems));
    } catch (err) {
      console.error("Failed to save wishlist:", err);
    }
  }, []);

  // ── Add item to wishlist ─────────────────────────────────
  const addToWishlist = useCallback(
    (product) => {
      setItems((prev) => {
        const productId = product._id || product.id;
        // Check if already in wishlist
        if (prev.some((item) => (item._id || item.id) === productId)) {
          return prev;
        }
        const updated = [...prev, product];
        saveToStorage(updated);
        return updated;
      });
    },
    [saveToStorage]
  );

  // ── Remove item from wishlist ────────────────────────────
  const removeFromWishlist = useCallback(
    (productId) => {
      setItems((prev) => {
        const updated = prev.filter(
          (item) => (item._id || item.id) !== productId
        );
        saveToStorage(updated);
        return updated;
      });
    },
    [saveToStorage]
  );

  // ── Check if item is in wishlist ─────────────────────────
  const isInWishlist = useCallback(
    (productId) => {
      return items.some((item) => (item._id || item.id) === productId);
    },
    [items]
  );

  // ── Toggle wishlist ──────────────────────────────────────
  const toggleWishlist = useCallback(
    (product) => {
      const productId = product._id || product.id;
      if (isInWishlist(productId)) {
        removeFromWishlist(productId);
      } else {
        addToWishlist(product);
      }
    },
    [isInWishlist, removeFromWishlist, addToWishlist]
  );

  // ── Clear wishlist ───────────────────────────────────────
  const clearWishlist = useCallback(() => {
    setItems([]);
    saveToStorage([]);
  }, [saveToStorage]);

  // ── Get wishlist count ───────────────────────────────────
  const getWishlistCount = useCallback(() => {
    return items.length;
  }, [items]);

  const value = {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
    getWishlistCount,
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