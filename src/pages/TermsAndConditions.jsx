// src/pages/TermsAndConditions.jsx
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

const DEFAULT_SECTIONS = [
  {
    _id: "1",
    title: "Acceptance of Terms",
    icon: "📜",
    content: [
      "By accessing or using the Arke Jewellery website, you agree to be bound by these Terms & Conditions.",
      "If you do not agree with any part of these terms, please do not use our services.",
      "We reserve the right to modify these terms at any time. Continued use constitutes acceptance of changes.",
      "These terms apply to all visitors, users, and customers of our website and services.",
    ],
  },
  {
    _id: "2",
    title: "Products & Pricing",
    icon: "💎",
    content: [
      "All product descriptions, images, and specifications are as accurate as possible.",
      "Prices are listed in Indian Rupees (₹) and include applicable taxes unless stated otherwise.",
      "We reserve the right to modify prices without prior notice. Orders placed before price changes will be honored.",
      "Product availability is subject to change. We may limit quantities per customer.",
      "Slight variations in color, size, or finish may occur due to the handcrafted nature of our jewelry.",
    ],
  },
  {
    _id: "3",
    title: "Orders & Payment",
    icon: "🛒",
    content: [
      "Placing an order constitutes an offer to purchase. We may accept or decline at our discretion.",
      "Payment must be completed at the time of order using accepted payment methods.",
      "We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery (where available).",
      "Order confirmation will be sent via email. Please verify all details upon receipt.",
      "We reserve the right to cancel orders if fraud or pricing errors are detected.",
    ],
  },
  {
    _id: "4",
    title: "User Accounts",
    icon: "👤",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must provide accurate and complete information during registration.",
      "You are liable for all activities that occur under your account.",
      "We reserve the right to suspend or terminate accounts that violate our policies.",
      "Notify us immediately if you suspect unauthorized access to your account.",
    ],
  },
  {
    _id: "5",
    title: "Intellectual Property",
    icon: "©️",
    content: [
      "All content on this website — including designs, images, logos, and text — is owned by Arke Jewellery.",
      "Unauthorized reproduction, distribution, or use of our content is strictly prohibited.",
      "Our jewelry designs are original and protected under applicable intellectual property laws.",
      "User-submitted content (reviews, photos) grants us a non-exclusive license to display it.",
    ],
  },
  {
    _id: "6",
    title: "Limitation of Liability",
    icon: "⚠️",
    content: [
      "Arke Jewellery shall not be liable for any indirect, incidental, or consequential damages.",
      "Our total liability shall not exceed the amount paid for the specific product in question.",
      "We are not responsible for delays caused by third-party shipping carriers or force majeure events.",
      "The website is provided 'as is' — we do not guarantee uninterrupted or error-free service.",
    ],
  },
  {
    _id: "7",
    title: "Governing Law",
    icon: "🏛️",
    content: [
      "These terms are governed by the laws of India and the jurisdiction of Mumbai courts.",
      "Any disputes shall be resolved through arbitration before pursuing legal action.",
      "If any provision is found unenforceable, the remaining provisions shall remain in effect.",
    ],
  },
];

export default function TermsAndConditions() {
  const navigate = useNavigate();
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("June 2025");
  const [companyInfo] = useState({
    name: "Arke Jewellery",
    email: "legal@arke.com",
    phone: "+91 98765 43210",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // TODO: Connect to your backend
    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     const res = await api.getTermsAndConditions();
    //     if (res?.success && res?.data?.sections) {
    //       setSections(res.data.sections);
    //       if (res.data.lastUpdated) setLastUpdated(res.data.lastUpdated);
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
        .policy-section-card {
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .policy-section-card:hover {
          border-color: rgba(232,180,196,0.5) !important;
          box-shadow: 0 8px 32px rgba(232,180,196,0.12) !important;
          transform: translateY(-2px) !important;
        }
        .policy-bullet {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .policy-bullet:hover {
          background: rgba(245,213,224,0.2) !important;
          padding-left: 20px !important;
        }
        @media (max-width: 768px) {
          .policy-header { padding: 40px 20px 30px !important; }
          .policy-content { padding: 24px 20px 60px !important; }
        }
      `}</style>

      {/* ── Header ──────────────────────────────────────────── */}
      <div
        className="policy-header"
        style={{
          padding: "60px 80px 40px",
          borderBottom: `1.5px solid ${THEME.border}`,
          animation: "fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <span
            onClick={() => navigate("/")}
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 11,
              color: THEME.rose,
              cursor: "pointer",
              fontWeight: 500,
              transition: "color 0.2s",
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
            Terms & Conditions
          </span>
        </div>

        {/* Title */}
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
            Our Agreement
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
          Terms & Conditions
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
          Please read these terms carefully before using our website or purchasing
          our products. By using Arke Jewellery, you agree to these terms.
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

      {/* ── Content ─────────────────────────────────────────── */}
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
          style={{ padding: "48px 80px 80px", maxWidth: 900, margin: "0 auto" }}
        >
          {sections.map((section, i) => (
            <div
              key={section._id}
              className="policy-section-card"
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
              {/* Section Header */}
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

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: `linear-gradient(90deg,${THEME.rose}40,transparent)`,
                  marginBottom: 20,
                }}
              />

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {section.content.map((point, j) => (
                  <div
                    key={j}
                    className="policy-bullet"
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
              marginTop: 16,
              textAlign: "center",
              animation: "fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
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
              Questions About Our Terms?
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
              If you need clarification on any of our terms, our team is here to help.
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