import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl, api } from "../services/api";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";

const THEME = {
  bg: "#faf8f5",
  surface: "#ffffff",
  text: "#2a2a2a",
  textMuted: "#8a8a8a",
  gold: "#d4af37",
  rose: "#e8b4c4",
  blush: "#f5d5e0",
  burgundy: "#8b4654",
  roseGold: "#c78a7f",
  champagne: "#e8d4c2",
  lavender: "#d4c4e0",
  border: "#e8ddd4",
  borderLight: "#f0ebe5",
};

// ── Debug: log first product image shape once ──────────────────────
let debugged = false;
function debugImage(product) {
  if (debugged) return;
  debugged = true;
  console.log("🔍 Product image debug:", {
    "product.images": product?.images,
    "product.image": product?.image,
    "product.thumbnail": product?.thumbnail,
    "product.imageUrl": product?.imageUrl,
    "product.img": product?.img,
    "full product keys": Object.keys(product || {}),
  });
}

// ── Resolve best image from product ───────────────────────────────
function getProductImg(product, index = 0) {
  if (Array.isArray(product?.image)) {
    const val = product.image[index];
    const resolved = imgUrl(val);
    if (resolved) return resolved;
  }
  for (const key of ["images", "imageUrl", "img", "photos", "gallery"]) {
    if (Array.isArray(product?.[key]) && product[key].length > index) {
      const resolved = imgUrl(product[key][index]);
      if (resolved) return resolved;
    }
  }
  if (index === 0) {
    for (const key of [
      "image",
      "imageUrl",
      "img",
      "thumbnail",
      "photo",
      "picture",
    ]) {
      if (product?.[key] && !Array.isArray(product[key])) {
        const resolved = imgUrl(product[key]);
        if (resolved) return resolved;
      }
    }
  }
  return null;
}

