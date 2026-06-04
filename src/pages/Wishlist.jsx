import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "../services/api";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";
import ProductPlaceholder from "../components/Productplaceholder";

const THEME = {
  bg: "#faf8f5",
  surface: "#ffffff",
  text: "#2a2a2a",
  textMuted: "#8a8a8a",
  rose: "#e8b4c4",
  blush: "#f5d5e0",
  burgundy: "#8b4654",
  roseGold: "#c78a7f",
  champagne: "#e8d4c2",
  lavender: "#d4c4e0",
  border: "#e8ddd4",
  borderLight: "#f0ebe5",
};

export default function Wishlist() {
  const navigate = useNavigate();
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { success, error: showError } = useToast();
  const [removingItems, setRemovingItems] = useState(new Set());
  const [addingToCart, setAddingToCart] = useState(new Set());

  const handleRemove = (productId) => {
    setRemovingItems((prev) => new Set([...prev, productId]));
    setTimeout(() => {
      removeFromWishlist(productId);
      success("Removed from wishlist");
      setRemovingItems((prev) => {
        const next = new Set(prev);
        next.delete(productId);
        return next;
      });
    }, 300);
  };

  const handleAddToCart = async (product) => {
    const productId = product._id || product.id;
    setAddingToCart((prev) => new Set([...prev, productId]));

    try {
      await addToCart(productId, 1);
      success("Added to cart! 🛒");
    } catch (err) {
      showError("Failed to add to cart");
      console.error(err);
    } finally {
      setAddingToCart((prev) => {
        const next = new Set(prev);
        next.delete(productId);
        return next;
      });
    }
  };

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: 106 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.95); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* ── Hero Header ── */
        .wl-hero {
          position: relative;
          padding: 64px 80px 56px;
          border-bottom: 1px solid ${THEME.border};
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
          overflow: hidden;
        }
        .wl-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 90% 50%,
              rgba(232,180,196,0.10) 0%,
              transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%,
              rgba(139,70,84,0.04) 0%,
              transparent 70%);
          pointer-events: none;
        }

        /* ── Eyebrow ── */
        .wl-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          animation: fadeInLeft 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
          position: relative;
          z-index: 2;
        }
        .wl-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${THEME.rose}, ${THEME.burgundy});
          border-radius: 2px;
        }
        .wl-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .wl-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${THEME.text} 0%, ${THEME.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
          position: relative;
          z-index: 2;
        }

        /* ── Subtext ── */
        .wl-subtext {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${THEME.textMuted};
          letter-spacing: 0.5px;
          margin-top: 14px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
          position: relative;
          z-index: 2;
        }
        .wl-subtext strong {
          color: ${THEME.burgundy};
          font-weight: 600;
        }

        /* ── Content ── */
        .wl-content {
          padding: 48px 80px 80px;
          animation: fadeInUp 0.6s ease 0.3s both;
        }

        /* ── Grid ── */
        .wl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Item Card ── */
        .wl-card {
          background: ${THEME.surface};
          border: 1.5px solid ${THEME.border};
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          animation: slideDown 0.5s ease 0.35s both;
        }
        .wl-card:hover {
          border-color: ${THEME.rose};
          box-shadow: 0 12px 28px rgba(232,180,196,0.12);
          transform: translateY(-4px);
        }
        .wl-card.removing {
          animation: fadeOut 0.3s ease forwards;
          pointer-events: none;
        }

        /* ── Card Image ── */
        .wl-card-image {
          width: 100%;
          aspect-ratio: 3/4;
          background: linear-gradient(135deg, ${THEME.blush} 0%, ${THEME.champagne} 100%);
          overflow: hidden;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .wl-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .wl-card:hover .wl-card-image img {
          transform: scale(1.05);
        }
        .wl-card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: ${THEME.rose};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          animation: heartBeat 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.5s both;
          box-shadow: 0 4px 12px rgba(232,180,196,0.25);
        }
        .wl-card-badge:hover {
          animation: none;
          transform: scale(1.15);
        }

        /* ── Card Body ── */
        .wl-card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        /* ── Card Name ── */
        .wl-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: ${THEME.text};
          line-height: 1.4;
          cursor: pointer;
          transition: color 0.3s;
          margin: 0;
        }
        .wl-card-name:hover {
          color: ${THEME.burgundy};
        }

        /* ── Card Price ── */
        .wl-card-price {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: ${THEME.burgundy};
          letter-spacing: 0.3px;
          margin: 8px 0;
        }

        /* ── Card Buttons ── */
        .wl-card-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid ${THEME.borderLight};
        }

        /* ── Button ── */
        .wl-btn {
          padding: 11px 16px;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1.5px solid transparent;
          outline: none;
        }

        .wl-btn-primary {
          background: ${THEME.rose};
          color: ${THEME.surface};
          border-color: ${THEME.rose};
        }
        .wl-btn-primary:hover:not(:disabled) {
          background: ${THEME.burgundy};
          border-color: ${THEME.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(139,70,84,0.2);
        }
        .wl-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .wl-btn-secondary {
          background: transparent;
          color: ${THEME.textMuted};
          border-color: ${THEME.border};
        }
        .wl-btn-secondary:hover:not(:disabled) {
          background: ${THEME.blush};
          color: ${THEME.burgundy};
          border-color: ${THEME.rose};
        }
        .wl-btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Empty State ── */
        .wl-empty {
          text-align: center;
          padding: 80px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .wl-empty-icon {
          font-size: 64px;
          opacity: 0.4;
          animation: fadeInUp 0.6s ease 0.2s both;
        }
        .wl-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          color: ${THEME.textMuted};
          font-style: italic;
          margin: 0;
          animation: fadeInUp 0.6s ease 0.3s both;
        }
        .wl-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${THEME.textMuted};
          letter-spacing: 0.5px;
          max-width: 300px;
          animation: fadeInUp 0.6s ease 0.4s both;
        }
        .wl-empty-cta {
          padding: 14px 36px;
          background: ${THEME.rose};
          color: ${THEME.surface};
          border: 1.5px solid ${THEME.rose};
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          animation: fadeInUp 0.6s ease 0.5s both;
        }
        .wl-empty-cta:hover {
          background: ${THEME.burgundy};
          border-color: ${THEME.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139,70,84,0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .wl-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .wl-hero { padding: 60px 60px 50px; }
          .wl-content { padding: 40px 60px 80px; }
        }
        @media (max-width: 1024px) {
          .wl-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
          .wl-hero { padding: 56px 40px 48px; }
          .wl-content { padding: 32px 40px 64px; }
        }
        @media (max-width: 768px) {
          .wl-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .wl-hero { padding: 48px 20px 40px; }
          .wl-content { padding: 28px 20px 56px; }
          .wl-heading {
            font-size: clamp(32px, 4vw, 56px);
          }
        }
        @media (max-width: 480px) {
          .wl-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .wl-hero { padding: 36px 14px 32px; }
          .wl-content { padding: 20px 14px 48px; }
          .wl-card-body { padding: 16px; }
          .wl-empty { padding: 60px 14px; }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="wl-hero">
        <div className="wl-eyebrow">
          <div className="wl-eyebrow-line" />
          <span className="wl-eyebrow-text">Personal Collection</span>
        </div>

        <h1 className="wl-heading">My Wishlist</h1>

        {items.length > 0 && (
          <p className="wl-subtext">
            You have <strong>{items.length}</strong> item
            {items.length !== 1 ? "s" : ""} saved
          </p>
        )}
      </div>

      {/* ── Content ── */}
      <div className="wl-content">
        {items.length === 0 ? (
          <div className="wl-empty">
            <div className="wl-empty-icon">♡</div>
            <h2 className="wl-empty-title">Your wishlist is empty</h2>
            <p className="wl-empty-sub">
              Start saving your favorite pieces for later
            </p>
            <button
              onClick={() => navigate("/products")}
              className="wl-empty-cta"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="wl-grid">
            {items.map((product, idx) => {
              const productId = product._id || product.id;
              const isRemoving = removingItems.has(productId);
              const isAdding = addingToCart.has(productId);
              const img = (() => {
                if (Array.isArray(product.image))
                  return imgUrl(product.image[0]);
                return imgUrl(
                  product.images?.[0] ||
                    product.image ||
                    product.thumbnail
                );
              })();
              const name = product.name || product.title || "Product";
              const price = Number(product.price || product.salePrice || 0);

              return (
                <div
                  key={productId}
                  className={`wl-card ${isRemoving ? "removing" : ""}`}
                  style={{
                    animation: `slideDown 0.5s cubic-bezier(0.34,1.56,0.64,1) ${
                      idx * 40
                    }ms both`,
                  }}
                >
                  {/* Image */}
                  <div
                    className="wl-card-image"
                    onClick={() => navigate(`/product/${productId}`)}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={name}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    ) : (
                      <ProductPlaceholder product={product} small />
                    )}
                    <div
                      className="wl-card-badge"
                      onClick={() => handleRemove(productId)}
                    >
                      ♡
                    </div>
                  </div>

                  {/* Body */}
                  <div className="wl-card-body">
                    <h3
                      className="wl-card-name"
                      onClick={() => navigate(`/product/${productId}`)}
                    >
                      {name}
                    </h3>

                    <div className="wl-card-price">
                      ₹{price.toLocaleString("en-IN")}
                    </div>

                    <div className="wl-card-buttons">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={isAdding}
                        className="wl-btn wl-btn-primary"
                      >
                        {isAdding ? "Adding..." : "Add to Cart"}
                      </button>

                      <button
                        onClick={() => handleRemove(productId)}
                        disabled={isRemoving}
                        className="wl-btn wl-btn-secondary"
                      >
                        {isRemoving ? "Removing..." : "Remove"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}