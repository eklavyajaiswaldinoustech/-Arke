// src/pages/PrivacyPolicy.jsx
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
    title: "Information We Collect",
    icon: "📋",
    content: [
      "Personal identification information (name, email, phone number, shipping address)",
      "Payment information processed securely through our payment partners",
      "Browsing behavior and preferences on our website",
      "Device information and IP address for security purposes",
      "Order history and communication records",
    ],
  },
  {
    _id: "2",
    title: "How We Use Your Information",
    icon: "🔍",
    content: [
      "To process and fulfill your jewelry orders accurately",
      "To personalize your shopping experience and recommendations",
      "To communicate order updates, shipping notifications, and support",
      "To improve our website, products, and customer service",
      "To detect and prevent fraudulent transactions",
    ],
  },
  {
    _id: "3",
    title: "Data Protection & Security",
    icon: "🔒",
    content: [
      "All data is encrypted using industry-standard SSL/TLS protocols",
      "Payment information is never stored on our servers — processed by PCI-compliant partners",
      "Regular security audits and vulnerability assessments",
      "Employee access to personal data is strictly limited and monitored",
      "Two-factor authentication available for customer accounts",
    ],
  },
  {
    _id: "4",
    title: "Cookies & Tracking",
    icon: "🍪",
    content: [
      "Essential cookies for cart functionality and secure checkout",
      "Analytics cookies to understand website performance (can be disabled)",
      "Marketing cookies for personalized recommendations (opt-in only)",
      "You can manage cookie preferences in your browser settings at any time",
    ],
  },
  {
    _id: "5",
    title: "Third-Party Sharing",
    icon: "🤝",
    content: [
      "Shipping partners — only address and contact details needed for delivery",
      "Payment processors — card details handled securely by our payment partners",
      "We never sell your personal data to advertisers or third parties",
      "Law enforcement — only when legally required with valid court orders",
    ],
  },
  {
    _id: "6",
    title: "Your Rights",
    icon: "⚖️",
    content: [
      "Right to access — request a copy of all data we hold about you",
      "Right to correction — update or correct inaccurate personal data",
      "Right to deletion — request deletion of your account and data",
      "Right to portability — receive your data in a structured format",
      "Contact us at privacy@arke.com for any data-related requests",
    ],
  },
];

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("June 2025");
  const [companyInfo] = useState({
    email: "privacy@arke.com",
    phone: "+91 98765 43210",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // TODO: Connect to your backend
    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     const res = await api.getPrivacyPolicy();
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
        .pp-card {
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .pp-card:hover {
          border-color: rgba(232,180,196,0.5) !important;
          box-shadow: 0 8px 32px rgba(232,180,196,0.12) !important;
          transform: translateY(-2px) !important;
        }
        .pp-bullet {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .pp-bullet:hover {
          background: rgba(245,213,224,0.2) !important;
          padding-left: 20px !important;
        }
        @media (max-width: 768px) {
          .pp-header  { padding: 40px 20px 30px !important; }
          .pp-content { padding: 24px 20px 60px !important; }
        }
      `}</style>

      {/* Header */}
      <div
        className="pp-header"
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
            Privacy Policy
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
            Your Trust Matters
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
          Privacy Policy
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
          We value your privacy and are committed to protecting your personal information.
          This policy explains how we collect, use, and safeguard your data.
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
        </div>
      ) : (
        <div
          className="pp-content"
          style={{ padding: "48px 80px 80px", maxWidth: 900, margin: "0 auto" }}
        >
          {sections.map((section, i) => (
            <div
              key={section._id}
              className="pp-card"
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
                    className="pp-bullet"
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
            <div style={{ fontSize: 28, marginBottom: 14 }}>🔒</div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 26,
                fontWeight: 400,
                margin: "0 0 10px",
                color: THEME.text,
              }}
            >
              Privacy Concerns?
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
              Contact us for any data-related requests or privacy questions.
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