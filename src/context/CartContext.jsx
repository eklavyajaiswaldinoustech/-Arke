import React, { createContext, useState, useCallback, useEffect, useRef } from "react";
import { api } from "../services/api";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items,   setItems]   = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);
  const loadingRef            = useRef(false);

  /* ── helpers ────────────────────────────────────────────────── */
  const isLoggedIn = () => !!localStorage.getItem("arke_token");

  const getProductId = (item) =>
    String(
      item?.product?._id  ||
      item?.product?.id   ||
      item?.productId     ||
      item?._id           ||
      item?.id            ||
      ""
    );

  // YOUR backend returns: { success, cart: [...] }
  // each item shape:      { _id, productId, quantity, product: {...} }
  const normaliseCart = (raw) => {
    if (!Array.isArray(raw)) return [];
    return raw.filter(Boolean).map((item) => ({
      _id:       item._id       || item.productId || item.id,
      productId: item.productId || item._id       || item.id,
      quantity:  Number(item.quantity) || 1,
      product:   item.product   || null,
    }));
  };

  /* ── LOAD CART ──────────────────────────────────────────────── */
  const loadCart = useCallback(async () => {
    // ✅ FIX 1: Don't call API if not logged in
    if (!isLoggedIn()) {
      setItems([]);
      return;
    }

    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const response = await api.getCart();

      // ✅ FIX 2: Handle 401 Unauthorized gracefully
      if (response?.httpStatus === 401 || response?.message?.toLowerCase().includes("unauthorized")) {
        console.warn("Cart: not authorized — user may not be logged in");
        setItems([]);
        return;
      }

      // YOUR backend returns { success, cart: [...] }
      // Support multiple shapes just in case
      const raw =
        Array.isArray(response?.cart)   ? response.cart  :
        Array.isArray(response?.data)   ? response.data  :
        Array.isArray(response?.items)  ? response.items :
        Array.isArray(response)         ? response       :
        [];

      const newCart = normaliseCart(raw);
      
      // ✅ FIX 4: Merge with existing items to preserve product details
      setItems((prevItems) => {
        const merged = newCart.map((newItem) => {
          const existingItem = prevItems.find(
            (p) => getProductId(p) === getProductId(newItem)
          );
          // Keep existing product details if backend didn't return them
          return {
            ...newItem,
            product: newItem.product || existingItem?.product || null,
          };
        });
        return merged;
      });
    } catch (err) {
      console.error("loadCart error:", err);
      setError(err?.message || "Failed to load cart");
      setItems([]);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, []);

  /* ── ADD TO CART ────────────────────────────────────────────── */
  const addToCart = useCallback(async (productOrId, quantity = 1) => {
    if (!isLoggedIn()) throw new Error("Please login to add items to cart");

    // Extract product details if object is passed
    const productData = typeof productOrId === "object" && productOrId !== null ? productOrId : null;
    const productId =
      typeof productOrId === "string" || typeof productOrId === "number"
        ? String(productOrId)
        : String(productOrId?._id || productOrId?.id || productOrId?.productId || "");

    if (!productId) throw new Error("addToCart: productId is required");

    // Optimistic update with product details
    setItems((prev) => {
      const exists = prev.find((i) => getProductId(i) === productId);
      if (exists) {
        return prev.map((i) =>
          getProductId(i) === productId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { 
        _id: productId, 
        productId, 
        quantity: Number(quantity), 
        product: productData, // Use actual product object instead of null
        _optimistic: true 
      }];
    });

    try {
      await api.addToCart(productId, quantity);
      await loadCart(); // refresh with real data from server
    } catch (err) {
      console.error("addToCart error:", err);
      await loadCart(); // roll back optimistic update
      throw err;
    }
  }, [loadCart]);

  /* ── REMOVE FROM CART ───────────────────────────────────────── */
  const removeFromCart = useCallback(async (productOrId) => {
    if (!isLoggedIn()) return;

    const productId =
      typeof productOrId === "string" || typeof productOrId === "number"
        ? String(productOrId)
        : String(productOrId?._id || productOrId?.id || productOrId?.productId || "");

    if (!productId) throw new Error("removeFromCart: productId is required");

    // Optimistic removal
    setItems((prev) => prev.filter((i) => getProductId(i) !== productId));

    try {
      await api.removeFromCart(productId);
    } catch (err) {
      console.error("removeFromCart error:", err);
      await loadCart(); // roll back
      throw err;
    }
  }, [loadCart]);

  /* ── UPDATE QUANTITY ────────────────────────────────────────── */
  const updateQuantity = useCallback(async (productOrId, quantity) => {
    if (!isLoggedIn()) return;

    const productId =
      typeof productOrId === "string" || typeof productOrId === "number"
        ? String(productOrId)
        : String(productOrId?._id || productOrId?.id || productOrId?.productId || "");

    if (!productId) throw new Error("updateQuantity: productId is required");

    const qty = Number(quantity);
    if (qty <= 0) return removeFromCart(productId);

    // Optimistic update
    setItems((prev) =>
      prev.map((i) =>
        getProductId(i) === productId ? { ...i, quantity: qty } : i
      )
    );

    try {
      await api.updateCartItem(productId, qty);
    } catch (err) {
      console.error("updateQuantity error:", err);
      await loadCart(); // roll back
      throw err;
    }
  }, [loadCart, removeFromCart]);

  /* ── CLEAR CART ─────────────────────────────────────────────── */
  const clearCart = useCallback(() => {
    setItems([]);
    setError(null);
  }, []);

  /* ── DERIVED VALUES ─────────────────────────────────────────── */
  const getCartCount = useCallback(
    () => items.reduce((sum, i) => sum + (i.quantity || 1), 0),
    [items]
  );

  const getCartTotal = useCallback(
    () => items.reduce((sum, i) => {
      const p = i.product || i;
      return sum + Number(p?.price || p?.salePrice || 0) * (i.quantity || 1);
    }, 0),
    [items]
  );

  const isInCart = useCallback(
    (productOrId) => {
      const id =
        typeof productOrId === "string" || typeof productOrId === "number"
          ? String(productOrId)
          : String(productOrId?._id || productOrId?.id || productOrId?.productId || "");
      return items.some((i) => getProductId(i) === id);
    },
    [items]
  );

  const getCartItem = useCallback(
    (productOrId) => {
      const id =
        typeof productOrId === "string" || typeof productOrId === "number"
          ? String(productOrId)
          : String(productOrId?._id || productOrId?.id || productOrId?.productId || "");
      return items.find((i) => getProductId(i) === id) || null;
    },
    [items]
  );

  /* ── EFFECTS ────────────────────────────────────────────────── */

  // ✅ FIX 3: Only load cart on mount if logged in
  useEffect(() => {
    if (isLoggedIn()) loadCart();
  }, [loadCart]);

  // Reload cart when token changes (login/logout in another tab)
  useEffect(() => {
    const syncAuthCart = () => {
      if (isLoggedIn()) {
        loadCart();      // logged in — load cart
      } else {
        clearCart();     // logged out — clear cart
      }
    };
    const handleStorage = (e) => {
      if (e.key === "arke_token") syncAuthCart();
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener("arke-auth-change", syncAuthCart);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("arke-auth-change", syncAuthCart);
    };
  }, [loadCart, clearCart]);

  /* ── CONTEXT VALUE ──────────────────────────────────────────── */
  const cartCount = items.reduce((s, i) => s + (i.quantity || 1), 0);
  const cartTotal = items.reduce((s, i) => {
    const p = i.product || i;
    return s + Number(p?.price || p?.salePrice || 0) * (i.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider value={{
      items, loading, error,
      addToCart, removeFromCart, updateQuantity, clearCart, loadCart,
      getCartCount, getCartTotal, isInCart, getCartItem,
      cartCount, cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) throw new Error("useCart must be used within <CartProvider>");
  return context;
}
