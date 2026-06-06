import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";
import ProductPlaceholder from "../components/Productplaceholder";
import { getProductImage } from "../services/api";

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
  gold: "#c9a96e",
};

const CHECKOUT_STEPS = [
  { id: 1, label: "Shipping", icon: "📍" },
  { id: 2, label: "Payment", icon: "💳" },
  { id: 3, label: "Review", icon: "✦" },
];

/* ================================================================== */
/*  CHECKOUT MODAL                                                     */
/* ================================================================== */
function CheckoutModal({
  isOpen,
  onClose,
  items,
  subtotal,
  discountAmount,
  shipping,
  total,
  appliedCoupon,
}) {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const { success, error: showError } = useToast();

  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [animateIn, setAnimateIn] = useState(false);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    saveAddress: false,
  });

  const [paymentInfo, setPaymentInfo] = useState({
    method: "card",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setAnimateIn(true), 50);
    } else {
      setAnimateIn(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && !isProcessing) handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isProcessing]);

  const handleClose = () => {
    if (isProcessing) return;
    setAnimateIn(false);
    setTimeout(() => {
      onClose();
      setCurrentStep(1);
      setOrderPlaced(false);
      setErrors({});
      setTouchedFields({});
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isProcessing) handleClose();
  };

  const validateShipping = () => {
    const e = {};
    if (!shippingInfo.firstName.trim()) e.firstName = "First name is required";
    if (!shippingInfo.lastName.trim()) e.lastName = "Last name is required";
    if (!shippingInfo.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingInfo.email))
      e.email = "Invalid email format";
    if (!shippingInfo.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(shippingInfo.phone.replace(/\s/g, "")))
      e.phone = "Invalid phone number";
    if (!shippingInfo.address.trim()) e.address = "Address is required";
    if (!shippingInfo.city.trim()) e.city = "City is required";
    if (!shippingInfo.state.trim()) e.state = "State is required";
    if (!shippingInfo.pincode.trim()) e.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(shippingInfo.pincode))
      e.pincode = "Invalid pincode";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e = {};
    if (paymentInfo.method === "card") {
      const raw = paymentInfo.cardNumber.replace(/\s/g, "");
      if (!raw) e.cardNumber = "Card number is required";
      else if (raw.length < 16) e.cardNumber = "Invalid card number";
      if (!paymentInfo.cardName.trim()) e.cardName = "Name on card is required";
      if (!paymentInfo.expiry.trim()) e.expiry = "Expiry is required";
      else if (!/^\d{2}\/\d{2}$/.test(paymentInfo.expiry))
        e.expiry = "Use MM/YY format";
      if (!paymentInfo.cvv.trim()) e.cvv = "CVV is required";
      else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) e.cvv = "Invalid CVV";
    } else if (paymentInfo.method === "upi") {
      if (!paymentInfo.upiId.trim()) e.upiId = "UPI ID is required";
      else if (!paymentInfo.upiId.includes("@")) e.upiId = "Invalid UPI ID";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateShipping()) return;
    if (currentStep === 2 && !validatePayment()) return;
    setErrors({});
    setTouchedFields({});
    setCurrentStep((s) => Math.min(s + 1, 3));
  };

  const handleBack = () => {
    setErrors({});
    setTouchedFields({});
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    try {
      await new Promise((r) => setTimeout(r, 2800));
      const fakeId =
        "ARK-" +
        Date.now().toString(36).toUpperCase() +
        Math.random().toString(36).substring(2, 6).toUpperCase();
      setOrderId(fakeId);
      setOrderPlaced(true);
      success("Order placed successfully! 🎉");
    } catch {
      showError("Failed to place order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (v) =>
    v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (v) => {
    const c = v.replace(/\D/g, "").slice(0, 4);
    return c.length >= 3 ? c.slice(0, 2) + "/" + c.slice(2) : c;
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: animateIn ? "rgba(42,42,42,0.65)" : "rgba(42,42,42,0)",
        backdropFilter: animateIn ? "blur(14px)" : "blur(0px)",
        WebkitBackdropFilter: animateIn ? "blur(14px)" : "blur(0px)",
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        padding: 20,
      }}
    >
      <style>{`
        @keyframes modalUp {
          from { opacity:0; transform:translateY(48px) scale(0.94); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes floatUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity:0; transform:scale(0.75); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset:56; }
          to   { stroke-dashoffset:0; }
        }
        @keyframes confettiFall {
          0%   { transform:translateY(0) rotate(0deg) scale(1); opacity:1; }
          100% { transform:translateY(-120px) rotate(720deg) scale(0.4); opacity:0; }
        }
        @keyframes pulseRing {
          0%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(232,180,196,0.4); }
          50%     { transform:scale(1.06); box-shadow:0 0 0 8px rgba(232,180,196,0); }
        }
        @keyframes spinLoader {
          to { transform:rotate(360deg); }
        }
        @keyframes progressFill {
          from { width:0%; }
          to   { width:100%; }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(28px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .modal-scroll::-webkit-scrollbar { width:5px; }
        .modal-scroll::-webkit-scrollbar-track { background:transparent; }
        .modal-scroll::-webkit-scrollbar-thumb {
          background:${THEME.border}; border-radius:3px;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background:${THEME.rose};
        }

        .co-input {
          width:100%;
          background:${THEME.blush}18;
          border:1.5px solid ${THEME.border};
          color:${THEME.text};
          padding:13px 15px;
          font-family:'Poppins',sans-serif;
          font-size:13px;
          outline:none;
          border-radius:8px;
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          box-sizing:border-box;
        }
        .co-input:focus {
          border-color:${THEME.rose};
          background:${THEME.blush}28;
          box-shadow:0 0 0 4px ${THEME.rose}18;
        }
        .co-input.err {
          border-color:${THEME.error};
          background:${THEME.error}08;
        }
        .co-input::placeholder { color:${THEME.textMuted}; font-size:12px; }

        .pm-card {
          cursor:pointer;
          border:1.5px solid ${THEME.border};
          border-radius:10px;
          padding:15px 18px;
          display:flex;
          align-items:center;
          gap:14px;
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          background:${THEME.surface};
          user-select:none;
        }
        .pm-card:hover {
          border-color:${THEME.rose};
          transform:translateY(-2px);
          box-shadow:0 6px 20px ${THEME.rose}22;
        }
        .pm-card.active {
          border-color:${THEME.burgundy};
          background:linear-gradient(135deg,${THEME.blush}22,${THEME.champagne}14);
          box-shadow:0 4px 18px ${THEME.rose}28;
        }

        .step-slide { animation:slideRight 0.38s cubic-bezier(0.34,1.56,0.64,1); }

        @media (max-width:680px) {
          .co-two-col { grid-template-columns:1fr !important; }
          .co-modal { width:100% !important; max-height:95vh !important; }
          .co-body { padding:18px !important; }
          .co-head { padding:18px !important; }
          .co-foot { padding:16px 18px !important; }
        }
      `}</style>

      <div
        ref={modalRef}
        className="co-modal"
        style={{
          width: "100%",
          maxWidth: orderPlaced ? 520 : 920,
          maxHeight: "92vh",
          background: THEME.bg,
          borderRadius: 18,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: `0 32px 90px rgba(0,0,0,0.18), 0 0 0 1px ${THEME.border}`,
          transform: animateIn
            ? "translateY(0) scale(1)"
            : "translateY(48px) scale(0.94)",
          opacity: animateIn ? 1 : 0,
          transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
          animation: animateIn ? "none" : undefined,
        }}
      >
        {orderPlaced ? (
          <OrderSuccess
            orderId={orderId}
            onClose={handleClose}
            navigate={navigate}
          />
        ) : (
          <>
            {/* ── Header ── */}
            <ModalHeader
              currentStep={currentStep}
              onClose={handleClose}
              isProcessing={isProcessing}
            />

            {/* ── Body ── */}
            <div
              className="modal-scroll co-body"
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "32px 40px",
              }}
            >
              {currentStep === 1 && (
                <ShippingStep
                  info={shippingInfo}
                  onChange={setShippingInfo}
                  errors={errors}
                  touched={touchedFields}
                  onBlur={(f) =>
                    setTouchedFields((p) => ({ ...p, [f]: true }))
                  }
                />
              )}
              {currentStep === 2 && (
                <PaymentStep
                  info={paymentInfo}
                  onChange={setPaymentInfo}
                  errors={errors}
                  touched={touchedFields}
                  onBlur={(f) =>
                    setTouchedFields((p) => ({ ...p, [f]: true }))
                  }
                  formatCardNumber={formatCardNumber}
                  formatExpiry={formatExpiry}
                />
              )}
              {currentStep === 3 && (
                <ReviewStep
                  items={items}
                  shippingInfo={shippingInfo}
                  paymentInfo={paymentInfo}
                  subtotal={subtotal}
                  discountAmount={discountAmount}
                  shipping={shipping}
                  total={total}
                  appliedCoupon={appliedCoupon}
                />
              )}
            </div>

            {/* ── Footer ── */}
            <ModalFooter
              currentStep={currentStep}
              onBack={handleBack}
              onNext={handleNext}
              onPlaceOrder={handlePlaceOrder}
              isProcessing={isProcessing}
              total={total}
            />
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal Header + Stepper                                          */
/* ------------------------------------------------------------------ */
function ModalHeader({ currentStep, onClose, isProcessing }) {
  return (
    <div
      className="co-head"
      style={{
        padding: "26px 40px 22px",
        borderBottom: `1.5px solid ${THEME.border}`,
        background: THEME.surface,
        flexShrink: 0,
      }}
    >
      {/* Title row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 22,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 5,
            }}
          >
            <div
              style={{
                width: 22,
                height: 1.5,
                background: `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})`,
              }}
            />
            <span
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 9,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: THEME.burgundy,
                fontWeight: 700,
              }}
            >
              Secure Checkout
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 26,
              fontWeight: 300,
              margin: 0,
              background: `linear-gradient(135deg,${THEME.text},${THEME.burgundy})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {CHECKOUT_STEPS.find((s) => s.id === currentStep)?.label}
          </h2>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          disabled={isProcessing}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: `1.5px solid ${THEME.border}`,
            background: THEME.surface,
            color: THEME.textMuted,
            cursor: isProcessing ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.borderColor = THEME.rose;
              e.currentTarget.style.color = THEME.burgundy;
              e.currentTarget.style.transform = "rotate(90deg)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = THEME.border;
            e.currentTarget.style.color = THEME.textMuted;
            e.currentTarget.style.transform = "rotate(0deg)";
          }}
        >
          ✕
        </button>
      </div>

      {/* Step bar */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {CHECKOUT_STEPS.map((step, i) => (
          <div
            key={step.id}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < CHECKOUT_STEPS.length - 1 ? 1 : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              {/* Circle */}
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 700,
                  transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  flexShrink: 0,
                  ...(currentStep > step.id
                    ? {
                        background: `linear-gradient(135deg,${THEME.success},#59b661)`,
                        color: "white",
                        boxShadow: `0 4px 12px ${THEME.success}44`,
                      }
                    : currentStep === step.id
                    ? {
                        background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
                        color: "white",
                        boxShadow: `0 4px 14px ${THEME.rose}44`,
                        animation: "pulseRing 2s ease-in-out infinite",
                      }
                    : {
                        background: `${THEME.blush}28`,
                        color: THEME.textMuted,
                        border: `1.5px solid ${THEME.border}`,
                      }),
                }}
              >
                {currentStep > step.id ? "✓" : step.icon}
              </div>
              {/* Label */}
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 11,
                  fontWeight: currentStep === step.id ? 700 : 500,
                  color:
                    currentStep >= step.id ? THEME.text : THEME.textMuted,
                  letterSpacing: "0.4px",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s",
                }}
              >
                {step.label}
              </span>
            </div>

            {/* Connector */}
            {i < CHECKOUT_STEPS.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  margin: "0 14px",
                  borderRadius: 1,
                  background: THEME.border,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: currentStep > step.id ? "100%" : "0%",
                    background: `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})`,
                    borderRadius: 1,
                    transition: "width 0.6s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal Footer                                                    */
/* ------------------------------------------------------------------ */
function ModalFooter({
  currentStep,
  onBack,
  onNext,
  onPlaceOrder,
  isProcessing,
  total,
}) {
  return (
    <div
      className="co-foot"
      style={{
        padding: "18px 40px",
        borderTop: `1.5px solid ${THEME.border}`,
        background: THEME.surface,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 14,
        flexShrink: 0,
      }}
    >
      {/* Back */}
      {currentStep > 1 ? (
        <button
          onClick={onBack}
          disabled={isProcessing}
          style={{
            padding: "12px 26px",
            background: "transparent",
            border: `1.5px solid ${THEME.border}`,
            color: THEME.text,
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11,
            letterSpacing: "1px",
            textTransform: "uppercase",
            cursor: isProcessing ? "not-allowed" : "pointer",
            borderRadius: 8,
            fontWeight: 600,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          onMouseEnter={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.borderColor = THEME.rose;
              e.currentTarget.style.color = THEME.burgundy;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = THEME.border;
            e.currentTarget.style.color = THEME.text;
          }}
        >
          ← Back
        </button>
      ) : (
        <div />
      )}

      {/* Security note */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          opacity: 0.6,
        }}
      >
        <span style={{ fontSize: 12 }}>🔒</span>
        <span
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 9,
            color: THEME.textMuted,
            letterSpacing: "0.5px",
          }}
        >
          SSL Encrypted
        </span>
      </div>

      {/* Next / Place Order */}
      {currentStep < 3 ? (
        <button
          onClick={onNext}
          style={{
            padding: "13px 38px",
            background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 700,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: `0 4px 16px ${THEME.rose}32`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${THEME.rose}44`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 4px 16px ${THEME.rose}32`;
          }}
        >
          Continue →
        </button>
      ) : (
        <button
          onClick={onPlaceOrder}
          disabled={isProcessing}
          style={{
            padding: "13px 32px",
            background: isProcessing
              ? THEME.textMuted
              : `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: isProcessing ? "not-allowed" : "pointer",
            fontWeight: 700,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: isProcessing ? "none" : `0 4px 16px ${THEME.rose}32`,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
          onMouseEnter={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 24px ${THEME.rose}44`;
            }
          }}
          onMouseLeave={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 16px ${THEME.rose}32`;
            }
          }}
        >
          {isProcessing ? (
            <>
              <div
                style={{
                  width: 15,
                  height: 15,
                  border: "2px solid rgba(255,255,255,0.35)",
                  borderTopColor: "white",
                  borderRadius: "50%",
                  animation: "spinLoader 0.75s linear infinite",
                }}
              />
              Processing…
            </>
          ) : (
            `Place Order  ₹${total.toLocaleString("en-IN")}`
          )}
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 1 – Shipping                                               */
/* ------------------------------------------------------------------ */
function ShippingStep({ info, onChange, errors, touched, onBlur }) {
  const set = (field, value) =>
    onChange((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="step-slide">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
        className="co-two-col"
      >
        <CoInput
          label="First Name"
          placeholder="Arya"
          icon="👤"
          value={info.firstName}
          onChange={(v) => set("firstName", v)}
          error={errors.firstName}
          touched={touched.firstName}
          onBlur={() => onBlur("firstName")}
        />
        <CoInput
          label="Last Name"
          placeholder="Sharma"
          value={info.lastName}
          onChange={(v) => set("lastName", v)}
          error={errors.lastName}
          touched={touched.lastName}
          onBlur={() => onBlur("lastName")}
        />
        <CoInput
          label="Email Address"
          placeholder="you@example.com"
          icon="✉"
          type="email"
          value={info.email}
          onChange={(v) => set("email", v)}
          error={errors.email}
          touched={touched.email}
          onBlur={() => onBlur("email")}
          full
        />
        <CoInput
          label="Phone Number"
          placeholder="9876543210"
          icon="📱"
          value={info.phone}
          onChange={(v) =>
            set("phone", v.replace(/\D/g, "").slice(0, 10))
          }
          error={errors.phone}
          touched={touched.phone}
          onBlur={() => onBlur("phone")}
          full
        />
        <CoInput
          label="Street Address"
          placeholder="123, Rose Garden Lane"
          icon="🏠"
          value={info.address}
          onChange={(v) => set("address", v)}
          error={errors.address}
          touched={touched.address}
          onBlur={() => onBlur("address")}
          full
        />
        <CoInput
          label="Apartment / Suite (Optional)"
          placeholder="Apt 4B, Floor 2"
          value={info.apartment}
          onChange={(v) => set("apartment", v)}
          full
        />
        <CoInput
          label="City"
          placeholder="Mumbai"
          value={info.city}
          onChange={(v) => set("city", v)}
          error={errors.city}
          touched={touched.city}
          onBlur={() => onBlur("city")}
        />
        <CoInput
          label="State"
          placeholder="Maharashtra"
          value={info.state}
          onChange={(v) => set("state", v)}
          error={errors.state}
          touched={touched.state}
          onBlur={() => onBlur("state")}
        />
        <CoInput
          label="Pincode"
          placeholder="400001"
          icon="📮"
          value={info.pincode}
          onChange={(v) =>
            set("pincode", v.replace(/\D/g, "").slice(0, 6))
          }
          error={errors.pincode}
          touched={touched.pincode}
          onBlur={() => onBlur("pincode")}
        />

        {/* Save address toggle */}
        <div style={{ gridColumn: "1 / -1", marginTop: 4 }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              padding: "11px 15px",
              borderRadius: 8,
              border: `1.5px solid ${
                info.saveAddress ? THEME.rose : THEME.border
              }`,
              background: info.saveAddress
                ? `${THEME.blush}20`
                : "transparent",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 4,
                border: `2px solid ${
                  info.saveAddress ? THEME.burgundy : THEME.border
                }`,
                background: info.saveAddress
                  ? `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`
                  : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              {info.saveAddress && (
                <span style={{ color: "white", fontSize: 11 }}>✓</span>
              )}
            </div>
            <input
              type="checkbox"
              checked={info.saveAddress}
              onChange={(e) => set("saveAddress", e.target.checked)}
              style={{ display: "none" }}
            />
            <span
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 12,
                color: THEME.text,
                fontWeight: 500,
              }}
            >
              Save this address for future orders
            </span>
          </label>
        </div>
      </div>

      {/* Trust badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 22,
          padding: "13px 17px",
          background: `linear-gradient(135deg,${THEME.blush}14,${THEME.champagne}12)`,
          borderRadius: 8,
          border: `1px solid ${THEME.border}`,
        }}
      >
        <span style={{ fontSize: 17 }}>🔒</span>
        <span
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11,
            color: THEME.textMuted,
          }}
        >
          Your information is encrypted and secure. We never share your
          details.
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 2 – Payment                                                */
/* ------------------------------------------------------------------ */
function PaymentStep({
  info,
  onChange,
  errors,
  touched,
  onBlur,
  formatCardNumber,
  formatExpiry,
}) {
  const set = (field, value) =>
    onChange((prev) => ({ ...prev, [field]: value }));

  const methods = [
    {
      id: "card",
      label: "Credit / Debit Card",
      icon: "💳",
      sub: "Visa · Mastercard · Rupay",
    },
    {
      id: "upi",
      label: "UPI Payment",
      icon: "📲",
      sub: "GPay · PhonePe · Paytm",
    },
    {
      id: "cod",
      label: "Cash on Delivery",
      icon: "💵",
      sub: "Pay when you receive",
    },
  ];

  return (
    <div className="step-slide">
      {/* Method selector */}
      <SectionLabel text="Select Payment Method" />
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 26 }}
      >
        {methods.map((m) => (
          <div
            key={m.id}
            className={`pm-card ${info.method === m.id ? "active" : ""}`}
            onClick={() => set("method", m.id)}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background:
                  info.method === m.id
                    ? `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`
                    : `${THEME.blush}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 19,
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              {m.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: THEME.text,
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 10,
                  color: THEME.textMuted,
                }}
              >
                {m.sub}
              </div>
            </div>
            {/* Radio dot */}
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: `2px solid ${
                  info.method === m.id ? THEME.burgundy : THEME.border
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              {info.method === m.id && (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
                    animation: "fadeInScale 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Card fields */}
      {info.method === "card" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            animation: "floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          className="co-two-col"
        >
          <CoInput
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            icon="💳"
            value={info.cardNumber}
            onChange={(v) => set("cardNumber", formatCardNumber(v))}
            error={errors.cardNumber}
            touched={touched.cardNumber}
            onBlur={() => onBlur("cardNumber")}
            maxLength={19}
            full
          />
          <CoInput
            label="Name on Card"
            placeholder="ARYA SHARMA"
            value={info.cardName}
            onChange={(v) => set("cardName", v.toUpperCase())}
            error={errors.cardName}
            touched={touched.cardName}
            onBlur={() => onBlur("cardName")}
            full
          />
          <CoInput
            label="Expiry (MM/YY)"
            placeholder="MM/YY"
            value={info.expiry}
            onChange={(v) => set("expiry", formatExpiry(v))}
            error={errors.expiry}
            touched={touched.expiry}
            onBlur={() => onBlur("expiry")}
            maxLength={5}
          />
          <CoInput
            label="CVV"
            placeholder="•••"
            type="password"
            value={info.cvv}
            onChange={(v) =>
              set("cvv", v.replace(/\D/g, "").slice(0, 4))
            }
            error={errors.cvv}
            touched={touched.cvv}
            onBlur={() => onBlur("cvv")}
            maxLength={4}
          />
        </div>
      )}

      {/* UPI field */}
      {info.method === "upi" && (
        <div
          style={{ animation: "floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}
        >
          <CoInput
            label="UPI ID"
            placeholder="yourname@paytm"
            icon="📲"
            value={info.upiId}
            onChange={(v) => set("upiId", v)}
            error={errors.upiId}
            touched={touched.upiId}
            onBlur={() => onBlur("upiId")}
            full
          />
        </div>
      )}

      {/* COD info */}
      {info.method === "cod" && (
        <div
          style={{
            padding: "18px 22px",
            background: `linear-gradient(135deg,${THEME.champagne}20,${THEME.blush}14)`,
            borderRadius: 10,
            border: `1.5px solid ${THEME.champagne}44`,
            animation: "floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 20 }}>📦</span>
            <span
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: THEME.text,
              }}
            >
              Cash on Delivery
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 12,
              color: THEME.textMuted,
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Pay with cash at your door. An additional ₹49 COD handling fee
            applies. Please keep exact change ready.
          </p>
        </div>
      )}

      {/* Security badges */}
      <div
        style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}
      >
        {["🔒 SSL Encrypted", "🛡️ Secure Payment", "✓ PCI Compliant"].map(
          (b) => (
            <span
              key={b}
              style={{
                padding: "7px 13px",
                background: `${THEME.blush}14`,
                borderRadius: 20,
                border: `1px solid ${THEME.border}`,
                fontFamily: "'Poppins',sans-serif",
                fontSize: 9,
                color: THEME.textMuted,
                fontWeight: 500,
                letterSpacing: "0.3px",
              }}
            >
              {b}
            </span>
          )
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 3 – Review                                                 */
/* ------------------------------------------------------------------ */
function ReviewStep({
  items,
  shippingInfo,
  paymentInfo,
  subtotal,
  discountAmount,
  shipping,
  total,
  appliedCoupon,
}) {
  const pmLabel = {
    card: "Credit / Debit Card",
    upi: "UPI Payment",
    cod: "Cash on Delivery",
  };

  return (
    <div className="step-slide">
      {/* Items */}
      <SectionLabel text="Items in Your Order" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxHeight: 210,
          overflowY: "auto",
          paddingRight: 6,
          marginBottom: 24,
        }}
        className="modal-scroll"
      >
        {items.map((item, i) => {
          const product = item.product || item;
          const img = getProductImage(product);
          const name = product.name || "Product";
          const price = Number(product.price || 0);
          const qty = item.quantity || 1;
          return (
            <div
              key={item._id || i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                padding: "11px 14px",
                background: THEME.surface,
                borderRadius: 8,
                border: `1px solid ${THEME.border}`,
                animation: `floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1) ${
                  i * 0.08
                }s both`,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 6,
                  overflow: "hidden",
                  background: `${THEME.blush}20`,
                  flexShrink: 0,
                }}
              >
                {img && (
                  <img
                    src={img}
                    alt={name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 15,
                    color: THEME.text,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 10,
                    color: THEME.textMuted,
                  }}
                >
                  Qty: {qty}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: THEME.burgundy,
                  whiteSpace: "nowrap",
                }}
              >
                ₹{(price * qty).toLocaleString("en-IN")}
              </div>
            </div>
          );
        })}
      </div>

      {/* Shipping + Payment summary cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          marginBottom: 22,
        }}
        className="co-two-col"
      >
        {/* Shipping card */}
        <div
          style={{
            padding: "18px 20px",
            background: THEME.surface,
            borderRadius: 10,
            border: `1.5px solid ${THEME.border}`,
          }}
        >
          <SectionLabel text="Deliver To" small />
          <p
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 13,
              color: THEME.text,
              fontWeight: 600,
              margin: "0 0 4px",
            }}
          >
            {shippingInfo.firstName} {shippingInfo.lastName}
          </p>
          <p
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 11,
              color: THEME.textMuted,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {shippingInfo.address}
            {shippingInfo.apartment ? `, ${shippingInfo.apartment}` : ""}
            <br />
            {shippingInfo.city}, {shippingInfo.state} –{" "}
            {shippingInfo.pincode}
            <br />
            📱 {shippingInfo.phone}
          </p>
        </div>

        {/* Payment card */}
        <div
          style={{
            padding: "18px 20px",
            background: THEME.surface,
            borderRadius: 10,
            border: `1.5px solid ${THEME.border}`,
          }}
        >
          <SectionLabel text="Payment" small />
          <p
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 13,
              color: THEME.text,
              fontWeight: 600,
              margin: "0 0 4px",
            }}
          >
            {pmLabel[paymentInfo.method]}
          </p>
          {paymentInfo.method === "card" && (
            <p
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 11,
                color: THEME.textMuted,
                margin: 0,
              }}
            >
              •••• •••• ••••{" "}
              {paymentInfo.cardNumber.replace(/\s/g, "").slice(-4)}
            </p>
          )}
          {paymentInfo.method === "upi" && (
            <p
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 11,
                color: THEME.textMuted,
                margin: 0,
              }}
            >
              {paymentInfo.upiId}
            </p>
          )}
        </div>
      </div>

      {/* Price breakdown */}
      <div
        style={{
          padding: "22px 24px",
          background: `linear-gradient(135deg,${THEME.blush}14,${THEME.champagne}10)`,
          borderRadius: 10,
          border: `1.5px solid ${THEME.border}`,
        }}
      >
        <SectionLabel text="Price Summary" small />
        <ReviewRow
          label="Subtotal"
          value={`₹${subtotal.toLocaleString("en-IN")}`}
        />
        {discountAmount > 0 && (
          <ReviewRow
            label={`Coupon (${(
              appliedCoupon?.code ||
              appliedCoupon?.offercode ||
              ""
            ).toUpperCase()})`}
            value={`-₹${discountAmount.toLocaleString("en-IN")}`}
            green
          />
        )}
        <ReviewRow
          label="Shipping"
          value={shipping === 0 ? "Free ✨" : `₹${shipping}`}
          highlight={shipping === 0}
        />
        {paymentInfo.method === "cod" && (
          <ReviewRow label="COD Fee" value="₹49 (at delivery)" muted />
        )}
        <div
          style={{
            borderTop: `1.5px solid ${THEME.border}`,
            margin: "12px 0 14px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 18,
              color: THEME.text,
            }}
          >
            Total Amount
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 30,
              fontWeight: 600,
              background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Order Success Screen                                            */
/* ------------------------------------------------------------------ */
function OrderSuccess({ orderId, onClose, navigate }) {
  const colors = [
    THEME.rose,
    THEME.burgundy,
    THEME.champagne,
    THEME.blush,
    THEME.gold,
    THEME.success,
  ];

  return (
    <div
      style={{
        padding: "56px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti */}
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${35 + Math.random() * 30}%`,
            width: `${4 + Math.random() * 9}px`,
            height: `${4 + Math.random() * 9}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animation: `confettiFall ${1.2 + Math.random() * 1.4}s ease-out ${
              Math.random() * 0.8
            }s forwards`,
          }}
        />
      ))}

      {/* Check circle */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: `linear-gradient(135deg,${THEME.success}22,${THEME.success}10)`,
          border: `3px solid ${THEME.success}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 26px",
          animation: "fadeInScale 0.55s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 50 50">
          <path
            d="M13 27 L22 36 L38 16"
            fill="none"
            stroke={THEME.success}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 56,
              animation: "checkDraw 0.55s 0.45s ease-out both",
            }}
          />
        </svg>
      </div>

      <h2
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 36,
          fontWeight: 300,
          margin: "0 0 8px",
          background: `linear-gradient(135deg,${THEME.text},${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "floatUp 0.45s 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        Order Confirmed!
      </h2>

      <p
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 13,
          color: THEME.textMuted,
          margin: "0 0 28px",
          lineHeight: 1.7,
          animation: "floatUp 0.45s 0.45s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        Thank you for your purchase. Your order has been placed
        <br />
        and will be processed shortly.
      </p>

      {/* Order ID */}
      <div
        style={{
          display: "inline-block",
          padding: "18px 38px",
          background: `linear-gradient(135deg,${THEME.blush}22,${THEME.champagne}15)`,
          borderRadius: 12,
          border: `1.5px solid ${THEME.rose}44`,
          marginBottom: 30,
          animation: "floatUp 0.45s 0.55s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 9,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: THEME.textMuted,
            marginBottom: 5,
            fontWeight: 600,
          }}
        >
          Order ID
        </div>
        <div
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: THEME.burgundy,
            letterSpacing: "2px",
          }}
        >
          {orderId}
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 28,
          marginBottom: 36,
          flexWrap: "wrap",
          animation: "floatUp 0.45s 0.65s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {[
          { icon: "📧", text: "Confirmation email sent" },
          { icon: "📦", text: "Ships in 2-3 days" },
          { icon: "🚚", text: "Live tracking available" },
        ].map((t, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 7 }}
          >
            <span style={{ fontSize: 15 }}>{t.icon}</span>
            <span
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 11,
                color: THEME.textMuted,
                fontWeight: 500,
              }}
            >
              {t.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "center",
          flexWrap: "wrap",
          animation: "floatUp 0.45s 0.75s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <button
          onClick={() => {
            onClose();
            navigate("/products");
          }}
          style={{
            padding: "13px 34px",
            background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 700,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: `0 4px 16px ${THEME.rose}32`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${THEME.rose}44`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 4px 16px ${THEME.rose}32`;
          }}
        >
          Continue Shopping
        </button>
        <button
          onClick={() => {
            onClose();
            navigate("/orders");
          }}
          style={{
            padding: "13px 34px",
            background: "transparent",
            border: `1.5px solid ${THEME.rose}`,
            color: THEME.burgundy,
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 600,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`;
            e.currentTarget.style.color = "white";
            e.currentTarget.style.borderColor = "transparent";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = THEME.burgundy;
            e.currentTarget.style.borderColor = THEME.rose;
          }}
        >
          View Orders
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Shared small components                                           */
/* ================================================================== */
function CoInput({
  label,
  placeholder,
  value,
  onChange,
  error,
  touched,
  onBlur,
  type = "text",
  icon,
  full,
  maxLength,
}) {
  const showErr = error && touched;
  return (
    <div style={{ gridColumn: full ? "1 / -1" : undefined }}>
      <label
        style={{
          display: "block",
          fontFamily: "'Poppins',sans-serif",
          fontSize: 9,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: showErr ? THEME.error : THEME.textMuted,
          fontWeight: 700,
          marginBottom: 6,
          transition: "color 0.25s",
        }}
      >
        {icon && <span style={{ marginRight: 5 }}>{icon}</span>}
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        maxLength={maxLength}
        className={`co-input${showErr ? " err" : ""}`}
      />
      {showErr && (
        <div
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 10,
            color: THEME.error,
            marginTop: 4,
            fontWeight: 500,
            animation: "floatUp 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          ✕ {error}
        </div>
      )}
    </div>
  );
}

function SectionLabel({ text, small }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        marginBottom: small ? 13 : 18,
      }}
    >
      <div
        style={{
          width: 15,
          height: 1.5,
          background: `linear-gradient(90deg,${THEME.rose},${THEME.burgundy})`,
        }}
      />
      <span
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: small ? 9 : 10,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: THEME.burgundy,
          fontWeight: 700,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function ReviewRow({ label, value, green, highlight, muted }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 9,
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 11,
          color: THEME.textMuted,
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 12,
          color: green
            ? THEME.success
            : highlight
            ? THEME.burgundy
            : muted
            ? THEME.textMuted
            : THEME.text,
          fontWeight: green ? 700 : 600,
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* ================================================================== */
/*  MAIN CART PAGE                                                    */
/* ================================================================== */
export default function Cart() {
  const navigate = useNavigate();
  const { items, loading, removeFromCart, updateQuantity } = useCart();
  const { success, error: showError } = useToast();

  const [offersList, setOffersList] = useState([]);
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [removingItems, setRemovingItems] = useState(new Set());
  const [updatingQty, setUpdatingQty] = useState(new Set());
  const [showCheckout, setShowCheckout] = useState(false); // ← checkout modal

  const notLoggedIn = useMemo(
    () => !localStorage.getItem("arke_token"),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOffers = async () => {
      try {
        // TODO: replace with real endpoint
      } catch (err) {
        console.error("Failed to load offers:", err);
      }
    };
    fetchOffers();
  }, []);

  /* handlers */
  const handleRemove = async (cartItemId, productId) => {
    setRemovingItems((prev) => new Set([...prev, cartItemId]));
    try {
      await removeFromCart(productId);
      success("Item removed from cart");
    } catch (err) {
      showError("Failed to remove item");
      console.error(err);
    } finally {
      setRemovingItems((prev) => {
        const next = new Set(prev);
        next.delete(cartItemId);
        return next;
      });
    }
  };

  const handleUpdateQty = async (cartItemId, productId, newQty) => {
    if (newQty < 1) return;
    setUpdatingQty((prev) => new Set([...prev, cartItemId]));
    try {
      await updateQuantity(productId, newQty);
      success(`Quantity updated to ${newQty}`);
    } catch (err) {
      showError("Failed to update quantity");
      console.error(err);
    } finally {
      setUpdatingQty((prev) => {
        const next = new Set(prev);
        next.delete(cartItemId);
        return next;
      });
    }
  };

  /* totals */
  const subtotal = items.reduce((acc, item) => {
    const product = item.product || item;
    const price = Number(product.price || product.salePrice || 0);
    return acc + price * (item.quantity || 1);
  }, 0);

  const discountAmount = (() => {
    if (!appliedCoupon) return 0;
    const val = Number(
      appliedCoupon.discountValue || appliedCoupon.offerValue || 0
    );
    const type =
      appliedCoupon.discountType || appliedCoupon.offertype || "flat";
    if (type === "percentage") return Math.round((subtotal * val) / 100);
    return Math.min(val, subtotal);
  })();

  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal - discountAmount + shipping;

  /* coupon */
  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) { setCouponError("Please enter a coupon code"); return; }
    const found = offersList.find(
      (o) => (o.code || o.offercode || "").toUpperCase() === code
    );
    if (!found) {
      setCouponError("Invalid or expired coupon code");
      setAppliedCoupon(null);
      return;
    }
    if (found.expiryDate && new Date(found.expiryDate) < new Date()) {
      setCouponError("This coupon has expired");
      setAppliedCoupon(null);
      return;
    }
    const minOrder = Number(found.minOrderAmount || found.minOrder || 0);
    if (subtotal < minOrder) {
      setCouponError(`Minimum order ₹${minOrder.toLocaleString("en-IN")} required`);
      setAppliedCoupon(null);
      return;
    }
    setAppliedCoupon(found);
    setCouponError("");
    success("Coupon applied successfully!");
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponError("");
  };

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: 120 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        .cart-header  { animation:fadeInUp 0.8s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-items   { animation:fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-sidebar { animation:fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1); }
        @media (max-width:1024px) { .cart-container { grid-template-columns:1fr!important; } }
        @media (max-width:768px)  {
          .cart-header { padding:40px 20px!important; }
          .cart-main   { padding:24px 20px!important; }
        }
      `}</style>

      <CartHeader itemCount={items.length} />

      {loading ? (
        <LoadingState />
      ) : notLoggedIn ? (
        <EmptyState
          icon="◇"
          title="Sign in to view your cart"
          sub="Your saved items will appear here"
          btn="Sign In"
          onClick={() => navigate("/")}
        />
      ) : items.length === 0 ? (
        <EmptyState
          icon="◈"
          title="Your cart is empty"
          sub="Discover pieces crafted just for you"
          btn="Shop Now"
          onClick={() => navigate("/products")}
        />
      ) : (
        <div
          className="cart-main"
          style={{
            padding: "48px 80px",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 48,
            alignItems: "start",
          }}
        >
          <CartItemsColumn
            items={items}
            removingItems={removingItems}
            updatingQty={updatingQty}
            onRemove={handleRemove}
            onUpdateQty={handleUpdateQty}
            navigate={navigate}
          />
          <CartSidebar
            subtotal={subtotal}
            discountAmount={discountAmount}
            shipping={shipping}
            total={total}
            appliedCoupon={appliedCoupon}
            couponInput={couponInput}
            couponError={couponError}
            onCouponChange={setCouponInput}
            onApplyCoupon={handleApplyCoupon}
            onRemoveCoupon={handleRemoveCoupon}
            onCouponErrorClear={() => setCouponError("")}
            onCheckout={() => setShowCheckout(true)}
          />
        </div>
      )}

      {/* ── Checkout Modal ── */}
      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        items={items}
        subtotal={subtotal}
        discountAmount={discountAmount}
        shipping={shipping}
        total={total}
        appliedCoupon={appliedCoupon}
      />
    </div>
  );
}

/* ================================================================== */
/*  Cart sub-components (unchanged)                                   */
/* ================================================================== */
function CartHeader({ itemCount }) {
  return (
    <div
      className="cart-header"
      style={{ padding: "60px 80px 40px", borderBottom: `1.5px solid ${THEME.border}` }}
    >
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
          Your Selection
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(36px,4vw,56px)",
            fontWeight: 300,
            color: THEME.text,
            margin: 0,
            background: `linear-gradient(135deg,${THEME.text},${THEME.burgundy})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Shopping Cart
        </h1>
        {itemCount > 0 && (
          <span
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 12,
              color: THEME.textMuted,
              letterSpacing: 1,
              fontWeight: 500,
            }}
          >
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        )}
      </div>
    </div>
  );
}

