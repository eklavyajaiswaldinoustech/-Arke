import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api, imgUrl, extract } from "../services/api";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const THEME = {
  bg: "#faf8f5",
  surface: "#ffffff",
  text: "#2a2a2a",
  textMuted: "#8a8a8a",
  rose: "#e8b4c4",
  blush: "#f5d5e0",
  burgundy: "#8b4654",
  champagne: "#e8d4c2",
  border: "#e8ddd4",
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [addingToWish, setAddingToWish] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .getProductById(id)
      .then((r) => {
        const p = r?.data || r?.product || r;
        setProduct(p);
        setLoading(false);
        // Load related products
        api.getLatestProducts().then((lr) => {
          const all = extract(lr, "products", "data");
          setRelated(
            all.filter((x) => (x._id || x.id) !== id).slice(0, 4)
          );
        });
      })
      .catch(() => setLoading(false));
    window.scrollTo(0, 0);
  }, [id]);

  const handleCart = async () => {
    if (!localStorage.getItem("arke_token")) {
      alert("Please login first");
      return;
    }
    await addToCart(product || id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  const handleWishlist = async () => {
    if (!localStorage.getItem("arke_token")) {
      alert("Please login first");
      return;
    }
    setAddingToWish(true);
    try {
      await toggleWishlist(product || id);
    } finally {
      setAddingToWish(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          paddingTop: "120px",
          minHeight: "100vh",
          background: THEME.bg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          .spinner {
            width: 48px;
            height: 48px;
            border: 3px solid ${THEME.border};
            border-top-color: ${THEME.rose};
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
        `}</style>
        <div className="spinner"></div>
        <span
          style={{
            color: THEME.textMuted,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          Loading product…
        </span>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        style={{
          paddingTop: "120px",
          minHeight: "100vh",
          background: THEME.bg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <div style={{ fontSize: 56, opacity: 0.4 }}>◇</div>
        <span
          style={{
            color: THEME.textMuted,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "28px",
            fontWeight: 300,
          }}
        >
          Product not found
        </span>
        <button
          onClick={() => navigate("/products")}
          style={{
            background: "transparent",
            border: `1.5px solid ${THEME.rose}`,
            color: THEME.burgundy,
            padding: "12px 32px",
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "11px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontWeight: 700,
            borderRadius: "6px",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = `${THEME.blush}30`;
            e.target.style.borderColor = THEME.burgundy;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.borderColor = THEME.rose;
          }}
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  const images = Array.isArray(product.images)
    ? product.images
    : [product.image || product.thumbnail].filter(Boolean);
  const name = product.name || product.title || "Product";
  const price = product.price || product.salePrice || product.mrp || 0;
  const ogPrice = product.mrp || product.originalPrice;
  const desc = product.description || product.details || "";

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: "100px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pd-main { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .pd-related { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
      `}</style>

      {/* Main Section */}
      <div
        className="pd-main"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          padding: "60px 80px",
          alignItems: "start",
        }}
      >
        {/* Image Column */}
        <div>
          {/* Main Image */}
          {imgUrl(images[imgIdx]) ? (
            <img
              src={imgUrl(images[imgIdx])}
              alt={name}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                aspectRatio: "1/1",
                background: `linear-gradient(135deg, ${THEME.blush}30, ${THEME.champagne}20)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            >
              <span style={{ color: `${THEME.rose}40`, fontSize: "120px" }}>
                ◇
              </span>
            </div>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {images.map((im, i) => {
                const thumbSrc = imgUrl(im);
                return thumbSrc ? (
                  <img
                    key={i}
                    src={thumbSrc}
                    alt={`${name} view ${i + 1}`}
                    onClick={() => setImgIdx(i)}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border:
                        i === imgIdx
                          ? `2px solid ${THEME.burgundy}`
                          : `1.5px solid ${THEME.border}`,
                      opacity: i === imgIdx ? 1 : 0.6,
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      borderRadius: "6px",
                    }}
                    onMouseEnter={(e) => {
                      if (i !== imgIdx) {
                        e.target.style.opacity = "1";
                        e.target.style.borderColor = THEME.rose;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (i !== imgIdx) {
                        e.target.style.opacity = "0.6";
                        e.target.style.borderColor = THEME.border;
                      }
                    }}
                  />
                ) : null;
              })}
            </div>
          )}
        </div>

        {/* Info Column */}
        <div>
          {/* Breadcrumb */}
          <button
            onClick={() => navigate("/products")}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: THEME.textMuted,
              marginBottom: "20px",
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = THEME.burgundy)}
            onMouseLeave={(e) => (e.target.style.color = THEME.textMuted)}
          >
            ← Back to All Products
          </button>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 300,
              color: THEME.text,
              lineHeight: "1.2",
              marginBottom: "24px",
              margin: "0 0 24px 0",
            }}
          >
            {name}
          </h1>

          {/* Price */}
          <div style={{ display: "flex", gap: "16px", alignItems: "baseline", marginBottom: "32px" }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "32px",
                background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 400,
              }}
            >
              ₹{Number(price).toLocaleString("en-IN")}
            </span>
            {ogPrice && ogPrice > price && (
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  color: THEME.textMuted,
                  textDecoration: "line-through",
                }}
              >
                ₹{Number(ogPrice).toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Description */}
          {desc && (
            <p
              style={{
                color: THEME.textMuted,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
                lineHeight: "1.8",
                marginBottom: "32px",
                fontWeight: 400,
              }}
            >
              {desc}
            </p>
          )}

          <div style={{ borderTop: `1.5px solid ${THEME.border}`, margin: "32px 0" }} />

          {/* Quantity */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "10px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: THEME.textMuted,
                fontWeight: 600,
                minWidth: "60px",
              }}
            >
              Quantity
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `1.5px solid ${THEME.border}`,
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                style={{
                  width: "40px",
                  height: "40px",
                  background: "none",
                  border: "none",
                  color: THEME.rose,
                  cursor: "pointer",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = `${THEME.blush}30`)
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "none")
                }
              >
                −
              </button>
              <span
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: THEME.text,
                  minWidth: "50px",
                }}
              >
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                style={{
                  width: "40px",
                  height: "40px",
                  background: "none",
                  border: "none",
                  color: THEME.rose,
                  cursor: "pointer",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = `${THEME.blush}30`)
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "none")
                }
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleCart}
            style={{
              width: "100%",
              padding: "16px",
              background: added
                ? `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`
                : "transparent",
              border: `1.5px solid ${added ? "transparent" : THEME.rose}`,
              color: added ? "white" : THEME.burgundy,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              borderRadius: "6px",
              fontWeight: 700,
              marginBottom: "12px",
              boxShadow: added
                ? `0 4px 16px ${THEME.rose}30`
                : "none",
            }}
            onMouseEnter={(e) => {
              if (!added) {
                e.target.style.background = `${THEME.blush}20`;
                e.target.style.borderColor = THEME.burgundy;
              }
            }}
            onMouseLeave={(e) => {
              if (!added) {
                e.target.style.background = "transparent";
                e.target.style.borderColor = THEME.rose;
              }
            }}
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>

          {/* Add to Wishlist */}
          <button
            onClick={handleWishlist}
            disabled={addingToWish}
            style={{
              width: "100%",
              padding: "14px",
              background: "transparent",
              border: `1.5px solid ${THEME.border}`,
              color: THEME.textMuted,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              cursor: addingToWish ? "not-allowed" : "pointer",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              borderRadius: "6px",
              fontWeight: 600,
              opacity: addingToWish ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!addingToWish) {
                e.target.style.borderColor = THEME.rose;
                e.target.style.color = THEME.rose;
                e.target.style.background = `${THEME.blush}15`;
              }
            }}
            onMouseLeave={(e) => {
              if (!addingToWish) {
                e.target.style.borderColor = THEME.border;
                e.target.style.color = THEME.textMuted;
                e.target.style.background = "transparent";
              }
            }}
          >
            ♡ Add to Wishlist
          </button>

          <div style={{ borderTop: `1.5px solid ${THEME.border}`, margin: "32px 0" }} />

          {/* Product Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              ["Material", product.material || product.metalType],
              ["Weight", product.weight ? `${product.weight}g` : null],
              ["Size", product.size],
              ["SKU", product.sku || product.productCode],
            ]
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: THEME.textMuted,
                      fontWeight: 600,
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "12px",
                      color: THEME.text,
                      fontWeight: 500,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div
          className="pd-related"
          style={{
            padding: "80px 80px",
            borderTop: `1.5px solid ${THEME.border}`,
            background: THEME.surface,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "36px",
              fontWeight: 300,
              color: THEME.text,
              marginBottom: "40px",
              margin: "0 0 40px 0",
              background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            You May Also Like
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {related.map((p, i) => (
              <ProductCard key={p._id || i} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
