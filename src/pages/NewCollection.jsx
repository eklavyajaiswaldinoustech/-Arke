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
  champagne: "#e8d4c2",
  border: "#e8ddd4",
};

export default function NewCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getLatestProducts()
      .then((r) => {
        setProducts(extract(r, "products", "data"));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return (a.price || 0) - (b.price || 0);
    if (sort === "price-desc") return (b.price || 0) - (a.price || 0);
    return 0;
  });

  return (
    <div
      style={{
        background: THEME.bg,
        minHeight: "100vh",
        paddingTop: "120px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .new-collection-hero { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .new-collection-grid { animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both; }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${THEME.border};
          border-top-color: ${THEME.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}</style>

      {/* Hero */}
      <div
        className="new-collection-hero"
        style={{
          padding: "80px 80px 60px",
          borderBottom: `1.5px solid ${THEME.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: THEME.burgundy,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            ✨ Latest Arrivals
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 300,
              color: THEME.text,
              margin: 0,
              background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            New Collection
          </h1>
          <p
            style={{
              color: THEME.textMuted,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              marginTop: "12px",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: 480,
            }}
          >
            Fresh pieces, new stories. Discover what just arrived this season.
          </p>
        </div>

        {/* Sort Control */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              color: THEME.textMuted,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Sort by
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              background: THEME.surface,
              border: `1.5px solid ${THEME.border}`,
              color: THEME.text,
              padding: "10px 14px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "11px",
              cursor: "pointer",
              outline: "none",
              borderRadius: "6px",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              fontWeight: 500,
            }}
            onFocus={(e) => {
              e.target.style.borderColor = THEME.rose;
              e.target.style.boxShadow = `0 0 0 3px ${THEME.blush}40`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = THEME.border;
              e.target.style.boxShadow = "none";
            }}
          >
            <option value="default">Newest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Count */}
      {!loading && (
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "11px",
            letterSpacing: "1px",
            color: THEME.textMuted,
            textTransform: "uppercase",
            paddingLeft: "80px",
            marginTop: "16px",
            fontWeight: 600,
          }}
        >
          {sorted.length} piece{sorted.length !== 1 ? "s" : ""} available
        </div>
      )}

      {/* Grid */}
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 40px",
            gap: 20,
          }}
        >
          <div className="loading-spinner"></div>
          <span
            style={{
              color: THEME.textMuted,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Loading collection…
          </span>
        </div>
      ) : (
        <div
          className="new-collection-grid"
          style={{
            padding: "60px 80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {sorted.map((p, i) => (
            <ProductCard key={p._id || i} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}