function CartItemsColumn({ items, removingItems, updatingQty, onRemove, onUpdateQty, navigate }) {
  return (
    <div className="cart-items">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr auto auto",
          gap: 24,
          paddingBottom: 16,
          borderBottom: `1.5px solid ${THEME.border}`,
          marginBottom: 8,
        }}
      >
        {["Product", "", "Qty", "Price"].map((h) => (
          <span
            key={h || "details"}
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 9,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: THEME.textMuted,
              fontWeight: 600,
            }}
          >
            {h}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item) => {
          const cartItemId = item._id || item.id;
          const product = item.product || item;
          const productId = product._id || product.id;
          return (
            <CartItem
              key={cartItemId}
              item={item}
              isRemoving={removingItems.has(cartItemId)}
              isUpdatingQty={updatingQty.has(cartItemId)}
              onRemove={() => onRemove(cartItemId, productId)}
              onUpdateQty={(qty) => onUpdateQty(cartItemId, productId, qty)}
              navigate={navigate}
            />
          );
        })}
      </div>
    </div>
  );
}

function CartItem({ item, isRemoving, isUpdatingQty, onRemove, onUpdateQty, navigate }) {
  const product = item.product || {};
  const img = getProductImage(product);
  const name = product.name || "Unknown Product";
  const price = Number(product.price || 0);
  const qty = item.quantity || 1;
  const pid = product._id || product.id;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr auto auto",
        gap: 24,
        padding: "24px 0",
        borderBottom: `1px solid ${THEME.border}`,
        alignItems: "center",
        opacity: isRemoving ? 0.5 : 1,
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        pointerEvents: isRemoving ? "none" : "auto",
      }}
    >
      {/* Image */}
      <div
        style={{
          width: 120,
          height: 140,
          flexShrink: 0,
          overflow: "hidden",
          cursor: "pointer",
          borderRadius: 6,
          backgroundColor: `${THEME.blush}20`,
          transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        onClick={() => navigate(`/products/${pid}`)}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 8px 20px ${THEME.rose}25`;
          e.currentTarget.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {img ? (
          <img
            src={img}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onError={(e) => (e.target.style.display = "none")}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        ) : (
          <ProductPlaceholder product={product} small />
        )}
      </div>

      {/* Details */}
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 18,
            fontWeight: 400,
            color: THEME.text,
            marginBottom: 8,
            cursor: "pointer",
            lineHeight: 1.3,
            transition: "color 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          onClick={() => navigate(`/product/${pid}`)}
          onMouseEnter={(e) => (e.currentTarget.style.color = THEME.burgundy)}
          onMouseLeave={(e) => (e.currentTarget.style.color = THEME.text)}
        >
          {name}
        </div>
        {product.metal_type && (
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 11,
              color: THEME.textMuted,
              letterSpacing: 0.5,
              marginBottom: 4,
            }}
          >
            Metal: {product.metal_type}
          </div>
        )}
        {product.type && (
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 11,
              color: THEME.textMuted,
              letterSpacing: 0.5,
              marginBottom: 12,
            }}
          >
            {product.type}
          </div>
        )}
        <button
          onClick={onRemove}
          disabled={isRemoving}
          style={{
            background: "none",
            border: "none",
            color: THEME.rose,
            cursor: isRemoving ? "not-allowed" : "pointer",
            fontFamily: "'Poppins',sans-serif",
            fontSize: 10,
            letterSpacing: "1px",
            textTransform: "uppercase",
            padding: 0,
            transition: "color 0.2s",
            fontWeight: 600,
          }}
          onMouseEnter={(e) =>
            !isRemoving && (e.target.style.color = THEME.error)
          }
          onMouseLeave={(e) =>
            !isRemoving && (e.target.style.color = THEME.rose)
          }
        >
          {isRemoving ? "Removing…" : "× Remove"}
        </button>
      </div>

      {/* Qty */}
      <QuantitySelector qty={qty} isUpdating={isUpdatingQty} onUpdateQty={onUpdateQty} />

      {/* Price */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 18,
          background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textAlign: "right",
          whiteSpace: "nowrap",
          fontWeight: 400,
        }}
      >
        ₹{(price * qty).toLocaleString("en-IN")}
      </div>
    </div>
  );
}

function QuantitySelector({ qty, isUpdating, onUpdateQty }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: `${THEME.blush}20`,
        border: `1.5px solid ${THEME.border}`,
        borderRadius: 6,
        padding: "4px 8px",
        opacity: isUpdating ? 0.6 : 1,
        pointerEvents: isUpdating ? "none" : "auto",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <button
        onClick={() => onUpdateQty(Math.max(1, qty - 1))}
        disabled={isUpdating || qty <= 1}
        style={{
          background: "none",
          border: "none",
          color: THEME.rose,
          cursor: isUpdating || qty <= 1 ? "not-allowed" : "pointer",
          fontSize: 16,
          padding: "2px 6px",
          transition: "color 0.2s",
          fontWeight: 600,
        }}
        onMouseEnter={(e) =>
          !isUpdating && qty > 1 && (e.target.style.color = THEME.burgundy)
        }
        onMouseLeave={(e) => (e.target.style.color = THEME.rose)}
      >
        −
      </button>
      <span
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 13,
          color: THEME.text,
          minWidth: 24,
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        {qty}
      </span>
      <button
        onClick={() => onUpdateQty(qty + 1)}
        disabled={isUpdating}
        style={{
          background: "none",
          border: "none",
          color: THEME.rose,
          cursor: isUpdating ? "not-allowed" : "pointer",
          fontSize: 16,
          padding: "2px 6px",
          transition: "color 0.2s",
          fontWeight: 600,
        }}
        onMouseEnter={(e) =>
          !isUpdating && (e.target.style.color = THEME.burgundy)
        }
        onMouseLeave={(e) => (e.target.style.color = THEME.rose)}
      >
        +
      </button>
    </div>
  );
}

function CartSidebar({
  subtotal,
  discountAmount,
  shipping,
  total,
  appliedCoupon,
  couponInput,
  couponError,
  onCouponChange,
  onApplyCoupon,
  onRemoveCoupon,
  onCouponErrorClear,
  onCheckout,
}) {
  return (
    <div
      className="cart-sidebar"
      style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 140 }}
    >
      <div
        style={{
          background: THEME.surface,
          border: `1.5px solid ${THEME.border}`,
          padding: 40,
          borderRadius: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
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
            Order Summary
          </span>
        </div>

        <SummaryRow label="Subtotal" value={`₹${subtotal.toLocaleString("en-IN")}`} />
        {discountAmount > 0 && (
          <SummaryRow
            label={`Discount (${(
              appliedCoupon?.code || appliedCoupon?.offercode || ""
            ).toUpperCase()})`}
            value={`-₹${discountAmount.toLocaleString("en-IN")}`}
            highlight
            green
          />
        )}
        <SummaryRow
          label="Shipping"
          value={shipping === 0 ? "Free" : `₹${shipping}`}
          highlight={shipping === 0}
        />
        {shipping > 0 && (
          <div
            style={{
              background: `${THEME.blush}20`,
              border: `1px solid ${THEME.rose}40`,
              padding: "10px 14px",
              marginBottom: 20,
              borderRadius: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 10,
                color: THEME.rose,
                letterSpacing: 0.5,
                fontWeight: 500,
              }}
            >
              Add ₹{Math.max(0, 999 - subtotal).toLocaleString("en-IN")} for free shipping
            </span>
          </div>
        )}

        <div style={{ borderTop: `1px solid ${THEME.border}`, margin: "20px 0 24px" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 28,
          }}
        >
          <span
            style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: THEME.text }}
          >
            Total
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 28,
              background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 400,
            }}
          >
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Coupon */}
        <div style={{ borderTop: `1px solid ${THEME.border}`, paddingTop: 24, marginBottom: 24 }}>
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 10,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: THEME.textMuted,
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            Apply Coupon
          </div>
          {!appliedCoupon ? (
            <>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => {
                    onCouponChange(e.target.value.toUpperCase());
                    onCouponErrorClear();
                  }}
                  onKeyDown={(e) => e.key === "Enter" && onApplyCoupon()}
                  placeholder="ENTER CODE"
                  style={{
                    flex: 1,
                    background: `${THEME.blush}20`,
                    border: `1.5px solid ${THEME.border}`,
                    color: THEME.text,
                    padding: "10px 14px",
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 11,
                    letterSpacing: "1px",
                    outline: "none",
                    borderRadius: 6,
                    transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = THEME.rose;
                    e.target.style.background = `${THEME.blush}30`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = THEME.border;
                    e.target.style.background = `${THEME.blush}20`;
                  }}
                />
                <button
                  onClick={onApplyCoupon}
                  style={{
                    padding: "10px 18px",
                    background: "transparent",
                    border: `1.5px solid ${THEME.rose}`,
                    color: THEME.burgundy,
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 10,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    whiteSpace: "nowrap",
                    borderRadius: 6,
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`;
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = THEME.burgundy;
                    e.currentTarget.style.borderColor = THEME.rose;
                  }}
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <div
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 10,
                    color: THEME.error,
                    letterSpacing: "0.3px",
                    fontWeight: 500,
                  }}
                >
                  ✕ {couponError}
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: `${THEME.blush}20`,
                border: `1.5px solid ${THEME.rose}`,
                padding: "12px 14px",
                borderRadius: 6,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 9,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: THEME.rose,
                    marginBottom: 2,
                    fontWeight: 700,
                  }}
                >
                  ✓ Coupon Applied
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: THEME.text,
                    letterSpacing: "0.5px",
                  }}
                >
                  {(appliedCoupon.code || appliedCoupon.offercode || "").toUpperCase()}
                </div>
              </div>
              <button
                onClick={onRemoveCoupon}
                style={{
                  background: "none",
                  border: "none",
                  color: THEME.rose,
                  cursor: "pointer",
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => (e.target.style.color = THEME.error)}
                onMouseLeave={(e) => (e.target.style.color = THEME.rose)}
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Checkout button */}
        <button
          onClick={onCheckout}
          style={{
            width: "100%",
            padding: 16,
            background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 700,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            borderRadius: 6,
            boxShadow: `0 4px 16px ${THEME.rose}30`,
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = `0 8px 24px ${THEME.rose}40`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = `0 4px 16px ${THEME.rose}30`;
          }}
        >
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, highlight, green }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 16,
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 11,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: THEME.textMuted,
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 13,
          color: green ? THEME.success : highlight ? THEME.burgundy : THEME.text,
          fontWeight: green ? 700 : 600,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function LoadingState() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 120,
        gap: 20,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: `3px solid ${THEME.border}`,
          borderTopColor: THEME.rose,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <span
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 18,
          color: THEME.textMuted,
          fontStyle: "italic",
          fontWeight: 300,
        }}
      >
        Loading your cart…
      </span>
    </div>
  );
}

function EmptyState({ icon, title, sub, btn, onClick }) {
  return (
    <div style={{ textAlign: "center", padding: "120px 80px" }}>
      <div style={{ fontSize: 56, color: `${THEME.rose}40`, marginBottom: 24 }}>
        {icon}
      </div>
      <div
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 32,
          fontWeight: 300,
          color: THEME.text,
          marginBottom: 12,
          background: `linear-gradient(135deg,${THEME.text},${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: 13,
          color: THEME.textMuted,
          letterSpacing: 0.5,
          marginBottom: 40,
        }}
      >
        {sub}
      </div>
      <button
        onClick={onClick}
        style={{
          padding: "14px 48px",
          background: `linear-gradient(135deg,${THEME.rose},${THEME.burgundy})`,
          color: "white",
          border: "none",
          fontFamily: "'Poppins',sans-serif",
          fontSize: 11,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          cursor: "pointer",
          fontWeight: 700,
          borderRadius: 6,
          transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: `0 4px 16px ${THEME.rose}30`,
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = `0 8px 24px ${THEME.rose}40`;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = `0 4px 16px ${THEME.rose}30`;
        }}
      >
        {btn}
      </button>
    </div>
  );
}
