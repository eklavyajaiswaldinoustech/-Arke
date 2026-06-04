const BASE =  "http://localhost:5050"

const headers = () => {
  const token = localStorage.getItem("arke_token");
  return {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    "Cache-Control": "no-cache",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

const withFreshness = (path) => {
  const joiner = path.includes("?") ? "&" : "?";
  return `${path}${joiner}_=${Date.now()}`;
};

const parseResponse = async (response) => {
  const text = await response.text();
  const contentType = response.headers.get("content-type") || "";
  let body = null;

  if (text) {
    if (contentType.includes("application/json")) {
      try {
        body = JSON.parse(text);
      } catch {
        body = {
          success: false,
          status: false,
          message: "Backend returned invalid JSON.",
          raw: text,
        };
      }
    } else {
      body = {
        success: false,
        status: false,
        message: text,
      };
    }
  }

  if (!response.ok) {
    return {
      ...(body && typeof body === "object" ? body : {}),
      success: false,
      status: false,
      message: body?.message || `Request failed (${response.status})`,
      httpStatus: response.status,
    };
  }

  return body || {
    success: false,
    status: false,
    message: "Backend returned an empty response.",
  };
};

const get = async (path) => {
  try {
    const r = await fetch(`${BASE}${withFreshness(path)}`, {
      headers: headers(),
      cache: "no-store",
    });
    return parseResponse(r);
  } catch {
    return {
      success: false,
      status: false,
      message: `Cannot connect to backend at ${BASE}.`,
    };
  }
};

const post = async (path, body) => {
  try {
    const r = await fetch(`${BASE}${path}`, {
      method: "POST", headers: headers(), body: JSON.stringify(body),
    });
    return parseResponse(r);
  } catch {
    return {
      success: false,
      status: false,
      message: `Cannot connect to backend at ${BASE}.`,
    };
  }
};

const del = async (path) => {
  try {
    const r = await fetch(`${BASE}${path}`, { method: "DELETE", headers: headers() });
    return parseResponse(r);
  } catch {
    return {
      success: false,
      status: false,
      message: `Cannot connect to backend at ${BASE}.`,
    };
  }
};

export const api = {
  getBanners:        ()      => get("/api/banner"),
  getCategories:     ()      => get("/api/get-all-Category"),
  // /api/get-all-types does not exist on backend — returns empty array gracefully
  getTypes:          ()      => Promise.resolve({ data: [], types: [] }),
  getLatestProducts: ()      => get("/api/latest-products"),
  getBestSellers:    ()      => get("/api/best-by-us"),
  getBlogs:          ()      => get("/api/blogs"),
  getBlogById:       (id)    => get(`/api/blogs/${id}`),
  // was /api/admin/products (404) → correct route is /api/get-all-product
  getAllProducts:     ()      => get("/api/get-all-product"),
  // was /api/product-details/:id (404) → correct route is /api/get-product/:id
  getProductById:    (id)    => get(`/api/get-product/${id}`),
  // /api/related-products/:id does not exist — returns empty array gracefully
  getRelated:        ()      => Promise.resolve({ data: [], products: [] }),
  getCart: () => get("/api/cart"),
  addToCart: (productId, qty = 1) =>
  post("/api/cart", { productId, quantity: qty }),
  // was /api/removeFromCart (404) → correct route is /api/removeCart
  removeFromCart: (productId) =>
  del(`/api/cart/${productId}`),
  // was /api/view-wishlist (404) → correct route is /api/get-wishlist
  getWishlist:       ()      => get("/api/get-wishlist"),
  addToWishlist:     (productId) => post("/api/add-to-wishlist", { productId }),
  // backend uses POST /api/add-to-wishlist (toggles remove too) — no separate DELETE route
  removeWishlist:    (productId) => post("/api/add-to-wishlist", { productId }),
  login:             (email, password) => post("/api/login", { email, password }),
  register:          (data)  => post("/api/add-user", data),
  placeOrder:        (data)  => post("/api/place-order", data),

  // Announcement endpoints
  getAnnouncements:    ()           => get("/api/announcements"),
  createAnnouncement:  (data)       => post("/api/announcements", data),
  updateAnnouncement:  (id, data)   => post(`/api/announcements/${id}`, data),
  deleteAnnouncement:  (id)         => del(`/api/announcements/${id}`),
  reorderAnnouncements: (data)      => post("/api/announcements/reorder", data),
  
  // Gift endpoints
  getGiftForHer: () => get("/api/gifts/gift-for-her"),
  getGiftForHim: () => get("/api/gifts/gift-for-him"),
};

// ── Smart image URL resolver ────────────────────────────────────────
export const imgUrl = (input) => {
  if (!input) return null;

  // Array — take first valid non-null item
  if (Array.isArray(input)) {
    for (const item of input) {
      if (item === null || item === undefined || item === "") continue;
      const resolved = imgUrl(item);
      if (resolved) return resolved;
    }
    return null;
  }

  // Object — try every common image key
  if (typeof input === "object") {
    const keys = ["url", "src", "path", "image", "categoryImage", "thumbnail", "imageUrl", "img", "secure_url", "location", "key"];
    for (const k of keys) {
      if (input[k]) return imgUrl(input[k]);
    }
    return null;
  }

  // String
  const str = String(input).trim();
  if (!str || str === "null" || str === "undefined") return null;

  // Already a full URL
  if (str.startsWith("http://") || str.startsWith("https://")) return str;

  // Base64 data URI
  if (str.startsWith("data:")) return str;

  // Relative path — prepend base
  return `${BASE}/${str.replace(/^\/+/, "")}`;
};

// ── Safe array extractor ────────────────────────────────────────────
export const extract = (res, ...keys) => {
  if (!res) return [];
  // Check provided keys first, then common ones
  for (const k of [...keys, "data", "products", "result", "categories", "category", "Category", "blogs", "banners", "items", "list"]) {
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

export const getCategoryId = (category) => getId(category);

export const getCategoryName = (category) => (
  category?.name ||
  category?.categoryName ||
  category?.title ||
  category?.sideCategoryName ||
  category?.label ||
  "Category"
);

export const getCategoryImage = (category) => imgUrl(
  category?.image ||
  category?.categoryImage ||
  category?.thumbnail ||
  category?.imageUrl ||
  category?.img
);

export const productMatchesCategory = (product, categoryId) => {
  if (!categoryId || categoryId === "all") return true;
  const wanted = String(categoryId);
  const candidates = [
    product?.category,
    product?.categoryId,
    product?.category_id,
    product?.sidecategory,
    product?.sideCategory,
    product?.sideCategoryId,
  ];

  return candidates.some((candidate) => {
    if (!candidate) return false;
    if (Array.isArray(candidate)) {
      return candidate.some((item) => getId(item) === wanted);
    }
    return getId(candidate) === wanted;
  });
};