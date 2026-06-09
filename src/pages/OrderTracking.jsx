// src/pages/OrderTracking.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api, imgUrl } from "../services/api";

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
  warning: "#e8a84c",
  info: "#5b9bd5",
  gold: "#c9a96e",
};

const STATUS_CONFIG = {
  placed: { label: "Order Placed", color: THEME.info, icon: "📋", step: 1 },
  confirmed: { label: "Confirmed", color: THEME.info, icon: "✅", step: 2 },
  processing: { label: "Processing", color: THEME.warning, icon: "⚙️", step: 3 },
  packed: { label: "Packed", color: THEME.warning, icon: "📦", step: 4 },
  shipped: { label: "Shipped", color: THEME.gold, icon: "🚚", step: 5 },
  in_transit: { label: "In Transit", color: THEME.gold, icon: "🛣️", step: 6 },
  out_for_delivery: { label: "Out for Delivery", color: THEME.rose, icon: "🏍️", step: 7 },
  delivered: { label: "Delivered", color: THEME.success, icon: "🎉", step: 8 },
  cancelled: { label: "Cancelled", color: THEME.error, icon: "❌", step: -1 },
  return_requested: { label: "Return Requested", color: THEME.warning, icon: "🔄", step: 9 },
  return_approved: { label: "Return Approved", color: THEME.info, icon: "✅", step: 10 },
  return_picked: { label: "Return Picked Up", color: THEME.gold, icon: "📦", step: 11 },
  refund_processing: { label: "Refund Processing", color: THEME.warning, icon: "💰", step: 12 },
  refunded: { label: "Refunded", color: THEME.success, icon: "✅", step: 13 },
  return_rejected: { label: "Return Rejected", color: THEME.error, icon: "❌", step: -2 },
};

const RETURN_REASONS = [
  { id: "wrong_item", label: "Wrong item delivered", icon: "📦" },
  { id: "damaged", label: "Item arrived damaged", icon: "💔" },
  { id: "defective", label: "Product is defective", icon: "⚠️" },
  { id: "not_as_described", label: "Not as described/shown", icon: "🖼️" },
  { id: "size_issue", label: "Size doesn't fit", icon: "📏" },
  { id: "quality_issue", label: "Quality not satisfactory", icon: "👎" },
  { id: "changed_mind", label: "Changed my mind", icon: "🔄" },
  { id: "other", label: "Other reason", icon: "📝" },
];

const REFUND_METHODS = [
  { id: "original", label: "Original Payment Method", desc: "Refund to card/UPI used for payment", icon: "💳", days: "5–7 days" },
  { id: "bank", label: "Bank Transfer (NEFT)", desc: "Direct transfer to your bank account", icon: "🏦", days: "3–5 days" },
  { id: "wallet", label: "Store Wallet / Credit", desc: "Instant credit to your Arke wallet", icon: "👛", days: "Instant" },
];

const SHIPPING_INFO = [
  {
    _id: "s1",
    title: "Processing Time",
    icon: "⏱️",
    content: [
      "Standard orders are processed within 1–2 business days.",
      "Custom and personalized orders may take 5–7 business days.",
      "You will receive an email with tracking details once shipped.",
    ],
  },
  {
    _id: "s2",
    title: "Shipping Methods",
    icon: "🚚",
    content: [
      "Standard Shipping — 5–7 business days (Free above ₹999)",
      "Express Shipping — 2–3 business days (₹149)",
      "All shipments are insured and trackable.",
    ],
  },
  {
    _id: "s3",
    title: "Packaging & Care",
    icon: "🎁",
    content: [
      "Every order is gift-wrapped in our signature packaging.",
      "Tamper-proof sealing ensures safe delivery.",
      "Each piece includes a care card with maintenance tips.",
    ],
  },
];

