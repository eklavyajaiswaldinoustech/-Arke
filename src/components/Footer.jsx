// components/Footer.jsx
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
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "50px",
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
      display: "inline-block",
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

  /* ── All footer link sections ───────────────────────────────── */
  const exploreLinks = [
    { label: "New Arrivals", to: "/products?filter=new-arrivals" },
    { label: "Best Sellers", to: "/products?filter=best-sellers" },
    { label: "All Jewellery", to: "/products" },
    { label: "Gift for Her", to: "/products?gift-for-her" },
    { label: "Gift for Him", to: "/products?gift-for-him" },
  ];

  const supportLinks = [
    { label: "Order Tracking", to: "/order-tracking" },
    { label: "Shipping Info", to: "/order-tracking" },
    { label: "Refund & Returns", to: "/refund-policy" },
    { label: "Contact Us", to: "/customer-care" },
    { label: "FAQs", to: "/faqs" },
  ];

  const companyLinks = [
    { label: "About Us", to: "/about-us" },
    { label: "Our Story", to: "/our-story" },
    { label: "Blog / Journal", to: "/blog" },
    { label: "Careers", to: "/careers" },
    { label: "Store Locator", to: "/stores" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Refund Policy", to: "/refund-policy" },
    { label: "Shipping Policy", to: "/order-tracking" },
  ];

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

  /* ── Hover handlers ──────────────────────────────────────────── */
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

  /* ── Newsletter state ────────────────────────────────────────── */
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (email) {
      // TODO: Connect to backend
      // api.subscribeNewsletter(email)
      alert(`Thank you for subscribing with ${email}! 💌`);
      e.target.reset();
    }
  };

  return (
    <footer>
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

        .newsletter-input {
          flex: 1;
          background: ${THEME.blush}15;
          border: 1.5px solid ${THEME.border};
          color: ${THEME.text};
          padding: 12px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          outline: none;
          border-radius: 8px 0 0 8px;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .newsletter-input:focus {
          border-color: ${THEME.rose};
          box-shadow: 0 0 0 3px ${THEME.rose}15;
        }
        .newsletter-input::placeholder {
          color: ${THEME.textMuted};
          font-size: 11px;
        }
        .newsletter-btn {
          padding: 12px 20px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          color: white;
          border: none;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 700;
          border-radius: 0 8px 8px 0;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
        }
        .newsletter-btn:hover {
          box-shadow: 0 4px 16px ${THEME.rose}40;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .footer-wrapper {
            padding: 50px 20px 30px !important;
          }
          .footer-legal {
            justify-content: flex-start !important;
          }
        }
      `}</style>

      <div className="footer-wrapper" style={S.footer}>
        {/* ── Newsletter Banner ────────────────────────────────── */}
        <div
          style={{
            background: `linear-gradient(135deg, ${THEME.blush}25, ${THEME.champagne}18)`,
            border: `1.5px solid ${THEME.rose}30`,
            borderRadius: 14,
            padding: "36px 40px",
            marginBottom: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 24,
                fontWeight: 400,
                color: THEME.text,
                marginBottom: 6,
              }}
            >
              ✨ Stay in the Loop
            </div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                color: THEME.textMuted,
                letterSpacing: "0.3px",
              }}
            >
              Get early access to new collections, exclusive offers & styling tips.
            </div>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            style={{
              display: "flex",
              minWidth: 300,
              flex: "0 1 400px",
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>

        {/* ── Main Grid ────────────────────────────────────────── */}
        <div className="footer-grid" style={S.grid}>
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div style={S.brand}>
                ARK<span style={S.brandSpan}>E</span>
              </div>
            </Link>
            <p style={S.tagline}>
              ✨ Jewellery for everyone.
              <br />
              <br />
              We craft timeless pieces that celebrate elegance and individuality.
              Each jewel tells a story of meticulous craftsmanship, passion, and
              attention to detail.
            </p>

            {/* Social icons under brand */}
            <div style={{ ...S.socialRow, marginTop: 28 }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  aria-label={social.name}
                  style={S.socialLink}
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            {/* <div style={S.colTitle}>📍 Explore</div>
            <div style={S.colLinks}>
              {exploreLinks.map((link) => (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  className="footer-link"
                  style={S.colLink}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                >
                  {link.label}
                </Link>
              ))}
            </div> */}
          </div>

          {/* Support Column */}
          <div>
            <div style={S.colTitle}>💬 Support</div>
            <div style={S.colLinks}>
              {supportLinks.map((link) => (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  className="footer-link"
                  style={S.colLink}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <div style={S.colTitle}>🏛️ Company</div>
            <div style={S.colLinks}>
              {companyLinks.map((link) => (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  className="footer-link"
                  style={S.colLink}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Trust Badges ─────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 40,
            padding: "28px 0",
            borderTop: `1px solid ${THEME.borderLight}`,
            borderBottom: `1px solid ${THEME.borderLight}`,
          }}
        >
          {[
            { icon: "🔒", label: "Secure Checkout" },
            { icon: "🚚", label: "Free Shipping 999+" },
            { icon: "💎", label: "Certified Jewellery" },
            { icon: "🔄", label: "7-Day Returns" },
            { icon: "📞", label: "24/7 Support" },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: `${THEME.blush}12`,
                borderRadius: 8,
                border: `1px solid ${THEME.border}`,
              }}
            >
              <span style={{ fontSize: 16 }}>{badge.icon}</span>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  color: THEME.textMuted,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ───────────────────────────────────────── */}
        <div className="footer-bottom" style={S.bottom}>
          <span style={S.copy}>
            © {new Date().getFullYear()} ARKE Jewellery. All Rights Reserved.
            | Handcrafted with 💕
          </span>

          {/* Payment icons placeholder */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {["💳 Visa", "💳 Mastercard", "📲 UPI", "💵 COD"].map((pm) => (
              <span
                key={pm}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 9,
                  color: THEME.textMuted,
                  padding: "4px 10px",
                  background: `${THEME.blush}10`,
                  borderRadius: 4,
                  border: `1px solid ${THEME.borderLight}`,
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                }}
              >
                {pm}
              </span>
            ))}
          </div>
        </div>

        {/* ── Legal Links ──────────────────────────────────────── */}
        <div
          className="footer-legal"
          style={{
            marginTop: "28px",
            paddingTop: "22px",
            borderTop: `1px solid ${THEME.borderLight}`,
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {legalLinks.map((link) => (
            <Link
              key={link.to + link.label}
              to={link.to}
              style={{
                color: THEME.textMuted,
                fontSize: "10px",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.5px",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                fontWeight: 500,
                position: "relative",
                paddingBottom: 2,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = THEME.burgundy;
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = THEME.textMuted;
                e.target.style.transform = "translateY(0)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Back to Top ──────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 28,
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: `1.5px solid ${THEME.border}`,
              color: THEME.textMuted,
              padding: "10px 24px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 8,
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = THEME.rose;
              e.currentTarget.style.color = THEME.burgundy;
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 4px 16px ${THEME.rose}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = THEME.border;
              e.currentTarget.style.color = THEME.textMuted;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}