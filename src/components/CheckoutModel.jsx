// components/CheckoutModal.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";
import { getProductImage } from "../services/api";
import OrderSuccess from "./OrderSuccess";

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

const STEPS = [
  { id: 1, label: "Shipping", icon: "📍" },
  { id: 2, label: "Payment", icon: "💳" },
  { id: 3, label: "Review", icon: "✦" },
];

export default function CheckoutModal({
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
  const { clearCart } = useCart();
  const { success, error: showError } = useToast();
  const modalRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [animateIn, setAnimateIn] = useState(false);

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
    saveCard: false,
  });

  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

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
      if (!orderPlaced) {
        setCurrentStep(1);
      }
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isProcessing) {
      handleClose();
    }
  };

  // Validation
  const validateShipping = () => {
    const newErrors = {};
    if (!shippingInfo.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!shippingInfo.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!shippingInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingInfo.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!shippingInfo.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(shippingInfo.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!shippingInfo.address.trim())
      newErrors.address = "Address is required";
    if (!shippingInfo.city.trim()) newErrors.city = "City is required";
    if (!shippingInfo.state.trim()) newErrors.state = "State is required";
    if (!shippingInfo.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(shippingInfo.pincode)) {
      newErrors.pincode = "Invalid pincode";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors = {};
    if (paymentInfo.method === "card") {
      if (!paymentInfo.cardNumber.replace(/\s/g, "").trim())
        newErrors.cardNumber = "Card number is required";
      else if (paymentInfo.cardNumber.replace(/\s/g, "").length < 16)
        newErrors.cardNumber = "Invalid card number";
      if (!paymentInfo.cardName.trim())
        newErrors.cardName = "Name on card is required";
      if (!paymentInfo.expiry.trim()) {
        newErrors.expiry = "Expiry is required";
      } else if (!/^\d{2}\/\d{2}$/.test(paymentInfo.expiry)) {
        newErrors.expiry = "Use MM/YY format";
      }
      if (!paymentInfo.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) {
        newErrors.cvv = "Invalid CVV";
      }
    } else if (paymentInfo.method === "upi") {
      if (!paymentInfo.upiId.trim())
        newErrors.upiId = "UPI ID is required";
      else if (!paymentInfo.upiId.includes("@"))
        newErrors.upiId = "Invalid UPI ID";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      // Simulate API call
      await new Promise((r) => setTimeout(r, 3000));
      const fakeOrderId =
        "ARK-" +
        Date.now().toString(36).toUpperCase() +
        Math.random().toString(36).substring(2, 6).toUpperCase();
      setOrderId(fakeOrderId);
      setOrderPlaced(true);
      success("Order placed successfully! 🎉");
    } catch (err) {
      showError("Failed to place order. Please try again.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (val) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 16);
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    }
    return cleaned;
  };

  const handleFieldBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
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
        background: animateIn ? "rgba(42,42,42,0.6)" : "rgba(42,42,42,0)",
        backdropFilter: animateIn ? "blur(12px)" : "blur(0px)",
        WebkitBackdropFilter: animateIn ? "blur(12px)" : "blur(0px)",
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        padding: 20,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes confetti {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.05); }
        }
        @keyframes checkmark {
          0%   { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 8px ${THEME.rose}40; }
          50%      { box-shadow: 0 0 20px ${THEME.rose}60; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .checkout-modal {
          animation: modalSlideUp 0.5s cubic-bezier(0.34,1.56,0.64,1);
        }

        .checkout-modal::-webkit-scrollbar { width: 6px; }
        .checkout-modal::-webkit-scrollbar-track { background: transparent; }
        .checkout-modal::-webkit-scrollbar-thumb {
          background: ${THEME.border};
          border-radius: 3px;
        }
        .checkout-modal::-webkit-scrollbar-thumb:hover {
          background: ${THEME.rose};
        }

        .checkout-input {
          width: 100%;
          background: ${THEME.blush}15;
          border: 1.5px solid ${THEME.border};
          color: ${THEME.text};
          padding: 14px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          outline: none;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          box-sizing: border-box;
        }
        .checkout-input:focus {
          border-color: ${THEME.rose};
          background: ${THEME.blush}25;
          box-shadow: 0 0 0 4px ${THEME.rose}15;
        }
        .checkout-input.error {
          border-color: ${THEME.error};
          background: ${THEME.error}08;
        }
        .checkout-input::placeholder {
          color: ${THEME.textMuted};
          font-size: 12px;
        }

        .step-content-enter {
          animation: slideInRight 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }

        .payment-method-card {
          cursor: pointer;
          border: 1.5px solid ${THEME.border};
          border-radius: 10px;
          padding: 16px 20px;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          background: ${THEME.surface};
        }
        .payment-method-card:hover {
          border-color: ${THEME.rose};
          transform: translateY(-2px);
          box-shadow: 0 4px 16px ${THEME.rose}20;
        }
        .payment-method-card.active {
          border-color: ${THEME.burgundy};
          background: linear-gradient(135deg, ${THEME.blush}20, ${THEME.champagne}15);
          box-shadow: 0 4px 16px ${THEME.rose}25;
        }

        .confetti-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: confetti 1.5s ease-out forwards;
        }

        @media (max-width: 768px) {
          .checkout-grid { grid-template-columns: 1fr !important; }
          .checkout-modal { max-height: 95vh !important; width: 100% !important; }
          .checkout-body { padding: 20px !important; }
          .checkout-header { padding: 20px !important; }
        }
      `}</style>

      <div
        ref={modalRef}
        className="checkout-modal"
        style={{
          width: "100%",
          maxWidth: orderPlaced ? 520 : 900,
          maxHeight: "90vh",
          background: THEME.bg,
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: `0 24px 80px rgba(0,0,0,0.15), 0 0 0 1px ${THEME.border}`,
          transform: animateIn ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
          opacity: animateIn ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {orderPlaced ? (
          <OrderSuccess orderId={orderId} onClose={handleClose} navigate={navigate} />
        ) : (
          <>
            {/* Header */}
            <CheckoutHeader
              currentStep={currentStep}
              onClose={handleClose}
              isProcessing={isProcessing}
            />

            {/* Body */}
            <div
              className="checkout-body"
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
                  onBlur={handleFieldBlur}
                />
              )}

              {currentStep === 2 && (
                <PaymentStep
                  info={paymentInfo}
                  onChange={setPaymentInfo}
                  errors={errors}
                  touched={touchedFields}
                  onBlur={handleFieldBlur}
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

            {/* Footer */}
            <CheckoutFooter
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

/* ================================================================== */
/*  Checkout Header with Stepper                                      */
/* ================================================================== */
function CheckoutHeader({ currentStep, onClose, isProcessing }) {
  return (
    <div
      className="checkout-header"
      style={{
        padding: "24px 40px",
        borderBottom: `1.5px solid ${THEME.border}`,
        background: THEME.surface,
      }}
    >
      {/* Title Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 24,
                height: 1.5,
                background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
              }}
            />
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 300,
              color: THEME.text,
              margin: 0,
              background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {STEPS.find((s) => s.id === currentStep)?.label}
          </h2>
        </div>

        <button
          onClick={onClose}
          disabled={isProcessing}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1.5px solid ${THEME.border}`,
            background: THEME.surface,
            color: THEME.textMuted,
            cursor: isProcessing ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
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

      {/* Stepper */}
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        {STEPS.map((step, i) => (
          <div
            key={step.id}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < STEPS.length - 1 ? 1 : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  ...(currentStep > step.id
                    ? {
                        background: `linear-gradient(135deg, ${THEME.success}, #5ab862)`,
                        color: "white",
                        boxShadow: `0 4px 12px ${THEME.success}40`,
                      }
                    : currentStep === step.id
                    ? {
                        background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
                        color: "white",
                        boxShadow: `0 4px 12px ${THEME.rose}40`,
                        animation: "pulse 2s ease-in-out infinite",
                      }
                    : {
                        background: `${THEME.blush}30`,
                        color: THEME.textMuted,
                        border: `1.5px solid ${THEME.border}`,
                      }),
                }}
              >
                {currentStep > step.id ? "✓" : step.icon}
              </div>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 11,
                  fontWeight: currentStep === step.id ? 700 : 500,
                  color:
                    currentStep >= step.id ? THEME.text : THEME.textMuted,
                  letterSpacing: "0.5px",
                  transition: "all 0.3s",
                  whiteSpace: "nowrap",
                }}
              >
                {step.label}
              </span>
            </div>

            {i < STEPS.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  margin: "0 16px",
                  borderRadius: 1,
                  background: THEME.border,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: currentStep > step.id ? "100%" : "0%",
                    background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
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

/* ================================================================== */
/*  Shipping Step                                                     */
/* ================================================================== */
function ShippingStep({ info, onChange, errors, touched, onBlur }) {
  const update = (field, value) =>
    onChange((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="step-content-enter">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
        className="checkout-grid"
      >
        <InputField
          label="First Name"
          placeholder="Arya"
          value={info.firstName}
          onChange={(v) => update("firstName", v)}
          error={errors.firstName}
          touched={touched.firstName}
          onBlur={() => onBlur("firstName")}
          icon="👤"
        />
        <InputField
          label="Last Name"
          placeholder="Sharma"
          value={info.lastName}
          onChange={(v) => update("lastName", v)}
          error={errors.lastName}
          touched={touched.lastName}
          onBlur={() => onBlur("lastName")}
        />
        <InputField
          label="Email Address"
          placeholder="arya@example.com"
          value={info.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          touched={touched.email}
          onBlur={() => onBlur("email")}
          type="email"
          icon="✉"
          full
        />
        <InputField
          label="Phone Number"
          placeholder="9876543210"
          value={info.phone}
          onChange={(v) => update("phone", v.replace(/\D/g, "").slice(0, 10))}
          error={errors.phone}
          touched={touched.phone}
          onBlur={() => onBlur("phone")}
          icon="📱"
          full
        />
        <InputField
          label="Street Address"
          placeholder="123, Rose Garden Lane"
          value={info.address}
          onChange={(v) => update("address", v)}
          error={errors.address}
          touched={touched.address}
          onBlur={() => onBlur("address")}
          icon="🏠"
          full
        />
        <InputField
          label="Apartment / Suite (Optional)"
          placeholder="Apt 4B, Floor 2"
          value={info.apartment}
          onChange={(v) => update("apartment", v)}
          full
        />
        <InputField
          label="City"
          placeholder="Mumbai"
          value={info.city}
          onChange={(v) => update("city", v)}
          error={errors.city}
          touched={touched.city}
          onBlur={() => onBlur("city")}
        />
        <InputField
          label="State"
          placeholder="Maharashtra"
          value={info.state}
          onChange={(v) => update("state", v)}
          error={errors.state}
          touched={touched.state}
          onBlur={() => onBlur("state")}
        />
        <InputField
          label="Pincode"
          placeholder="400001"
          value={info.pincode}
          onChange={(v) => update("pincode", v.replace(/\D/g, "").slice(0, 6))}
          error={errors.pincode}
          touched={touched.pincode}
          onBlur={() => onBlur("pincode")}
          icon="📮"
        />

        {/* Save Address Toggle */}
        <div style={{ gridColumn: "1 / -1", marginTop: 8 }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              padding: "12px 16px",
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
                  ? `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`
                  : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              {info.saveAddress && (
                <span style={{ color: "white", fontSize: 12 }}>✓</span>
              )}
            </div>
            <input
              type="checkbox"
              checked={info.saveAddress}
              onChange={(e) => update("saveAddress", e.target.checked)}
              style={{ display: "none" }}
            />
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
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

      {/* Security Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 24,
          padding: "14px 18px",
          background: `linear-gradient(135deg, ${THEME.blush}15, ${THEME.champagne}15)`,
          borderRadius: 8,
          border: `1px solid ${THEME.border}`,
        }}
      >
        <span style={{ fontSize: 18 }}>🔒</span>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            color: THEME.textMuted,
            letterSpacing: "0.3px",
          }}
        >
          Your information is encrypted and secure. We never share your
          details.
        </span>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Payment Step                                                      */
/* ================================================================== */
function PaymentStep({
  info,
  onChange,
  errors,
  touched,
  onBlur,
  formatCardNumber,
  formatExpiry,
}) {
  const update = (field, value) =>
    onChange((prev) => ({ ...prev, [field]: value }));

  const paymentMethods = [
    {
      id: "card",
      label: "Credit / Debit Card",
      icon: "💳",
      sub: "Visa, Mastercard, Rupay",
    },
    { id: "upi", label: "UPI Payment", icon: "📲", sub: "Google Pay, PhonePe, Paytm" },
    { id: "cod", label: "Cash on Delivery", icon: "💵", sub: "Pay when you receive" },
  ];

  return (
    <div className="step-content-enter">
      {/* Payment Method Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: THEME.textMuted,
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          Select Payment Method
        </span>

        {paymentMethods.map((pm) => (
          <div
            key={pm.id}
            className={`payment-method-card ${
              info.method === pm.id ? "active" : ""
            }`}
            onClick={() => update("method", pm.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background:
                  info.method === pm.id
                    ? `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`
                    : `${THEME.blush}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              {pm.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: THEME.text,
                }}
              >
                {pm.label}
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  color: THEME.textMuted,
                  letterSpacing: "0.3px",
                }}
              >
                {pm.sub}
              </div>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: `2px solid ${
                  info.method === pm.id ? THEME.burgundy : THEME.border
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              {info.method === pm.id && (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
                    animation: "fadeInScale 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Card Details */}
      {info.method === "card" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            animation: "floatUp 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          className="checkout-grid"
        >
          <InputField
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={info.cardNumber}
            onChange={(v) => update("cardNumber", formatCardNumber(v))}
            error={errors.cardNumber}
            touched={touched.cardNumber}
            onBlur={() => onBlur("cardNumber")}
            icon="💳"
            full
            maxLength={19}
          />
          <InputField
            label="Name on Card"
            placeholder="ARYA SHARMA"
            value={info.cardName}
            onChange={(v) => update("cardName", v.toUpperCase())}
            error={errors.cardName}
            touched={touched.cardName}
            onBlur={() => onBlur("cardName")}
            full
          />
          <InputField
            label="Expiry Date"
            placeholder="MM/YY"
            value={info.expiry}
            onChange={(v) => update("expiry", formatExpiry(v))}
            error={errors.expiry}
            touched={touched.expiry}
            onBlur={() => onBlur("expiry")}
            maxLength={5}
          />
          <InputField
            label="CVV"
            placeholder="•••"
            value={info.cvv}
            onChange={(v) => update("cvv", v.replace(/\D/g, "").slice(0, 4))}
            error={errors.cvv}
            touched={touched.cvv}
            onBlur={() => onBlur("cvv")}
            type="password"
            maxLength={4}
          />
        </div>
      )}

      {/* UPI Details */}
      {info.method === "upi" && (
        <div
          style={{ animation: "floatUp 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}
        >
          <InputField
            label="UPI ID"
            placeholder="yourname@paytm"
            value={info.upiId}
            onChange={(v) => update("upiId", v)}
            error={errors.upiId}
            touched={touched.upiId}
            onBlur={() => onBlur("upiId")}
            icon="📲"
            full
          />
        </div>
      )}

      {/* COD Info */}
      {info.method === "cod" && (
        <div
          style={{
            padding: "20px 24px",
            background: `linear-gradient(135deg, ${THEME.champagne}20, ${THEME.blush}15)`,
            borderRadius: 10,
            border: `1.5px solid ${THEME.champagne}40`,
            animation: "floatUp 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 20 }}>📦</span>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
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
              fontFamily: "'Poppins', sans-serif",
              fontSize: 12,
              color: THEME.textMuted,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Pay with cash when your order is delivered. An additional ₹49
            COD fee will be applied at delivery. Please keep exact change
            ready.
          </p>
        </div>
      )}

      {/* Security Badges */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 24,
          flexWrap: "wrap",
        }}
      >
        {["🔒 SSL Encrypted", "🛡️ Secure Payment", "✓ PCI Compliant"].map(
          (badge) => (
            <div
              key={badge}
              style={{
                padding: "8px 14px",
                background: `${THEME.blush}15`,
                borderRadius: 20,
                border: `1px solid ${THEME.border}`,
              }}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  color: THEME.textMuted,
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                }}
              >
                {badge}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Review Step                                                       */
/* ================================================================== */
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
  const paymentLabels = {
    card: "Credit/Debit Card",
    upi: "UPI Payment",
    cod: "Cash on Delivery",
  };

  return (
    <div className="step-content-enter">
      {/* Items Summary */}
      <div style={{ marginBottom: 28 }}>
        <SectionLabel text="Items in Your Order" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxHeight: 220,
            overflowY: "auto",
            paddingRight: 8,
          }}
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
                  gap: 14,
                  padding: "12px 16px",
                  background: THEME.surface,
                  borderRadius: 8,
                  border: `1px solid ${THEME.border}`,
                  animation: `floatUp 0.4s cubic-bezier(0.34,1.56,0.64,1) ${
                    i * 0.1
                  }s both`,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 6,
                    overflow: "hidden",
                    backgroundColor: `${THEME.blush}20`,
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
                      fontFamily: "'Cormorant Garamond', serif",
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
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 10,
                      color: THEME.textMuted,
                    }}
                  >
                    Qty: {qty}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
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
      </div>

      {/* Shipping & Payment Summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 28,
        }}
        className="checkout-grid"
      >
        {/* Shipping Card */}
        <div
          style={{
            padding: "20px 24px",
            background: THEME.surface,
            borderRadius: 10,
            border: `1.5px solid ${THEME.border}`,
          }}
        >
          <SectionLabel text="Shipping To" small />
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              color: THEME.text,
              fontWeight: 600,
              marginBottom: 4,
            }}
          >
            {shippingInfo.firstName} {shippingInfo.lastName}
          </div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 11,
              color: THEME.textMuted,
              lineHeight: 1.6,
            }}
          >
            {shippingInfo.address}
            {shippingInfo.apartment && `, ${shippingInfo.apartment}`}
            <br />
            {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
            <br />
            📱 {shippingInfo.phone}
          </div>
        </div>

        {/* Payment Card */}
        <div
          style={{
            padding: "20px 24px",
            background: THEME.surface,
            borderRadius: 10,
            border: `1.5px solid ${THEME.border}`,
          }}
        >
          <SectionLabel text="Payment Method" small />
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              color: THEME.text,
              fontWeight: 600,
              marginBottom: 4,
            }}
          >
            {paymentLabels[paymentInfo.method]}
          </div>
          {paymentInfo.method === "card" && (
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                color: THEME.textMuted,
              }}
            >
              •••• •••• ••••{" "}
              {paymentInfo.cardNumber.replace(/\s/g, "").slice(-4)}
            </div>
          )}
          {paymentInfo.method === "upi" && (
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                color: THEME.textMuted,
              }}
            >
              {paymentInfo.upiId}
            </div>
          )}
        </div>
      </div>

      {/* Price Breakdown */}
      <div
        style={{
          padding: "24px 28px",
          background: `linear-gradient(135deg, ${THEME.blush}15, ${THEME.champagne}10)`,
          borderRadius: 10,
          border: `1.5px solid ${THEME.border}`,
        }}
      >
        <SectionLabel text="Price Breakdown" small />
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
            margin: "12px 0",
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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              color: THEME.text,
            }}
          >
            Total Amount
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 600,
              background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
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

