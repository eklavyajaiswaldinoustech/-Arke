import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../context/useStore";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { API_BASE } from "../services/api";

// ── Pretty · Classy · Premium · Feminine Theme ─────────────────────────
const THEME = {
  bg: "#0d0810",
  surface: "#160e1c",
  text: "#f8f2ee",
  textMuted: "#b8a5b0",
  roseGold: "#c9897a",
  roseGoldLight: "#dba99d",
  roseGoldDeep: "#a8685a",
  champagne: "#d4b896",
  blush: "#e8c4bc",
  dustyRose: "#c4909e",
  mauve: "#9b7a8e",
  plum: "#6b4a6b",
  deepPlum: "#3d2040",
  border: "#2a1f2e",
  borderLight: "rgba(201,137,122,0.15)",
  dropdownBg: "rgba(13,8,16,0.97)",
  glassLight: "rgba(201,137,122,0.06)",
  bannerBg: "#160e1c",
  bannerText: "#c9897a",
  her: "#c4909e",
  him: "#7a95a8",
};

/* ── Enhanced Global Styles with Unique Animations ─────────────────────── */
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

  * { box-sizing: border-box; }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideDownDrop {
    from { opacity: 0; transform: translateY(-10px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 12px rgba(201,137,122,0.2); }
    50% { box-shadow: 0 0 24px rgba(201,137,122,0.45); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ═══════════════════ UNIQUE ANIMATIONS ═══════════════════ */

  /* Floating Background Orbs */
  @keyframes floatOrb1 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(20px, -15px); }
    50% { transform: translate(0px, 20px); }
    75% { transform: translate(-25px, -10px); }
  }

  @keyframes floatOrb2 {
    0%, 100% { transform: translate(0px, 0px); }
    33% { transform: translate(-15px, 25px); }
    66% { transform: translate(20px, -20px); }
  }

  /* Elegant Link Underline with Wave Effect */
  @keyframes waveUnderline {
    0% { transform: scaleX(0) skewX(-20deg); }
    50% { transform: scaleX(1.1) skewX(5deg); }
    100% { transform: scaleX(1) skewX(0deg); }
  }

  /* Glow Pulse */
  @keyframes glowPulse {
    0%, 100% { 
      box-shadow: 0 0 10px rgba(201,137,122,0.3),
                  inset 0 0 15px rgba(201,137,122,0.1);
    }
    50% { 
      box-shadow: 0 0 20px rgba(201,137,122,0.5),
                  inset 0 0 25px rgba(201,137,122,0.2);
    }
  }

  /* Shimmer Text Effect */
  @keyframes shimmerText {
    0% { background-position: -1000% 0; }
    100% { background-position: 1000% 0; }
  }

  /* Icon Bounce */
  @keyframes iconBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  /* Navbar sliding scale effect */
  @keyframes navSlideScale {
    from { transform: scaleY(0); opacity: 0; transform-origin: top; }
    to { transform: scaleY(1); opacity: 1; }
  }

  /* Staggered letter animation for logo */
  @keyframes letterFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  /* Rotating glow background */
  @keyframes rotatingGlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Link hover magnetic effect */
  @keyframes magneticPull {
    0% { transform: translate(0, 0); }
    50% { transform: translate(2px, -1px); }
    100% { transform: translate(0, 0); }
  }

  /* ═══════════════════ STYLE APPLICATIONS ═══════════════════ */

  .ann-marquee-track {
    display: flex;
    animation: marquee 32s linear infinite;
    width: max-content;
  }
  .ann-marquee-track:hover { animation-play-state: paused; }
  .ann-sep { margin: 0 28px; color: rgba(201,137,122,0.3); }

  /* Navbar transition — smooth bg on scroll */
  .arke-navbar {
    transition:
      height 0.4s cubic-bezier(0.4,0,0.2,1),
      background-color 0.5s ease,
      backdrop-filter 0.5s ease,
      -webkit-backdrop-filter 0.5s ease,
      border-color 0.5s ease,
      box-shadow 0.5s ease;
    animation: navSlideScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .arke-navbar.is-transparent {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border-bottom-color: transparent !important;
    box-shadow: none !important;
  }

  .arke-navbar.is-solid {
    background: rgba(13,8,16,0.95) !important;
    backdrop-filter: blur(32px) !important;
    -webkit-backdrop-filter: blur(32px) !important;
    border-bottom-color: rgba(201,137,122,0.10) !important;
    box-shadow: 0 4px 40px rgba(0,0,0,0.5) !important;
  }

  /* Shimmer line fade with floating motion */
  .arke-shimmer-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,137,122,0.28), transparent);
    pointer-events: none;
    transition: opacity 0.5s ease;
    animation: floatOrb1 6s ease-in-out infinite;
  }

  /* Nav link with enhanced animations */
  .arke-nav-link {
    position: relative;
    text-decoration: none;
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s cubic-bezier(0.4,0,0.2,1);
    padding-bottom: 2px;
    overflow: hidden;
  }

  .arke-nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    right: 50%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #c9897a, transparent);
    transition: left 0.4s cubic-bezier(0.4,0,0.2,1),
                right 0.4s cubic-bezier(0.4,0,0.2,1);
    filter: drop-shadow(0 0 6px rgba(201,137,122,0.4));
  }

  .arke-nav-link:hover::after,
  .arke-nav-link.active::after {
    left: 0;
    right: 0;
    animation: waveUnderline 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .arke-nav-link:hover {
    animation: magneticPull 0.4s ease;
  }

  .nav-gift-her { color: #c4909e !important; }
  .nav-gift-her:hover { color: #e8c4bc !important; }
  .nav-gift-him { color: #7a95a8 !important; }
  .nav-gift-him:hover { color: #a8c0d0 !important; }

  .nav-icon-btn {
    color: rgba(248,242,238,0.65);
    display: flex;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    padding: 8px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: 50%;
  }

  .nav-icon-btn:hover {
    color: #c9897a;
    background: rgba(201,137,122,0.08);
    animation: iconBounce 0.6s ease;
  }

  .arke-nav-links {
    display: flex;
    gap: 22px;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .arke-hamburger { display: none !important; }

  @media (max-width: 1024px) {
    .arke-nav-links { display: none !important; }
    .arke-hamburger { display: flex !important; }
  }

  .account-dropdown-menu {
    animation: slideDownDrop 0.28s cubic-bezier(0.4,0,0.2,1) forwards;
    border-left: 2px solid rgba(201,137,122,0.3);
    position: relative;
  }

  .account-dropdown-menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,137,122,0.4), transparent);
    animation: shimmer 2s ease-in-out infinite;
  }

  .account-btn-circle {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg,
      rgba(201,137,122,0.14) 0%,
      rgba(196,144,158,0.08) 100%
    );
    border: 1.5px solid rgba(201,137,122,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    font-size: 15px;
    color: #c9897a;
    outline: none;
    padding: 0;
  }

  .account-btn-circle:hover {
    border-color: #c9897a;
    background: linear-gradient(135deg,
      rgba(201,137,122,0.22) 0%,
      rgba(196,144,158,0.14) 100%
    );
    box-shadow: 0 0 20px rgba(201,137,122,0.25),
                inset 0 1px 0 rgba(255,255,255,0.06);
    animation: glowPulse 1.5s ease-in-out;
  }

  .account-btn-circle.active {
    border-color: #c9897a;
    background: linear-gradient(135deg,
      rgba(201,137,122,0.26) 0%,
      rgba(196,144,158,0.18) 100%
    );
    box-shadow: 0 0 28px rgba(201,137,122,0.35);
    animation: glowPulse 1.2s ease-in-out infinite;
  }

  .account-menu-item {
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .account-menu-item::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #c9897a, #c4909e);
    transform: scaleY(0);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    transform-origin: top;
    filter: drop-shadow(0 0 8px rgba(201,137,122,0.4));
  }

  .account-menu-item:hover::before { 
    transform: scaleY(1);
    animation: floatOrb2 0.5s ease-out;
  }

  .badge-pulse {
    animation: pulseGlow 2s ease-in-out infinite;
  }

  .mobile-nav-link {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }

  /* Logo animations */
  .logo-char {
    display: inline-block;
    animation: letterFloat 3s ease-in-out infinite;
  }

  .logo-char:nth-child(2) {
    animation-delay: 0.2s;
  }
`;

/* ── Petal Divider ───────────────────────────────────────────────────── */
const PetalDivider = ({ color = "rgba(201,137,122,0.25)", width = 80 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, width }}>
    <div style={{ 
      flex: 1, 
      height: "0.5px", 
      background: color,
      animation: "shimmer 3s ease-in-out infinite"
    }} />
    <span style={{ color, fontSize: 8, opacity: 0.8 }}>✦</span>
    <div style={{ 
      flex: 1, 
      height: "0.5px", 
      background: color,
      animation: "shimmer 3s ease-in-out infinite 0.5s"
    }} />
  </div>
);

/* ── Announcement Banner ─────────────────────────────────────────────── */
function AnnouncementBanner({ onHeightChange }) {
  const [visible, setVisible] = useState(true);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/announcements`, {
          headers: { "ngrok-skip-browser-warning": "true" },
        });
        if (res.ok) {
          const data = await res.json();
          const active = (data.data || [])
            .filter((a) => a.isActive)
            .sort((a, b) => (a.order || 0) - (b.order || 0));
          if (active.length) {
            setAnnouncements(active);
            return;
          }
        }
      } catch {}
      setAnnouncements([
        {
          message: "✦ New Collection — Handcrafted Pieces Made For Her",
          bgColor: THEME.bannerBg,
          textColor: THEME.roseGold,
        },
        {
          message: "◈ Free Shipping On All Orders Above ₹999",
          bgColor: THEME.bannerBg,
          textColor: THEME.champagne,
        },
        {
          message: "◇ Hallmark Certified · Waterproof · Tarnish-Proof",
          bgColor: THEME.bannerBg,
          textColor: THEME.roseGold,
        },
        {
          message: "✦ Up To 30% Off — Summer Edit Now Live",
          bgColor: THEME.bannerBg,
          textColor: THEME.champagne,
        },
      ]);
    };
    load();
    const t = setInterval(load, 5 * 60 * 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    onHeightChange?.(visible && announcements.length ? 38 : 0);
  }, [visible, announcements]);

  if (!visible || !announcements.length) return null;

  const bannerBg = announcements[0]?.bgColor || THEME.bannerBg;
  const textColor = announcements[0]?.textColor || THEME.roseGold;

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${bannerBg} 0%, #1a0f1e 50%, ${bannerBg} 100%)`,
        height: 38,
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1001,
        overflow: "hidden",
        animation: "slideDown 0.5s ease",
        borderBottom: `1px solid rgba(201,137,122,0.12)`,
      }}
    >
      {/* Left accent */}
      <div
        style={{
          width: 38,
          height: "100%",
          flexShrink: 0,
          background: "linear-gradient(135deg, rgba(201,137,122,0.12), transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid rgba(201,137,122,0.08)",
        }}
      >
        <span style={{ fontSize: 9, color: textColor, opacity: 0.5, animation: "letterFloat 2s ease-in-out infinite" }}>✦</span>
      </div>

      {/* Scrolling text */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0, top: 0, bottom: 0,
            width: 48,
            background: `linear-gradient(to right, ${bannerBg}, transparent)`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 36, top: 0, bottom: 0,
            width: 48,
            background: `linear-gradient(to left, ${bannerBg}, transparent)`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div className="ann-marquee-track">
          {[...announcements, ...announcements].map((ann, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 10.5,
                letterSpacing: "2px",
                fontWeight: 500,
                color: ann.textColor || THEME.roseGold,
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {ann.message}
              <span className="ann-sep">◇</span>
            </span>
          ))}
        </div>
      </div>

      {/* Close */}
      <button
        onClick={() => setVisible(false)}
        style={{
          background: "rgba(201,137,122,0.06)",
          border: "none",
          borderLeft: "1px solid rgba(201,137,122,0.08)",
          color: textColor,
          cursor: "pointer",
          fontSize: 11,
          padding: "0 14px",
          height: "100%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          opacity: 0.55,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
      >
        ✕
      </button>
    </div>
  );
}

/* ── Account Dropdown ────────────────────────────────────────────────── */
function AccountDropdown({ user }) {
  const [dropOpen, setDropOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const { logout } = useStore();

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    },
    []
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    if (dropOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropOpen]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setDropOpen(false), 160);
  };

  const handleLogout = () => {
    logout();
    setDropOpen(false);
    window.location.href = "/";
  };

  const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : "U";

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`account-btn-circle ${dropOpen ? "active" : ""}`}
        title="My Account"
      >
        {userInitial}
      </button>

      {dropOpen && (
        <div
          className="account-dropdown-menu"
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            background: THEME.dropdownBg,
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: `1px solid ${THEME.border}`,
            borderRadius: "16px",
            minWidth: "290px",
            boxShadow: `
              0 32px 80px rgba(0,0,0,0.8),
              0 8px 24px rgba(0,0,0,0.5),
              inset 0 1px 0 rgba(201,137,122,0.08)
            `,
            zIndex: 1010,
            overflow: "hidden",
            pointerEvents: "auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "20px 18px",
              background: `linear-gradient(135deg,
                rgba(201,137,122,0.10) 0%,
                rgba(196,144,158,0.06) 50%,
                rgba(61,32,64,0.08) 100%
              )`,
              borderBottom: `1px solid ${THEME.border}`,
            }}
          >
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(201,137,122,0.4), transparent)",
                marginBottom: 14,
                marginTop: -6,
                marginLeft: -18,
                marginRight: -18,
                animation: "shimmer 2s ease-in-out infinite",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${THEME.roseGoldDeep} 0%, ${THEME.dustyRose} 50%, ${THEME.champagne} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 17,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  boxShadow: `0 4px 20px rgba(201,137,122,0.35),
                              inset 0 1px 0 rgba(255,255,255,0.2)`,
                  flexShrink: 0,
                  animation: "glowPulse 2s ease-in-out infinite",
                }}
              >
                {userInitial}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "2px",
                    color: THEME.roseGold,
                    textTransform: "uppercase",
                    marginBottom: 5,
                    opacity: 0.85,
                  }}
                >
                  Welcome Back
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    color: THEME.text,
                    letterSpacing: "0.5px",
                    fontStyle: "italic",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    opacity: 0.8,
                  }}
                >
                  {user?.email || "Guest"}
                </div>
              </div>
              <div
                style={{
                  background: `linear-gradient(135deg, rgba(201,137,122,0.15), rgba(196,144,158,0.10))`,
                  border: "1px solid rgba(201,137,122,0.2)",
                  borderRadius: "20px",
                  padding: "3px 8px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 7.5,
                    letterSpacing: "1.5px",
                    color: THEME.roseGold,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Member
                </span>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div style={{ padding: "8px 0" }}>
            {ACCOUNT_MENU.map((item, idx) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setDropOpen(false)}
                  className="account-menu-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 18px",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 9.5,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: isActive ? THEME.roseGold : THEME.textMuted,
                    transition: "all 0.25s",
                    background: isActive
                      ? "rgba(201,137,122,0.07)"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = THEME.roseGoldLight;
                      e.currentTarget.style.background =
                        "rgba(201,137,122,0.05)";
                      e.currentTarget.style.paddingLeft = "22px";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = THEME.textMuted;
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.paddingLeft = "18px";
                    }
                  }}
                >
                  <span style={{ fontSize: 14, minWidth: 18, opacity: 0.85 }}>
                    {item.icon}
                  </span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {isActive ? (
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: THEME.roseGold,
                        flexShrink: 0,
                        animation: "pulseGlow 1.5s ease-in-out infinite"
                      }}
                    />
                  ) : (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity={0.3}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div style={{ padding: "0 18px" }}>
            <div
              style={{
                height: "0.5px",
                background:
                  "linear-gradient(90deg, transparent, rgba(201,137,122,0.2), transparent)",
                animation: "shimmer 2.5s ease-in-out infinite"
              }}
            />
          </div>

          {/* Logout */}
          <div style={{ padding: "12px 14px 14px" }}>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                fontFamily: "'Jost', sans-serif",
                fontSize: 9,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "11px 16px",
                cursor: "pointer",
                outline: "none",
                border: `1px solid ${THEME.border}`,
                background: "transparent",
                color: THEME.textMuted,
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(196,144,158,0.08)";
                e.currentTarget.style.borderColor = "rgba(196,144,158,0.3)";
                e.currentTarget.style.color = THEME.dustyRose;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = THEME.border;
                e.currentTarget.style.color = THEME.textMuted;
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Config ──────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home",           to: "/" },
  { label: "New Collection", to: "/new-collection" },
  { label: "Best Sellers",   to: "/best-sellers" },
  { label: "All Jewellery",  to: "/products" },
  { label: "Categories",     to: "/categories" },
  { label: "Gift for Her",   to: "/gift-for-her", accent: THEME.her },
  { label: "Gift for Him",   to: "/gift-for-him", accent: THEME.him },
];

