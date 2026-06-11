import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../context/useStore";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { API_BASE } from "../services/api";

// ── Theme ────────────────────────────────────────────────────────────────
const T = {
  bg:            "#0d0810",
  surface:       "#160e1c",
  text:          "#f8f2ee",
  textMuted:     "#b8a5b0",
  roseGold:      "#c9897a",
  roseGoldLight: "#dba99d",
  roseGoldDeep:  "#a8685a",
  champagne:     "#d4b896",
  blush:         "#e8c4bc",
  dustyRose:     "#c4909e",
  mauve:         "#9b7a8e",
  plum:          "#6b4a6b",
  deepPlum:      "#3d2040",
  border:        "#2a1f2e",
  borderLight:   "rgba(201,137,122,0.15)",
  dropdownBg:    "rgba(13,8,16,0.97)",
  glassLight:    "rgba(201,137,122,0.06)",
  her:           "#c4909e",
  him:           "#7a95a8",
};

// ── Nav Config ────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",           to: "/" },
  { label: "New Collection", to: "/new-collection" },
  { label: "Best Sellers",   to: "/best-sellers" },
  { label: "All Jewellery",  to: "/products" },
  { label: "Categories",     to: "/categories" },
  { label: "Gift for Her",   to: "/gift-for-her", accent: "#c4909e" },
  { label: "Gift for Him",   to: "/gift-for-him", accent: "#7a95a8" },
];

const ACCOUNT_MENU = [
  { label: "My Orders",        to: "/My-Orders",        icon: "✦" },
  { label: "Customer Care",    to: "/customer-care",    icon: "◇" },
  { label: "Account Security", to: "/account-security", icon: "◈" },
  { label: "Bank Details",     to: "/Bankdetails",      icon: "◉" },
];

