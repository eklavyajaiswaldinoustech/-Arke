import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, imgUrl, extract, getCategoryId, getCategoryImage, getCategoryName } from "../services/api";
import ProductCard from "../components/ProductCard";

// ── Premium Feminine Color Theme ──────────────────────────────────────
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
  sage: "#c8d8d0",
  her: "#e8b4c4",
  him: "#7a9fb5",
  border: "#e8ddd4",
  borderLight: "#f0ebe5",
};

/* ── Animate on scroll hook ───────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          clearTimeout(t);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  return [ref, visible];
}

/* ── Hero Section ────────────────────────────────────────────────── */
function Hero({ banners }) {
  const [idx, setIdx]   = useState(0);
  const [fade, setFade] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!banners?.length) return;
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % banners.length);
        setFade(true);
      }, 700);
    }, 6500);
    return () => clearInterval(t);
  }, [banners]);

  const banner = banners?.[idx];
  const bg     = imgUrl(banner?.image || banner?.imageUrl);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 680,
        maxHeight: 1080,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        marginTop: 106,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

        @keyframes heroBgZoom {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }

        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .hero-bg-img.zoom-in {
          animation: heroBgZoom 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .hero-eyebrow {
          opacity: 0;
          animation: heroFadeLeft 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s forwards;
        }
        .hero-h1 {
          opacity: 0;
          animation: heroFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s forwards;
        }
        .hero-divider {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.55s forwards;
        }
        .hero-sub {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.65s forwards;
        }
        .hero-cta {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.75s forwards;
        }
        .hero-stats {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.9s forwards;
        }
        .scroll-bounce {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-content-wrap {
            padding: 0 28px !important;
            max-width: 100% !important;
          }
          .hero-h1-text {
            font-size: clamp(44px, 11vw, 72px) !important;
          }
          .hero-stats-row {
            gap: 28px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 480px) {
          .hero-content-wrap {
            padding: 0 20px !important;
          }
        }
      `}</style>

      {/* Background Image Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {bg ? (
          <img
            key={idx}
            src={bg}
            alt={banner?.title || "Collection"}
            className={`hero-bg-img zoom-in`}
            style={{ opacity: fade ? 1 : 0 }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg,
                ${THEME.blush} 0%,
                ${THEME.champagne} 40%,
                ${THEME.lavender} 100%
              )`,
            }}
          />
        )}
      </div>

      {/* Overlay Stack */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(
            105deg,
            rgba(10,5,15,0.72) 0%,
            rgba(10,5,15,0.55) 38%,
            rgba(10,5,15,0.18) 65%,
            transparent 100%
          )`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(
            to top,
            rgba(10,5,15,0.55) 0%,
            transparent 40%
          )`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "35%",
          zIndex: 1,
          background: `linear-gradient(
            to top,
            rgba(139,70,84,0.22) 0%,
            transparent 100%
          )`,
        }}
      />

      {/* Left Accent Line */}
      <div
        style={{
          position: "absolute",
          left: 52,
          top: "15%",
          bottom: "15%",
          width: 1,
          background: `linear-gradient(
            to bottom,
            transparent,
            rgba(232,180,196,0.55) 30%,
            rgba(232,180,196,0.55) 70%,
            transparent
          )`,
          zIndex: 2,
        }}
      />

      {/* Main Content */}
      <div
        className="hero-content-wrap"
        style={{
          position: "relative",
          zIndex: 3,
          padding: "0 80px 0 84px",
          maxWidth: 720,
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <div
          className="hero-eyebrow"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 26,
          }}
        >
          <div
            style={{
              width: 36,
              height: 1.5,
              background: `linear-gradient(to right, ${THEME.rose}, ${THEME.burgundy})`,
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10.5,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: THEME.rose,
              fontWeight: 600,
            }}
          >
            {banner?.eyebrow || "Timeless Collection"}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="hero-h1 hero-h1-text"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 6.5vw, 100px)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-1px",
            marginBottom: 28,
            color: "#fff",
          }}
        >
          {banner?.title ? (
            <span
              style={{
                background: "linear-gradient(135deg, #fff 0%, rgba(232,180,196,0.9) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {banner.title}
            </span>
          ) : (
            <>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Wear it
              </span>
              <em
                style={{
                  fontStyle: "italic",
                  display: "block",
                  background: `linear-gradient(135deg, ${THEME.rose} 0%, ${THEME.blush} 50%, ${THEME.champagne} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                your way
              </em>
            </>
          )}
        </h1>

        {/* Elegant Divider */}
        <div
          className="hero-divider"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 26,
          }}
        >
          <div
            style={{
              width: 52,
              height: 1,
              background: `linear-gradient(to right, rgba(232,180,196,0.8), transparent)`,
            }}
          />
          <div
            style={{
              width: 5,
              height: 5,
              background: THEME.rose,
              borderRadius: "50%",
              boxShadow: `0 0 10px rgba(232,180,196,0.6)`,
            }}
          />
          <div
            style={{
              width: 52,
              height: 1,
              background: `linear-gradient(to left, rgba(232,180,196,0.8), transparent)`,
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="hero-sub"
          style={{
            color: "rgba(255,255,255,0.72)",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 14.5,
            lineHeight: 1.85,
            marginBottom: 44,
            maxWidth: 480,
            letterSpacing: "0.3px",
            fontWeight: 300,
          }}
        >
          {banner?.description ||
            "Handcrafted luxury jewellery for every moment. Waterproof, tarnish-proof, and ethically sourced."}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-cta hero-cta-row"
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <HeroBtn to="/new-collection" primary>
            Explore Now
          </HeroBtn>
          <HeroBtn to="/products">
            Shop All
          </HeroBtn>
        </div>

        {/* Stats */}
        <div
          className="hero-stats hero-stats-row"
          style={{
            display: "flex",
            gap: 40,
            marginTop: 52,
            paddingTop: 28,
            borderTop: `1px solid rgba(232,180,196,0.2)`,
          }}
        >
          {[
            ["2000+", "Designs"],
            ["50K+",  "Customers"],
            ["4.9★",  "Rating"],
          ].map(([val, lab]) => (
            <div key={lab}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 30,
                  fontWeight: 400,
                  background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.champagne})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 9.5,
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: 7,
                  fontWeight: 500,
                }}
              >
                {lab}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Floating Product Highlight */}
      <div
        style={{
          position: "absolute",
          right: 72,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          opacity: 0.85,
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 9,
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          {banner?.tag || "New Arrivals"}
        </span>
        <div
          style={{
            width: 1,
            height: 64,
            background: `linear-gradient(to bottom, transparent, rgba(232,180,196,0.4))`,
          }}
        />
      </div>

      {/* Slide Indicators */}
      {banners?.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 44,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 10,
            zIndex: 4,
            alignItems: "center",
          }}
        >
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFade(false);
                setTimeout(() => { setIdx(i); setFade(true); }, 300);
              }}
              style={{
                width: i === idx ? 32 : 8,
                height: 2.5,
                background: i === idx
                  ? `linear-gradient(90deg, ${THEME.rose}, ${THEME.champagne})`
                  : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                borderRadius: 4,
                padding: 0,
              }}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: 84,
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 8.5,
            letterSpacing: "2.5px",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 20,
            height: 32,
            border: "1px solid rgba(232,180,196,0.35)",
            borderRadius: 12,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "5px 0",
          }}
        >
          <div
            className="scroll-bounce"
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: THEME.rose,
              boxShadow: `0 0 8px rgba(232,180,196,0.8)`,
            }}
          />
        </div>
      </div>

      {/* Slide Number */}
      {banners?.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 44,
            right: 72,
            zIndex: 4,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 400,
              color: THEME.rose,
              lineHeight: 1,
            }}
          >
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 9,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "1px",
            }}
          >
            / {String(banners.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </section>
  );
}

/* ── Hero Buttons ──────────────────────────────────────────────────── */
function HeroBtn({ to, children, primary }) {
  const [hov, setHov] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: primary ? "15px 36px" : "14px 30px",
        background: primary
          ? hov
            ? `linear-gradient(135deg, ${THEME.burgundy}, #a85060)`
            : `linear-gradient(135deg, ${THEME.rose}, ${THEME.roseGold})`
          : "rgba(255,255,255,0.08)",
        color: primary
          ? "#fff"
          : hov
          ? "#fff"
          : "rgba(255,255,255,0.75)",
        border: primary
          ? "none"
          : `1px solid ${hov ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}`,
        backdropFilter: primary ? "none" : "blur(12px)",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontSize: 10.5,
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontWeight: primary ? 600 : 500,
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        boxShadow: primary && hov
          ? `0 12px 32px rgba(232,180,196,0.45)`
          : primary
          ? `0 4px 16px rgba(232,180,196,0.25)`
          : "none",
        cursor: "pointer",
        borderRadius: "2px",
      }}
    >
      {primary && (
        <span style={{ fontSize: 12, opacity: 0.9 }}>✦</span>
      )}
      {children}
      {primary && <span style={{ fontSize: 13 }}>→</span>}
    </Link>
  );
}

/* ── Promise Strip ───────────────────────────────────────────────── */
function PromiseStrip() {
  const [ref, visible] = useReveal();
  const items = [
    { icon: "💎", label: "Premium Quality",   sub: "Certified & Pure" },
    { icon: "💧", label: "Waterproof",        sub: "Everyday Wear" },
    { icon: "✨", label: "Tarnish-Proof",     sub: "Lasts 2+ Years" },
    { icon: "🌍", label: "Ethical",           sub: "Responsibly Sourced" },
  ];

  return (
    <div
      ref={ref}
      style={{
        background: THEME.surface,
        borderTop: `1px solid ${THEME.border}`,
        borderBottom: `1px solid ${THEME.border}`,
        padding: "52px 80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 32,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.7s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 16px",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 14 }}>{it.icon}</div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 12,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: THEME.text,
              fontWeight: 600,
              marginBottom: 6,
            }}
          >
            {it.label}
          </div>
          <div
            style={{
              color: THEME.textMuted,
              fontSize: 12,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
            }}
          >
            {it.sub}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Section Header ──────────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, cta, ctaLink }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: 52,
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 28,
              height: 1.5,
              background: `linear-gradient(to right, ${THEME.rose}, ${THEME.burgundy})`,
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
            {eyebrow}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 300,
            color: THEME.text,
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
            background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h2>
      </div>
      {cta && <ViewAllBtn to={ctaLink}>{cta}</ViewAllBtn>}
    </div>
  );
}

