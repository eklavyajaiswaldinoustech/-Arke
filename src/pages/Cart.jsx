import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "../services/api";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";
import ProductPlaceholder from "../components/Productplaceholder";

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

 const notLoggedIn = useMemo(
    () => !localStorage.getItem("arke_token"),
    []
  );

  /* ------------------------------------------------------------------ */
  /*  Offers (placeholder – replace with a real endpoint when you have one) */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOffers = async () => {
      try {
        // TODO: replace with your actual offers endpoint
        // const res = await api.getOffers?.();
        // if (res?.success && Array.isArray(res.data)) {
        //   setOffersList(res.data.filter(o => o.isActive !== false));
        // }
      } catch (err) {
        console.error("Failed to load offers:", err);
      }
    };
    fetchOffers();
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Handlers */
  /* ------------------------------------------------------------------ */
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

  /* ------------------------------------------------------------------ */
  /*  Totals & discounts */
  /* ------------------------------------------------------------------ */
  const subtotal = items.reduce((acc, item) => {
    const product = item.product || item;
    const price = Number(product.price || product.salePrice || 0);
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const discountAmount = (() => {
    if (!appliedCoupon) return 0;
    const val = Number(
      appliedCoupon.discountValue ||
        appliedCoupon.offerValue ||
        0
    );
    const type =
      appliedCoupon.discountType ||
      appliedCoupon.offertype ||
      "flat";
    if (type === "percentage")
      return Math.round((subtotal * val) / 100);
    return Math.min(val, subtotal);
  })();

  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal - discountAmount + shipping;

  /* ------------------------------------------------------------------ */
  /*  Coupon handling */
  /* ------------------------------------------------------------------ */
  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      setCouponError("Please enter a coupon code");
      return;
    }

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

    const minOrder = Number(
      found.minOrderAmount || found.minOrder || 0
    );
    if (subtotal < minOrder) {
      setCouponError(
        `Minimum order ₹${minOrder.toLocaleString(
          "en-IN"
        )} required`
      );
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

  /* ------------------------------------------------------------------ */
  /*  Render */
  /* ------------------------------------------------------------------ */
  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: 120 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .cart-header   { animation: fadeInUp 0.8s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-items    { animation: fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-sidebar  { animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1); }

        @media (max-width:1024px) {
          .cart-container { grid-template-columns:1fr!important; }
        }

        @media (max-width:768px) {
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
            onCheckout={() =>
              navigate("/checkout", {
                state: {
                  appliedCoupon,
                  discountAmount,
                  shipping,
                  total,
                },
              })
            }
          />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cart Header                                                    */
/* ------------------------------------------------------------------ */
function CartHeader({ itemCount }) {
  return (
    <div
      className="cart-header"
      style={{
        padding: "60px 80px 40px",
        borderBottom: `1.5px solid ${THEME.border}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 28,
            height: 1.5,
            background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
          }}
        />
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
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
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px,4vw,56px)",
            fontWeight: 300,
            color: THEME.text,
            margin: 0,
            background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
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
              fontFamily: "'Poppins', sans-serif",
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

/* ------------------------------------------------------------------ */
/*  Items Column                                                   */
/* ------------------------------------------------------------------ */
function CartItemsColumn({
  items,
  removingItems,
  updatingQty,
  onRemove,
  onUpdateQty,
  navigate,
}) {
  return (
    <div className="cart-items">
      {/* Header */}
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
              fontFamily: "'Poppins', sans-serif",
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

      {/* Items */}
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
              onUpdateQty={(qty) =>
                onUpdateQty(cartItemId, productId, qty)
              }
              navigate={navigate}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual Cart Item                                            */
/* ------------------------------------------------------------------ */
function CartItem({
  item,
  isRemoving,
  isUpdatingQty,
  onRemove,
  onUpdateQty,
  navigate,
}) {
  const product = item.product || {};
  const img = product.image?.[0] || product.image || product.thumbnail || "/placeholder.jpg";
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
        transition:
          "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
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
          transition:
            "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        onClick={() => navigate(`/products/${product._id || product.id}`)}
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
              transition:
                "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onError={(e) => (e.target.style.display = "none")}
            onMouseEnter={(e) =>
              (e.target.style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          />
        ) : (
          <ProductPlaceholder product={product} small />
        )}
      </div>

      {/* Details */}
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 18,
            fontWeight: 400,
            color: THEME.text,
            marginBottom: 8,
            cursor: "pointer",
            lineHeight: 1.3,
            transition:
              "color 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          onClick={() => navigate(`/product/${pid}`)}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = THEME.burgundy)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = THEME.text)
          }
        >
          {name}
        </div>

        {product.metal_type && (
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
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
              fontFamily: "'Poppins', sans-serif",
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
            fontFamily: "'Poppins', sans-serif",
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

      {/* Quantity */}
      <QuantitySelector
        qty={qty}
        isUpdating={isUpdatingQty}
        onUpdateQty={onUpdateQty}
      />

      {/* Price */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 18,
          background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
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

/* ------------------------------------------------------------------ */
/*  Quantity Selector                                               */
/* ------------------------------------------------------------------ */
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
        transition:
          "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <button
        onClick={() => onUpdateQty(Math.max(1, qty - 1))}
        disabled={isUpdating || qty <= 1}
        style={{
          background: "none",
          border: "none",
          color: THEME.rose,
          cursor:
            isUpdating || qty <= 1 ? "not-allowed" : "pointer",
          fontSize: 16,
          padding: "2px 6px",
          transition: "color 0.2s",
          fontWeight: 600,
        }}
        onMouseEnter={(e) =>
          !isUpdating &&
          qty > 1 &&
          (e.target.style.color = THEME.burgundy)
        }
        onMouseLeave={(e) => (e.target.style.color = THEME.rose)}
      >
        −
      </button>

      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
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

/* ------------------------------------------------------------------ */
/*  Cart Sidebar                                                   */
/* ------------------------------------------------------------------ */
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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "sticky",
        top: 140,
      }}
    >
      {/* Order Summary */}
      <div
        style={{
          background: THEME.surface,
          border: `1.5px solid ${THEME.border}`,
          padding: 40,
          borderRadius: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        }}
      >
        {/* Summary Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1.5,
              background: `linear-gradient(90deg, ${THEME.rose}, ${THEME.burgundy})`,
            }}
          />
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
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

        {/* Summary Rows */}
        <SummaryRow
          label="Subtotal"
          value={`₹${subtotal.toLocaleString("en-IN")}`}
        />

        {discountAmount > 0 && (
          <SummaryRow
            label={`Discount (${(
              appliedCoupon?.code ||
              appliedCoupon?.offercode ||
              ""
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
                fontFamily: "'Poppins', sans-serif",
                fontSize: 10,
                color: THEME.rose,
                letterSpacing: 0.5,
                fontWeight: 500,
              }}
            >
              Add ₹{Math.max(0, 999 - subtotal).toLocaleString(
                "en-IN"
              )} for free shipping
            </span>
          </div>
        )}

        <div
          style={{
            borderTop: `1px solid ${THEME.border}`,
            margin: "20px 0 24px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              color: THEME.text,
            }}
          >
            Total
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 400,
            }}
          >
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Coupon Section */}
        <div
          style={{
            borderTop: `1px solid ${THEME.border}`,
            paddingTop: 24,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
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
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 11,
                    letterSpacing: "1px",
                    outline: "none",
                    borderRadius: 6,
                    transition:
                      "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
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
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition:
                      "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    whiteSpace: "nowrap",
                    borderRadius: 6,
                    fontWeight: 600,
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
                  Apply
                </button>
              </div>

              {couponError && (
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
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
                    fontFamily: "'Poppins', sans-serif",
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
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: THEME.text,
                    letterSpacing: "0.5px",
                  }}
                >
                  {(appliedCoupon.code ||
                    appliedCoupon.offercode ||
                    "").toUpperCase()}
                </div>
              </div>
              <button
                onClick={onRemoveCoupon}
                style={{
                  background: "none",
                  border: "none",
                  color: THEME.rose,
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = THEME.error)
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = THEME.rose)
                }
              >
                Remove
              </button>
            </div>
          )}
        </div>

        <button
          onClick={onCheckout}
          style={{
            width: "100%",
            padding: 16,
            background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
            color: "white",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 700,
            transition:
              "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
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

/* ------------------------------------------------------------------ */
/*  Summary Row                                                    */
/* ------------------------------------------------------------------ */
function SummaryRow({
  label,
  value,
  highlight,
  green,
}) {
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
          fontFamily: "'Poppins', sans-serif",
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
          fontFamily: "'Poppins', sans-serif",
          fontSize: 13,
          color: green
            ? THEME.success
            : highlight
            ? THEME.burgundy
            : THEME.text,
          fontWeight: green ? 700 : 600,
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Loading State                                                  */
/* ------------------------------------------------------------------ */
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
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
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
          fontFamily: "'Cormorant Garamond', serif",
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

/* ------------------------------------------------------------------ */
/*  Empty State                                                    */
/* ------------------------------------------------------------------ */
function EmptyState({
  icon,
  title,
  sub,
  btn,
  onClick,
}) {
  return (
    <div style={{ textAlign: "center", padding: "120px 80px" }}>
      <div
        style={{
          fontSize: 56,
          color: `${THEME.rose}40`,
          marginBottom: 24,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 32,
          fontWeight: 300,
          color: THEME.text,
          marginBottom: 12,
          background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
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
          background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
          color: "white",
          border: "none",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          cursor: "pointer",
          fontWeight: 700,
          borderRadius: 6,
          transition:
            "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
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