// ── Global Styles ─────────────────────────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
  * { box-sizing: border-box; }
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0);     opacity: 1; }
  }
  @keyframes slideDownDrop {
    from { opacity: 0; transform: translateY(-12px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)     scale(1);    }
  }
  @keyframes shimmer {
    0%   { background-position: -400% center; }
    100% { background-position:  400% center; }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 12px rgba(201,137,122,0.2); }
    50%       { box-shadow: 0 0 28px rgba(201,137,122,0.5); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes floatOrb1 {
    0%,100% { transform: translate(0,0);         }
    25%      { transform: translate(20px,-15px);  }
    50%      { transform: translate(0,20px);      }
    75%      { transform: translate(-25px,-10px); }
  }
  @keyframes floatOrb2 {
    0%,100% { transform: translate(0,0);        }
    33%      { transform: translate(-15px,25px); }
    66%      { transform: translate(20px,-20px); }
  }
  @keyframes waveUnderline {
    0%   { transform: scaleX(0)   skewX(-20deg); }
    55%  { transform: scaleX(1.1) skewX(5deg);   }
    100% { transform: scaleX(1)   skewX(0deg);   }
  }
  @keyframes glowPulse {
    0%,100% {
      box-shadow: 0 0 10px rgba(201,137,122,0.3),
                  inset 0 0 15px rgba(201,137,122,0.1);
    }
    50% {
      box-shadow: 0 0 22px rgba(201,137,122,0.55),
                  inset 0 0 28px rgba(201,137,122,0.22);
    }
  }
  @keyframes letterFloat {
    0%,100% { transform: translateY(0);   }
    50%      { transform: translateY(-3px); }
  }
  @keyframes iconBounce {
    0%,100% { transform: translateY(0);   }
    40%      { transform: translateY(-5px); }
    70%      { transform: translateY(-2px); }
  }
  @keyframes searchResultsSlide {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  /* Navbar */
  .arke-navbar {
    transition:
      height 0.4s cubic-bezier(0.4,0,0.2,1),
      background-color 0.5s ease,
      backdrop-filter 0.5s ease,
      -webkit-backdrop-filter 0.5s ease,
      border-color 0.5s ease,
      box-shadow 0.5s ease;
  }
  .arke-navbar.is-transparent {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border-bottom-color: transparent !important;
    box-shadow: none !important;
  }
  .arke-navbar.is-solid {
    background: rgba(13,8,16,0.96) !important;
    backdrop-filter: blur(40px) saturate(160%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(160%) !important;
    border-bottom-color: rgba(201,137,122,0.10) !important;
    box-shadow: 0 4px 48px rgba(0,0,0,0.55), 0 1px 0 rgba(201,137,122,0.07) !important;
  }
  .arke-shimmer-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(201,137,122,0.35) 50%, transparent 100%);
    background-size: 200% 100%;
    pointer-events: none;
    animation: shimmer 4s ease-in-out infinite;
    transition: opacity 0.5s ease;
  }
  .arke-nav-link {
    position: relative;
    text-decoration: none;
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s cubic-bezier(0.4,0,0.2,1), letter-spacing 0.3s ease;
    padding-bottom: 2px;
  }
  .arke-nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%; right: 50%;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, #c9897a 40%, #d4b896 60%, transparent);
    transition: left 0.4s cubic-bezier(0.34,1.56,0.64,1),
                right 0.4s cubic-bezier(0.34,1.56,0.64,1);
    filter: drop-shadow(0 0 6px rgba(201,137,122,0.5));
  }
  .arke-nav-link:hover::after,
  .arke-nav-link.active::after {
    left: 0; right: 0;
    animation: waveUnderline 0.55s cubic-bezier(0.34,1.56,0.64,1);
  }
  .arke-nav-link:hover { letter-spacing: 2.6px; }
  .nav-gift-her { color: #c4909e !important; }
  .nav-gift-her:hover { color: #e8c4bc !important; }
  .nav-gift-him { color: #7a95a8 !important; }
  .nav-gift-him:hover { color: #a8c0d0 !important; }
  .arke-nav-links {
    display: flex; gap: 22px;
    list-style: none; align-items: center;
    margin: 0; padding: 0;
  }
  .arke-hamburger { display: none !important; }
  @media (max-width: 1100px) {
    .arke-nav-links       { display: none !important; }
    .arke-hamburger       { display: flex !important; }
    .arke-desktop-search  { display: none !important; }
  }
  .nav-icon-btn {
    color: rgba(248,242,238,0.6);
    display: flex; align-items: center;
    transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
    padding: 8px; position: relative;
    cursor: pointer; text-decoration: none;
    border-radius: 50%;
    border: none; background: transparent;
  }
  .nav-icon-btn:hover {
    color: #c9897a;
    background: rgba(201,137,122,0.08);
    animation: iconBounce 0.5s ease;
    box-shadow: 0 0 18px rgba(201,137,122,0.15);
  }
  .account-btn-circle {
    position: relative;
    width: 36px; height: 36px; border-radius: 50%;
    background: linear-gradient(135deg, rgba(201,137,122,0.14) 0%, rgba(196,144,158,0.08) 100%);
    border: 1.5px solid rgba(201,137,122,0.3);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600; font-size: 15px; color: #c9897a;
    outline: none; padding: 0;
  }
  .account-btn-circle:hover {
    border-color: #c9897a;
    background: linear-gradient(135deg, rgba(201,137,122,0.24) 0%, rgba(196,144,158,0.16) 100%);
    box-shadow: 0 0 24px rgba(201,137,122,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
  }
  .account-btn-circle.active {
    border-color: #c9897a;
    background: linear-gradient(135deg, rgba(201,137,122,0.28) 0%, rgba(196,144,158,0.20) 100%);
    box-shadow: 0 0 32px rgba(201,137,122,0.4);
    animation: glowPulse 1.4s ease-in-out infinite;
  }
  .account-dropdown-menu {
    animation: slideDownDrop 0.28s cubic-bezier(0.4,0,0.2,1) forwards;
  }
  .account-menu-item {
    position: relative; overflow: hidden;
    transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }
  .account-menu-item::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, #c9897a, #c4909e);
    transform: scaleY(0);
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    transform-origin: top;
    filter: drop-shadow(0 0 6px rgba(201,137,122,0.4));
  }
  .account-menu-item:hover::before { transform: scaleY(1); }
  .badge-pulse { animation: pulseGlow 2.2s ease-in-out infinite; }
  .logo-char { display: inline-block; }
  .logo-char:nth-child(1) { animation: letterFloat 3.2s ease-in-out infinite; }
  .logo-char:nth-child(2) { animation: letterFloat 3.2s ease-in-out infinite 0.18s; }
  .mobile-nav-link {
    transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1) !important;
  }
  /* ══ SEARCH BAR ══════════════════════════════════════════════════════ */
  .arke-search-wrapper {
    position: relative;
    display: flex; align-items: center;
  }
  .arke-search-pill {
    display: flex; align-items: center;
    background: rgba(201,137,122,0.06);
    border: 1px solid rgba(201,137,122,0.18);
    border-radius: 20px;
    overflow: hidden;
    transition: width 0.45s cubic-bezier(0.34,1.56,0.64,1),
                border-color 0.3s ease,
                background 0.3s ease,
                box-shadow 0.3s ease;
    width: 36px;
    height: 36px;
  }
  .arke-search-pill.open {
    width: 240px;
    border-color: rgba(201,137,122,0.45);
    background: rgba(13,8,16,0.88);
    box-shadow: 0 0 24px rgba(201,137,122,0.15), inset 0 1px 0 rgba(201,137,122,0.06);
  }
  .arke-search-pill.open .arke-search-icon-btn { color: #c9897a; }
  .arke-search-icon-btn {
    width: 36px; min-width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    background: none; border: none; cursor: pointer;
    color: rgba(248,242,238,0.55);
    transition: color 0.3s ease; flex-shrink: 0;
    padding: 0;
  }
  .arke-search-icon-btn:hover { color: #c9897a; }
  .arke-search-input {
    flex: 1; border: none; outline: none;
    background: transparent;
    font-family: 'Jost', sans-serif;
    font-size: 11px; letter-spacing: 1.2px;
    color: #f8f2ee;
    padding: 0 10px 0 0;
    width: 0; opacity: 0;
    transition: opacity 0.3s ease 0.1s;
    pointer-events: none;
  }
  .arke-search-pill.open .arke-search-input {
    width: auto; opacity: 1; pointer-events: auto;
  }
  .arke-search-input::placeholder { color: rgba(184,165,176,0.5); font-size: 10px; }
  .arke-search-clear {
    width: 28px; height: 28px; min-width: 28px;
    background: rgba(201,137,122,0.1);
    border: none; border-radius: 50%; cursor: pointer;
    color: rgba(201,137,122,0.7); font-size: 11px;
    display: flex; align-items: center; justify-content: center;
    margin-right: 4px; flex-shrink: 0;
    transition: all 0.2s ease;
    opacity: 0; pointer-events: none;
  }
  .arke-search-pill.open .arke-search-clear.visible {
    opacity: 1; pointer-events: auto;
  }
  .arke-search-clear:hover {
    background: rgba(201,137,122,0.2); color: #c9897a;
  }
  .arke-search-results {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 320px;
    background: rgba(13,8,16,0.97);
    border: 1px solid rgba(201,137,122,0.18);
    border-radius: 14px;
    overflow: hidden;
    box-shadow:
      0 24px 64px rgba(0,0,0,0.8),
      0 4px 16px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(201,137,122,0.07);
    animation: searchResultsSlide 0.22s cubic-bezier(0.4,0,0.2,1) forwards;
    z-index: 2000;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }
  .arke-search-results-header {
    padding: 12px 16px 8px;
    font-family: 'Jost', sans-serif;
    font-size: 8.5px; letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(201,137,122,0.5);
    border-bottom: 1px solid rgba(201,137,122,0.07);
    display: flex; align-items: center; justify-content: space-between;
  }
  .arke-search-item {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 16px;
    cursor: pointer; text-decoration: none;
    transition: background 0.2s ease;
    border-bottom: 1px solid rgba(201,137,122,0.04);
    position: relative; overflow: hidden;
  }
  .arke-search-item::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, #c9897a, #c4909e);
    transform: scaleY(0);
    transition: transform 0.25s ease;
    transform-origin: top;
  }
  .arke-search-item:hover::before { transform: scaleY(1); }
  .arke-search-item:hover { background: rgba(201,137,122,0.05); }
  .arke-search-item:last-child { border-bottom: none; }
  .arke-search-item-img {
    width: 40px; height: 40px; border-radius: 8px;
    object-fit: cover; flex-shrink: 0;
    border: 1px solid rgba(201,137,122,0.12);
    background: rgba(201,137,122,0.06);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .arke-search-item-img img { width: 100%; height: 100%; object-fit: cover; }
  .arke-search-item-info { flex: 1; min-width: 0; }
  .arke-search-item-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px; font-style: italic;
    color: #f8f2ee; letter-spacing: 0.4px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    margin-bottom: 2px;
  }
  .arke-search-item-name mark {
    background: none; color: #c9897a; font-style: italic;
  }
  .arke-search-item-meta {
    font-family: 'Jost', sans-serif;
    font-size: 9px; letter-spacing: 1.2px;
    color: rgba(184,165,176,0.55); text-transform: uppercase;
  }
  .arke-search-item-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px; color: #c9897a;
    font-style: italic; flex-shrink: 0;
  }
  .arke-search-empty {
    padding: 28px 16px;
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px; font-style: italic;
    color: rgba(184,165,176,0.45);
  }
  .arke-search-loading {
    padding: 20px 16px;
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .arke-search-loading-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #c9897a;
    animation: iconBounce 1.2s ease-in-out infinite;
  }
  .arke-search-loading-dot:nth-child(2) { animation-delay: 0.15s; }
  .arke-search-loading-dot:nth-child(3) { animation-delay: 0.3s;  }
  .arke-search-view-all {
    padding: 11px 16px;
    border-top: 1px solid rgba(201,137,122,0.08);
    display: flex; align-items: center; justify-content: center; gap: 6px;
    cursor: pointer; text-decoration: none;
    font-family: 'Jost', sans-serif;
    font-size: 8.5px; letter-spacing: 2px; text-transform: uppercase;
    color: rgba(201,137,122,0.65);
    transition: all 0.25s ease;
  }
  .arke-search-view-all:hover { color: #c9897a; background: rgba(201,137,122,0.04); }
  .ann-marquee-track {
    display: flex;
    animation: marquee 34s linear infinite;
    width: max-content;
  }
  .ann-marquee-track:hover { animation-play-state: paused; }
  .ann-sep { margin: 0 28px; color: rgba(201,137,122,0.28); }
`;

// ── Petal Divider ─────────────────────────────────────────────────────────
const PetalDivider = ({ color = "rgba(201,137,122,0.25)", width = 80 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, width }}>
    <div style={{ flex: 1, height: "0.5px", background: color }} />
    <span style={{ color, fontSize: 8, opacity: 0.8 }}>✦</span>
    <div style={{ flex: 1, height: "0.5px", background: color }} />
  </div>
);

// ── Search Bar (Desktop) ──────────────────────────────────────────────────
function SearchBar() {
  const [open,    setOpen]    = useState(false);
  const [query,   setQuery]   = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const wrapRef  = useRef(null);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  const doSearch = useCallback(async (q) => {
    if (!q.trim()) { setResults([]); setLoading(false); return; }
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/get-all-product?search=${encodeURIComponent(q)}&limit=6`,
        { headers: { "ngrok-skip-browser-warning": "true" } }
      );
      if (res.ok) {
        const data = await res.json();
        setResults(data.data?.products || data.data || data.products || []);
      } else {
        setResults([]);
      }
    } catch {
      setResults([]);
    }
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const v = e.target.value;
    setQuery(v);
    clearTimeout(timerRef.current);
    if (!v.trim()) { setResults([]); setLoading(false); return; }
    setLoading(true);
    timerRef.current = setTimeout(() => doSearch(v), 320);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setOpen(false); setQuery(""); setResults([]);
    }
    if (e.key === "Escape") { setOpen(false); setQuery(""); setResults([]); }
  };

  const handleClear = () => {
    setQuery(""); setResults([]);
    inputRef.current?.focus();
  };

  const highlightMatch = (name, q) => {
    if (!q.trim()) return name;
    const idx = name.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return name;
    return (
      <>
        {name.slice(0, idx)}
        <mark>{name.slice(idx, idx + q.length)}</mark>
        {name.slice(idx + q.length)}
      </>
    );
  };

  const showDropdown =
    open && (loading || results.length > 0 || (query.trim().length > 1 && !loading));

  return (
    <div ref={wrapRef} className="arke-search-wrapper arke-desktop-search">
      <div className={`arke-search-pill ${open ? "open" : ""}`}>
        <button
          className="arke-search-icon-btn"
          onClick={() => setOpen((o) => !o)}
          title="Search"
          aria-label="Toggle search"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <input
          ref={inputRef}
          className="arke-search-input"
          placeholder="Search jewellery..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
        />
        <button
          className={`arke-search-clear ${query ? "visible" : ""}`}
          onClick={handleClear}
          tabIndex={-1}
          aria-label="Clear search"
        >
          ✕
        </button>
      </div>

      {showDropdown && (
        <div className="arke-search-results">
          <div className="arke-search-results-header">
            <span>
              {loading
                ? "Searching..."
                : `${results.length} result${results.length !== 1 ? "s" : ""}`}
            </span>
            {!loading && results.length > 0 && (
              <span style={{ color: "rgba(201,137,122,0.4)" }}>Press ↵ to see all</span>
            )}
          </div>

          {loading && (
            <div className="arke-search-loading">
              <div className="arke-search-loading-dot" />
              <div className="arke-search-loading-dot" />
              <div className="arke-search-loading-dot" />
            </div>
          )}

          {!loading && results.length > 0 && (
            <>
              {results.map((p) => (
                <Link
                  key={p._id || p.id}
                  to={`/products/${p._id || p.id}`}
                  className="arke-search-item"
                  onClick={() => { setOpen(false); setQuery(""); setResults([]); }}
                >
                  <div className="arke-search-item-img">
                    {p.images?.[0] || p.image ? (
                      <img src={p.images?.[0] || p.image} alt={p.name} />
                    ) : (
                      <span style={{ fontSize: 16, opacity: 0.3 }}>◈</span>
                    )}
                  </div>
                  <div className="arke-search-item-info">
                    <div className="arke-search-item-name">
                      {highlightMatch(p.name || "Untitled", query)}
                    </div>
                    <div className="arke-search-item-meta">
                      {p.category?.name || p.category || p.type || "Jewellery"}
                    </div>
                  </div>
                  <div className="arke-search-item-price">
                    {p.price != null ? `₹${Number(p.price).toLocaleString("en-IN")}` : ""}
                  </div>
                </Link>
              ))}
              <Link
                to={`/products?search=${encodeURIComponent(query)}`}
                className="arke-search-view-all"
                onClick={() => { setOpen(false); setQuery(""); setResults([]); }}
              >
                <span>✦</span>
                <span>View all results for "{query}"</span>
              </Link>
            </>
          )}

          {!loading && results.length === 0 && query.trim().length > 1 && (
            <div className="arke-search-empty">
              No pieces found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Mobile Search ─────────────────────────────────────────────────────────
function MobileSearch({ onClose }) {
  const [query,   setQuery]   = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const doSearch = useCallback(async (q) => {
    if (!q.trim()) { setResults([]); setLoading(false); return; }
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/get-all-product?search=${encodeURIComponent(q)}&limit=5`,
        { headers: { "ngrok-skip-browser-warning": "true" } }
      );
      if (res.ok) {
        const data = await res.json();
        setResults(data.data?.products || data.data || data.products || []);
      } else {
        setResults([]);
      }
    } catch {
      setResults([]);
    }
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const v = e.target.value;
    setQuery(v);
    clearTimeout(timerRef.current);
    if (!v.trim()) { setResults([]); setLoading(false); return; }
    setLoading(true);
    timerRef.current = setTimeout(() => doSearch(v), 320);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{
        display: "flex", alignItems: "center",
        background: "rgba(201,137,122,0.06)",
        border: "1px solid rgba(201,137,122,0.2)",
        borderRadius: "10px", overflow: "hidden",
        boxShadow: "0 0 24px rgba(201,137,122,0.08)",
      }}>
        <div style={{
          width: 44, display: "flex", alignItems: "center",
          justifyContent: "center", flexShrink: 0,
          color: "rgba(201,137,122,0.5)",
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search jewellery..."
          style={{
            flex: 1, border: "none", outline: "none",
            background: "transparent",
            fontFamily: "'Jost', sans-serif",
            fontSize: 12, letterSpacing: "1px",
            color: "#f8f2ee", padding: "12px 12px 12px 0",
          }}
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); }}
            style={{
              width: 36, height: 36, background: "none", border: "none",
              color: "rgba(201,137,122,0.5)", cursor: "pointer", fontSize: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >✕</button>
        )}
      </div>

      {(loading || results.length > 0) && (
        <div style={{
          marginTop: 8,
          background: "rgba(13,8,16,0.95)",
          border: "1px solid rgba(201,137,122,0.14)",
          borderRadius: "10px", overflow: "hidden",
          boxShadow: "0 16px 48px rgba(0,0,0,0.7)",
          animation: "searchResultsSlide 0.2s ease",
        }}>
          {loading && (
            <div style={{ padding: "16px", display: "flex", justifyContent: "center", gap: 8 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: T.roseGold,
                  animation: `iconBounce 1.2s ease-in-out ${i * 0.15}s infinite`,
                }} />
              ))}
            </div>
          )}

          {!loading && results.map((p) => (
            <Link
              key={p._id || p.id}
              to={`/products/${p._id || p.id}`}
              onClick={onClose}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "11px 14px", textDecoration: "none",
                borderBottom: "1px solid rgba(201,137,122,0.05)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,137,122,0.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 7, flexShrink: 0,
                background: "rgba(201,137,122,0.08)",
                border: "1px solid rgba(201,137,122,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
              }}>
                {p.images?.[0] || p.image
                  ? <img src={p.images?.[0] || p.image} alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <span style={{ fontSize: 13, opacity: 0.3 }}>◈</span>
                }
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14, fontStyle: "italic",
                  color: "#f8f2ee",
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>
                  {p.name}
                </div>
                <div style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 9,
                  letterSpacing: "1px", color: "rgba(184,165,176,0.5)",
                  textTransform: "uppercase", marginTop: 2,
                }}>
                  {p.category?.name || p.category || "Jewellery"}
                </div>
              </div>
              {p.price != null && (
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13, color: T.roseGold,
                  fontStyle: "italic", flexShrink: 0,
                }}>
                  ₹{Number(p.price).toLocaleString("en-IN")}
                </div>
              )}
            </Link>
          ))}

          {!loading && results.length > 0 && (
            <div
              onClick={() => { navigate(`/products?search=${encodeURIComponent(query)}`); onClose(); }}
              style={{
                padding: "10px 14px",
                borderTop: "1px solid rgba(201,137,122,0.07)",
                display: "flex", justifyContent: "center", cursor: "pointer",
              }}
            >
              <span style={{
                fontFamily: "'Jost', sans-serif", fontSize: 8.5,
                letterSpacing: "2px", textTransform: "uppercase",
                color: "rgba(201,137,122,0.55)",
              }}>
                View all results ✦
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Announcement Banner ───────────────────────────────────────────────────
function AnnouncementBanner({ onHeightChange }) {
  const [visible,       setVisible]       = useState(true);
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
          if (active.length) { setAnnouncements(active); return; }
        }
      } catch {}
      setAnnouncements([
        { message: "✦ New Collection — Handcrafted Pieces Made For Her",  bgColor: T.surface, textColor: T.roseGold  },
        { message: "◈ Free Shipping On All Orders Above ₹999",            bgColor: T.surface, textColor: T.champagne },
        { message: "◇ Hallmark Certified · Waterproof · Tarnish-Proof",   bgColor: T.surface, textColor: T.roseGold  },
        { message: "✦ Up To 30% Off — Summer Edit Now Live",              bgColor: T.surface, textColor: T.champagne },
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
  const bg   = announcements[0]?.bgColor  || T.surface;
  const text = announcements[0]?.textColor || T.roseGold;

  return (
    <div style={{
      background: `linear-gradient(135deg, ${bg} 0%, #1a0f1e 50%, ${bg} 100%)`,
      height: 38, display: "flex", alignItems: "center",
      position: "relative", zIndex: 1001, overflow: "hidden",
      animation: "slideDown 0.5s ease",
      borderBottom: "1px solid rgba(201,137,122,0.10)",
    }}>
      <div style={{
        width: 38, height: "100%", flexShrink: 0,
        background: "linear-gradient(135deg, rgba(201,137,122,0.10), transparent)",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRight: "1px solid rgba(201,137,122,0.07)",
      }}>
        <span style={{ fontSize: 9, color: text, opacity: 0.45, animation: "letterFloat 2.2s ease-in-out infinite" }}>✦</span>
      </div>

      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 48,
          background: `linear-gradient(to right, ${bg}, transparent)`,
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 36, top: 0, bottom: 0, width: 48,
          background: `linear-gradient(to left, ${bg}, transparent)`,
          zIndex: 2, pointerEvents: "none",
        }} />
        <div className="ann-marquee-track">
          {[...announcements, ...announcements].map((ann, i) => (
            <span key={i} style={{
              fontFamily: "'Jost', sans-serif", fontSize: 10.5,
              letterSpacing: "2px", fontWeight: 500,
              color: ann.textColor || T.roseGold,
              whiteSpace: "nowrap", display: "inline-flex", alignItems: "center",
            }}>
              {ann.message}
              <span className="ann-sep">◇</span>
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => setVisible(false)}
        style={{
          background: "rgba(201,137,122,0.05)", border: "none",
          borderLeft: "1px solid rgba(201,137,122,0.07)", color: text,
          cursor: "pointer", fontSize: 11, padding: "0 14px",
          height: "100%", flexShrink: 0, display: "flex",
          alignItems: "center", opacity: 0.5, transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
      >✕</button>
    </div>
  );
}

// ── Account Dropdown ──────────────────────────────────────────────────────
function AccountDropdown({ user }) {
  const [dropOpen,     setDropOpen]     = useState(false);
  const dropdownRef   = useRef(null);
  const closeTimerRef = useRef(null);
  const location      = useLocation();
  const { logout }    = useStore();

  useEffect(() => () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current); }, []);

  useEffect(() => {
    if (!dropOpen) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropOpen]);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
    setDropOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => setDropOpen(false), 160);
  };

  const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : "U";

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className={`account-btn-circle ${dropOpen ? "active" : ""}`} title="My Account">
        {userInitial}
      </button>

      {dropOpen && (
        <div className="account-dropdown-menu" style={{
          position: "absolute", top: "calc(100% + 10px)", right: 0,
          background: T.dropdownBg,
          backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)",
          border: `1px solid ${T.border}`, borderRadius: "16px",
          minWidth: "290px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,137,122,0.07)",
          zIndex: 1010, overflow: "hidden",
        }}>
          <div style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(201,137,122,0.35), transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2.5s ease-in-out infinite",
          }} />

          <div style={{
            padding: "18px 18px 14px",
            background: "linear-gradient(135deg, rgba(201,137,122,0.09) 0%, rgba(196,144,158,0.05) 100%)",
            borderBottom: `1px solid ${T.border}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `linear-gradient(135deg, ${T.roseGoldDeep} 0%, ${T.dustyRose} 50%, ${T.champagne} 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 17,
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
                boxShadow: "0 4px 20px rgba(201,137,122,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                flexShrink: 0, animation: "glowPulse 2s ease-in-out infinite",
              }}>{userInitial}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 8.5, fontWeight: 600,
                  letterSpacing: "2px", color: T.roseGold, textTransform: "uppercase",
                  marginBottom: 4, opacity: 0.8,
                }}>Welcome Back</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: T.text,
                  fontStyle: "italic", overflow: "hidden", textOverflow: "ellipsis",
                  whiteSpace: "nowrap", opacity: 0.75,
                }}>{user?.email || "Guest"}</div>
              </div>
              <div style={{
                background: "rgba(201,137,122,0.12)", border: "1px solid rgba(201,137,122,0.2)",
                borderRadius: "20px", padding: "3px 10px", flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 7.5,
                  letterSpacing: "1.5px", color: T.roseGold,
                  textTransform: "uppercase", fontWeight: 600,
                }}>Member</span>
              </div>
            </div>
          </div>

          <div style={{ padding: "6px 0" }}>
            {ACCOUNT_MENU.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link key={item.to} to={item.to}
                  onClick={() => setDropOpen(false)}
                  className="account-menu-item"
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "12px 18px",
                    fontFamily: "'Jost', sans-serif", fontSize: 9.5,
                    letterSpacing: "1.2px", textTransform: "uppercase",
                    textDecoration: "none",
                    color: isActive ? T.roseGold : T.textMuted,
                    background: isActive ? "rgba(201,137,122,0.07)" : "transparent",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = T.roseGoldLight;
                      e.currentTarget.style.background = "rgba(201,137,122,0.05)";
                      e.currentTarget.style.paddingLeft = "22px";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = T.textMuted;
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.paddingLeft = "18px";
                    }
                  }}
                >
                  <span style={{ fontSize: 13, minWidth: 18, opacity: 0.8 }}>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {isActive
                    ? <span style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: T.roseGold, flexShrink: 0,
                        animation: "pulseGlow 1.5s ease-in-out infinite",
                      }} />
                    : <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5" opacity={0.3}>
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                  }
                </Link>
              );
            })}
          </div>

          <div style={{
            margin: "0 18px", height: "0.5px",
            background: "linear-gradient(90deg, transparent, rgba(201,137,122,0.18), transparent)",
          }} />

          <div style={{ padding: "12px 14px 14px" }}>
            <button
              onClick={() => { logout(); setDropOpen(false); window.location.href = "/"; }}
              style={{
                width: "100%", fontFamily: "'Jost', sans-serif",
                fontSize: 9, letterSpacing: "2px", textTransform: "uppercase",
                fontWeight: 600, padding: "11px 16px", cursor: "pointer",
                outline: "none", border: `1px solid ${T.border}`,
                background: "transparent", color: T.textMuted,
                transition: "all 0.3s ease", borderRadius: "8px",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(196,144,158,0.08)";
                e.currentTarget.style.borderColor = "rgba(196,144,158,0.3)";
                e.currentTarget.style.color = T.dustyRose;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.color = T.textMuted;
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8">
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

// ── Auth Button ───────────────────────────────────────────────────────────
function NavAuthBtn({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'Jost', sans-serif", fontSize: 9.5,
        letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600,
        padding: "9px 20px", cursor: "pointer", outline: "none", border: "none",
        display: "inline-flex", alignItems: "center", gap: 6,
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        background: hov
          ? `linear-gradient(135deg, ${T.roseGold} 0%, ${T.dustyRose} 100%)`
          : `linear-gradient(135deg, ${T.roseGoldDeep} 0%, ${T.dustyRose} 100%)`,
        color: "#fff", borderRadius: "2px",
        boxShadow: hov ? "0 8px 28px rgba(201,137,122,0.45)" : "0 3px 12px rgba(201,137,122,0.22)",
        transform: hov ? "translateY(-2px)" : "none",
      }}
    >
      <span style={{ fontSize: 8, opacity: 0.85 }}>✦</span>
      {children}
    </button>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────
export default function Navbar({ onLoginClick }) {
  const { user, logout }  = useStore();
  const { cartCount }     = useCart();
  const { wishlistCount } = useWishlist();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [annHeight, setAnnHeight] = useState(38);
  const location = useLocation();
  const isHome   = location.pathname === "/";

  const displayCartCount = cartCount    > 99 ? "99+" : cartCount;
  const displayWishCount = wishlistCount > 99 ? "99+" : wishlistCount;

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 50);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [location.pathname]);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      {/* Announcement Banner */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1001 }}>
        <AnnouncementBanner onHeightChange={setAnnHeight} />
      </div>

      {/* Main Navbar */}
      <nav
        className={`arke-navbar ${isTransparent ? "is-transparent" : "is-solid"}`}
        style={{
          position: "fixed", top: annHeight, left: 0, right: 0, zIndex: 1000,
          height: scrolled ? 56 : 68,
          padding: "0 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: "1px solid transparent",
        }}
      >
        <div className="arke-shimmer-line" style={{ opacity: isTransparent ? 0 : 1 }} />

        {/* Logo */}
        <Link to="/" style={{
          display: "flex", alignItems: "baseline", gap: 1,
          textDecoration: "none", flexShrink: 0,
        }}>
          <span className="logo-char" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: scrolled ? 24 : 28, fontWeight: 400,
            letterSpacing: "6px", color: T.text,
            transition: "font-size 0.4s ease", fontStyle: "italic",
          }}>Ark</span>
          <span className="logo-char" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: scrolled ? 24 : 28, fontWeight: 400,
            letterSpacing: "6px", fontStyle: "italic",
            background: `linear-gradient(135deg, ${T.roseGold}, ${T.champagne}, ${T.dustyRose})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            transition: "font-size 0.4s ease",
          }}>é</span>
        </Link>

        {/* Nav Links */}
        <ul className="arke-nav-links">
          {NAV_LINKS.map((l, idx) => {
            const isActive  = location.pathname === l.to;
            const isGiftHer = l.to === "/gift-for-her";
            const isGiftHim = l.to === "/gift-for-him";
            const defaultColor = isActive
              ? l.accent || T.roseGold
              : isGiftHer ? T.her
              : isGiftHim ? T.him
              : "rgba(248,242,238,0.55)";
            return (
              <li key={l.to} style={{ animation: `fadeInUp 0.5s ease ${idx * 45}ms both` }}>
                <Link
                  to={l.to}
                  className={`arke-nav-link${isActive ? " active" : ""}${isGiftHer ? " nav-gift-her" : ""}${isGiftHim ? " nav-gift-him" : ""}`}
                  style={{ color: defaultColor }}
                  onMouseEnter={(e) => { if (!isActive && !isGiftHer && !isGiftHim) e.currentTarget.style.color = T.text; }}
                  onMouseLeave={(e) => { if (!isActive && !isGiftHer && !isGiftHim) e.currentTarget.style.color = defaultColor; }}
                >
                  {isGiftHer && <span style={{ marginRight: 4, fontSize: 9, opacity: 0.8 }}>✿</span>}
                  {isGiftHim && <span style={{ marginRight: 4, fontSize: 9, opacity: 0.8 }}>◈</span>}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}>
          <SearchBar />

          <div style={{ width: "0.5px", height: 18, background: "rgba(201,137,122,0.18)", margin: "0 6px" }} />

          {/* Wishlist */}
          <Link to="/wishlist" className="nav-icon-btn">
            <AiOutlineHeart size={19} />
            {wishlistCount > 0 && (
              <span className="badge-pulse" style={{
                position: "absolute", top: 2, right: 2,
                width: 16, height: 16, borderRadius: "50%",
                background: `linear-gradient(135deg, ${T.roseGoldDeep}, ${T.dustyRose})`,
                color: "#fff", fontSize: 8.5, fontWeight: 700,
                fontFamily: "'Jost', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(201,137,122,0.5)",
              }}>{displayWishCount}</span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="nav-icon-btn">
            <AiOutlineShoppingCart size={19} />
            {cartCount > 0 && (
              <span className="badge-pulse" style={{
                position: "absolute", top: 2, right: 2,
                width: 16, height: 16, borderRadius: "50%",
                background: `linear-gradient(135deg, ${T.roseGoldDeep}, ${T.dustyRose})`,
                color: "#fff", fontSize: 8.5, fontWeight: 700,
                fontFamily: "'Jost', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(201,137,122,0.5)",
              }}>{displayCartCount}</span>
            )}
          </Link>

          <div style={{ width: "0.5px", height: 18, background: "rgba(201,137,122,0.18)", margin: "0 6px" }} />

          {user
            ? <AccountDropdown user={user} />
            : <NavAuthBtn onClick={onLoginClick}>Sign In</NavAuthBtn>
          }

          {/* Hamburger */}
          <button
            className="arke-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              flexDirection: "column", gap: 5, background: "none",
              border: "none", cursor: "pointer",
              padding: "4px 0 4px 14px", marginLeft: 4, outline: "none",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block",
                width: i === 2 ? 14 : 22, height: 1.5,
                background: T.roseGold,
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : i === 2 ? "rotate(-45deg) translate(3px, -4px)"
                  : "none"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transformOrigin: "left center",
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 998,
        background: "linear-gradient(160deg, #0d0810 0%, #160e1c 40%, #1a0d18 100%)",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 8,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.5s cubic-bezier(0.77,0,0.175,1)",
        overflowY: "auto", padding: "60px 24px",
      }}>
        <div style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,137,122,0.04) 0%, transparent 70%)",
          top: "10%", right: "-10%", pointerEvents: "none",
          animation: "floatOrb1 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: 250, height: 250, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,144,158,0.04) 0%, transparent 70%)",
          bottom: "15%", left: "-5%", pointerEvents: "none",
          animation: "floatOrb2 10s ease-in-out infinite",
        }} />

        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute", top: 24, right: 24,
            background: "rgba(201,137,122,0.08)", border: "1px solid rgba(201,137,122,0.15)",
            color: T.roseGold, width: 36, height: 36, borderRadius: "50%",
            fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,137,122,0.16)"; e.currentTarget.style.transform = "rotate(90deg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,137,122,0.08)"; e.currentTarget.style.transform = "rotate(0deg)"; }}
        >✕</button>

        {/* Mobile Search */}
        <div style={{ width: "100%", maxWidth: 320, marginBottom: 8 }}>
          <MobileSearch onClose={() => setMenuOpen(false)} />
        </div>

        {/* Logo */}
        <div style={{ marginBottom: 16 }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
            fontStyle: "italic", color: T.text, letterSpacing: "6px",
          }}>
            Ark
            <span style={{
              background: `linear-gradient(135deg, ${T.roseGold}, ${T.champagne})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>é</span>
          </span>
        </div>

        <PetalDivider color="rgba(201,137,122,0.2)" width={60} />

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginTop: 12 }}>
          {NAV_LINKS.map((l, i) => {
            const isGiftHer = l.to === "/gift-for-her";
            const isGiftHim = l.to === "/gift-for-him";
            const isActive  = location.pathname === l.to;
            const color = isActive
              ? l.accent || T.roseGold
              : isGiftHer ? T.her
              : isGiftHim ? T.him
              : "rgba(248,242,238,0.7)";
            return (
              <Link key={l.to} to={l.to} className="mobile-nav-link" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26, fontWeight: 300, fontStyle: "italic",
                letterSpacing: "4px", color, textDecoration: "none",
                textTransform: "capitalize", padding: "10px 24px",
                animation: menuOpen ? `fadeInUp 0.5s ease ${i * 55}ms both` : "none",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = l.accent || T.roseGold; e.currentTarget.style.letterSpacing = "6px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.letterSpacing = "4px"; }}
              >
                {isGiftHer && "✿ "}{isGiftHim && "◈ "}{l.label}
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          <PetalDivider color="rgba(201,137,122,0.18)" width={80} />
        </div>

        {/* CTA */}
        <div style={{ marginTop: 16 }}>
          {user ? (
            <button
              onClick={() => { logout(); setMenuOpen(false); }}
              style={{
                background: "transparent", border: "1px solid rgba(201,137,122,0.25)",
                color: "rgba(201,137,122,0.65)", padding: "12px 32px",
                fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: "2.5px",
                textTransform: "uppercase", cursor: "pointer",
                borderRadius: "2px", transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,137,122,0.5)"; e.currentTarget.style.color = T.roseGold; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,137,122,0.25)"; e.currentTarget.style.color = "rgba(201,137,122,0.65)"; }}
            >Sign Out</button>
          ) : (
            <button
              onClick={() => { onLoginClick(); setMenuOpen(false); }}
              style={{
                background: `linear-gradient(135deg, ${T.roseGoldDeep} 0%, ${T.dustyRose} 100%)`,
                border: "none", color: "#fff", padding: "14px 40px",
                fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "3px",
                textTransform: "uppercase", cursor: "pointer", fontWeight: 600,
                borderRadius: "2px", boxShadow: "0 8px 32px rgba(201,137,122,0.35)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,137,122,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,137,122,0.35)"; }}
            >✦ Sign In</button>
          )}
        </div>
      </div>
    </>
  );
}