import { useState, useEffect } from "react";
import { useStore } from "../context/useStore";
import { API_BASE } from "../services/api";

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
  success: "#70c878",
  warning: "#ffc107",
  info: "#2196f3",
  error: "#d97070",
};

export default function MyOrders() {
  const { user } = useStore();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    if (!user) {
      setError("Please log in to view your orders");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${API_BASE}/orders/${user.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("arke_token")}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          setError("Session expired. Please log in again.");
        } else if (response.status === 404) {
          setOrders([]);
        } else {
          setError("Failed to load orders. Please try again.");
        }
        return;
      }

      const data = await response.json();
      setOrders(data.data || []);
    } catch (err) {
      setError("Network error. Please check your connection.");
      console.error("Fetch orders error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: `${THEME.warning}20`,
      processing: `${THEME.info}20`,
      shipped: `${THEME.success}20`,
      delivered: `${THEME.success}20`,
      cancelled: `${THEME.error}20`,
    };
    return colors[status?.toLowerCase()] || `${THEME.rose}20`;
  };

  const getStatusBorder = (status) => {
    const colors = {
      pending: `${THEME.warning}40`,
      processing: `${THEME.info}40`,
      shipped: `${THEME.success}40`,
      delivered: `${THEME.success}40`,
      cancelled: `${THEME.error}40`,
    };
    return colors[status?.toLowerCase()] || `${THEME.rose}40`;
  };

  const getStatusText = (status) => {
    const colors = {
      pending: THEME.warning,
      processing: THEME.info,
      shipped: THEME.success,
      delivered: THEME.success,
      cancelled: THEME.error,
    };
    return colors[status?.toLowerCase()] || THEME.rose;
  };

  return (
    <div style={{
      background: THEME.bg,
      minHeight: "100vh",
      paddingTop: 120,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .orders-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px 80px;
        }

        .orders-header {
          margin-bottom: 60px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .orders-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${THEME.text};
          margin: 0 0 12px 0;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .orders-header p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: ${THEME.textMuted};
          margin: 0;
          font-weight: 400;
        }

        .loading-state {
          text-align: center;
          padding: 80px 40px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${THEME.border};
          border-top-color: ${THEME.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        .loading-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: ${THEME.textMuted};
          letter-spacing: 0.5px;
          font-weight: 400;
        }

        .error-state {
          padding: 24px 20px;
          background: ${THEME.error}15;
          border: 1.5px solid ${THEME.error}40;
          border-radius: 8px;
          text-align: center;
          margin: 40px 0;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .error-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${THEME.error}90;
          letter-spacing: 0.3px;
          margin: 0;
          font-weight: 500;
        }

        .empty-state {
          text-align: center;
          padding: 80px 40px;
          border: 1.5px solid ${THEME.border};
          border-radius: 12px;
          background: ${THEME.surface};
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .empty-state-icon {
          font-size: 56px;
          margin-bottom: 20px;
          opacity: 0.6;
        }

        .empty-state h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 1px;
          color: ${THEME.text};
          margin: 0 0 12px 0;
        }

        .empty-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
          margin: 0 0 32px 0;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        .empty-state a {
          display: inline-block;
          padding: 12px 32px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 16px ${THEME.rose}30;
        }

        .empty-state a:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${THEME.rose}40;
        }

        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .order-card {
          border: 1.5px solid ${THEME.border};
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          background: ${THEME.surface};
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .order-card:hover {
          border-color: ${THEME.rose};
          box-shadow: 0 8px 24px rgba(232, 180, 196, 0.2);
          transform: translateY(-2px);
        }

        .order-header {
          padding: 20px 24px;
          background: ${THEME.blush}15;
          border-bottom: 1.5px solid ${THEME.border};
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .order-id {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          margin-bottom: 4px;
        }

        .order-date {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3px;
          color: ${THEME.textMuted};
          font-weight: 400;
        }

        .order-status {
          padding: 7px 14px;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: inline-block;
        }

        .order-content {
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 24px;
          align-items: center;
        }

        .order-info {
          flex: 1;
        }

        .info-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${THEME.textMuted};
          margin-bottom: 6px;
        }

        .info-value {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${THEME.text};
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        .amount-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .order-items {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .order-actions {
          padding: 16px 24px;
          background: ${THEME.blush}8;
          border-top: 1.5px solid ${THEME.border};
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 9px 16px;
          background: transparent;
          border: 1.5px solid ${THEME.rose};
          color: ${THEME.burgundy};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .action-btn:hover {
          border-color: ${THEME.burgundy};
          background: linear-gradient(135deg, ${THEME.rose}20, ${THEME.burgundy}15);
          transform: translateY(-2px);
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: ${THEME.surface};
          border: 1.5px solid ${THEME.border};
          border-radius: 12px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          animation: fadeInUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1.5px solid ${THEME.border};
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 1px;
          color: ${THEME.text};
          background: linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          color: ${THEME.textMuted};
          font-size: 24px;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          color: ${THEME.burgundy};
        }

        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid ${THEME.border};
        }

        .order-item:last-child {
          border-bottom: none;
        }

        .item-details h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: ${THEME.text};
          margin: 0 0 6px 0;
          letter-spacing: 0.3px;
        }

        .item-details p {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${THEME.textMuted};
          margin: 0;
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .item-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.5px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .summary-row.total {
          padding-top: 16px;
          margin-top: 16px;
          border-top: 1.5px solid ${THEME.border};
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .orders-container {
            padding: 0 20px 60px;
          }

          .orders-header h1 {
            font-size: 36px;
          }

          .order-content {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .modal-content {
            padding: 24px;
          }
        }
      `}</style>

      <div className="orders-container">
        {/* Header */}
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>View and manage all your ARKE purchases</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading your orders...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="error-state">
            <p>⚠️ {error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && orders.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">📦</div>
            <h2>No Orders Yet</h2>
            <p>
              You haven't placed any orders yet. Start shopping to see your
              orders here!
            </p>
            <a href="/products">Browse Collections</a>
          </div>
        )}

        {/* Orders List */}
        {!loading && !error && orders.length > 0 && (
          <div className="orders-list">
            {orders.map((order) => (
              <div
                key={order._id}
                className="order-card"
                onClick={() => setSelectedOrder(order)}
              >
                <div className="order-header">
                  <div>
                    <div className="order-id">
                      Order #{order.orderNumber || order._id.slice(-6)}
                    </div>
                    <div className="order-date">
                      {new Date(order.createdAt).toLocaleDateString(
                        "en-IN"
                      )}
                    </div>
                  </div>
                  <div
                    className="order-status"
                    style={{
                      background: getStatusColor(order.status),
                      border: `1px solid ${getStatusBorder(order.status)}`,
                      color: getStatusText(order.status),
                    }}
                  >
                    {order.status?.toUpperCase()}
                  </div>
                </div>

                <div className="order-content">
                  <div className="order-info">
                    <div className="info-label">Total Amount</div>
                    <div className="amount-value">
                      ₹{order.totalAmount?.toLocaleString("en-IN") || "0"}
                    </div>
                  </div>

                  <div className="order-info">
                    <div className="info-label">Items</div>
                    <div className="info-value">
                      {order.items?.length || 0} item(s)
                    </div>
                  </div>

                  <div className="order-info">
                    <div className="info-label">Delivery</div>
                    <div className="info-value">
                      {order.estimatedDelivery
                        ? new Date(order.estimatedDelivery).toLocaleDateString(
                            "en-IN"
                          )
                        : "Processing"}
                    </div>
                  </div>

                  <div className="order-info">
                    <div className="info-label">Payment</div>
                    <div className="info-value">
                      {order.paymentStatus?.toUpperCase() || "PENDING"}
                    </div>
                  </div>
                </div>

                <div className="order-actions">
                  <button className="action-btn">View Details</button>
                  {order.status?.toLowerCase() === "shipped" && (
                    <button className="action-btn">Track Order</button>
                  )}
                  {["pending", "processing"].includes(
                    order.status?.toLowerCase()
                  ) && <button className="action-btn">Cancel Order</button>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div
          className="modal"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 className="modal-title">Order Details</h2>
              <button
                className="modal-close"
                onClick={() => setSelectedOrder(null)}
              >
                ✕
              </button>
            </div>

            <div>
              <div style={{ marginBottom: 24 }}>
                <div className="info-label">Order Number</div>
                <div className="info-value">
                  #{selectedOrder.orderNumber || selectedOrder._id.slice(-6)}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div className="info-label">Order Date</div>
                <div className="info-value">
                  {new Date(selectedOrder.createdAt).toLocaleDateString(
                    "en-IN",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div className="info-label">Status</div>
                <div
                  className="order-status"
                  style={{
                    background: getStatusColor(selectedOrder.status),
                    border: `1px solid ${getStatusBorder(
                      selectedOrder.status
                    )}`,
                    color: getStatusText(selectedOrder.status),
                  }}
                >
                  {selectedOrder.status?.toUpperCase()}
                </div>
              </div>

              <div
                style={{
                  marginBottom: 32,
                  paddingTop: 24,
                  borderTop: `1.5px solid ${THEME.border}`,
                }}
              >
                <div className="info-label" style={{ marginBottom: 16 }}>
                  Items Ordered
                </div>
                {selectedOrder.items?.map((item, idx) => (
                  <div key={idx} className="order-item">
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>
                        Qty: {item.quantity} × ₹
                        {item.price?.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="item-price">
                      ₹{(item.quantity * item.price)?.toLocaleString("en-IN")}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  paddingTop: 24,
                  borderTop: `1.5px solid ${THEME.border}`,
                }}
              >
                <div className="summary-row">
                  <span className="info-label" style={{ margin: 0 }}>
                    Subtotal
                  </span>
                  <span className="info-value">
                    ₹
                    {(
                      selectedOrder.totalAmount - (selectedOrder.shipping || 0)
                    )?.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="summary-row">
                  <span className="info-label" style={{ margin: 0 }}>
                    Shipping
                  </span>
                  <span className="info-value">
                    ₹{(selectedOrder.shipping || 0).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="summary-row total">
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.5px",
                      color: THEME.text,
                    }}
                  >
                    TOTAL
                  </span>
                  <span className="amount-value">
                    ₹{selectedOrder.totalAmount?.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
