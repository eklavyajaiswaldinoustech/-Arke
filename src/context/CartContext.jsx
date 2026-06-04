import React, { createContext, useState, useCallback, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ── Load cart from server ─────────────────────────────────
  const loadCart = useCallback(async () => {
    const token = localStorage.getItem("arke_token");
    if (!token) { setItems([]); return; }

    setLoading(true);
    setError(null);
    try {
      const response = await api.getCart();
      const cartItems = Array.isArray(response?.cart)
        ? response.cart
        : Array.isArray(response?.data)
        ? response.data
        : Array.isArray(response?.items)
        ? response.items
        : Array.isArray(response)
        ? response
        : [];
      setItems(cartItems);
    } catch (err) {
      console.error("Failed to load cart:", err);
      setError("Failed to load cart");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // ── Add item to cart ──────────────────────────────────────
  const addToCart = useCallback(async (productId, quantity = 1) => {
    try {
      const existingItem = items.find(
        (item) => (item.product?._id || item._id || item.id) === productId
      );
      if (existingItem) {
        setItems((prev) =>
          prev.map((item) =>
            (item.product?._id || item._id || item.id) === productId
              ? { ...item, quantity: (item.quantity || 1) + quantity }
              : item
          )
        );
      } else {
        setItems((prev) => [...prev, { id: productId, productId, quantity, isOptimistic: true }]);
      }
      const response = await api.addToCart(productId, quantity);
      await loadCart();
      return response;
    } catch (err) {
      console.error("Failed to add to cart:", err);
      loadCart();
      throw err;
    }
  }, [items, loadCart]);

  // ── Remove item from cart ─────────────────────────────────
  const removeFromCart = useCallback(async (productId) => {
    try {
      setItems((prev) =>
        prev.filter((item) => (item.product?._id || item._id || item.id) !== productId)
      );
      await api.removeFromCart(productId);
    } catch (err) {
      console.error("Failed to remove from cart:", err);
      loadCart();
      throw err;
    }
  }, [loadCart]);

  // ── Update item quantity ──────────────────────────────────
  const updateQuantity = useCallback(async (productId, quantity) => {
    if (quantity <= 0) return removeFromCart(productId);
    try {
      setItems((prev) =>
        prev.map((item) =>
          (item.product?._id || item._id || item.id) === productId
            ? { ...item, quantity, isUpdating: true }
            : item
        )
      );
      // FIX: was api.updateCartQty — correct name is api.updateCartItem
      await api.updateCartItem(productId, quantity);
      setItems((prev) =>
        prev.map((item) =>
          (item.product?._id || item._id || item.id) === productId
            ? { ...item, isUpdating: false }
            : item
        )
      );
    } catch (err) {
      console.error("Failed to update quantity:", err);
      loadCart();
      throw err;
    }
  }, [loadCart, removeFromCart]);

  // ── Clear cart ────────────────────────────────────────────
  const clearCart = useCallback(() => {
    setItems([]);
    setError(null);
  }, []);

  // ── Get cart count ────────────────────────────────────────
  const getCartCount = useCallback(() => {
    return items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }, [items]);

  // ── Get cart total ────────────────────────────────────────
  const getCartTotal = useCallback(() => {
    return items.reduce((sum, item) => {
      const product = item.product || item;
      const price = Number(product.price || product.salePrice || 0);
      return sum + price * (item.quantity || 1);
    }, 0);
  }, [items]);

  useEffect(() => {
    loadCart();
    const handleStorageChange = (e) => {
      if (e.key === "arke_token" && !e.newValue) clearCart();
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [loadCart, clearCart]);

  return (
    <CartContext.Provider value={{ items, loading, error, addToCart, removeFromCart, updateQuantity, clearCart, loadCart, getCartCount, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}