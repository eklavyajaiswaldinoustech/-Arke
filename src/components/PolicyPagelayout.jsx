// components/PolicyPageLayout.jsx
// This is a SHARED layout — save as separate file or keep at bottom of each page

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
  borderLight: "#f0ebe5",
  success: "#70c878",
  error: "#d97070",
  gold: "#c9a96e",
};

/* ================================================================== */
/*  SHARED POLICY PAGE LAYOUT                                         */
/* ================================================================== */
export function PolicyPageLayout({
  title,
  subtitle,
  description,
  lastUpdated,
  loading,
  breadcrumb = [],
  navigate,
  children,
}) {
  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: 120 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes spin {
          to { transform:rotate(360deg); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes expandLine {
          from { width:0; }
          to   { width:100%; }
        }

        .policy-section:hover {
          border-color: ${THEME.rose}60 !important;
          box-shadow: 0 8px 32px ${THEME.rose}12 !important;
          transform: translateY(-2px) !important;
        }

        .policy-bullet:hover {
          background: ${THEME.blush}25 !important;
          padding-left: 20px !important;
        }

        .tracking-form-grid {
          /* default is 3 columns for desktop */
        }

        @media (max-width:768px) {
          .policy-header  { padding:40px 20px 30px !important; }
          .policy-content { padding:24px 20px !important; }
          .policy-section { padding:24px !important; }
          .tracking-form-grid {
            grid-template-columns:1fr !important;
          }
        }

        @media (max-width:480px) {
          .timeline-row { flex-direction:column !important; gap:8px !important; }
        }
      `}</style>

      {/* Header */}
      <div
        className="policy-header"
        style={{
          padding: "60px 80px 40px",
          borderBottom: `1.5px solid ${THEME.border}`,
          animation: "fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          {breadcrumb.map((crumb, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && (
                <span style={{ color: THEME.textMuted, fontSize: 10 }}>›</span>
              )}
              <span
                onClick={crumb.path ? () => navigate(crumb.path) : undefined}
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 11,
                  color: crumb.path ? THEME.rose : THEME.text,
                  cursor: crumb.path ? "pointer" : "default",
                  fontWeight: crumb.path ? 500 : 600,
                  letterSpacing: "0.5px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (crumb.path) e.target.style.color = THEME.burgundy;
                }}
                onMouseLeave={(e) => {
                  if (crumb.path) e.target.style.color = THEME.rose;
                }}
              >
                {crumb.label}
              </span>
            </span>
          ))}
        </div>

        {/* Title area */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <div
            style={{
              width: 28,
              height: 1.5,
              background: `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})`,
            }}
          />
          <span
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: THEME.burgundy,
              fontWeight: 600,
            }}
          >
            {subtitle}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 300,
            margin: "0 0 14px",
            background: `linear-gradient(135deg,${THEME.text},${THEME.burgundy})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h1>

        {description && (
          <p
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 13,
              color: THEME.textMuted,
              maxWidth: 600,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {description}
          </p>
        )}

        {lastUpdated && (
          <div
            style={{
              marginTop: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: `${THEME.blush}18`,
              borderRadius: 20,
              border: `1px solid ${THEME.rose}30`,
            }}
          >
            <span style={{ fontSize: 12 }}>🕐</span>
            <span
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 10,
                color: THEME.textMuted,
                fontWeight: 500,
              }}
            >
              Last updated: {lastUpdated}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 100,
            gap: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: `3px solid ${THEME.border}`,
              borderTopColor: THEME.rose,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 16,
              color: THEME.textMuted,
              fontStyle: "italic",
            }}
          >
            Loading…
          </span>
        </div>
      ) : (
        <div
          className="policy-content"
          style={{
            padding: "48px 80px 80px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  POLICY SECTION CARD                                               */
/* ================================================================== */
export function PolicySection({ section, index }) {
  return (
    <div
      className="policy-section"
      style={{
        background: THEME.surface,
        border: `1.5px solid ${THEME.border}`,
        borderRadius: 14,
        padding: 36,
        marginBottom: 24,
        boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${
          index * 0.08
        }s both`,
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 22,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: `linear-gradient(135deg,${THEME.blush}40,${THEME.champagne}30)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            flexShrink: 0,
            border: `1px solid ${THEME.rose}25`,
          }}
        >
          {section.icon}
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 8,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: THEME.rose,
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            Section {index + 1}
          </div>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 22,
              fontWeight: 400,
              margin: 0,
              color: THEME.text,
            }}
          >
            {section.title}
          </h3>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg,${THEME.rose}40,transparent)`,
          marginBottom: 20,
        }}
      />

      {/* Content bullets */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {(Array.isArray(section.content) ? section.content : [section.content]).map(
          (point, j) => (
            <div
              key={j}
              className="policy-bullet"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "10px 14px",
                borderRadius: 8,
                transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                animation: `slideRight 0.4s cubic-bezier(0.34,1.56,0.64,1) ${
                  index * 0.08 + j * 0.05
                }s both`,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
                  marginTop: 7,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 13,
                  color: THEME.text,
                  lineHeight: 1.7,
                }}
              >
                {point}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  CONTACT BOX                                                       */
/* ================================================================== */
export function ContactBox({ title, description, info }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg,${THEME.blush}20,${THEME.champagne}15)`,
        border: `1.5px solid ${THEME.rose}35`,
        borderRadius: 14,
        padding: 40,
        marginTop: 16,
        textAlign: "center",
        animation: "fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s both",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 14 }}>💌</div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 26,
          fontWeight: 400,
          margin: "0 0 10px",
          color: THEME.text,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 13,
          color: THEME.textMuted,
          margin: "0 0 24px",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {[
          { icon: "✉", label: info.email, href: `mailto:${info.email}` },
          { icon: "📱", label: info.phone, href: `tel:${info.phone}` },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: THEME.surface,
              borderRadius: 8,
              border: `1.5px solid ${THEME.border}`,
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = THEME.rose;
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 6px 20px ${THEME.rose}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = THEME.border;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: 14 }}>{c.icon}</span>
            <span
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: THEME.burgundy,
              }}
            >
              {c.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  REFUND TIMELINE                                                   */
/* ================================================================== */
export function RefundTimeline({ steps }) {
  return (
    <div
      style={{
        background: THEME.surface,
        border: `1.5px solid ${THEME.border}`,
        borderRadius: 14,
        padding: 36,
        marginBottom: 32,
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        animation: "fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
        <div
          style={{
            width: 20,
            height: 1.5,
            background: `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})`,
          }}
        />
        <span
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 10,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: THEME.burgundy,
            fontWeight: 700,
          }}
        >
          Refund Timeline
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: 0,
          position: "relative",
        }}
        className="timeline-row"
      >
        {steps.map((step, i) => (
          <div
            key={step._id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${
                i * 0.15
              }s both`,
            }}
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  left: "50%",
                  width: "100%",
                  height: 2,
                  background: `linear-gradient(90deg,${THEME.rose}60,${THEME.champagne}60)`,
                  zIndex: 0,
                }}
              />
            )}

            {/* Circle */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: `linear-gradient(135deg,${THEME.blush}50,${THEME.champagne}40)`,
                border: `2px solid ${THEME.rose}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                marginBottom: 12,
                position: "relative",
                zIndex: 1,
                boxShadow: `0 4px 12px ${THEME.rose}15`,
              }}
            >
              {step.icon}
            </div>

            {/* Days badge */}
            <div
              style={{
                padding: "3px 10px",
                background: `${THEME.rose}18`,
                borderRadius: 10,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  color: THEME.burgundy,
                  letterSpacing: "0.5px",
                }}
              >
                {step.days}
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: THEME.text,
                marginBottom: 4,
              }}
            >
              {step.title}
            </div>
            <div
              style={{
                fontFamily: "'Poppins',sans-serif", 
                fontSize: 10,
                color: THEME.textMuted,
                lineHeight: 1.4,
                padding: "0 8px",
              }}
            >
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}