export default function OrderTracking() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("track");
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("arke_token"));

  // Track by ID
  const [trackOrderId, setTrackOrderId] = useState("");
  const [trackEmail, setTrackEmail] = useState("");
  const [trackResult, setTrackResult] = useState(null);
  const [trackLoading, setTrackLoading] = useState(false);
  const [trackError, setTrackError] = useState("");

  // Return modal
  const [returnModal, setReturnModal] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoggedIn) loadOrders();
  }, [isLoggedIn]);

  const loadOrders = async () => {
    setOrdersLoading(true);
    try {
      const res = await api.getMyOrders();
      if (res?.success) {
        const rawOrderArray = Array.isArray(res.data) ? res.data : [];
        setOrders(rawOrderArray);
      } else {
        console.error("Failed to load orders:", res?.message);
        setOrders([]);
      }
    } catch (err) {
      console.error("Failed to load orders:", err);
      setOrders([]);
    } finally {
      setOrdersLoading(false);
    }
  };

  const handleTrackById = async () => {
    const id = trackOrderId.trim();
    if (!id) {
      setTrackError("Please enter your Order ID");
      return;
    }
    setTrackLoading(true);
    setTrackError("");
    setTrackResult(null);
    try {
      const res = await api.trackOrder(id, trackEmail || undefined);
      if (res?.success) {
        setTrackResult(res.data);
      } else {
        setTrackError(res?.message || "Order not found");
      }
    } catch (err) {
      setTrackError("Failed to track order. Please try again.");
    } finally {
      setTrackLoading(false);
    }
  };

  const tabs = [
    { id: "track", label: "Track Order", icon: "📦" },
    { id: "orders", label: "My Orders", icon: "🛍️", requireAuth: true },
    { id: "returns", label: "Returns & Refunds", icon: "🔄", requireAuth: true },
    { id: "shipping", label: "Shipping Info", icon: "🚚" },
  ];

  const eligibleForReturn = orders.filter((o) => {
    if (o.status !== "delivered") return false;
    const deliveredDate = new Date(o.deliveredAt || o.statusHistory?.find((s) => s.status === "delivered")?.date);
    const daysSince = Math.floor((Date.now() - deliveredDate) / (1000 * 60 * 60 * 24));
    return daysSince <= 7;
  });

  const returnedOrders = orders.filter((o) =>
    ["return_requested", "return_approved", "return_picked", "refund_processing", "refunded", "return_rejected"].includes(o.status)
  );

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: 120 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideRight { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes pulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.08); } }
        @keyframes fadeInScale { from { opacity:0; transform:scale(0.9); } to { opacity:1; transform:scale(1); } }
        .ot-tab { cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); user-select:none; }
        .ot-tab:hover { transform:translateY(-2px); }
        .ot-card { transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .ot-card:hover { border-color:${THEME.rose}60; box-shadow:0 8px 28px ${THEME.rose}12; transform:translateY(-2px); }
        .ot-bullet { transition:all 0.25s; }
        .ot-bullet:hover { background:${THEME.blush}20; padding-left:20px; }
        .ot-input { width:100%; background:${THEME.blush}15; border:1.5px solid ${THEME.border}; color:${THEME.text}; padding:13px 16px; font-family:'Poppins',sans-serif; font-size:13px; outline:none; border-radius:8px; transition:all 0.3s; box-sizing:border-box; }
        .ot-input:focus { border-color:${THEME.rose}; box-shadow:0 0 0 4px ${THEME.rose}15; }
        .ot-input::placeholder { color:${THEME.textMuted}; font-size:12px; }
        .reason-card { cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .reason-card:hover { border-color:${THEME.rose}; transform:translateY(-2px); box-shadow:0 4px 16px ${THEME.rose}18; }
        .refund-card { cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .refund-card:hover { border-color:${THEME.rose}; transform:translateY(-2px); box-shadow:0 4px 16px ${THEME.rose}18; }
        @media (max-width:768px) {
          .ot-header { padding:40px 20px 30px !important; }
          .ot-content { padding:24px 20px 60px !important; }
          .ot-form-grid { grid-template-columns:1fr !important; }
          .ot-tab-bar { overflow-x:auto; }
          .order-item-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* Header */}
      <PageHeader navigate={navigate} />

      {/* Tab Bar */}
      <div
        className="ot-tab-bar"
        style={{
          padding: "0 80px",
          borderBottom: `1.5px solid ${THEME.border}`,
          display: "flex",
          gap: 0,
          background: THEME.surface,
        }}
      >
        {tabs.map((tab) => {
          if (tab.requireAuth && !isLoggedIn) return null;
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className="ot-tab"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 28px",
                fontFamily: "'Poppins',sans-serif",
                fontSize: 12,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? THEME.burgundy : THEME.textMuted,
                letterSpacing: "0.5px",
                borderBottom: isActive
                  ? `3px solid ${THEME.burgundy}`
                  : "3px solid transparent",
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
                transition: "all 0.3s",
              }}
            >
              <span style={{ fontSize: 15 }}>{tab.icon}</span>
              {tab.label}
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div
        className="ot-content"
        style={{ padding: "40px 80px 80px", maxWidth: 960, margin: "0 auto" }}
      >
        {activeTab === "track" && (
          <TrackTab
            trackOrderId={trackOrderId}
            setTrackOrderId={setTrackOrderId}
            trackEmail={trackEmail}
            setTrackEmail={setTrackEmail}
            trackResult={trackResult}
            trackLoading={trackLoading}
            trackError={trackError}
            setTrackError={setTrackError}
            onTrack={handleTrackById}
            navigate={navigate}
          />
        )}

        {activeTab === "orders" && (
          <OrdersTab
            orders={orders}
            loading={ordersLoading}
            onRefresh={loadOrders}
            onReturn={(order) => setReturnModal(order)}
            onTrack={(order) => {
              setTrackResult(order);
              setActiveTab("track");
            }}
            navigate={navigate}
          />
        )}

        {activeTab === "returns" && (
          <ReturnsTab
            eligibleOrders={eligibleForReturn}
            returnedOrders={returnedOrders}
            onInitiateReturn={(order) => setReturnModal(order)}
            navigate={navigate}
          />
        )}

        {activeTab === "shipping" && <ShippingTab />}
      </div>

      {/* Return Modal */}
      {returnModal && (
        <ReturnModal
          order={returnModal}
          onClose={() => setReturnModal(null)}
          onSubmit={async (returnData) => {
            try {
              const res = await api.requestReturn(returnModal.orderId, returnData);
              if (res?.success) {
                setOrders((prev) =>
                  prev.map((o) =>
                    o.orderId === returnModal.orderId
                      ? {
                          ...o,
                          status: "return_requested",
                          returnInfo: {
                            ...returnData,
                            requestedAt: new Date().toISOString(),
                          },
                        }
                      : o
                  )
                );
                setReturnModal(null);
                setActiveTab("returns");
                return { success: true };
              } else {
                throw new Error(res?.message || "Failed to submit return request");
              }
            } catch (err) {
              throw err;
            }
          }}
        />
      )}
    </div>
  );
}

/* ================================================================== */
/*  PAGE HEADER                                                       */
/* ================================================================== */
function PageHeader({ navigate }) {
  return (
    <div
      className="ot-header"
      style={{
        padding: "50px 80px 32px",
        background: THEME.surface,
        animation: "fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
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
        <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.text, fontWeight: 600 }}>
          Orders & Returns
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
        <div style={{ width: 28, height: 1.5, background: `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})` }} />
        <span
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 10,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: THEME.burgundy,
            fontWeight: 700,
          }}
        >
          Track · Return · Refund
        </span>
      </div>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(30px,3.5vw,48px)",
          fontWeight: 300,
          margin: 0,
          background: `linear-gradient(135deg,${THEME.text},${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Order Tracking & Returns
      </h1>
    </div>
  );
}

/* ================================================================== */
/*  TRACK TAB                                                         */
/* ================================================================== */
function TrackTab({ trackOrderId, setTrackOrderId, trackEmail, setTrackEmail, trackResult, trackLoading, trackError, setTrackError, onTrack, navigate }) {
  return (
    <div style={{ animation: "fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
      {/* Search box */}
      <div
        style={{
          background: THEME.surface,
          border: `1.5px solid ${THEME.border}`,
          borderRadius: 14,
          padding: 36,
          marginBottom: 32,
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: 22 }}>🔍</span>
          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 400, margin: 0, color: THEME.text }}>
            Track Your Order
          </h3>
        </div>

        <div className="ot-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 14, alignItems: "end" }}>
          <div>
            <label style={{ display: "block", fontFamily: "'Poppins',sans-serif", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: THEME.textMuted, fontWeight: 700, marginBottom: 6 }}>
              📋 Order ID
            </label>
            <input
              type="text"
              placeholder="ARK-XXXXXXXX"
              value={trackOrderId}
              onChange={(e) => { setTrackOrderId(e.target.value.toUpperCase()); setTrackError(""); }}
              onKeyDown={(e) => e.key === "Enter" && onTrack()}
              className="ot-input"
              style={{ borderColor: trackError ? THEME.error : undefined }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "'Poppins',sans-serif", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: THEME.textMuted, fontWeight: 700, marginBottom: 6 }}>
              ✉ Email (Optional)
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={trackEmail}
              onChange={(e) => setTrackEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onTrack()}
              className="ot-input"
            />
          </div>
          <GradientButton onClick={onTrack} loading={trackLoading} label="Track" />
        </div>

        {trackError && (
          <div style={{ marginTop: 12, fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.error, fontWeight: 500 }}>
            ✕ {trackError}
          </div>
        )}
      </div>

      {/* Result */}
      {trackResult && <OrderDetailCard order={trackResult} navigate={navigate} showReturn={false} />}
    </div>
  );
}

/* ================================================================== */
/*  ORDERS TAB                                                        */
/* ================================================================== */
function OrdersTab({ orders, loading, onRefresh, onReturn, onTrack, navigate }) {
  if (loading) return <LoadingSpinner text="Loading your orders…" />;

  if (orders.length === 0)
    return (
      <EmptyState icon="🛍️" title="No Orders Yet" sub="Start shopping to see your orders here." btnLabel="Shop Now" onBtn={() => navigate("/products")} />
    );

  return (
    <div style={{ animation: "fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 400, margin: 0, color: THEME.text }}>
          Your Orders ({orders.length})
        </h3>
        <button
          onClick={onRefresh}
          style={{
            background: "none",
            border: `1.5px solid ${THEME.border}`,
            padding: "8px 20px",
            borderRadius: 8,
            fontFamily: "'Poppins',sans-serif",
            fontSize: 10,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: THEME.textMuted,
            cursor: "pointer",
            fontWeight: 600,
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = THEME.rose; e.currentTarget.style.color = THEME.burgundy; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = THEME.border; e.currentTarget.style.color = THEME.textMuted; }}
        >
          ↻ Refresh
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {orders.map((order, i) => (
          <OrderCard key={order.orderId} order={order} index={i} onReturn={onReturn} onTrack={onTrack} navigate={navigate} />
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  ORDER CARD (list view)                                            */
/* ================================================================== */
function OrderCard({ order, index, onReturn, onTrack, navigate }) {
  const statusConfig = STATUS_CONFIG[order.status] || STATUS_CONFIG.placed;
  const deliveredDate = order.deliveredAt ? new Date(order.deliveredAt) : null;
  const daysSinceDelivery = deliveredDate ? Math.floor((Date.now() - deliveredDate) / (1000 * 60 * 60 * 24)) : null;
  const canReturn = order.status === "delivered" && daysSinceDelivery !== null && daysSinceDelivery <= 7;
  const daysLeftForReturn = canReturn ? 7 - daysSinceDelivery : 0;

  return (
    <div
      className="ot-card"
      style={{
        background: THEME.surface,
        border: `1.5px solid ${THEME.border}`,
        borderRadius: 14,
        overflow: "hidden",
        animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.08}s both`,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 24px",
          background: `${THEME.blush}12`,
          borderBottom: `1px solid ${THEME.border}`,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, color: THEME.textMuted, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>
              Order ID
            </div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, color: THEME.burgundy, letterSpacing: "0.5px" }}>
              {order.orderId}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, color: THEME.textMuted, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>
              Ordered On
            </div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, color: THEME.text, fontWeight: 500 }}>
              {new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, color: THEME.textMuted, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>
              Total
            </div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, color: THEME.text }}>
              ₹{order.total?.toLocaleString("en-IN")}
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div
          style={{
            padding: "6px 16px",
            borderRadius: 20,
            background: `${statusConfig.color}15`,
            border: `1px solid ${statusConfig.color}40`,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 13 }}>{statusConfig.icon}</span>
          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, fontWeight: 600, color: statusConfig.color }}>
            {statusConfig.label}
          </span>
        </div>
      </div>

      {/* Items */}
      <div style={{ padding: "20px 24px" }}>
        {order.items?.map((item, j) => {
          const img = item.product?.images?.[0] || item.product?.image?.[0] || item.image;
          return (
            <div
              key={j}
              className="order-item-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                gap: 16,
                alignItems: "center",
                padding: "10px 0",
                borderBottom: j < order.items.length - 1 ? `1px solid ${THEME.borderLight}` : "none",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  overflow: "hidden",
                  background: `${THEME.blush}15`,
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/product/${item.product?._id || item.productId}`)}
              >
                {img && (
                  <img
                    src={imgUrl(img)}
                    alt={item.product?.name || "Product"}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: THEME.text,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/product/${item.product?._id || item.productId}`)}
                >
                  {item.product?.name || item.name || "Product"}
                </div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.textMuted }}>
                  Qty: {item.quantity || 1} × ₹{(item.price || item.product?.price || 0).toLocaleString("en-IN")}
                </div>
              </div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, color: THEME.burgundy }}>
                ₹{((item.price || item.product?.price || 0) * (item.quantity || 1)).toLocaleString("en-IN")}
              </div>
            </div>
          );
        })}
      </div>

      {/* Return eligibility banner */}
      {canReturn && (
        <div
          style={{
            margin: "0 24px",
            padding: "10px 16px",
            background: `${THEME.success}10`,
            border: `1px solid ${THEME.success}30`,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.success, fontWeight: 600 }}>
            ✅ Eligible for return — {daysLeftForReturn} day{daysLeftForReturn !== 1 ? "s" : ""} remaining
          </span>
          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, color: THEME.textMuted }}>
            Return window closes on {new Date(deliveredDate.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
          </span>
        </div>
      )}

      {order.status === "delivered" && daysSinceDelivery > 7 && (
        <div
          style={{
            margin: "0 24px",
            padding: "10px 16px",
            background: `${THEME.error}08`,
            border: `1px solid ${THEME.error}20`,
            borderRadius: 8,
          }}
        >
          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.error, fontWeight: 500 }}>
            ❌ Return window expired — delivered {daysSinceDelivery} days ago (7-day limit)
          </span>
        </div>
      )}

      {/* Action buttons */}
      <div
        style={{
          padding: "16px 24px",
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          borderTop: `1px solid ${THEME.borderLight}`,
          marginTop: 12,
        }}
      >
        <OutlineButton label="Track Order" onClick={() => onTrack(order)} />
        {canReturn && <GradientButton label="Return / Replace" onClick={() => onReturn(order)} small />}
        <OutlineButton label="View Details" onClick={() => onTrack(order)} />
      </div>
    </div>
  );
}

