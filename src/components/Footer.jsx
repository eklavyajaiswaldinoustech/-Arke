import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaWhatsapp, FaEnvelope } from "react-icons/fa";

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
  border: "#e8ddd4",
  borderLight: "#f0ebe5",
};

export default function Footer() {
  const S = {
    footer: {
      background: `linear-gradient(to bottom, ${THEME.surface} 0%, ${THEME.bg} 100%)`,
      borderTop: `1px solid ${THEME.border}`,
      padding: "80px 80px 40px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: "60px",
      marginBottom: "60px",
    },

    brand: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "42px",
      fontWeight: 400,
      letterSpacing: "4px",
      color: THEME.text,
      marginBottom: "24px",
      background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    brandSpan: {
      color: THEME.rose,
      background: "none",
      WebkitTextFillColor: "unset",
    },

    tagline: {
      color: THEME.textMuted,
      fontSize: "13.5px",
      lineHeight: "1.9",
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.5px",
      fontWeight: 400,
      maxWidth: "280px",
    },

    colTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "11px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: THEME.burgundy,
      marginBottom: "24px",
      fontWeight: 700,
    },

    colLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },

    colLink: {
      color: THEME.textMuted,
      fontSize: "13px",
      textDecoration: "none",
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.3px",
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      cursor: "pointer",
      fontWeight: 400,
      position: "relative",
    },

    bottom: {
      borderTop: `1px solid ${THEME.border}`,
      paddingTop: "36px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "40px",
      flexWrap: "wrap",
    },

    copy: {
      color: THEME.textMuted,
      fontSize: "11px",
      letterSpacing: "0.8px",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
    },

    socialRow: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
    },

    socialLink: {
      width: "42px",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      textDecoration: "none",
      color: THEME.rose,
      fontSize: "16px",
      border: `1.5px solid ${THEME.rose}`,
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      cursor: "pointer",
      background: "transparent",
      fontWeight: 500,
    },
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/yourhandle",
      icon: <FaInstagram size={16} />,
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com/yourprofile",
      icon: <FaPinterest size={16} />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919876543210",
      icon: <FaWhatsapp size={16} />,
    },
    {
      name: "Email",
      url: "mailto:hello@arke.com",
      icon: <FaEnvelope size={16} />,
    },
  ];

  const handleLinkHover = (e) => {
    e.target.style.color = THEME.burgundy;
    e.target.style.transform = "translateX(4px)";
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = THEME.textMuted;
    e.target.style.transform = "translateX(0)";
  };

  const handleSocialHover = (e) => {
    e.currentTarget.style.color = "white";
    e.currentTarget.style.borderColor = THEME.rose;
    e.currentTarget.style.background = `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`;
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = `0 6px 20px rgba(232, 180, 196, 0.35)`;
  };

  const handleSocialLeave = (e) => {
    e.currentTarget.style.color = THEME.rose;
    e.currentTarget.style.borderColor = THEME.rose;
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <footer style={S.footer}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy});
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .footer-wrapper {
            padding: 60px 20px 30px !important;
          }
        }
      `}</style>

      <div className="footer-wrapper" style={S.footer}>
        <div className="footer-grid" style={S.grid}>
          {/* Brand Section */}
          <div>
            <div style={S.brand}>
              ARK<span style={S.brandSpan}>E</span>
            </div> 
            <p style={S.tagline}>
              ✨ Jewellery for everyone.
              
              Designed with clarity,

              crafted with love.

              Wear it your way.

              <br />
              <br />

              We craft timeless pieces that celebrate elegance and individuality. 
            Each jewel tells a story of meticulous craftsmanship, passion, and 
            attention to detail. Our collection blends traditional artistry with 
            contemporary design, creating pieces that transcend trends and become 
            cherished heirlooms.
            </p>

          </div>

          {/* Explore Section */}
          <div>
            <div style={S.colTitle}>📍 Explore</div>
            <div style={S.colLinks}>
              {[
                ["New Collection", "/new-collection"],
                ["Best Sellers", "/best-sellers"],
                ["All Jewellery", "/products"],
                ["Gift Guide", "/gift-guide"],
              ].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="footer-link"
                  style={S.colLink}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <div>
            <div style={S.colTitle}>💬 Support</div>
            <div style={S.colLinks}>
              {[
                ["About Us", "/about-us"],
                ["Contact Us", "/customer-care"],
                ["Shipping Info", "/shipping"],
                ["Journal", "/blog"],
              ].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="footer-link"
                  style={S.colLink}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${THEME.border}, transparent)`,
          margin: "40px 0",
        }} />

        {/* Bottom Bar */}
        <div className="footer-bottom" style={S.bottom}>
          <span style={S.copy}>
            © {new Date().getFullYear()} ARKE. All Rights Reserved. | Handcrafted
            with 💕
          </span>

          {/* Desktop Social Links */}
          <div style={S.socialRow}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                style={S.socialLink}
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div style={{
          marginTop: "30px",
          paddingTop: "24px",
          borderTop: `1px solid ${THEME.borderLight}`,
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {[
            ["Privacy Policy", "/privacy"],
            ["Terms & Conditions", "/terms"],
            ["Refund Policy", "/refund"],
            ["Accessibility", "/accessibility"],
          ].map(([label, to]) => (
            <Link
              key={to}
              to={to}
              style={{
                color: THEME.textMuted,
                fontSize: "10px",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.5px",
                transition: "color 0.3s",
                fontWeight: 500,
              }}
              onMouseEnter={e => {
                e.target.style.color = THEME.rose;
              }}
              onMouseLeave={e => {
                e.target.style.color = THEME.textMuted;
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}