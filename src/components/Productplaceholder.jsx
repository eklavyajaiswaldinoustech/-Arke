export default function ProductPlaceholder({ product, small = false }) {
  const THEME = {
    bg: "#faf8f5",
    surface: "#ffffff",
    text: "#2a2a2a",
    textMuted: "#8a8a8a",
    rose: "#e8b4c4",
    blush: "#f5d5e0",
    burgundy: "#8b4654",
    champagne: "#e8d4c2",
    lavender: "#d4c4e0",
  };

  const type = product?.type || product?.category || "";
  const metal = product?.metal_type || "";
  const diamond = product?.diamond_quality || "";
  const gender = product?.gender || "";
  const qty = product?.totalQuantity ?? product?.quantity ?? "";

  // Icon mapping with feminine symbols
  const icons = {
    ring: "◯",
    necklace: "◇",
    earring: "◈",
    bracelet: "⌀",
    bangle: "○",
    pendant: "◆",
  };

  const typeKey = Object.keys(icons).find((k) =>
    type.toLowerCase().includes(k)
  );
  const icon = icons[typeKey] || "◇";

  // Small placeholder (for quick view, thumbnails)
  if (small) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(160deg, ${THEME.blush}20, ${THEME.champagne}15)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .placeholder-icon {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: `1px solid ${THEME.rose}20`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: `1px solid ${THEME.rose}10`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Icon */}
        <span
          className="placeholder-icon"
          style={{
            color: THEME.rose,
            fontSize: 32,
            zIndex: 1,
            opacity: 0.8,
          }}
        >
          {icon}
        </span>

        {/* Brand */}
        <span
          style={{
            color: THEME.burgundy,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 10,
            letterSpacing: "2px",
            zIndex: 1,
            fontWeight: 300,
            opacity: 0.7,
            textTransform: "uppercase",
          }}
        >
          ARKE
        </span>

        {/* Loading indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            width: 20,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${THEME.rose}, transparent)`,
            borderRadius: "1px",
            opacity: 0.5,
            animation: "shimmer 2s infinite",
          }}
        />

        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  // Full placeholder (for product cards, detail pages)
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(160deg, ${THEME.blush}15 0%, ${THEME.champagne}10 60%, ${THEME.lavender}8 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 20px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .placeholder-corner {
          position: absolute;
          width: 20px;
          height: 20px;
        }
      `}</style>

      {/* Corner decorations - feminine style */}
      {[
        ["top", "left"],
        ["top", "right"],
        ["bottom", "left"],
        ["bottom", "right"],
      ].map(([v, h], i) => (
        <div
          key={i}
          className="placeholder-corner"
          style={{
            [v]: 12,
            [h]: 12,
            ...(v === "top" && h === "left"
              ? {
                  borderTop: `1.5px solid ${THEME.rose}40`,
                  borderLeft: `1.5px solid ${THEME.rose}40`,
                }
              : v === "top" && h === "right"
              ? {
                  borderTop: `1.5px solid ${THEME.rose}40`,
                  borderRight: `1.5px solid ${THEME.rose}40`,
                }
              : v === "bottom" && h === "left"
              ? {
                  borderBottom: `1.5px solid ${THEME.rose}40`,
                  borderLeft: `1.5px solid ${THEME.rose}40`,
                }
              : {
                  borderBottom: `1.5px solid ${THEME.rose}40`,
                  borderRight: `1.5px solid ${THEME.rose}40`,
                }),
          }}
        />
      ))}

      {/* Concentric circles */}
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: `1px solid ${THEME.rose}15`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 140,
          height: 140,
          borderRadius: "50%",
          border: `1px solid ${THEME.rose}20`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: `1px solid ${THEME.rose}25`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Top: Brand */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 12,
          letterSpacing: "3px",
          color: THEME.rose,
          textTransform: "uppercase",
          zIndex: 1,
          fontWeight: 300,
          opacity: 0.7,
        }}
      >
        ARKE
      </div>

      {/* Center: Icon & Details */}
      <div
        style={{
          textAlign: "center",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
        }}
      >
        {/* Main Icon */}
        <div
          style={{
            fontSize: 48,
            color: THEME.rose,
            lineHeight: 1,
            opacity: 0.8,
            animation: "float 4s ease-in-out infinite",
          }}
        >
          {icon}
        </div>

        {/* Product Type */}
        {type && (
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: THEME.burgundy,
              fontWeight: 600,
              opacity: 0.8,
            }}
          >
            {type}
          </div>
        )}

        {/* Divider */}
        <div
          style={{
            width: 36,
            height: 1.5,
            background: `linear-gradient(90deg, transparent, ${THEME.rose}60, transparent)`,
            margin: "4px 0",
          }}
        />

        {/* Product Details Grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: "100%",
            padding: "0 12px",
          }}
        >
          {[
            ["Metal", metal],
            ["Diamond", diamond],
            ["For", gender],
            [
              "Stock",
              qty !== ""
                ? qty > 0
                  ? `${qty} available`
                  : "Out of stock"
                : "",
            ],
          ]
            .filter(([, v]) => v)
            .map(([label, val]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "6px 8px",
                  background: `${THEME.rose}10`,
                  borderRadius: "4px",
                  border: `0.5px solid ${THEME.rose}25`,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 9,
                    letterSpacing: "1px",
                    color: THEME.textMuted,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    color: label === "Stock"
                      ? qty > 0
                        ? "#70c878"
                        : "#d97070"
                      : THEME.burgundy,
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Bottom: Loading Indicator */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          border: `1.5px solid ${THEME.rose}40`,
          borderRadius: "20px",
          background: `${THEME.rose}8`,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: THEME.rose,
            animation: "pulse 2s infinite",
            opacity: 0.8,
          }}
        />
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 8,
            letterSpacing: "1.2px",
            color: THEME.rose,
            textTransform: "uppercase",
            fontWeight: 600,
            opacity: 0.8,
          }}
        >
          Loading Image
        </span>
      </div>
    </div>
  );
}