/* ================================================================== */
/*  ORDER DETAIL CARD (tracking view)                                 */
/* ================================================================== */
function OrderDetailCard({ order, navigate, showReturn = true }) {
  const statusConfig = STATUS_CONFIG[order.status] || STATUS_CONFIG.placed;

  return (
    <div
      style={{
        background: THEME.surface,
        border: `1.5px solid ${THEME.rose}40`,
        borderRadius: 14,
        padding: 0,
        overflow: "hidden",
        marginBottom: 32,
        boxShadow: `0 4px 24px ${THEME.rose}12`,
        animation: "fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "24px 32px",
          background: `linear-gradient(135deg,${THEME.blush}15,${THEME.champagne}10)`,
          borderBottom: `1px solid ${THEME.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, color: THEME.textMuted, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600 }}>
            Order ID
          </div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 20, fontWeight: 700, color: THEME.burgundy, letterSpacing: "1px" }}>
            {order.orderId}
          </div>
        </div>
        <div
          style={{
            padding: "8px 20px",
            borderRadius: 24,
            background: `${statusConfig.color}15`,
            border: `1.5px solid ${statusConfig.color}40`,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 16 }}>{statusConfig.icon}</span>
          <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fontWeight: 700, color: statusConfig.color }}>
            {statusConfig.label}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "28px 32px" }}>
        <SectionLabel text="Order Timeline" />
        <div style={{ marginBottom: 28 }}>
          {(order.statusHistory || []).map((step, i) => {
            const config = STATUS_CONFIG[step.status] || {};
            const isLast = i === order.statusHistory.length - 1;
            return (
              <div key={i} style={{ display: "flex", gap: 16, animation: `fadeInUp 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both` }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 28, flexShrink: 0 }}>
                  <div
                    style={{
                      width: isLast ? 20 : 14,
                      height: isLast ? 20 : 14,
                      borderRadius: "50%",
                      background: isLast
                        ? `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`
                        : config.color || THEME.success,
                      border: isLast ? `3px solid ${THEME.rose}40` : "none",
                      boxShadow: isLast ? `0 0 12px ${THEME.rose}40` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {!isLast && <span style={{ color: "white", fontSize: 7, fontWeight: 800 }}>✓</span>}
                  </div>
                  {i < order.statusHistory.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 28, background: config.color || THEME.success }} />
                  )}
                </div>
                <div style={{ paddingBottom: 16 }}>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: isLast ? 700 : 600, color: THEME.text }}>
                    {config.label || step.status}
                  </div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, color: THEME.textMuted, marginTop: 2 }}>
                    {new Date(step.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    {step.location && ` • ${step.location}`}
                  </div>
                  {step.note && (
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.textMuted, marginTop: 4, fontStyle: "italic" }}>
                      {step.note}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Shipping info */}
        {order.shippingPartner && (
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 20 }}>
            {[
              { label: "Carrier", value: order.shippingPartner, icon: "🚚" },
              { label: "Tracking #", value: order.trackingNumber || "—", icon: "🔢" },
              { label: "Expected", value: order.expectedDelivery || "—", icon: "📅" },
            ].map((d) => (
              <div key={d.label} style={{ padding: "10px 16px", background: `${THEME.blush}12`, borderRadius: 8, border: `1px solid ${THEME.border}` }}>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, color: THEME.textMuted, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>
                  {d.icon} {d.label}
                </div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fontWeight: 600, color: THEME.text, marginTop: 4 }}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  RETURNS TAB                                                       */
/* ================================================================== */
function ReturnsTab({ eligibleOrders, returnedOrders, onInitiateReturn, navigate }) {
  return (
    <div style={{ animation: "fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
      {/* Eligible for return */}
      <SectionLabel text="Eligible for Return (within 7 days)" />
      {eligibleOrders.length === 0 ? (
        <div
          style={{
            background: THEME.surface,
            border: `1.5px solid ${THEME.border}`,
            borderRadius: 14,
            padding: 40,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 12 }}>📦</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: THEME.text, marginBottom: 6 }}>
            No items eligible for return
          </div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, color: THEME.textMuted }}>
            Items can be returned within 7 days of delivery.
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {eligibleOrders.map((order, i) => {
            const deliveredDate = new Date(order.deliveredAt);
            const daysLeft = 7 - Math.floor((Date.now() - deliveredDate) / (1000 * 60 * 60 * 24));
            return (
              <div
                key={order.orderId}
                className="ot-card"
                style={{
                  background: THEME.surface,
                  border: `1.5px solid ${THEME.success}30`,
                  borderRadius: 14,
                  padding: 24,
                  animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 700, color: THEME.burgundy }}>
                      {order.orderId}
                    </div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.textMuted }}>
                      Delivered on {deliveredDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        padding: "4px 12px",
                        borderRadius: 12,
                        background: daysLeft <= 2 ? `${THEME.error}12` : `${THEME.success}12`,
                        border: `1px solid ${daysLeft <= 2 ? THEME.error : THEME.success}30`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Poppins',sans-serif",
                          fontSize: 10,
                          fontWeight: 700,
                          color: daysLeft <= 2 ? THEME.error : THEME.success,
                        }}
                      >
                        {daysLeft} day{daysLeft !== 1 ? "s" : ""} left
                      </span>
                    </div>
                    <GradientButton label="Return" onClick={() => onInitiateReturn(order)} small />
                  </div>
                </div>

                {/* Items preview */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {order.items?.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 12px",
                        background: `${THEME.blush}10`,
                        borderRadius: 8,
                        border: `1px solid ${THEME.border}`,
                      }}
                    >
                      <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, color: THEME.text, fontWeight: 500 }}>
                        {item.product?.name || item.name || "Product"} × {item.quantity || 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Return history */}
      <SectionLabel text="Return & Refund History" />
      {returnedOrders.length === 0 ? (
        <div
          style={{
            background: THEME.surface,
            border: `1.5px solid ${THEME.border}`,
            borderRadius: 14,
            padding: 40,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 12 }}>🔄</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: THEME.text, marginBottom: 6 }}>
            No returns yet
          </div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, color: THEME.textMuted }}>
            Your return and refund history will appear here.
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {returnedOrders.map((order, i) => {
            const sc = STATUS_CONFIG[order.status] || {};
            return (
              <div
                key={order.orderId}
                className="ot-card"
                style={{
                  background: THEME.surface,
                  border: `1.5px solid ${sc.color}30`,
                  borderRadius: 14,
                  padding: 24,
                  animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 700, color: THEME.burgundy }}>
                      {order.orderId}
                    </div>
                    {order.returnInfo?.reason && (
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.textMuted, marginTop: 2 }}>
                        Reason: {RETURN_REASONS.find((r) => r.id === order.returnInfo.reason)?.label || order.returnInfo.reason}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      padding: "6px 16px",
                      borderRadius: 20,
                      background: `${sc.color}15`,
                      border: `1px solid ${sc.color}40`,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontSize: 13 }}>{sc.icon}</span>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, fontWeight: 600, color: sc.color }}>
                      {sc.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  RETURN MODAL                                                      */
/* ================================================================== */
function ReturnModal({ order, onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState(order.items?.map((_, i) => i) || []);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [photos, setPhotos] = useState([]);
  const [refundMethod, setRefundMethod] = useState("original");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleItem = (idx) => {
    setSelectedItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const canProceed = () => {
    if (step === 1) return selectedItems.length > 0;
    if (step === 2) return reason !== "";
    if (step === 3) return refundMethod !== "";
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await onSubmit({
        items: selectedItems.map((i) => order.items[i]),
        reason,
        details,
        refundMethod,
        photos,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Return submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && !submitting && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(42,42,42,0.6)",
        backdropFilter: "blur(12px)",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: submitted ? 480 : 640,
          maxHeight: "90vh",
          background: THEME.bg,
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: `0 24px 80px rgba(0,0,0,0.18)`,
          animation: "fadeInScale 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {submitted ? (
          /* ── Success screen ──────────────────────────── */
          <div style={{ padding: 48, textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 300, margin: "0 0 10px", color: THEME.text }}>
              Return Requested!
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: THEME.textMuted, margin: "0 0 24px", lineHeight: 1.7 }}>
              Your return request for <strong>{order.orderId}</strong> has been submitted.
              <br />We'll review it within 24–48 hours.
            </p>
            <div
              style={{
                padding: "16px 24px",
                background: `${THEME.blush}20`,
                borderRadius: 10,
                border: `1px solid ${THEME.rose}30`,
                marginBottom: 28,
              }}
            >
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, color: THEME.textMuted, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: 4 }}>
                What happens next?
              </div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, color: THEME.text, lineHeight: 1.7 }}>
                📧 Confirmation email sent<br />
                🔍 Quality team reviews your request<br />
                📦 Pickup scheduled (if approved)<br />
                💰 Refund processed within 5–7 days
              </div>
            </div>
            <GradientButton label="Done" onClick={onClose} />
          </div>
        ) : (
          <>
            {/* ── Header ──────────────────────────────────── */}
            <div style={{ padding: "24px 32px", borderBottom: `1.5px solid ${THEME.border}`, background: THEME.surface, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: THEME.burgundy, fontWeight: 700, marginBottom: 4 }}>
                  Return Request
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 400, margin: 0, color: THEME.text }}>
                  {step === 1 ? "Select Items" : step === 2 ? "Reason for Return" : step === 3 ? "Refund Method" : "Review & Submit"}
                </h3>
              </div>
              <button
                onClick={onClose}
                disabled={submitting}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: `1.5px solid ${THEME.border}`,
                  background: THEME.surface,
                  color: THEME.textMuted,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = THEME.rose; e.currentTarget.style.color = THEME.burgundy; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = THEME.border; e.currentTarget.style.color = THEME.textMuted; }}
              >
                ✕
              </button>
            </div>

            {/* ── Step indicators ─────────────────────────── */}
            <div style={{ display: "flex", padding: "16px 32px", gap: 4, background: `${THEME.blush}08` }}>
              {[1, 2, 3, 4].map((s) => (
                <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: s <= step ? `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})` : THEME.border, transition: "all 0.4s" }} />
              ))}
            </div>

            {/* ── Body ────────────────────────────────────── */}
            <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
              {/* Step 1: Select items */}
              {step === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {order.items?.map((item, i) => {
                    const selected = selectedItems.includes(i);
                    return (
                      <div
                        key={i}
                        onClick={() => toggleItem(i)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          padding: "14px 16px",
                          borderRadius: 10,
                          border: `1.5px solid ${selected ? THEME.rose : THEME.border}`,
                          background: selected ? `${THEME.blush}15` : THEME.surface,
                          cursor: "pointer",
                          transition: "all 0.3s",
                        }}
                      >
                        <div style={{ width: 22, height: 22, borderRadius: 4, border: `2px solid ${selected ? THEME.burgundy : THEME.border}`, background: selected ? `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})` : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s" }}>
                          {selected && <span style={{ color: "white", fontSize: 11 }}>✓</span>}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 600, color: THEME.text }}>
                            {item.product?.name || item.name || "Product"}
                          </div>
                          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.textMuted }}>
                            Qty: {item.quantity || 1} • ₹{((item.price || item.product?.price || 0) * (item.quantity || 1)).toLocaleString("en-IN")}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Step 2: Select reason */}
              {step === 2 && (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                    {RETURN_REASONS.map((r) => (
                      <div
                        key={r.id}
                        className="reason-card"
                        onClick={() => setReason(r.id)}
                        style={{
                          padding: "14px 16px",
                          borderRadius: 10,
                          border: `1.5px solid ${reason === r.id ? THEME.burgundy : THEME.border}`,
                          background: reason === r.id ? `${THEME.blush}20` : THEME.surface,
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span style={{ fontSize: 18 }}>{r.icon}</span>
                        <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fontWeight: reason === r.id ? 700 : 500, color: THEME.text }}>
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Poppins',sans-serif", fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: THEME.textMuted, fontWeight: 700, marginBottom: 6 }}>
                      📝 Additional Details (Optional)
                    </label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe the issue in detail…"
                      rows={3}
                      style={{
                        width: "100%",
                        background: `${THEME.blush}15`,
                        border: `1.5px solid ${THEME.border}`,
                        color: THEME.text,
                        padding: "12px 16px",
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: 13,
                        outline: "none",
                        borderRadius: 8,
                        resize: "vertical",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Refund method */}
              {step === 3 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {REFUND_METHODS.map((m) => (
                    <div
                      key={m.id}
                      className="refund-card"
                      onClick={() => setRefundMethod(m.id)}
                      style={{
                        padding: "18px 20px",
                        borderRadius: 10,
                        border: `1.5px solid ${refundMethod === m.id ? THEME.burgundy : THEME.border}`,
                        background: refundMethod === m.id ? `${THEME.blush}20` : THEME.surface,
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                      }}
                    >
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: refundMethod === m.id ? `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})` : `${THEME.blush}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                        {m.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 600, color: THEME.text }}>
                          {m.label}
                        </div>
                        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.textMuted }}>
                          {m.desc} • <strong>{m.days}</strong>
                        </div>
                      </div>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${refundMethod === m.id ? THEME.burgundy : THEME.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {refundMethod === m.id && <div style={{ width: 10, height: 10, borderRadius: "50%", background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})` }} />}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div>
                  <div style={{ background: THEME.surface, border: `1.5px solid ${THEME.border}`, borderRadius: 10, padding: 20, marginBottom: 16 }}>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: THEME.textMuted, fontWeight: 700, marginBottom: 12 }}>
                      Items to Return
                    </div>
                    {selectedItems.map((idx) => {
                      const item = order.items[idx];
                      return (
                        <div key={idx} style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: THEME.text, padding: "6px 0", borderBottom: `1px solid ${THEME.borderLight}` }}>
                          {item.product?.name || item.name} × {item.quantity || 1}
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16 }}>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, color: THEME.textMuted, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>
                        Reason
                      </div>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fontWeight: 600, color: THEME.text }}>
                        {RETURN_REASONS.find((r) => r.id === reason)?.label || reason}
                      </div>
                    </div>
                    <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16 }}>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, color: THEME.textMuted, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>
                        Refund To
                      </div>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fontWeight: 600, color: THEME.text }}>
                        {REFUND_METHODS.find((m) => m.id === refundMethod)?.label}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 16, padding: "12px 16px", background: `${THEME.warning}10`, border: `1px solid ${THEME.warning}25`, borderRadius: 8 }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, color: THEME.warning, fontWeight: 500 }}>
                      ⚠️ Once submitted, our team will review your request within 24–48 hours. You'll receive pickup details via email.
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* ── Footer ──────────────────────────────────── */}
            <div style={{ padding: "18px 32px", borderTop: `1.5px solid ${THEME.border}`, background: THEME.surface, display: "flex", justifyContent: "space-between", gap: 12 }}>
              {step > 1 ? (
                <OutlineButton label="← Back" onClick={() => setStep((s) => s - 1)} />
              ) : (
                <div />
              )}
              {step < 4 ? (
                <GradientButton label="Continue →" onClick={() => setStep((s) => s + 1)} disabled={!canProceed()} />
              ) : (
                <GradientButton label="Submit Return Request" onClick={handleSubmit} loading={submitting} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SHIPPING TAB                                                      */
/* ================================================================== */
function ShippingTab() {
  return (
    <div style={{ animation: "fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
      {SHIPPING_INFO.map((section, i) => (
        <div
          key={section._id}
          className="ot-card"
          style={{
            background: THEME.surface,
            border: `1.5px solid ${THEME.border}`,
            borderRadius: 14,
            padding: 32,
            marginBottom: 20,
            animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: `linear-gradient(135deg,${THEME.blush}40,${THEME.champagne}30)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, border: `1px solid ${THEME.rose}25` }}>
              {section.icon}
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, fontWeight: 400, margin: 0, color: THEME.text }}>
              {section.title}
            </h3>
          </div>
          <div style={{ height: 1, background: `linear-gradient(90deg,${THEME.rose}40,transparent)`, marginBottom: 16 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {section.content.map((point, j) => (
              <div key={j} className="ot-bullet" style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "8px 12px", borderRadius: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`, marginTop: 7, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: THEME.text, lineHeight: 1.7 }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  SHARED COMPONENTS                                                 */
/* ================================================================== */
function SectionLabel({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
      <div style={{ width: 18, height: 1.5, background: `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})` }} />
      <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: THEME.burgundy, fontWeight: 700 }}>
        {text}
      </span>
    </div>
  );
}

function GradientButton({ label, onClick, loading, disabled, small }) {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      style={{
        padding: small ? "9px 20px" : "13px 32px",
        background: loading || disabled ? THEME.textMuted : `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
        color: "white",
        border: "none",
        fontFamily: "'Poppins',sans-serif",
        fontSize: small ? 10 : 11,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        cursor: loading || disabled ? "not-allowed" : "pointer",
        fontWeight: 700,
        borderRadius: 8,
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: loading || disabled ? "none" : `0 4px 16px ${THEME.rose}30`,
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
      onMouseEnter={(e) => { if (!loading && !disabled) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${THEME.rose}40`; } }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = loading || disabled ? "none" : `0 4px 16px ${THEME.rose}30`; }}
    >
      {loading && <span style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />}
      {label}
    </button>
  );
}

function OutlineButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "9px 20px",
        background: "transparent",
        border: `1.5px solid ${THEME.border}`,
        color: THEME.text,
        fontFamily: "'Poppins',sans-serif",
        fontSize: 10,
        letterSpacing: "1px",
        textTransform: "uppercase",
        cursor: "pointer",
        fontWeight: 600,
        borderRadius: 8,
        transition: "all 0.3s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = THEME.rose; e.currentTarget.style.color = THEME.burgundy; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = THEME.border; e.currentTarget.style.color = THEME.text; }}
    >
      {label}
    </button>
  );
}

function LoadingSpinner({ text }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 80, gap: 16 }}>
      <div style={{ width: 40, height: 40, border: `3px solid ${THEME.border}`, borderTopColor: THEME.rose, borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: THEME.textMuted, fontStyle: "italic" }}>
        {text}
      </span>
    </div>
  );
}

function EmptyState({ icon, title, sub, btnLabel, onBtn }) {
  return (
    <div style={{ textAlign: "center", padding: 80 }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 300, color: THEME.text, marginBottom: 8 }}>
        {title}
      </div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: THEME.textMuted, marginBottom: 28 }}>
        {sub}
      </div>
      {btnLabel && <GradientButton label={btnLabel} onClick={onBtn} />}
    </div>
  );
}

/* ================================================================== */
/*  MOCK DATA (remove when backend is connected)                      */
/* ================================================================== */
const MOCK_ORDERS = [
  {
    orderId: "ARK-2025A1B2",
    status: "delivered",
    createdAt: "2025-07-05T10:30:00Z",
    deliveredAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    total: 4999,
    shippingPartner: "BlueDart Express",
    trackingNumber: "BD98765432",
    expectedDelivery: "July 10, 2025",
    items: [
      {
        productId: "p1",
        name: "Rose Gold Infinity Ring",
        price: 2999,
        quantity: 1,
        image: null,
        product: { _id: "p1", name: "Rose Gold Infinity Ring", price: 2999, images: [] },
      },
      {
        productId: "p2",
        name: "Pearl Drop Earrings",
        price: 2000,
        quantity: 1,
        image: null,
        product: { _id: "p2", name: "Pearl Drop Earrings", price: 2000, images: [] },
      },
    ],
    statusHistory: [
      { status: "placed", date: "2025-07-05T10:30:00Z", location: "Online" },
      { status: "confirmed", date: "2025-07-05T11:00:00Z", location: "Mumbai" },
      { status: "packed", date: "2025-07-06T14:00:00Z", location: "Mumbai Warehouse" },
      { status: "shipped", date: "2025-07-07T09:00:00Z", location: "Mumbai Hub" },
      { status: "in_transit", date: "2025-07-08T06:00:00Z", location: "Delhi Sort Center" },
      { status: "delivered", date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), location: "Your Address", note: "Signed by: Customer" },
    ],
  },
  {
    orderId: "ARK-2025C3D4",
    status: "shipped",
    createdAt: "2025-07-09T16:45:00Z",
    total: 1499,
    shippingPartner: "DTDC",
    trackingNumber: "DT12345678",
    expectedDelivery: "July 14, 2025",
    items: [
      {
        productId: "p3",
        name: "Silver Charm Bracelet",
        price: 1499,
        quantity: 1,
        product: { _id: "p3", name: "Silver Charm Bracelet", price: 1499, images: [] },
      },
    ],
    statusHistory: [
      { status: "placed", date: "2025-07-09T16:45:00Z", location: "Online" },
      { status: "confirmed", date: "2025-07-09T17:00:00Z", location: "Mumbai" },
      { status: "packed", date: "2025-07-10T10:00:00Z", location: "Mumbai Warehouse" },
      { status: "shipped", date: "2025-07-11T08:30:00Z", location: "Mumbai Hub" },
    ],
  },
  {
    orderId: "ARK-2025E5F6",
    status: "delivered",
    createdAt: "2025-06-20T09:00:00Z",
    deliveredAt: "2025-06-25T14:00:00Z",
    total: 7499,
    items: [
      {
        productId: "p4",
        name: "Diamond Pendant Necklace",
        price: 7499,
        quantity: 1,
        product: { _id: "p4", name: "Diamond Pendant Necklace", price: 7499, images: [] },
      },
    ],
    statusHistory: [
      { status: "placed", date: "2025-06-20T09:00:00Z", location: "Online" },
      { status: "confirmed", date: "2025-06-20T09:30:00Z", location: "Mumbai" },
      { status: "shipped", date: "2025-06-22T10:00:00Z", location: "Mumbai Hub" },
      { status: "delivered", date: "2025-06-25T14:00:00Z", location: "Your Address" },
    ],
  },
];