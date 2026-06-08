// src/pages/RefundPolicy.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
};

const DEFAULT_TIMELINE = [
  { _id: "t1", step: 1, title: "Request Return", desc: "Contact us within 7 days", icon: "📧", days: "Day 1" },
  { _id: "t2", step: 2, title: "Ship Item Back", desc: "Pack with original packaging", icon: "📦", days: "Day 2–3" },
  { _id: "t3", step: 3, title: "Quality Check", desc: "We inspect the returned item", icon: "🔍", days: "Day 4–6" },
  { _id: "t4", step: 4, title: "Refund Processed", desc: "Credited to original payment", icon: "✅", days: "Day 7–10" },
];

const DEFAULT_SECTIONS = [
  {
    _id: "1",
    title: "Return Eligibility",
    icon: "✅",
    content: [
      "Returns accepted within 7 days of delivery for unused, undamaged items.",
      "Items must be in original packaging with all tags and certificates attached.",
      "Custom-made or personalized jewelry cannot be returned unless defective.",
      "Sale items and gift cards are non-returnable.",
      "Proof of purchase (order ID or receipt) is required for all returns.",
    ],
  },
  {
    _id: "2",
    title: "Non-Returnable Items",
    icon: "🚫",
    content: [
      "Earrings and nose pins (for hygiene reasons) — unless manufacturing defect.",
      "Engraved or personalized pieces made to your specifications.",
      "Items that show signs of wear, damage, or alteration after delivery.",
      "Products purchased during clearance or final sale promotions.",
      "Gift cards, vouchers, and loyalty rewards.",
    ],
  },
  {
    _id: "3",
    title: "Refund Process",
    icon: "💰",
    content: [
      "Once your return is received, inspection takes 2–3 business days.",
      "Approved refunds are processed within 5–7 business days after inspection.",
      "Refunds are credited to the original payment method used during purchase.",
      "For COD orders, refunds are transferred to your bank account (NEFT/UPI).",
      "You will receive email confirmation at each stage of the refund process.",
    ],
  },
  {
    _id: "4",
    title: "Exchange Policy",
    icon: "🔄",
    content: [
      "Exchanges available within 7 days for different sizes or designs.",
      "Exchange items must meet the same return eligibility criteria.",
      "Price differences (if any) will be charged or refunded accordingly.",
      "Exchange shipping is free for the first exchange per order.",
    ],
  },
  {
    _id: "5",
    title: "Damaged or Defective Items",
    icon: "⚡",
    content: [
      "Report damaged/defective items within 48 hours of delivery with photos.",
      "We offer full refund or free replacement for manufacturing defects.",
      "Shipping damage must be reported with unboxing photos or video as proof.",
      "Defective items are picked up at no cost — we arrange reverse shipping.",
    ],
  },
  {
    _id: "6",
    title: "Cancellation Policy",
    icon: "❌",
    content: [
      "Orders can be cancelled within 12 hours of placement for a full refund.",
      "Once shipped, orders cannot be cancelled — please initiate a return instead.",
      "Custom orders cannot be cancelled once production has started.",
      "Cancellation refunds are processed within 3–5 business days.",
    ],
  },
];

export default function RefundPolicy() {
  const navigate = useNavigate();
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [timeline, setTimeline] = useState(DEFAULT_TIMELINE);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("June 2025");
  const [companyInfo] = useState({
    email: "returns@arke.com",
    phone: "+91 98765 43210",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // TODO: Connect to your backend
    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     const res = await api.getRefundPolicy();
    //     if (res?.success) {
    //       if (res.data?.sections) setSections(res.data.sections);
    //       if (res.data?.timeline) setTimeline(res.data.timeline);
    //       if (res.data?.lastUpdated) setLastUpdated(res.data.lastUpdated);
    //     }
    //   } catch (err) { console.error(err); }
    //   finally { setLoading(false); }
    // };
    // fetchData();
  }, []);

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: 120 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        .rp-card {
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .rp-card:hover {
          border-color: rgba(232,180,196,0.5) !important;
          box-shadow: 0 8px 32px rgba(232,180,196,0.12) !important;
          transform: translateY(-2px) !important;
        }
        .rp-bullet {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .rp-bullet:hover {
          background: rgba(245,213,224,0.2) !important;
          padding-left: 20px !important;
        }
        @media (max-width: 768px) {
          .rp-header  { padding: 40px 20px 30px !important; }
          .rp-content { padding: 24px 20px 60px !important; }
          .rp-timeline { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .rp-timeline { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <div
        className="rp-header"
        style={{
          padding: "60px 80px 40px",
          borderBottom: `1.5px solid ${THEME.border}`,
          animation: "fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <span
            onClick={() => navigate("/")}
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 11,
              color: THEME.rose,
              cursor: "pointer",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.target.style.color = THEME.burgundy)}
            onMouseLeave={(e) => (e.target.style.color = THEME.rose)}
          >
            Home
          </span>
          <span style={{ color: THEME.textMuted, fontSize: 10 }}>›</span>
          <span
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 11,
              color: THEME.text,
              fontWeight: 600,
            }}
          >
            Refund Policy
          </span>
        </div>

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
            Hassle-Free Returns
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
          Refund & Return Policy
        </h1>

        <p
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 13,
            color: THEME.textMuted,
            maxWidth: 580,
            lineHeight: 1.7,
            margin: "0 0 16px",
          }}
        >
          We want you to love every piece. If something isn't right, our simple
          return process ensures a smooth experience.
        </p>

        <div
          style={{
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
      </div>

      {/* Content */}
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 100,
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
        </div>
      ) : (
        <div
          className="rp-content"
          style={{ padding: "48px 80px 80px", maxWidth: 900, margin: "0 auto" }}
        >
          {/* Timeline */}
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
              className="rp-timeline"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${timeline.length}, 1fr)`,
                gap: 0,
                position: "relative",
              }}
            >
              {timeline.map((step, i) => (
                <div
                  key={step._id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.15}s both`,
                  }}
                >
                  {i < timeline.length - 1 && (
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

          {/* Sections */}
          {sections.map((section, i) => (
            <div
              key={section._id}
              className="rp-card"
              style={{
                background: THEME.surface,
                border: `1.5px solid ${THEME.border}`,
                borderRadius: 14,
                padding: 36,
                marginBottom: 24,
                boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
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
                    Section {i + 1}
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

              <div
                style={{
                  height: 1,
                  background: `linear-gradient(90deg,${THEME.rose}40,transparent)`,
                  marginBottom: 20,
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {section.content.map((point, j) => (
                  <div
                    key={j}
                    className="rp-bullet"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 14px",
                      borderRadius: 8,
                      animation: `slideRight 0.4s cubic-bezier(0.34,1.56,0.64,1) ${
                        i * 0.08 + j * 0.05
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
                ))}
              </div>
            </div>
          ))}

          {/* Contact Box */}
          <div
            style={{
              background: `linear-gradient(135deg,${THEME.blush}20,${THEME.champagne}15)`,
              border: `1.5px solid ${THEME.rose}35`,
              borderRadius: 14,
              padding: 40,
              textAlign: "center",
              animation: "fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 14 }}>🔄</div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 26,
                fontWeight: 400,
                margin: "0 0 10px",
                color: THEME.text,
              }}
            >
              Need Help With a Return?
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
              Our support team will guide you through the entire return and refund process.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: "✉", label: companyInfo.email, href: `mailto:${companyInfo.email}` },
                { icon: "📱", label: companyInfo.phone, href: `tel:${companyInfo.phone}` },
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
        </div>
      )}
    </div>
  );
}