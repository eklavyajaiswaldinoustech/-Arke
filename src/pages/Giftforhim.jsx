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
  blue: "#7a9fb5",
  blueDark: "#5f7a95",
};

// ─────────────────────────────────────────────
// 🔌 API INTEGRATION
// ─────────────────────────────────────────────
const fetchGiftHimData = async () => {
  const res = await api.getGiftForHim();
  if (res.success && res.data) {
    return res.data;
  }
  return null;
};
// ─────────────────────────────────────────────

const FALLBACK_PAGE = {
  title: "Him",
  subtitle: "Curated For Him",
  description:
    "Jewellery crafted for the modern man. Bold, refined, and built to be worn — not just admired.",
  badgeText: "♂ Curated For Him",
};

const FALLBACK_PERSONAS = [
  { label: "The Classic", desc: "Timeless & understated", icon: "◈" },
  { label: "The Bold", desc: "Statement pieces", icon: "✦" },
  { label: "The Minimal", desc: "Clean & refined", icon: "◇" },
  { label: "The Gifter", desc: "For someone special", icon: "♡" },
];

const FALLBACK_FILTERS = [
  { label: "All Gifts", value: "all" },
  { label: "Rings", value: "ring" },
  { label: "Bracelets", value: "bracelet" },
  { label: "Chains", value: "chain" },
  { label: "Pendants", value: "pendant" },
  { label: "Cufflinks", value: "cufflink" },
];