const ACCOUNT_MENU = [
  { label: "My Orders",        to: "/My-Orders",        icon: "✦" },
  { label: "Customer Care",    to: "/customer-care",    icon: "◇" },
  { label: "Account Security", to: "/account-security", icon: "◈" },
  { label: "Bank Details",     to: "/Bankdetails",      icon: "◉" },
];

/* ── Main Navbar ─────────────────────────────────────────────────────── */
export default function Navbar({ onLoginClick }) {
  const { user, logout } = useStore();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const displayCartCount = cartCount > 99 ? "99+" : cartCount;
  const displayWishCount = wishlistCount > 99 ? "99+" : wishlistCount;
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [annHeight, setAnnHeight] = useState(38);
  const location  = useLocation();
  const isHome    = location.pathname === "/";

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      {/* ── Announcement Banner ── */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1001 }}>
        <AnnouncementBanner onHeightChange={setAnnHeight} />
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`arke-navbar ${isTransparent ? "is-transparent" : "is-solid"}`}
        style={{
          position: "fixed",
          top: annHeight,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: scrolled ? 56 : 68,
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid transparent",
        }}
      >
        {/* Top shimmer line */}
        <div
          className="arke-shimmer-line"
          style={{ opacity: isTransparent ? 0 : 1 }}
        />

        {/* ── LOGO ── */}
        <Link
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 1,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            className="logo-char"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: scrolled ? 24 : 28,
              fontWeight: 400,
              letterSpacing: "6px",
              color: THEME.text,
              transition: "font-size 0.4s ease",
              fontStyle: "italic",
            }}
          >
            Ark
          </span>
          <span
            className="logo-char"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: scrolled ? 24 : 28,
              fontWeight: 400,
              letterSpacing: "6px",
              fontStyle: "italic",
              background: `linear-gradient(135deg, ${THEME.roseGold}, ${THEME.champagne}, ${THEME.dustyRose})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: "font-size 0.4s ease",
            }}
          >
            é
          </span>
        </Link>

        {/* ── NAV LINKS ── */}
        <ul className="arke-nav-links">
          {NAV_LINKS.map((l, idx) => {
            const isActive  = location.pathname === l.to;
            const isGiftHer = l.to === "/gift-for-her";
            const isGiftHim = l.to === "/gift-for-him";

            const defaultColor = isActive
              ? l.accent || THEME.roseGold
              : isGiftHer
              ? THEME.her
              : isGiftHim
              ? THEME.him
              : "rgba(248,242,238,0.55)";

            return (
              <li key={l.to} style={{
                animation: `fadeInUp 0.5s ease ${idx * 50}ms both`
              }}>
                <Link
                  to={l.to}
                  className={`arke-nav-link${isActive  ? " active"       : ""}${isGiftHer ? " nav-gift-her" : ""}${isGiftHim ? " nav-gift-him" : ""}`}
                  style={{ color: defaultColor }}
                  onMouseEnter={(e) => {
                    if (!isActive && !isGiftHer && !isGiftHim)
                      e.currentTarget.style.color = THEME.text;
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive && !isGiftHer && !isGiftHim)
                      e.currentTarget.style.color = defaultColor;
                  }}
                >
                  {isGiftHer && (
                    <span style={{ marginRight: 4, fontSize: 9, opacity: 0.8 }}>
                      ✿
                    </span>
                  )}
                  {isGiftHim && (
                    <span style={{ marginRight: 4, fontSize: 9, opacity: 0.8 }}>
                      ◈
                    </span>
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── RIGHT ICONS ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          {/* Wishlist */}
          <Link to="/wishlist" className="nav-icon-btn">
            <AiOutlineHeart size={19} />
            {wishlistCount > 0 && (
              <span
                className="badge-pulse"
                style={{
                  position: "absolute",
                  top: 2, right: 2,
                  width: 16, height: 16,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${THEME.roseGoldDeep}, ${THEME.dustyRose})`,
                  color: "#fff",
                  fontSize: 8.5,
                  fontWeight: 700,
                  fontFamily: "'Jost', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(201,137,122,0.5)",
                }}
              >
                {displayWishCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="nav-icon-btn">
            <AiOutlineShoppingCart size={19} />
            {cartCount > 0 && (
              <span
                className="badge-pulse"
                style={{
                  position: "absolute",
                  top: 2, right: 2,
                  width: 16, height: 16,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${THEME.roseGoldDeep}, ${THEME.dustyRose})`,
                  color: "#fff",
                  fontSize: 8.5,
                  fontWeight: 700,
                  fontFamily: "'Jost', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(201,137,122,0.5)",
                }}
              >
                {displayCartCount}
              </span>
            )}
          </Link>

          {/* Separator */}
          <div
            style={{
              width: "0.5px",
              height: 18,
              background: "rgba(201,137,122,0.2)",
              margin: "0 6px",
              animation: "floatOrb1 4s ease-in-out infinite"
            }}
          />

          {/* Account / Sign In */}
          {user ? (
            <AccountDropdown user={user} />
          ) : (
            <NavAuthBtn onClick={onLoginClick}>Sign In</NavAuthBtn>
          )}

          {/* Hamburger */}
          <button
            className="arke-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 0 4px 14px",
              marginLeft: 4,
              outline: "none",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 2 ? 14 : 22,
                  height: 1.5,
                  background: THEME.roseGold,
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : i === 2
                      ? "rotate(-45deg) translate(3px, -4px)"
                      : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transformOrigin: "left center",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          background: `linear-gradient(160deg, #0d0810 0%, #160e1c 40%, #1a0d18 100%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s cubic-bezier(0.77,0,0.175,1)",
          overflowY: "auto",
          padding: "60px 24px",
        }}
      >
        {/* Orbs */}
        <div
          style={{
            position: "absolute",
            width: 300, height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,137,122,0.04) 0%, transparent 70%)",
            top: "10%", right: "-10%",
            pointerEvents: "none",
            animation: "floatOrb1 8s ease-in-out infinite"
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 250, height: 250,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,144,158,0.04) 0%, transparent 70%)",
            bottom: "15%", left: "-5%",
            pointerEvents: "none",
            animation: "floatOrb2 10s ease-in-out infinite"
          }}
        />

        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: 24, right: 24,
            background: "rgba(201,137,122,0.08)",
            border: "1px solid rgba(201,137,122,0.15)",
            color: THEME.roseGold,
            width: 36, height: 36,
            borderRadius: "50%",
            fontSize: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(201,137,122,0.16)";
            e.currentTarget.style.transform = "rotate(90deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(201,137,122,0.08)";
            e.currentTarget.style.transform = "rotate(0deg)";
          }}
        >
          ✕
        </button>

        {/* Logo */}
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26,
              fontStyle: "italic",
              color: THEME.text,
              letterSpacing: "6px",
            }}
          >
            Ark
            <span
              style={{
                background: `linear-gradient(135deg, ${THEME.roseGold}, ${THEME.champagne})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              é
            </span>
          </span>
        </div>

        <PetalDivider color="rgba(201,137,122,0.2)" width={60} />

        {/* Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginTop: 16,
          }}
        >
          {NAV_LINKS.map((l, i) => {
            const isGiftHer = l.to === "/gift-for-her";
            const isGiftHim = l.to === "/gift-for-him";
            const isActive  = location.pathname === l.to;
            const color = isActive
              ? l.accent || THEME.roseGold
              : isGiftHer
              ? THEME.her
              : isGiftHim
              ? THEME.him
              : "rgba(248,242,238,0.7)";

            return (
              <Link
                key={l.to}
                to={l.to}
                className="mobile-nav-link"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 300,
                  fontStyle: "italic",
                  letterSpacing: "4px",
                  color,
                  textDecoration: "none",
                  textTransform: "capitalize",
                  padding: "10px 24px",
                  animation: menuOpen
                    ? `fadeInUp 0.5s ease ${i * 60}ms both`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = l.accent || THEME.roseGold;
                  e.currentTarget.style.letterSpacing = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.letterSpacing = "4px";
                }}
              >
                {isGiftHer && "✿ "}
                {isGiftHim && "◈ "}
                {l.label}
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: 20 }}>
          <PetalDivider color="rgba(201,137,122,0.18)" width={80} />
        </div>

        {/* CTA */}
        <div style={{ marginTop: 16 }}>
          {user ? (
            <button
              onClick={() => { logout(); setMenuOpen(false); }}
              style={{
                background: "transparent",
                border: "1px solid rgba(201,137,122,0.25)",
                color: "rgba(201,137,122,0.65)",
                padding: "12px 32px",
                fontFamily: "'Jost', sans-serif",
                fontSize: 9,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,137,122,0.5)";
                e.currentTarget.style.color = THEME.roseGold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,137,122,0.25)";
                e.currentTarget.style.color = "rgba(201,137,122,0.65)";
              }}
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => { onLoginClick(); setMenuOpen(false); }}
              style={{
                background: `linear-gradient(135deg, ${THEME.roseGoldDeep} 0%, ${THEME.dustyRose} 100%)`,
                border: "none",
                color: "#fff",
                padding: "14px 40px",
                fontFamily: "'Jost', sans-serif",
                fontSize: 10,
                letterSpacing: "3px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 600,
                borderRadius: "2px",
                boxShadow: "0 8px 32px rgba(201,137,122,0.35)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(201,137,122,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(201,137,122,0.35)";
              }}
            >
              ✦ Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/* ── Auth Button ─────────────────────────────────────────────────────── */
function NavAuthBtn({ children, onClick }) {
  const [hov, setHov] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: 9.5,
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontWeight: 600,
        padding: "9px 20px",
        cursor: "pointer",
        outline: "none",
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        background: hov
          ? `linear-gradient(135deg, ${THEME.roseGold} 0%, ${THEME.dustyRose} 100%)`
          : `linear-gradient(135deg, ${THEME.roseGoldDeep} 0%, ${THEME.dustyRose} 100%)`,
        color: "#fff",
        borderRadius: "2px",
        boxShadow: hov
          ? "0 8px 28px rgba(201,137,122,0.45)"
          : "0 3px 12px rgba(201,137,122,0.22)",
        transform: hov ? "translateY(-2px)" : "none",
      }}
    >
      <span style={{ fontSize: 8, opacity: 0.85 }}>✦</span>
      {children}
    </button>
  );
}
