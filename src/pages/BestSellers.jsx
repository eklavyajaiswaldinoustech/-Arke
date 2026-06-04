import { useState, useEffect } from "react";
import { api, extract } from "../services/api";
import ProductCard from "../components/ProductCard";

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

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [sort, setSort]         = useState("default");
  const [hovSort, setHovSort]   = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getBestSellers()
      .then((r) => {
        setProducts(extract(r, "products", "data"));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc")  return (a.price || 0) - (b.price || 0);
    if (sort === "price-desc") return (b.price || 0) - (a.price || 0);
    return 0;
  });

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
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position:  600px 0; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.7; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }

        /* ── Hero ── */
        .bs-hero {
          position: relative;
          padding: 64px 80px 56px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          overflow: hidden;
          border-bottom: 1px solid ${THEME.border};
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .bs-hero::before {
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
        .bs-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          animation: fadeInLeft 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
        }
        .bs-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${THEME.rose}, ${THEME.burgundy});
          border-radius: 2px;
        }
        .bs-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .bs-heading {
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
        }

        /* ── Sub ── */
        .bs-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${THEME.textMuted};
          line-height: 1.75;
          font-weight: 400;
          max-width: 440px;
          margin: 0 0 24px;
          letter-spacing: 0.2px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
        }

        /* ── Badge ── */
        .bs-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border: 1px solid rgba(232,180,196,0.5);
          border-radius: 40px;
          background: rgba(245,213,224,0.18);
          backdrop-filter: blur(8px);
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.35s both;
        }
        .bs-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          animation: dotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .bs-badge-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          font-weight: 600;
        }

        /* ── Sort Controls ── */
        .bs-controls {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
        }
        .bs-sort-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${THEME.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .bs-sort-select {
          background: ${THEME.surface};
          border: 1px solid ${THEME.border};
          color: ${THEME.text};
          padding: 10px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          cursor: pointer;
          outline: none;
          letter-spacing: 0.5px;
          border-radius: 6px;
          font-weight: 500;
          min-width: 170px;
          transition: all 0.3s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a8a8a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }
        .bs-sort-select:hover,
        .bs-sort-select:focus {
          border-color: ${THEME.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Toolbar (count + decorative line) ── */
        .bs-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${THEME.borderLight};
          animation: fadeInUp 0.5s ease 0.3s both;
        }
        .bs-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${THEME.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .bs-count strong {
          color: ${THEME.burgundy};
          font-weight: 700;
        }
        .bs-toolbar-dec {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
        }
        .bs-toolbar-dec-line {
          width: 32px;
          height: 1px;
          background: linear-gradient(to right, transparent, ${THEME.rose});
        }
        .bs-toolbar-dec-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${THEME.rose};
        }

        /* ── Grid ── */
        .bs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
          animation: fadeInUp 0.6s ease 0.35s both;
        }

        /* ── Empty ── */
        .bs-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 16px;
          text-align: center;
        }
        .bs-empty-icon {
          font-size: 48px;
          opacity: 0.4;
          margin-bottom: 8px;
        }
        .bs-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          color: ${THEME.textMuted};
          font-style: italic;
        }
        .bs-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${THEME.borderLight};
          letter-spacing: 1px;
        }

        /* ── Loading ── */
        .bs-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          gap: 20px;
        }
        .bs-spinner {
          width: 44px;
          height: 44px;
          border: 2px solid ${THEME.borderLight};
          border-top-color: ${THEME.rose};
          border-right-color: ${THEME.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .bs-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${THEME.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        /* ── Skeleton cards ── */
        .bs-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
        }
        .bs-skeleton-card {
          border-radius: 8px;
          overflow: hidden;
          background: ${THEME.surface};
          border: 1px solid ${THEME.borderLight};
        }
        .bs-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${THEME.borderLight} 25%,
            ${THEME.champagne}50 50%,
            ${THEME.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }
        .bs-skeleton-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bs-skeleton-line {
          height: 10px;
          border-radius: 4px;
          background: linear-gradient(
            90deg,
            ${THEME.borderLight} 25%,
            ${THEME.champagne}50 50%,
            ${THEME.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 40px 60px 80px;
          }
          .bs-hero { padding: 60px 60px 50px; }
          .bs-toolbar { padding: 20px 60px; }
        }
        @media (max-width: 1024px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 32px 40px 64px;
          }
          .bs-hero { padding: 56px 40px 48px; }
          .bs-toolbar { padding: 18px 40px; }
        }
        @media (max-width: 768px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            padding: 28px 20px 56px;
          }
          .bs-hero {
            padding: 48px 20px 40px;
            flex-direction: column;
            align-items: flex-start;
          }
          .bs-controls {
            width: 100%;
            flex-direction: row;
            align-items: center;
          }
          .bs-sort-select { flex: 1; min-width: unset; }
          .bs-toolbar { padding: 16px 20px; }
        }
        @media (max-width: 480px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 20px 14px 48px;
          }
          .bs-hero { padding: 36px 14px 32px; }
          .bs-toolbar { padding: 14px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <div className="bs-hero">
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Eyebrow */}
          <div className="bs-eyebrow">
            <div className="bs-eyebrow-line" />
            <span className="bs-eyebrow-text">Most Loved</span>
          </div>

          {/* Heading */}
          <h1 className="bs-heading">
            Best Sellers
          </h1>

          {/* Sub */}
          <p className="bs-sub">
            The pieces our community keeps coming back for —
            handpicked for quality, craftsmanship & timeless elegance.
          </p>

          {/* Badge */}
          <div className="bs-badge">
            <div className="bs-badge-dot" />
            <span className="bs-badge-label">Customer Favorites</span>
            {!loading && (
              <>
                <div style={{
                  width: 1,
                  height: 12,
                  background: `rgba(139,70,84,0.2)`,
                  margin: "0 2px",
                }} />
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  color: THEME.burgundy,
                  fontWeight: 400,
                  fontStyle: "italic",
                }}>
                  {sorted.length} pieces
                </span>
              </>
            )}
          </div>
        </div>

        {/* Sort Controls */}
        <div className="bs-controls">
          <span className="bs-sort-label">Sort by</span>
          <select
            className="bs-sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* ── Toolbar ── */}
      {!loading && (
        <div className="bs-toolbar">
          <span className="bs-count">
            Showing <strong>{sorted.length}</strong>{" "}
            bestseller{sorted.length !== 1 ? "s" : ""}
          </span>
          <div className="bs-toolbar-dec">
            <div className="bs-toolbar-dec-line" />
            <div className="bs-toolbar-dec-dot" />
            <div style={{
              ...{},
              width: 32,
              height: 1,
              background: `linear-gradient(to left, transparent, ${THEME.rose})`,
            }} />
          </div>
        </div>
      )}

      {/* ── Loading Skeleton ── */}
      {loading ? (
        <div className="bs-skeleton-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="bs-skeleton-card" key={i}>
              <div className="bs-skeleton-img" />
              <div className="bs-skeleton-body">
                <div className="bs-skeleton-line" style={{ width: "70%" }} />
                <div className="bs-skeleton-line" style={{ width: "45%" }} />
                <div className="bs-skeleton-line" style={{ width: "55%", height: 8 }} />
              </div>
            </div>
          ))}
        </div>
      ) : sorted.length > 0 ? (
        /* ── Products Grid ── */
        <div className="bs-grid">
          {sorted.map((p, i) => (
            <div
              key={p._id || i}
              style={{
                animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 40}ms both`,
              }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      ) : (
        /* ── Empty State ── */
        <div className="bs-grid">
          <div className="bs-empty">
            <div className="bs-empty-icon">✨</div>
            <p className="bs-empty-title">
              No bestsellers available at the moment
            </p>
            <p className="bs-empty-sub">
              Check back soon — new favorites arrive every week
            </p>
          </div>
        </div>
      )}
    </div>
  );
}