function ViewAllBtn({ to, children }) {
  const [hov, setHov] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 11,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: hov ? THEME.burgundy : THEME.rose,
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        paddingBottom: 2,
        borderBottom: `1.5px solid ${hov ? THEME.burgundy : THEME.rose}`,
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        fontWeight: 600,
      }}
    >
      {children} →
    </Link>
  );
}

/* ── Categories ──────────────────────────────────────────────────── */
function Categories({ cats }) {
  const [ref, visible] = useReveal();
  const navigate = useNavigate();

  if (!cats?.length) return null;

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 80px",
        background: THEME.surface,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(32px)",
        transition: "opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <SectionHeader
        eyebrow="Explore"
        title="Shop by Category"
        cta="View All"
        ctaLink="/products"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(cats.length, 5)}, 1fr)`,
          gap: 20,
        }}
      >
        {cats.slice(0, 5).map((c, i) => {
          const name = getCategoryName(c);
          const img  = getCategoryImage(c);
          const cid  = getCategoryId(c);
          return (
            <CategoryCard
              key={i}
              name={name}
              img={img}
              delay={i * 80}
              onClick={() => cid && navigate(`/products?category=${cid}`)}
            />
          );
        })}
      </div>
    </section>
  );
}

function CategoryCard({ name, img, onClick, delay }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        aspectRatio: "2/3",
        borderRadius: "8px",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? `0 24px 48px rgba(139,70,84,0.2)`
          : `0 8px 20px rgba(0,0,0,0.08)`,
        transition:
          "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s",
        transitionDelay: `${delay}ms`,
      }}
    >
      {img ? (
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
            transform: hov ? "scale(1.08)" : "scale(1)",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, ${THEME.blush}, ${THEME.champagne})`,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top,
            rgba(250,248,245,0.95) 0%,
            rgba(250,248,245,0.5) 50%,
            transparent 100%
          )`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "28px 20px",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontWeight: 400,
            color: THEME.text,
            letterSpacing: 1,
            marginBottom: 10,
          }}
        >
          {name}
        </div>
        <div
          style={{
            width: hov ? 48 : 24,
            height: 1.5,
            background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
            transition: "width 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 16, right: 16,
          background: `rgba(232,180,196,0.9)`,
          backdropFilter: "blur(12px)",
          padding: "6px 12px",
          borderRadius: "20px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: THEME.text,
          opacity: hov ? 1 : 0.8,
          transition: "opacity 0.3s",
        }}
      >
        Shop ↗
      </div>
    </div>
  );
}

/* ── Product Row ─────────────────────────────────────────────────── */
function ProductRow({ eyebrow, title, products, ctaLink, bg }) {
  const [ref, visible] = useReveal();

  if (!products?.length) return null;

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 80px",
        background: bg || THEME.bg,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(32px)",
        transition: "opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        cta="View All"
        ctaLink={ctaLink}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {products.slice(0, 4).map((p, i) => (
          <ProductCard key={p._id || i} product={p} />
        ))}
      </div>
    </section>
  );
}

/* ── Enhanced Blog Strip with Professional Design ────────────────────── */
function BlogStrip({ blogs }) {
  const [ref, visible] = useReveal();
  const navigate = useNavigate();

  if (!blogs?.length) return null;

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 80px",
        background: THEME.surface,
        borderTop: `1.5px solid ${THEME.border}`,
        borderBottom: `1.5px solid ${THEME.border}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(32px)",
        transition: "opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <style>{`
        @keyframes blogFadeUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .featured-blog {
          animation: blogFadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
        }

        .side-blog {
          animation: blogFadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .compact-blog {
          animation: blogFadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>

      {/* Header with Decorative Elements */}
      <div style={{ marginBottom: 80, position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 28,
              height: 1.5,
              background: `linear-gradient(to right, ${THEME.rose}, ${THEME.burgundy})`,
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10.5,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: THEME.burgundy,
              fontWeight: 600,
            }}
          >
            Stories & Inspiration
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                color: THEME.text,
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
                marginBottom: 20,
                background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              From the Journal
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13.5,
                color: THEME.textMuted,
                lineHeight: 1.8,
                letterSpacing: "0.3px",
              }}
            >
              Explore stories about craftsmanship, styling tips, and the art
              of wearing jewellery with confidence.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <ViewAllBtn to="/blog">All Stories</ViewAllBtn>
          </div>
        </div>
      </div>

      {/* Featured Post (Large) + Side Posts (Stacked) */}
      <div
        className="blog-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        {/* Main Featured Post */}
        {blogs[0] && (
          <FeaturedBlogCard
            blog={blogs[0]}
            onClick={() => navigate(`/blog`)}
          />
        )}

        {/* Side Stack of 2-3 posts */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {blogs.slice(1, 4).map((b, i) => (
            <SideBlogCard
              key={i}
              blog={b}
              delay={i * 100}
              onClick={() => navigate(`/blog`)}
            />
          ))}
        </div>
      </div>

      {/* Additional Grid for More Posts */}
      {blogs.length > 4 && (
        <div
          style={{
            marginTop: 80,
            paddingTop: 60,
            borderTop: `1px solid ${THEME.borderLight}`,
          }}
        >
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 12,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: THEME.textMuted,
              fontWeight: 600,
              marginBottom: 40,
            }}
          >
            More Stories
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
            }}
          >
            {blogs.slice(4, 7).map((b, i) => (
              <CompactBlogCard
                key={i}
                blog={b}
                delay={i * 80}
                onClick={() => navigate(`/blog`)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ── Featured Blog Card (Large Main Post) ── */
function FeaturedBlogCard({ blog: b, onClick }) {
  const [hov, setHov] = useState(false);
  const img = imgUrl(b.image || b.thumbnail || b.featuredImage);
  const readTime = b.readTime || Math.ceil((b.content?.length || 0) / 200);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="featured-blog"
      style={{
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "12px",
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          aspectRatio: "4/3",
          overflow: "hidden",
          marginBottom: 32,
          borderRadius: "8px",
          boxShadow: hov
            ? "0 24px 48px rgba(139,70,84,0.2)"
            : "0 12px 28px rgba(139,70,84,0.12)",
          transition: "box-shadow 0.4s, filter 0.4s",
        }}
      > 
        {img ? (
          <img
            src={img}
            alt={b.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
              transform: hov ? "scale(1.06)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${THEME.blush}, ${THEME.lavender})`,
            }}
          />
        )}

        {/* Overlay Badge */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: `rgba(232,180,196,0.95)`,
            backdropFilter: "blur(12px)",
            padding: "8px 16px",
            borderRadius: "24px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: THEME.text,
            display: "flex",
            alignItems: "center",
            gap: 6,
            zIndex: 10,
          }}
        >
          <span>✦</span>
          Featured
        </div>

        {/* Read Time Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            background: `rgba(255,255,255,0.95)`,
            backdropFilter: "blur(12px)",
            padding: "8px 14px",
            borderRadius: "20px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 8,
            fontWeight: 600,
            letterSpacing: "0.8px",
            color: THEME.text,
          }}
        >
          {readTime} min read
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            fontWeight: 400,
            color: hov ? THEME.burgundy : THEME.text,
            lineHeight: 1.4,
            marginBottom: 16,
            transition: "color 0.3s",
          }}
        >
          {b.title}
        </h3>

        {b.excerpt && (
          <p
            style={{
              color: THEME.textMuted,
              fontSize: 13,
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              marginBottom: 24,
              fontWeight: 400,
              flex: 1,
            }}
          >
            {b.excerpt.length > 140 ? b.excerpt.slice(0, 140) + "..." : b.excerpt}
          </p>
        )}

        {/* Meta Info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 16,
            borderTop: `1px solid ${THEME.borderLight}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {b.author && (
              <>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {b.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: THEME.text,
                    }}
                  >
                    {b.author}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 9,
                      color: THEME.textMuted,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {b.date || b.createdAt
                      ? new Date(b.date || b.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : ""}
                  </div>
                </div>
              </>
            )}
          </div>

          <div
            style={{
              color: hov ? THEME.burgundy : THEME.rose,
              fontSize: 12,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              transition: "color 0.3s",
            }}
          >
          
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Side Blog Card (Stacked Posts) ── */
function SideBlogCard({ blog: b, onClick, delay }) {
  const [hov, setHov] = useState(false);
  const img = imgUrl(b.image || b.thumbnail || b.featuredImage);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="side-blog"
      style={{
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 16,
        padding: 16,
        background: THEME.bg,
        borderRadius: "8px",
        border: `1px solid ${THEME.borderLight}`,
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "translateX(4px)" : "translateX(0)",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Small Image */}
      <div
        style={{
          aspectRatio: "1",
          overflow: "hidden",
          borderRadius: "6px",
          boxShadow: hov ? "0 8px 16px rgba(139,70,84,0.15)" : "none",
          transition: "all 0.3s",
          flexShrink: 0,
        }}
      >
        {img ? (
          <img
            src={img}
            alt={b.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
              transform: hov ? "scale(1.08)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${THEME.blush}, ${THEME.champagne})`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 120,
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              fontWeight: 400,
              color: hov ? THEME.burgundy : THEME.text,
              lineHeight: 1.3,
              marginBottom: 8,
              transition: "color 0.3s",
            }}
          >
            {b.title.length > 50 ? b.title.slice(0, 50) + "..." : b.title}
          </h4>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 10,
          }}
        >
          <span
            style={{
              color: THEME.textMuted,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "0.3px",
            }}
          >
            {b.date || b.createdAt
              ? new Date(b.date || b.createdAt).toLocaleDateString("en-IN", {
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </span>
          <span
            style={{
              color: THEME.rose,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "0.8px",
              fontWeight: 600,
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Compact Blog Card (Grid View) ── */
function CompactBlogCard({ blog: b, onClick, delay }) {
  const [hov, setHov] = useState(false);
  const img = imgUrl(b.image || b.thumbnail || b.featuredImage);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="compact-blog"
      style={{
        cursor: "pointer",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Image */}
      <div
        style={{
          overflow: "hidden",
          aspectRatio: "16/10",
          marginBottom: 20,
          position: "relative",
          borderRadius: "8px",
          boxShadow: hov
            ? "0 16px 32px rgba(139,70,84,0.15)"
            : "0 8px 16px rgba(139,70,84,0.08)",
          transition: "box-shadow 0.4s",
        }}
      >
        {img ? (
          <img
            src={img}
            alt={b.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
              transform: hov ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${THEME.blush}, ${THEME.lavender})`,
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            background: `rgba(232,180,196,0.9)`,
            backdropFilter: "blur(12px)",
            padding: "6px 12px",
            borderRadius: "20px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: THEME.text,
          }}
        >
          {b.category || "Jewellery"}
        </div>
      </div>

      {/* Content */}
      <h4
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 18,
          fontWeight: 400,
          color: hov ? THEME.burgundy : THEME.text,
          lineHeight: 1.4,
          marginBottom: 12,
          transition: "color 0.3s",
        }}
      >
        {b.title}
      </h4>

      {b.excerpt && (
        <p
          style={{
            color: THEME.textMuted,
            fontSize: 12,
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.6,
            marginBottom: 16,
            fontWeight: 400,
            minHeight: 36,
          }}
        >
          {b.excerpt.slice(0, 80)}...
        </p>
      )}

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 12,
          borderTop: `1px solid ${THEME.borderLight}`,
        }}
      >
        <span
          style={{
            color: THEME.textMuted,
            fontSize: 10,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.5px",
            fontWeight: 500,
          }}
        >
          {b.date || b.createdAt
            ? new Date(b.date || b.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              })
            : ""}
        </span>
        <span
          style={{
            color: THEME.rose,
            fontSize: 10,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
         <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Read →
          </Link>
        </span>
      </div>
    </div>
  );
}

/* ── Newsletter ──────────────────────────────────────────────────── */
function NewsletterBanner() {
  const [ref, visible] = useReveal();
  const [email, setEmail]       = useState("");
  const [sent, setSent]         = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 40px",
        background: THEME.bg,
        borderTop: `1px solid ${THEME.border}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-block", marginBottom: 20 }}>
          <span style={{ color: THEME.rose, fontSize: 28 }}>✨</span>
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 300,
            color: THEME.text,
            marginBottom: 14,
            lineHeight: 1.2,
            background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Stay in the Loop
        </h2>
        <p
          style={{
            color: THEME.textMuted,
            fontFamily: "'Poppins', sans-serif",
            fontSize: 14,
            marginBottom: 36,
            lineHeight: 1.7,
          }}
        >
          Get exclusive access to new collections, style tips, and special
          offers. Join our community of elegant jewellery lovers.
        </p>

        {sent ? (
          <div
            style={{
              padding: "16px",
              background: `linear-gradient(135deg, rgba(232,180,196,0.1), rgba(139,70,84,0.08))`,
              borderRadius: "6px",
              border: `1px solid ${THEME.rose}`,
              color: THEME.burgundy,
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            ✓ Welcome! Check your email for exclusive offers.
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: 0,
              maxWidth: 450,
              margin: "0 auto",
              boxShadow: "0 8px 24px rgba(139,70,84,0.15)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
              style={{
                flex: 1,
                padding: "14px 20px",
                background: THEME.surface,
                border: "none",
                color: THEME.text,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                outline: "none",
                letterSpacing: "0.5px",
              }}
            />
            <button
              onClick={handleSubscribe}
              disabled={isLoading}
              style={{
                padding: "14px 28px",
                background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
                border: "none",
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 700,
                cursor: isLoading ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                opacity: isLoading ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              {isLoading ? "..." : "Subscribe"}
            </button>
          </div>
        )}

        <p
          style={{
            color: THEME.textMuted,
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10,
            marginTop: 16,
            letterSpacing: "0.5px",
          }}
        >
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

/* ── All Products ────────────────────────────────────────────────── */
function AllProductsSection({ products }) {
  const [ref, visible] = useReveal();

  if (!products?.length) return null;

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 80px",
        background: THEME.bg,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(32px)",
        transition: "opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <SectionHeader
        eyebrow="Complete Collection"
        title="All Products"
        cta="Explore More"
        ctaLink="/products"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {products.slice(0, 12).map((p, i) => (
          <ProductCard key={p._id || i} product={p} />
        ))}
      </div>
    </section>
  );
}

/* ── Loading ─────────────────────────────────────────────────────── */
function LoadingScreen() {
  return (
    <div
      style={{
        background: THEME.bg,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }}
    >
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .loader { animation: spin 1s linear infinite; }
      `}</style>
      <div
        className="loader"
        style={{
          width: 48, height: 48,
          border: `2px solid ${THEME.borderLight}`,
          borderTopColor: THEME.rose,
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          color: THEME.textMuted,
          fontSize: 13,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
        }}
      >
        Curating Your Experience...
      </div>
    </div>
  );
}

/* ── Error ───────────────────────────────────────────────────────── */
function ErrorScreen({ error, onRetry }) {
  return (
    <div
      style={{
        background: THEME.bg,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        textAlign: "center",
      }}
    >
      <div style={{ color: THEME.rose, fontSize: 56, marginBottom: 24 }}>✨</div>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 300,
          color: THEME.text,
          marginBottom: 16,
        }}
      >
        Oops, Something Went Wrong
      </h2>
      <p
        style={{
          color: THEME.textMuted,
          fontSize: 14,
          fontFamily: "'Poppins', sans-serif",
          lineHeight: 1.7,
          maxWidth: 500,
          marginBottom: 32,
        }}
      >
        {error || "We're having trouble loading our collection. Please try again."}
      </p>
      <button
        onClick={onRetry}
        style={{
          padding: "12px 32px",
          background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
          border: "none",
          color: "white",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontWeight: 700,
          cursor: "pointer",
          borderRadius: "6px",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; }}
      >
        Try Again
      </button>
    </div>
  );
}

/* ── Homepage ────────────────────────────────────────────────────── */
export default function Homepage() {
  const [data, setData] = useState({
    banners: [], cats: [], latest: [],
    best: [], allProducts: [], blogs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [b, c, l, bs, ap, bl] = await Promise.allSettled([
        api.getBanners(),
        api.getCategories(),
        api.getLatestProducts(),
        api.getBestSellers(),
        api.getAllProducts(),
        api.getBlogs(),
      ]);

      const connectionError = [b, c, l, bs, ap, bl].find(
        (p) =>
          p.status === "fulfilled" &&
          p.value?.message?.includes("Cannot connect")
      );
      if (connectionError) throw new Error(connectionError.value.message);

      const latest    = extract(l.value,  "products", "data");
      const best      = extract(bs.value, "products", "data");
      const allProds  = extract(ap.value, "products", "data");

      const merged = allProds.length > 0 ? allProds : [...latest, ...best];
      const unique = Array.from(
        new Map(merged.map((p) => [p._id || p.id, p])).values()
      );

      setData({
        banners:     extract(b.value,  "banners",    "data"),
        cats:        extract(c.value,  "categories", "data"),
        latest,
        best,
        allProducts: unique,
        blogs:       extract(bl.value, "blogs",      "data"),
      });
    } catch (err) {
      console.error("❌ Homepage load failed:", err);
      setError(err.message || "Failed to load content. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  if (loading) return <LoadingScreen />;
  if (error)   return <ErrorScreen error={error} onRetry={loadData} />;

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh" }}>
      <Hero banners={data.banners} />
      <PromiseStrip />
      <Categories cats={data.cats} />
      <ProductRow
        eyebrow="Just Arrived"
        title="New Collection"
        products={data.latest}
        ctaLink="/new-collection"
        bg={THEME.surface}
      />
      <ProductRow
        eyebrow="Most Loved"
        title="Best Sellers"
        products={data.best}
        ctaLink="/best-sellers"
        bg={THEME.bg}
      />
      <AllProductsSection products={data.allProducts} />
      <BlogStrip blogs={data.blogs} />
      <NewsletterBanner />
    </div>
  );
}