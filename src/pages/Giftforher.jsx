import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, imgUrl } from "../services/api";
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

// ─────────────────────────────────────────────
// 🔌 API INTEGRATION
// ─────────────────────────────────────────────
const fetchGiftHerData = async () => {
  const res = await api.getGiftForHer();
  if (res.success && res.data) {
    return res.data;
  }
  return null;
};
// ─────────────────────────────────────────────

const FALLBACK_PAGE = {
  title: "Her",
  subtitle: "Curated For Her",
  description:
    "Timeless pieces that speak when words fall short. Each jewel chosen to celebrate the women who make life beautiful.",
  badgeText: "♀ Curated For Her",
};

const FALLBACK_OCCASIONS = [
  { label: "Anniversary", icon: "💕" },
  { label: "Birthday", icon: "✨" },
  { label: "Wedding", icon: "👑" },
  { label: "Just Because", icon: "💎" },
];

const FALLBACK_FILTERS = [
  { label: "All Gifts", value: "all" },
  { label: "Rings", value: "ring" },
  { label: "Necklaces", value: "necklace" },
  { label: "Earrings", value: "earring" },
  { label: "Bracelets", value: "bracelet" },
  { label: "Sets", value: "set" },
];

export default function GiftForHer() {
  const [pageData, setPageData] = useState(FALLBACK_PAGE);
  const [products, setProducts] = useState([]);
  const [occasions, setOccasions] = useState(FALLBACK_OCCASIONS);
  const [filters, setFilters] = useState(FALLBACK_FILTERS);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("all");
  const [sort, setSort] = useState("default");
  const [hovOcc, setHovOcc] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      try {
        const data = await fetchGiftHerData();
        if (data) {
          if (data.page) {
            setPageData({
              title: data.page.title || FALLBACK_PAGE.title,
              subtitle: data.page.subtitle || FALLBACK_PAGE.subtitle,
              description:
                data.page.description || FALLBACK_PAGE.description,
              badgeText: data.page.badgeText || FALLBACK_PAGE.badgeText,
            });
          }
          if (data.products?.length) {
            setProducts(data.products);
          }
          if (data.filters?.length) {
            setFilters(data.filters);
          }
          if (data.tags?.length) {
            setOccasions(data.tags);
          }
        }
      } catch (e) {
        console.error("GiftForHer load error:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = products.filter((p) => {
    if (selected === "all") return true;
    const name = (p.name || "").toLowerCase();
    const tags = (p.tags || []).join(" ").toLowerCase();
    const cat = (p.category?.name || "").toLowerCase();
    return (
      name.includes(selected) ||
      tags.includes(selected) ||
      cat.includes(selected)
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return (a.price || 0) - (b.price || 0);
    if (sort === "price-desc") return (b.price || 0) - (a.price || 0);
    if (sort === "name") return (a.name || "").localeCompare(b.name || "");
    return 0;
  });

  return (
    <div style={{
      background: THEME.bg,
      minHeight: "100vh",
      paddingTop: "120px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .gfh-hero { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .gfh-occasions { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both; }
        .gfh-products { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }

        .gfh-occ {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfh-occ:hover {
          transform: translateY(-4px);
        }

        .gfh-occ-icon {
          animation: float 3s ease-in-out infinite;
        }

        .gfh-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfh-btn:hover {
          transform: translateY(-2px);
        }

        .gfh-cta {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gfh-cta:hover {
          transform: translateY(-2px);
          background: ${THEME.blush}30 !important;
          border-color: ${THEME.rose} !important;
          color: ${THEME.burgundy} !important;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${THEME.border};
          border-top-color: ${THEME.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @media (max-width: 1024px) {
          .gfh-hero { padding: 50px 40px !important; }
          .gfh-products { padding: 16px 40px 60px !important; }
          .gfh-divider { margin: 0 40px !important; }
          .gfh-filters { padding: 20px 40px !important; }
          .gfh-cta { margin: 0 40px 60px !important; }
        }

        @media (max-width: 768px) {
          .gfh-hero { padding: 40px 20px !important; }
          .gfh-products { padding: 16px 20px 50px !important; }
          .gfh-divider { margin: 0 20px !important; }
          .gfh-filters { padding: 16px 20px !important; }
          .gfh-cta { margin: 0 20px 50px !important; }
          .gfh-hero h1 { font-size: 36px !important; }
        }
      `}</style>

      {/* Hero */}
      <div
        className="gfh-hero"
        style={{
          position: "relative",
          padding: "60px 80px 50px",
          overflow: "hidden",
        }}
      >
        {/* Background Gradients */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${THEME.rose}12, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "30%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${THEME.blush}12, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            {/* Badge */}
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: THEME.burgundy,
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              ♀ {pageData.badgeText || FALLBACK_PAGE.badgeText}
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(42px, 5vw, 72px)",
                fontWeight: 300,
                color: THEME.text,
                margin: 0,
                lineHeight: 1.1,
                background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gift for{" "}
              <span
                style={{
                  color: THEME.rose,
                  background: "none",
                  WebkitTextFillColor: "unset",
                  fontStyle: "italic",
                }}
              >
                {pageData.title || FALLBACK_PAGE.title}
              </span>
            </h1>

            {/* Subtitle */}
            {pageData.subtitle && (
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 11,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: THEME.textMuted,
                  marginTop: 10,
                  fontWeight: 500,
                }}
              >
                {pageData.subtitle}
              </div>
            )}

            {/* Description */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: THEME.textMuted,
                marginTop: 14,
                letterSpacing: "0.3px",
                maxWidth: 480,
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              {pageData.description || FALLBACK_PAGE.description}
            </p>
          </div>

          {/* Sort Control */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span
              style={{
                color: THEME.textMuted,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 10,
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
                fontSize: 11,
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
              <option value="default">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A - Z</option>
            </select>
          </div>
        </div>

        {/* Occasions */}
        {occasions.length > 0 && (
          <div
            className="gfh-occasions"
            style={{
              display: "flex",
              gap: 12,
              marginTop: 40,
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            {occasions.map((o, i) => (
              <div
                key={o._id || i}
                className="gfh-occ"
                onMouseEnter={() => setHovOcc(i)}
                onMouseLeave={() => setHovOcc(null)}
                style={{
                  padding: "11px 22px",
                  border: `1.5px solid ${hovOcc === i ? THEME.rose : THEME.border}`,
                  background:
                    hovOcc === i ? `${THEME.blush}20` : "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: "6px",
                }}
              >
                <span
                  className="gfh-occ-icon"
                  style={{
                    fontSize: 16,
                  }}
                >
                  {o.icon}
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color:
                      hovOcc === i ? THEME.burgundy : THEME.textMuted,
                    fontWeight: 600,
                  }}
                >
                  {o.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div
        className="gfh-divider"
        style={{
          height: 1.5,
          background: `linear-gradient(90deg, transparent, ${THEME.rose}40, transparent)`,
          margin: "32px 80px 0",
        }}
      />

      {/* Filters */}
      {filters.length > 0 && (
        <div
          className="gfh-filters"
          style={{
            padding: "24px 80px",
            display: "flex",
            gap: 8,
            alignItems: "center",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: THEME.textMuted,
              marginRight: 12,
              whiteSpace: "nowrap",
              fontWeight: 600,
            }}
          >
            Filter
          </span>
          {filters.map((f, i) => (
            <button
              key={f._id || i}
              className="gfh-btn"
              onClick={() => setSelected(f.value)}
              style={{
                padding: "9px 18px",
                background:
                  selected === f.value
                    ? `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`
                    : "transparent",
                border: `1.5px solid ${
                  selected === f.value ? "transparent" : THEME.border
                }`,
                color:
                  selected === f.value ? "white" : THEME.textMuted,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 10,
                letterSpacing: "1px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                borderRadius: "6px",
                fontWeight: 600,
                boxShadow:
                  selected === f.value
                    ? `0 4px 12px ${THEME.rose}30`
                    : "none",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {/* Products */}
      <div
        className="gfh-products"
        style={{
          padding: "24px 80px 80px",
        }}
      >
        {!loading && (
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: THEME.textMuted,
              textTransform: "uppercase",
              marginBottom: 32,
              fontWeight: 600,
            }}
          >
            {sorted.length} piece{sorted.length !== 1 ? "s" : ""} found
          </div>
        )}

        {loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "100px 40px",
              gap: 20,
            }}
          >
            <div className="loading-spinner"></div>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                color: THEME.textMuted,
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Curating her collection…
            </span>
          </div>
        ) : sorted.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 40px",
              color: THEME.textMuted,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 24,
              fontWeight: 300,
            }}
          >
            No pieces found
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {sorted.map((p, i) => (
              <ProductCard key={p._id || i} product={p} />
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div
        className="gfh-cta"
        style={{
          margin: "0 80px 80px",
          padding: "52px 44px",
          border: `1.5px solid ${THEME.border}`,
          background: `${THEME.blush}12`,
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: `0 4px 16px rgba(0,0,0,0.04)`,
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: THEME.burgundy,
            marginBottom: 16,
            fontWeight: 700,
          }}
        >
          ◈ Need Help Choosing?
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 36,
            fontWeight: 300,
            color: THEME.text,
            margin: "0 0 12px",
            letterSpacing: 0.5,
          }}
        >
          Gift Curation Service
        </h3>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            color: THEME.textMuted,
            letterSpacing: "0.3px",
            marginBottom: 32,
            lineHeight: 1.8,
            maxWidth: 600,
            margin: "0 auto 32px",
            fontWeight: 400,
          }}
        >
          Tell us the occasion, budget, and her style — we'll handpick the
          perfect piece just for her.
        </p>

        <Link
          to="/customer-care"
          className="gfh-cta"
          style={{
            display: "inline-block",
            padding: "13px 36px",
            background: "transparent",
            border: `1.5px solid ${THEME.rose}`,
            color: THEME.burgundy,
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: 700,
            boxShadow: `0 4px 12px ${THEME.rose}20`,
          }}
        >
          Get Personalized Help →
        </Link>
      </div>
    </div>
  );
}