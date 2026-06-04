import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, extract, getCategoryId, getCategoryImage, getCategoryName } from "../services/api";

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

export default function Categories() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getCategories()
      .then((r) => {
        setCats(extract(r, "categories", "data"));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{
      background: THEME.bg,
      minHeight: "100vh",
      paddingTop: "120px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .categories-header { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .categories-grid { animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 768px) {
          .categories-header { padding: 50px 20px 40px !important; }
          .categories-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 20px !important;
          }
        }
      `}</style>

      {/* Header */}
      <div
        className="categories-header"
        style={{
          padding: "60px 80px 60px",
          borderBottom: `1.5px solid ${THEME.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 28,
              height: 1.5,
              background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
            }}
          />
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: THEME.burgundy,
              fontWeight: 600,
            }}
          >
            Explore Collections
          </span>
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
          Categories
        </h1>
      </div>

      {/* Loading State */}
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 120,
            gap: 20,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              border: `3px solid ${THEME.border}`,
              borderTopColor: THEME.rose,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              color: THEME.textMuted,
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Loading categories…
          </span>
        </div>
      ) : cats.length === 0 ? (
        /* Empty State */
        <div
          style={{
            textAlign: "center",
            padding: "120px 40px",
          }}
        >
          <div
            style={{
              fontSize: 56,
              color: `${THEME.rose}40`,
              marginBottom: 24,
            }}
          >
            ◇
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 300,
              color: THEME.textMuted,
              background: `linear-gradient(135deg, ${THEME.textMuted}, ${THEME.rose}80)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            No categories found
          </div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              color: THEME.textMuted,
              marginTop: 12,
            }}
          >
            Check back soon for new collections
          </p>
        </div>
      ) : (
        /* Categories Grid */
        <div
          className="categories-grid"
          style={{
            padding: "60px 80px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {cats.map((c, i) => {
            const name = getCategoryName(c);
            const img = getCategoryImage(c);
            const categoryId = getCategoryId(c);
            const isHovered = hoveredCard === i;

            return (
              <div
                key={i}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  borderRadius: "12px",
                  boxShadow: isHovered
                    ? `0 20px 48px rgba(139, 70, 84, 0.25)`
                    : `0 4px 16px rgba(0,0,0,0.08)`,
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  animation: `slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1}s both`,
                }}
                onClick={() =>
                  categoryId && navigate(`/products?category=${categoryId}`)
                }
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                {img ? (
                  <img
                    src={img}
                    alt={name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, ${THEME.blush}30, ${THEME.champagne}20)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: `${THEME.rose}40`,
                        fontSize: "96px",
                      }}
                    >
                      ◇
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to top, 
                      rgba(250,248,245,0.95) 0%, 
                      rgba(250,248,245,0.75) 30%, 
                      rgba(250,248,245,0.3) 60%, 
                      transparent 100%)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "32px",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Category Name */}
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 28,
                      fontWeight: 400,
                      color: THEME.text,
                      marginBottom: 12,
                      letterSpacing: 0.5,
                      lineHeight: 1.2,
                    }}
                  >
                    {name}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: isHovered ? 56 : 32,
                      height: 1.5,
                      background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
                      marginBottom: 12,
                      transition: "width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  />

                  {/* CTA */}
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 10,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: THEME.burgundy,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontWeight: 700,
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transform: isHovered ? "translateX(4px)" : "translateX(0)",
                    }}
                  >
                    Shop Now
                    <span
                      style={{
                        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform: isHovered ? "translateX(2px)" : "translateX(0)",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}