// ── Product Card Component ────────────────────────────────────────────
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { success, error: showError } = useToast();

  const [hovered, setHovered] = useState(false);
  const [cartState, setCartState] = useState("idle"); // "idle" | "loading" | "added" | "error"
  const [imgError, setImgError] = useState(false);
  const [wishActive, setWishActive] = useState(false);

  debugImage(product);

  const name = product?.name || product?.title || "Product";
  const price = product?.price || product?.salePrice || product?.mrp || 0;
  const originalPrice = product?.mrp || product?.originalPrice;
  const img1 = getProductImg(product, 0);
  const img2 = getProductImg(product, 1);
  const id = product?._id || product?.id;

  // Calculate discount percentage
  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  // ── Add to Cart handler ───────────────────────────────────────
  const handleCart = async (e) => {
    e.stopPropagation();

    if (!localStorage.getItem("arke_token")) {
      alert("Please login to add to cart");
      return;
    }

    if (cartState === "loading" || cartState === "added") return;

    setCartState("loading");

    try {
      // Send full product details along with the request
      const productDetails = {
        name: product?.name || product?.title || "Product",
        price: product?.price || product?.salePrice || product?.mrp || 0,
        image: img1, // Primary image
        images: [img1, img2].filter(Boolean), // All images
        description: product?.description || "",
        material: product?.material || product?.metalType || "",
        weight: product?.weight || "",
        size: product?.size || "",
        sku: product?.sku || product?.productCode || "",
        stock: product?.stock || 0,
      };

      await addToCart(id, 1, productDetails);

      setCartState("added");
      setTimeout(() => setCartState("idle"), 2500);
    } catch (err) {
      console.error("❌ Add to cart error:", err);
      setCartState("error");
      setTimeout(() => setCartState("idle"), 2500);
    }
  };

  // ── Wishlist handler ──────────────────────────────────────────
  const handleWish = async (e) => {
    e.stopPropagation();

    if (!localStorage.getItem("arke_token")) {
      alert("Please login to save items");
      return;
    }

    try {
      setWishActive(!wishActive);
      // await api.addToWishlist(id);
      // refreshWishlist?.();
    } catch (err) {
      console.error("❌ Wishlist error:", err);
      setWishActive(!wishActive);
    }
  };

  // ── Button states ──────────────────────────────────────────────
  const btnConfig = {
    idle: {
      label: "Add to Cart",
      bg: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
      color: "white",
    },
    loading: {
      label: "Adding…",
      bg: `rgba(232,180,196,0.6)`,
      color: "white",
    },
    added: {
      label: "✓ Added to Cart",
      bg: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
      color: "white",
    },
    error: {
      label: "Try Again",
      bg: `linear-gradient(135deg, #d97070, #c45c5c)`,
      color: "white",
    },
  }[cartState];

  return (
    <div
      style={{
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        background: THEME.surface,
        border: `1px solid ${THEME.border}`,
        borderRadius: "12px",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        boxShadow: hovered
          ? `0 20px 48px rgba(139, 70, 84, 0.25)`
          : `0 4px 16px rgba(0,0,0,0.08)`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/product/${id}`)}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .heart-beat {
          animation: pulse 0.4s ease-in-out;
        }
      `}</style>

      {/* ── Image Container ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "3/4",
          background: `linear-gradient(135deg, ${THEME.blush}, ${THEME.champagne})`,
        }}
      >
        {img1 && !imgError ? (
          <>
            {/* Primary Image */}
            <img
              src={img1}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: hovered ? "scale(1.08)" : "scale(1)",
              }}
              onError={() => setImgError(true)}
            />

            {/* Hover Image (2nd image) */}
            {img2 && (
              <img
                src={img2}
                alt={`${name} - alternate`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onError={() => {}}
              />
            )}
          </>
        ) : (
          /* Placeholder */
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: `linear-gradient(135deg, ${THEME.blush}, ${THEME.lavender})`,
            }}
          >
            <span
              style={{
                color: `rgba(232,180,196,0.3)`,
                fontSize: 48,
              }}
            >
              ◇
            </span>
            <span
              style={{
                color: THEME.textMuted,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 9,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              No Image
            </span>
          </div>
        )}

        {/* Gradient Overlay for Button */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.5) 45%, transparent 100%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            pointerEvents: "none",
          }}
        />

        {/* Add to Cart Button (Hover) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          <button
            onClick={handleCart}
            disabled={cartState === "loading"}
            style={{
              width: "100%",
              padding: "12px 0",
              background: btnConfig.bg,
              color: btnConfig.color,
              border: "none",
              cursor: cartState === "loading" ? "not-allowed" : "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontSize: 11,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              borderRadius: "6px",
              boxShadow:
                cartState === "added"
                  ? `0 4px 12px rgba(232,180,196,0.35)`
                  : `0 2px 8px rgba(232,180,196,0.2)`,
            }}
            onMouseEnter={(e) => {
              if (cartState !== "loading") {
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
            }}
          >
            {btnConfig.label}
          </button>
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.5px",
              padding: "6px 11px",
              borderRadius: "6px",
              boxShadow: `0 4px 12px rgba(139, 70, 84, 0.3)`,
              zIndex: 2,
            }}
          >
            {discountPercent}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWish}
          className={wishActive ? "heart-beat" : ""}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: wishActive
              ? `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`
              : "rgba(250,248,245,0.8)",
            backdropFilter: "blur(12px)",
            border: wishActive ? "none" : `1.5px solid ${THEME.rose}`,
            color: wishActive ? "white" : THEME.rose,
            width: 38,
            height: 38,
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0.9,
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 2,
            boxShadow: wishActive
              ? `0 4px 12px rgba(232,180,196,0.35)`
              : "none",
          }}
          onMouseEnter={(e) => {
            if (!wishActive) {
              e.target.style.background = `rgba(250,248,245,0.95)`;
              e.target.style.borderColor = THEME.burgundy;
              e.target.style.color = THEME.burgundy;
            }
          }}
          onMouseLeave={(e) => {
            if (!wishActive) {
              e.target.style.background = "rgba(250,248,245,0.8)";
              e.target.style.borderColor = THEME.rose;
              e.target.style.color = THEME.rose;
            }
          }}
        >
          {wishActive ? "♥" : "♡"}
        </button>
      </div>

      {/* ── Product Info Section ── */}
      <div
        style={{
          padding: "16px 14px 18px",
          background: THEME.surface,
        }}
      >
        {/* Product Name */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            fontWeight: 400,
            color: THEME.text,
            letterSpacing: "0.5px",
            marginBottom: 10,
            lineHeight: 1.3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            transition: "color 0.3s",
          }}
          title={name}
        >
          {name}
        </div>

        {/* Pricing Row */}
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Current Price */}
          <span
            style={{
              color: THEME.burgundy,
              fontFamily: "'Poppins', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.3px",
            }}
          >
            ₹{Number(price).toLocaleString("en-IN")}
          </span>

          {/* Original Price (if on sale) */}
          {originalPrice && originalPrice > price && (
            <span
              style={{
                color: THEME.textMuted,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                textDecoration: "line-through",
                fontWeight: 500,
                opacity: 0.7,
              }}
            >
              ₹{Number(originalPrice).toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Rating/Stock indicator (Optional) */}
        {product?.stock !== undefined && (
          <div
            style={{
              marginTop: 8,
              fontSize: 10,
              fontFamily: "'Poppins', sans-serif",
              color: product?.stock > 0 ? THEME.rose : "#d97070",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            {product?.stock > 0 ? "✓ In Stock" : "Out of Stock"}
          </div>
        )}
      </div>

      {/* Quick View Indicator */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: hovered ? 0.8 : 0,
          pointerEvents: "none",
          transition: "opacity 0.3s",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(4px)",
          padding: "8px 16px",
          borderRadius: "20px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          color: "white",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          zIndex: 1,
        }}
      >
        Quick View
      </div>
    </div>
  );
}