/* ================================================================== */
/*  Checkout Footer                                                   */
/* ================================================================== */
function CheckoutFooter({
  currentStep,
  onBack,
  onNext,
  onPlaceOrder,
  isProcessing,
  total,
}) {
  return (
    <div
      style={{
        padding: "20px 40px",
        borderTop: `1.5px solid ${THEME.border}`,
        background: THEME.surface,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
      }}
    >
      {currentStep > 1 ? (
        <button
          onClick={onBack}
          disabled={isProcessing}
          style={{
            padding: "12px 28px",
            background: "transparent",
            border: `1.5px solid ${THEME.border}`,
            color: THEME.text,
            fontFamily: "'Poppins', sans-serif",
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

      {currentStep < 3 ? (
        <button
          onClick={onNext}
          style={{
            padding: "14px 40px",
            background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 700,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: `0 4px 16px ${THEME.rose}30`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${THEME.rose}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 4px 16px ${THEME.rose}30`;
          }}
        >
          Continue →
        </button>
      ) : (
        <button
          onClick={onPlaceOrder}
          disabled={isProcessing}
          style={{
            padding: "14px 40px",
            background: isProcessing
              ? THEME.textMuted
              : `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: isProcessing ? "not-allowed" : "pointer",
            fontWeight: 700,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: isProcessing
              ? "none"
              : `0 4px 16px ${THEME.rose}30`,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
          onMouseEnter={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 24px ${THEME.rose}40`;
            }
          }}
          onMouseLeave={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 16px ${THEME.rose}30`;
            }
          }}
        >
          {isProcessing ? (
            <>
              <div
                style={{
                  width: 16,
                  height: 16,
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderTopColor: "white",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              Processing…
            </>
          ) : (
            `Place Order • ₹${total.toLocaleString("en-IN")}`
          )}
        </button>
      )}
    </div>
  );
}

/* ================================================================== */
/*  Order Success Screen                                              */
/* ================================================================== */
function OrderSuccess({ orderId, onClose, navigate }) {
  const confettiColors = [
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
        padding: "60px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti */}
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="confetti-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${40 + Math.random() * 30}%`,
            backgroundColor:
              confettiColors[Math.floor(Math.random() * confettiColors.length)],
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${1 + Math.random() * 1.5}s`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}

      {/* Success Icon */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${THEME.success}20, ${THEME.success}10)`,
          border: `3px solid ${THEME.success}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 28px",
          animation: "fadeInScale 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style={{ animation: "fadeInScale 0.8s 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
          <path
            d="M14 27 L22 35 L38 17"
            fill="none"
            stroke={THEME.success}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 50,
              animation: "checkmark 0.6s 0.5s ease-out both",
            }}
          />
        </svg>
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 300,
          margin: "0 0 8px",
          background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "floatUp 0.5s 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        Order Confirmed!
      </h2>

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 13,
          color: THEME.textMuted,
          margin: "0 0 32px",
          lineHeight: 1.6,
          animation: "floatUp 0.5s 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        Thank you for your purchase. Your order has been placed
        <br />
        and will be processed shortly.
      </p>

      {/* Order ID Card */}
      <div
        style={{
          display: "inline-block",
          padding: "20px 40px",
          background: `linear-gradient(135deg, ${THEME.blush}20, ${THEME.champagne}15)`,
          borderRadius: 12,
          border: `1.5px solid ${THEME.rose}40`,
          marginBottom: 32,
          animation: "floatUp 0.5s 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 9,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: THEME.textMuted,
            marginBottom: 6,
            fontWeight: 600,
          }}
        >
          Order ID
        </div>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
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
          gap: 32,
          marginBottom: 40,
          flexWrap: "wrap",
          animation: "floatUp 0.5s 0.7s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {[
          { icon: "📧", text: "Confirmation email sent" },
          { icon: "📦", text: "Ships in 2-3 days" },
          { icon: "🚚", text: "Track your order" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                color: THEME.textMuted,
                fontWeight: 500,
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
          animation: "floatUp 0.5s 0.8s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <button
          onClick={() => {
            onClose();
            navigate("/products");
          }}
          style={{
            padding: "14px 36px",
            background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 700,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: `0 4px 16px ${THEME.rose}30`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${THEME.rose}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 4px 16px ${THEME.rose}30`;
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
            padding: "14px 36px",
            background: "transparent",
            border: `1.5px solid ${THEME.rose}`,
            color: THEME.burgundy,
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 600,
            borderRadius: 8,
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`;
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
/*  Reusable Input Field                                              */
/* ================================================================== */
function InputField({
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
  const showError = error && touched;

  return (
    <div style={{ gridColumn: full ? "1 / -1" : undefined }}>
      <label
        style={{
          display: "block",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 10,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: showError ? THEME.error : THEME.textMuted,
          fontWeight: 600,
          marginBottom: 6,
          transition: "color 0.3s",
        }}
      >
        {icon && <span style={{ marginRight: 6 }}>{icon}</span>}
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        maxLength={maxLength}
        className={`checkout-input ${showError ? "error" : ""}`}
      />
      {showError && (
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10,
            color: THEME.error,
            marginTop: 4,
            fontWeight: 500,
            animation: "floatUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          ✕ {error}
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  Helpers                                                           */
/* ================================================================== */
function SectionLabel({ text, small }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: small ? 14 : 20,
      }}
    >
      <div
        style={{
          width: 16,
          height: 1.5,
          background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
        }}
      />
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
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
        marginBottom: 10,
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          color: muted ? THEME.textMuted : THEME.textMuted,
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
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
