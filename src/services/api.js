export const BASE = "https://arke-backend.onrender.com";
export const API_BASE = `${BASE}/api`;

/* ── Auth headers ─────────────────────────────────────────────────── */
const headers = () => {
  const token = localStorage.getItem("arke_token");
  return {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    "Cache-Control": "no-cache",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

/* ── Response parser ──────────────────────────────────────────────── */
const parseResponse = async (response) => {
  const text        = await response.text();
  const contentType = response.headers.get("content-type") || "";
  let body          = null;

  if (text) {
    if (contentType.includes("application/json")) {
      try { body = JSON.parse(text); }
      catch { body = { success: false, message: "Invalid JSON from backend", raw: text }; }
    } else {
      body = { success: false, message: text };
    }
  }

  if (!response.ok) {
    return {
      ...(body && typeof body === "object" ? body : {}),
      success:    false,
      status:     false,
      message:    body?.message || `Request failed (${response.status})`,
      httpStatus: response.status,
    };
  }

  return body || { success: false, message: "Empty response from backend" };
};

/* ── HTTP verbs ───────────────────────────────────────────────────── */
const get = async (path) => {
  try {
    const r = await fetch(`${BASE}${path}`, {
      method: "GET", headers: headers(), cache: "no-store",
    });
    return parseResponse(r);
  } catch (err) {
    console.error("GET error:", err);
    return { success: false, message: `Cannot connect to backend at ${BASE}.` };
  }
};

const post = async (path, body) => {
  try {
    const r = await fetch(`${BASE}${path}`, {
      method: "POST", headers: headers(), body: JSON.stringify(body),
    });
    return parseResponse(r);
  } catch (err) {
    console.error("POST error:", err);
    return { success: false, message: `Cannot connect to backend at ${BASE}.` };
  }
};

const put = async (path, body) => {
  try {
    const r = await fetch(`${BASE}${path}`, {
      method: "PUT", headers: headers(), body: JSON.stringify(body),
    });
    return parseResponse(r);
  } catch (err) {
    console.error("PUT error:", err);
    return { success: false, message: `Cannot connect to backend at ${BASE}.` };
  }
};

const del = async (path) => {
  try {
    const r = await fetch(`${BASE}${path}`, {
      method: "DELETE", headers: headers(),
    });
    return parseResponse(r);
  } catch (err) {
    console.error("DELETE error:", err);
    return { success: false, message: `Cannot connect to backend at ${BASE}.` };
  }
};

/* ── API surface ──────────────────────────────────────────────────── */
export const api = {
  // ── Banners / Categories / Products ───────────────────────────
  getBanners:        ()    => get("/api/banner"),
  getCategories:     ()    => get("/api/get-all-Category"),
  getLatestProducts: ()    => get("/api/latest-products"),
  getBestSellers:    ()    => get("/api/best-by-us"),
  getBlogs:          ()    => get("/api/blogs"),
  getBlogById:       (id)  => get(`/api/blogs/${id}`),
  getAllProducts:     ()    => get("/api/get-all-product"),
  getProductById:    (id)  => get(`/api/get-product/${id}`),
  getRelated:        ()    => Promise.resolve({ data: [] }),
  getTypes:          ()    => Promise.resolve({ data: [] }),

  // ── Cart  ── uses YOUR actual backend route names ──────────────
  // GET  /api/viewCart
  // POST /api/addCart          { productId, quantity }
  // POST /api/removeFromCart   { productId, quantity }
  // POST  /api/update-quantity { productId, quantity }
  getCart: () =>
    get("/api/viewCart"),

  addToCart: (productId, qty = 1) =>
    post("/api/addCart", {
      productId: String(productId),
      quantity:  Number(qty),
    }),

  updateCartItem: (productId, qty) =>
    post("/api/update-quantity", {
      productId: String(productId),
      quantity:  Number(qty),
    }),

  removeFromCart: (productId) =>
    post("/api/removeFromCart", {
      productId: String(productId),
      quantity:  1,
    }),

  clearCart: () =>
    Promise.resolve({ success: true }), // no clear route in your backend

  // ── Wishlist ───────────────────────────────────────────────────
  // GET  /api/view-wishlist
  // POST /api/add-to-wishlist     { productId }
  // POST /api/remove-from-wishlist { productId }
  getWishlist:    ()          => get("/api/view-wishlist"),
  addToWishlist:  (productId)  => post("/api/add-to-wishlist", { productId }),
  removeWishlist: (productId)  => post("/api/remove-from-wishlist", { productId }),

  // ── Auth ───────────────────────────────────────────────────────
  login:    (email, password) => post("/api/login",    { email, password }),
  register: (data)            => post("/api/add-user", data),

  // ── Orders ─────────────────────────────────────────────────────
  placeOrder: (data) => post("/api/place-order", data),

  // ── Announcements ──────────────────────────────────────────────
  getAnnouncements:   ()         => get("/api/announcements"),
  createAnnouncement: (data)     => post("/api/announcements",      data),
  updateAnnouncement: (id, data) => put(`/api/announcements/${id}`, data),
  deleteAnnouncement: (id)       => del(`/api/announcements/${id}`),

  // ── Gifts ──────────────────────────────────────────────────────
  getGiftForHer: () => get("/api/gifts/gift-for-her"),
  getGiftForHim: () => get("/api/gifts/gift-for-him"),
};

/* ── Image URL resolver ───────────────────────────────────────────── */
export const imgUrl = (input) => {
  if (!input) return null;
  if (Array.isArray(input)) {
    for (const item of input) {
      if (!item) continue;
      const r = imgUrl(item);
      if (r) return r;
    }
    return null;
  }
  if (typeof input === "object") {
    for (const k of ["url","src","path","images","image","categoryImage","thumbnail","imageUrl","img","photos","gallery","secure_url"]) {
      if (input[k]) return imgUrl(input[k]);
    }
    return null;
  }
  const str = String(input).trim();
  if (!str || str === "null" || str === "undefined") return null;
  if (str.startsWith("http://") || str.startsWith("https://")) return str;
  if (str.startsWith("data:")) return str;
  return `${BASE}/${str.replace(/^\/+/, "")}`;
};

export const getProductImage = (product, index = 0) => {
  if (!product) return null;

  for (const key of ["images", "image", "imageUrl", "img", "photos", "gallery"]) {
    const value = product[key];
    if (Array.isArray(value)) {
      const resolved = imgUrl(value[index]);
      if (resolved) return resolved;
    }
  }

  if (index === 0) {
    for (const key of ["image", "imageUrl", "img", "thumbnail", "photo", "picture"]) {
      if (product[key] && !Array.isArray(product[key])) {
        const resolved = imgUrl(product[key]);
        if (resolved) return resolved;
      }
    }
  }

  return null;
};

/* ── Helpers ──────────────────────────────────────────────────────── */
export const extract = (res, ...keys) => {
  if (!res) return [];
  for (const k of [...keys, "data","products","result","categories","category","Category","blogs","banners","items","list","cart"]) {
    if (Array.isArray(res[k]) && res[k].length > 0) return res[k];
  }
  if (Array.isArray(res)) return res;
  return [];
};

export const getId = (item) => {
  if (!item) return "";
  if (typeof item === "string") return item;
  return String(item._id || item.id || item.categoryId || item.value || "");
};

export const getCategoryId    = (cat) => getId(cat);
export const getCategoryName  = (cat) => cat?.name || cat?.categoryName || cat?.title || "Category";
export const getCategoryImage = (cat) => imgUrl(cat?.image || cat?.categoryImage || cat?.thumbnail);

export const productMatchesCategory = (product, categoryId) => {
  if (!categoryId || categoryId === "all") return true;
  const wanted = String(categoryId);
  const candidates = [product?.category, product?.categoryId, product?.category_id, product?.sidecategory, product?.sideCategory];
  return candidates.some(c => {
    if (!c) return false;
    if (Array.isArray(c)) return c.some(i => getId(i) === wanted);
    return getId(c) === wanted;
  });
};
