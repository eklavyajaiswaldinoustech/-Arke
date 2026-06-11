import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import Chatbot from "./components/Chatbot"; // ✅ ADD THIS IMPORT
import Homepage from "./pages/Homepage";
import NewCollection from "./pages/NewCollection";
import BestSellers from "./pages/BestSellers";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import GiftForHer from "./pages/Giftforher";
import GiftForHim from "./pages/Giftforhim";
import MyOrders from "./pages/MyOrders";
import AboutUs from "./pages/AboutUs";
import CustomerCare from "./pages/CustomerCare";
import BankDetails from "./pages/Bankdetails";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import OrderTracking from "./pages/OrderTracking";

/* ── Theme ───────────────────────────────────────────────────────── */
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
};

/* ================================================================== */
/*  COMING SOON placeholder                                           */
/* ================================================================== */
function ComingSoon({ title, icon = "🚧" }) {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 40px 80px",
        background: THEME.bg,
        textAlign: "center",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <div
        style={{
          fontSize: 52,
          marginBottom: 20,
          animation: "fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {icon}
      </div>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 300,
          margin: "0 0 12px",
          background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "fadeInUp 0.6s 0.1s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 13,
          color: THEME.textMuted,
          marginBottom: 36,
          lineHeight: 1.7,
          maxWidth: 400,
          animation: "fadeInUp 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        We're working on something beautiful. Check back soon!
      </p>

      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <a
          href="/"
          style={{
            padding: "13px 36px",
            background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 700,
            borderRadius: 8,
            boxShadow: `0 4px 16px ${THEME.rose}30`,
            transition: "all 0.3s",
          }}
        >
          Go Home
        </a>
        <a
          href="/products"
          style={{
            padding: "13px 36px",
            background: "transparent",
            border: `1.5px solid ${THEME.rose}`,
            color: THEME.burgundy,
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 600,
            borderRadius: 8,
            transition: "all 0.3s",
          }}
        >
          Browse Products
        </a>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  404 PAGE                                                          */
/* ================================================================== */
function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 40px 80px",
        background: THEME.bg,
        textAlign: "center",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <div
        style={{
          fontSize: 80,
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          lineHeight: 1,
          background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: 16,
          animation: "fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(24px, 3vw, 36px)",
          fontWeight: 300,
          margin: "0 0 12px",
          color: THEME.text,
          animation: "fadeInUp 0.6s 0.1s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 13,
          color: THEME.textMuted,
          marginBottom: 36,
          lineHeight: 1.7,
          animation: "fadeInUp 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <a
          href="/"
          style={{
            padding: "13px 36px",
            background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 700,
            borderRadius: 8,
            boxShadow: `0 4px 16px ${THEME.rose}30`,
          }}
        >
          Go Home
        </a>
        <a
          href="/products"
          style={{
            padding: "13px 36px",
            background: "transparent",
            border: `1.5px solid ${THEME.rose}`,
            color: THEME.burgundy,
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 600,
            borderRadius: 8,
          }}
        >
          Browse Products
        </a>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  LAYOUT WITH CHATBOT                                               */
/* ================================================================== */
function Layout() {
  const [showAuth, setShowAuth] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false); // ✅ ADD THIS
  const isLoggedIn = !!localStorage.getItem("arke_token"); // ✅ ADD THIS

  return (
    <>
      <Navbar onLoginClick={() => setShowAuth(true)} />

      <Routes>
        {/* ── Core Pages ──────────────────────────────────────── */}
        <Route path="/"               element={<Homepage />} />
        <Route path="/new-collection" element={<NewCollection />} />
        <Route path="/best-sellers"   element={<BestSellers />} />
        <Route path="/products"       element={<Products />} />
        <Route path="/product/:id"    element={<ProductDetail />} />
        <Route path="/categories"     element={<Categories />} />
        <Route path="/blog"           element={<Blog />} />
        <Route path="/cart"           element={<Cart />} />
        <Route path="/wishlist"       element={<Wishlist />} />

        {/* ── Gift Pages ──────────────────────────────────────── */}
        <Route path="/gift-for-her"   element={<GiftForHer />} />
        <Route path="/gift-for-him"   element={<GiftForHim />} />

        {/* ── User Pages ──────────────────────────────────────── */}
        <Route path="/my-orders"      element={<MyOrders />} />

        {/* ── Company Pages ───────────────────────────────────── */}
        <Route path="/about-us"       element={<AboutUs />} />
        <Route path="/customer-care"  element={<CustomerCare />} />
        <Route path="/bankdetails"    element={<BankDetails />} />

        {/* ── Policy Pages ────────────────────────────────────── */}
        <Route path="/privacy-policy"        element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions"  element={<TermsAndConditions />} />
        <Route path="/refund-policy"         element={<RefundPolicy />} />
        <Route path="/order-tracking"        element={<OrderTracking />} />

        {/* ── Placeholder Pages (build later) ─────────────────── */}
        <Route
          path="/careers"
          element={<ComingSoon title="Careers at Arke" icon="💼" />}
        />
        <Route
          path="/stores"
          element={<ComingSoon title="Store Locator" icon="📍" />}
        />
        <Route
          path="/faqs"
          element={<ComingSoon title="Frequently Asked Questions" icon="❓" />}
        />
        <Route
          path="/contact"
          element={<ComingSoon title="Contact Us" icon="💌" />}
        />
        <Route
          path="/accessibility"
          element={<ComingSoon title="Accessibility" icon="♿" />}
        />

        {/* ── Alternate / alias routes ─────────────────────────── */}
        <Route path="/shipping"       element={<OrderTracking />} />
        <Route path="/privacy"        element={<PrivacyPolicy />} />
        <Route path="/terms"          element={<TermsAndConditions />} />
        <Route path="/refund"         element={<RefundPolicy />} />

        {/* ── 404 ─────────────────────────────────────────────── */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      {/* ✅ ADD CHATBOT COMPONENT */}
      <Chatbot
        isOpen={chatbotOpen}
        onClose={() => setChatbotOpen(false)}
        isLoggedIn={isLoggedIn}
      />

      {/* ✅ ADD CHATBOT TOGGLE BUTTON */}
      <ChatbotToggleButton
        isOpen={chatbotOpen}
        onClick={() => setChatbotOpen(!chatbotOpen)}
      />
    </>
  );
}

/* ================================================================== */
/*  CHATBOT TOGGLE BUTTON COMPONENT                                   */
/* ================================================================== */
function ChatbotToggleButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: isOpen
          ? "linear-gradient(135deg, #8b4654, #e8b4c4)"
          : "linear-gradient(135deg, #e8b4c4, #8b4654)",
        border: "2px solid white",
        color: "white",
        fontSize: "28px",
        cursor: "pointer",
        boxShadow: isOpen
          ? "0 8px 24px rgba(232, 180, 196, 0.4)"
          : "0 4px 12px rgba(232, 180, 196, 0.3)",
        zIndex: 9998,
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(232, 180, 196, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = isOpen
          ? "0 8px 24px rgba(232, 180, 196, 0.4)"
          : "0 4px 12px rgba(232, 180, 196, 0.3)";
      }}
      title={isOpen ? "Close Chatbot" : "Open Chatbot"}
    >
      {isOpen ? "✕" : "💬"}
    </button>
  );
}

/* ================================================================== */
/*  APP ROOT                                                          */
/* ================================================================== */
export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter
        future={{
          v7_startTransition:    true,
          v7_relativeSplatPath:  true,
        }}
      >
        <Layout />
      </BrowserRouter>
    </StoreProvider>
  );
}