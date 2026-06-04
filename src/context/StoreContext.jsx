import { createContext, useState, useEffect, useContext } from "react";
import { api, extract } from "../services/api";

export const StoreCtx = createContext({});

const getAuthToken = (res) => (
  res?.token ||
  res?.auth_key ||
  res?.auth ||
  res?.data?.token ||
  res?.data?.auth_key ||
  res?.data?.auth
);

const getAuthUser = (res, fallback = {}) => ({
  ...(res?.user || res?.data?.user || {}),
  id: res?.userid || res?.data?.userid || res?.user?._id || res?.data?.user?._id || fallback.id,
  email: res?.email || res?.data?.email || res?.user?.email || res?.data?.user?.email || fallback.email,
  name: res?.name || res?.data?.name || res?.user?.name || res?.data?.user?.name || fallback.name,
  phone: res?.phone || res?.data?.phone || res?.user?.phone || res?.data?.user?.phone || fallback.phone,
  mobile: res?.mobile || res?.data?.mobile || res?.user?.mobile || res?.data?.user?.mobile || fallback.mobile || fallback.phone,
  firstname: res?.firstname || res?.data?.firstname || res?.user?.firstname || res?.data?.user?.firstname || fallback.firstname,
  lastname: res?.lastname || res?.data?.lastname || res?.user?.lastname || res?.data?.user?.lastname || fallback.lastname,
});

export function StoreProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("arke_user")); } catch { return null; }
  });
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  const login = async (email, password) => {
    const res = await api.login(email, password);
    const token = getAuthToken(res);
    if (res?.success !== false && token) {
      const u = getAuthUser(res, { email });
      localStorage.setItem("arke_token", token);
      localStorage.setItem("arke_user", JSON.stringify(u));
      setUser(u);
      return { ok: true };
    }
    return { ok: false, msg: res?.message || "Login failed" };
  };

  const register = async (data) => {
    const res = await api.register(data);
    const token = getAuthToken(res);
    if (res?.success !== false && token) {
      const u = getAuthUser(res, data);
      localStorage.setItem("arke_token", token);
      localStorage.setItem("arke_user", JSON.stringify(u));
      setUser(u);
      return { ok: true };
    }
    return { ok: false, msg: res?.message || "Registration failed" };
  };

  const logout = () => {
    localStorage.removeItem("arke_token");
    localStorage.removeItem("arke_user");
    setUser(null);
    setCartCount(0);
    setWishCount(0);
  };

  const refreshCart = async () => {
    if (!localStorage.getItem("arke_token")) return;
    try {
      const res = await api.getCart();
      setCartCount(extract(res, "cart").length);
    } catch {}
  };

  const refreshWishlist = async () => {
    if (!localStorage.getItem("arke_token")) return;
    try {
      const res = await api.getWishlist();
      setWishCount(extract(res, "wishlist").length);
    } catch {}
  };

  useEffect(() => {
    refreshCart();
    refreshWishlist();
  }, [user]);

  return (
    <StoreCtx.Provider value={{ user, login, register, logout, cartCount, wishCount, setWishCount, refreshCart, refreshWishlist }}>
      {children}
    </StoreCtx.Provider>
  );
}

// FIX: Export useStore hook directly from StoreContext
// so Navbar.jsx can import from either path
export function useStore() {
  return useContext(StoreCtx);
}