export default function GiftForHim() {
  const [pageData, setPageData] = useState(FALLBACK_PAGE);
  const [products, setProducts] = useState([]);
  const [personas, setPersonas] = useState(FALLBACK_PERSONAS);
  const [filters, setFilters] = useState(FALLBACK_FILTERS);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("all");
  const [sort, setSort] = useState("default");
  const [hovCard, setHovCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      try {
        const data = await fetchGiftHimData();
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
            setPersonas(data.tags);
          }
        }
      } catch (e) {
        console.error("GiftForHim load error:", e);
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
    <div
      style={{
        background: THEME.bg,
        minHeight: "100vh",
        paddingTop: "120px",
      }}
    >
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

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .gfm-hero { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .gfm-personas { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both; }
        .gfm-products { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }

        .gfm-card {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfm-card:hover {
          transform: translateY(-4px);
        }

        .gfm-icon {
          animation: float 3s ease-in-out infinite;
        }

        .gfm-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfm-btn:hover {
          transform: translateY(-2px);
        }

        .gfm-link {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gfm-link:hover {
          color: ${THEME.blue} !important;
          border-color: ${THEME.blue} !important;
          transform: translateX(2px);
        }

        .gfm-link-gold {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gfm-link-gold:hover {
          color: #c78a7f !important;
          border-color: #c78a7f !important;
          transform: translateX(2px);
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${THEME.border};
          border-top-color: ${THEME.blue};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @media (max-width: 1024px) {
          .gfm-hero { padding: 50px 40px !important; }
          .gfm-products { padding: 16px 40px 60px !important; }
          .gfm-divider { margin: 0 40px !important; }
          .gfm-filters { padding: 20px 40px !important; }
          .gfm-cta { margin: 0 40px 60px !important; grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .gfm-hero { padding: 40px 20px !important; }
          .gfm-products { padding: 16px 20px 50px !important; }
          .gfm-divider { margin: 0 20px !important; }
          .gfm-filters { padding: 16px 20px !important; }
          .gfm-cta { margin: 0 20px 50px !important; }
          .gfm-hero h1 { font-size: 36px !important; }
        }
      `}</style>

      {/* Hero */}
      <div
        className="gfm-hero"
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
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${THEME.blue}12, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: "20%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${THEME.champagne}12, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            width: 120,
            height: 120,
            border: `1px solid ${THEME.blue}15`,
            transform: "rotate(45deg)",
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
                color: THEME.blueDark,
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              ♂ {pageData.badgeText || FALLBACK_PAGE.badgeText}
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
                background: `linear-gradient(135deg, ${THEME.text}, ${THEME.blueDark})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gift for{" "}
              <span
                style={{
                  color: THEME.blue,
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
                e.target.style.borderColor = THEME.blue;
                e.target.style.boxShadow = `0 0 0 3px ${THEME.blue}25`;
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

        {/* Personas */}
        {personas.length > 0 && (
          <div
            className="gfm-personas"
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            {personas.map((p, i) => (
              <div
                key={p._id || i}
                className="gfm-card"
                onMouseEnter={() => setHovCard(i)}
                onMouseLeave={() => setHovCard(null)}
                style={{
                  padding: "18px 24px",
                  minWidth: 140,
                  border: `1.5px solid ${
                    hovCard === i ? THEME.blue : THEME.border
                  }`,
                  background:
                    hovCard === i ? `${THEME.blue}12` : "transparent",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="gfm-icon"
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                  }}
                >
                  {p.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color:
                      hovCard === i ? THEME.blueDark : THEME.text,
                    marginBottom: 4,
                    fontWeight: 600,
                  }}
                >
                  {p.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    color: THEME.textMuted,
                    letterSpacing: "0.3px",
                    fontWeight: 400,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div
        className="gfm-divider"
        style={{
          height: 1.5,
          background: `linear-gradient(90deg, transparent, ${THEME.blue}40, transparent)`,
          margin: "32px 80px 0",
        }}
      />

      {/* Filters */}
      {filters.length > 0 && (
        <div
          className="gfm-filters"
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
              className="gfm-btn"
              onClick={() => setSelected(f.value)}
              style={{
                padding: "9px 18px",
                background:
                  selected === f.value
                    ? `linear-gradient(135deg, ${THEME.blue}, ${THEME.blueDark})`
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
                    ? `0 4px 12px ${THEME.blue}30`
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
        className="gfm-products"
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
              Curating his collection…
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
              gridTemplateColumns:
                "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {sorted.map((p, i) => (
              <ProductCard key={p._id || i} product={p} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div
        className="gfm-cta"
        style={{
          margin: "0 80px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {/* Left CTA */}
        <div
          style={{
            padding: "48px 40px",
            border: `1.5px solid ${THEME.border}`,
            background: `${THEME.blue}12`,
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: THEME.blueDark,
              marginBottom: 12,
              fontWeight: 700,
            }}
          >
            ◈ Premium Packaging
          </div>

          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 300,
              color: THEME.text,
              margin: "0 0 12px",
            }}
          >
            Gift Wrapping
          </h4>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 12,
              color: THEME.textMuted,
              lineHeight: 1.8,
              margin: "0 0 24px",
              fontWeight: 400,
            }}
          >
            Every order ships in our signature matte black box with a
            handwritten note.
          </p>

          <Link
            to="/customer-care"
            className="gfm-link"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: THEME.blue,
              textDecoration: "none",
              borderBottom: `1px solid ${THEME.blue}40`,
              paddingBottom: 4,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 700,
            }}
          >
            Learn more →
          </Link>
        </div>

        {/* Right CTA */}
        <div
          style={{
            padding: "48px 40px",
            border: `1.5px solid ${THEME.border}`,
            background: `${THEME.champagne}12`,
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: THEME.burgundy,
              marginBottom: 12,
              fontWeight: 700,
            }}
          >
            ✦ Not Sure?
          </div>

          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 300,
              color: THEME.text,
              margin: "0 0 12px",
            }}
          >
            Gift Cards
          </h4>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 12,
              color: THEME.textMuted,
              lineHeight: 1.8,
              margin: "0 0 24px",
              fontWeight: 400,
            }}
          >
            Let him choose the perfect piece. Available from ₹500 to ₹50,000.
          </p>

          <Link
            to="/customer-care"
            className="gfm-link-gold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: THEME.burgundy,
              textDecoration: "none",
              borderBottom: `1px solid ${THEME.burgundy}40`,
              paddingBottom: 4,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 700,
            }}
          >
            Buy a gift card →
          </Link>
        </div>
      </div>
    </div>
  );
}