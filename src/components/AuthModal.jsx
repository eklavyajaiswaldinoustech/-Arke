import { useState } from "react";
import { useStore } from "../context/useStore";

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

export default function AuthModal({ onClose }) {
  const { login, register } = useStore();
  const [mode, setMode] = useState("login"); // login | register
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async () => {
    if (loading) return;

    const email = form.email.trim();
    const password = form.password;
    const phone = form.phone.trim();
    const fullName = form.name.trim();

    setErr("");
    setSuccess("");

    // Validation
    if (!email || !password) {
      setErr("Email and password are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErr("Password must be at least 6 characters.");
      return;
    }

    if (mode === "register") {
      if (!fullName) {
        setErr("Full name is required.");
        return;
      }

      if (!phone || phone.length < 10) {
        setErr("Please enter a valid mobile number.");
        return;
      }
    }

    setLoading(true);
    try {
      if (mode === "login") {
        const r = await login(email, password);
        if (r.ok) {
          setSuccess("Welcome back! 💕");
          setTimeout(() => onClose(), 800);
        } else {
          setErr(r.msg || "Login failed. Please try again.");
        }
      } else {
        const r = await register({
          name: fullName,
          email,
          phone,
          password,
        });
        if (r.ok) {
          setSuccess("Account created! Welcome to ARKE 💎");
          setTimeout(() => onClose(), 800);
        } else {
          setErr(r.msg || "Registration failed. Please try again.");
        }
      }
    } catch (error) {
      setErr(error?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const S = {
    overlay: {
      position: "fixed",
      inset: 0,
      zIndex: 2000,
      background: `rgba(42, 42, 42, 0.7)`,
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },

    modal: {
      background: THEME.surface,
      border: `1.5px solid ${THEME.border}`,
      borderRadius: "12px",
      width: "100%",
      maxWidth: "450px",
      padding: "60px 48px",
      position: "relative",
      boxShadow: `0 20px 60px rgba(139, 70, 84, 0.15)`,
      animation: "slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    },

    close: {
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "none",
      border: "none",
      color: THEME.textMuted,
      cursor: "pointer",
      fontSize: "24px",
      fontWeight: 300,
      transition: "all 0.3s",
      padding: "4px 8px",
      opacity: 0.6,
    },

    title: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "40px",
      fontWeight: 400,
      letterSpacing: "3px",
      color: THEME.text,
      marginBottom: "8px",
      textAlign: "center",
      background: `linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    sub: {
      color: THEME.textMuted,
      fontSize: "12px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "40px",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },

    formGroup: {
      marginBottom: "24px",
    },

    label: {
      display: "block",
      color: THEME.text,
      fontSize: "11px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "8px",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },

    input: {
      width: "100%",
      background: `${THEME.blush}20`,
      border: `1.5px solid ${THEME.border}`,
      borderRadius: "6px",
      color: THEME.text,
      padding: "12px 14px",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "13px",
      outline: "none",
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      letterSpacing: "0.3px",
    },

    inputFocus: {
      background: `${THEME.rose}15`,
      borderColor: THEME.rose,
      boxShadow: `0 0 0 3px ${THEME.blush}40`,
    },

    btn: {
      width: "100%",
      padding: "14px",
      background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: loading ? "wait" : "pointer",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "11px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: "20px",
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      boxShadow: `0 4px 16px rgba(232, 180, 196, 0.3)`,
      opacity: loading ? 0.7 : 1,
    },

    toggle: {
      textAlign: "center",
      color: THEME.textMuted,
      fontFamily: "'Poppins', sans-serif",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "0.3px",
    },

    toggleLink: {
      color: THEME.rose,
      cursor: "pointer",
      background: "none",
      border: "none",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "12px",
      fontWeight: 700,
      transition: "color 0.3s",
      textDecoration: "none",
      padding: 0,
    },

    err: {
      color: "#d97070",
      fontSize: "12px",
      marginBottom: "16px",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      padding: "12px 12px",
      background: "rgba(217, 112, 112, 0.08)",
      borderRadius: "6px",
      border: `1px solid rgba(217, 112, 112, 0.2)`,
      fontWeight: 500,
    },

    success: {
      color: THEME.rose,
      fontSize: "12px",
      marginBottom: "16px",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      padding: "12px 12px",
      background: `rgba(232, 180, 196, 0.08)`,
      borderRadius: "6px",
      border: `1px solid ${THEME.rose}40`,
      fontWeight: 600,
    },

    divider: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      margin: "28px 0",
    },

    dividerLine: {
      flex: 1,
      height: "1px",
      background: THEME.border,
    },

    dividerText: {
      color: THEME.textMuted,
      fontSize: "11px",
      fontFamily: "'Poppins', sans-serif",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: 600,
    },

    socialBtns: {
      display: "flex",
      gap: "12px",
      marginBottom: "20px",
    },

    socialBtn: {
      flex: 1,
      padding: "11px",
      border: `1.5px solid ${THEME.border}`,
      background: "transparent",
      borderRadius: "6px",
      cursor: "pointer",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "1px",
      color: THEME.text,
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  };

  return (
    <div style={S.overlay} onClick={onClose}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input::placeholder {
          color: ${THEME.textMuted};
          opacity: 0.6;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px ${THEME.blush}15 inset !important;
          -webkit-text-fill-color: ${THEME.text} !important;
          caret-color: ${THEME.rose};
        }

        @media (max-width: 480px) {
          .auth-modal {
            padding: 48px 32px !important;
            max-width: calc(100% - 40px) !important;
          }
        }
      `}</style>

      <div style={S.modal} className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          style={S.close}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.opacity = "1";
            e.target.style.color = THEME.rose;
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "0.6";
            e.target.style.color = THEME.textMuted;
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={S.title}>
          ARK<span style={{ color: THEME.rose, background: "none", WebkitTextFillColor: "unset" }}>E</span>
        </div>
        <div style={S.sub}>
          {mode === "login" ? "✨ Welcome back" : "💎 Create your account"}
        </div>

        {/* Error Message */}
        {err && <div style={S.err}>⚠️ {err}</div>}

        {/* Success Message */}
        {success && <div style={S.success}>✓ {success}</div>}

        {/* Form */}
        <div>
          {/* Name Field (Register Only) */}
          {mode === "register" && (
            <div style={S.formGroup}>
              <label style={S.label}>Full Name</label>
              <input
                style={S.input}
                placeholder="Your full name"
                value={form.name}
                onChange={handle("name")}
                onFocus={(e) => Object.assign(e.target.style, S.inputFocus)}
                onBlur={(e) => {
                  e.target.style.background = `${THEME.blush}20`;
                  e.target.style.borderColor = THEME.border;
                  e.target.style.boxShadow = "none";
                }}
                autoComplete="name"
              />
            </div>
          )}

          {/* Phone Field (Register Only) */}
          {mode === "register" && (
            <div style={S.formGroup}>
              <label style={S.label}>Mobile Number</label>
              <input
                style={S.input}
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handle("phone")}
                onFocus={(e) => Object.assign(e.target.style, S.inputFocus)}
                onBlur={(e) => {
                  e.target.style.background = `${THEME.blush}20`;
                  e.target.style.borderColor = THEME.border;
                  e.target.style.boxShadow = "none";
                }}
                autoComplete="tel"
              />
            </div>
          )}

          {/* Email Field */}
          <div style={S.formGroup}>
            <label style={S.label}>Email Address</label>
            <input
              style={S.input}
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handle("email")}
              onFocus={(e) => Object.assign(e.target.style, S.inputFocus)}
              onBlur={(e) => {
                e.target.style.background = `${THEME.blush}20`;
                e.target.style.borderColor = THEME.border;
                e.target.style.boxShadow = "none";
              }}
              autoComplete="email"
            />
          </div>

          {/* Password Field */}
          <div style={S.formGroup}>
            <label style={S.label}>Password</label>
            <input
              style={S.input}
              type="password"
              placeholder="Minimum 6 characters"
              value={form.password}
              onChange={handle("password")}
              onFocus={(e) => Object.assign(e.target.style, S.inputFocus)}
              onBlur={(e) => {
                e.target.style.background = `${THEME.blush}20`;
                e.target.style.borderColor = THEME.border;
                e.target.style.boxShadow = "none";
              }}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              onKeyDown={(e) => e.key === "Enter" && submit()}
            />
          </div>

          {/* Submit Button */}
          <button
            style={S.btn}
            onClick={submit}
            disabled={loading}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 8px 24px rgba(232, 180, 196, 0.4)`;
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = `0 4px 16px rgba(232, 180, 196, 0.3)`;
            }}
          >
            {loading ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "currentColor",
                    animation: "pulse 1.5s infinite",
                  }}
                />
                Please wait...
              </span>
            ) : mode === "login" ? (
              "Sign In"
            ) : (
              "Create Account"
            )}
          </button>
        </div>

        {/* Divider */}
        <div style={S.divider}>
          <div style={S.dividerLine} />
          <span style={S.dividerText}>OR</span>
          <div style={S.dividerLine} />
        </div>

        {/* Social Login (Optional) */}
        <div style={S.socialBtns}>
          <button
            style={S.socialBtn}
            onMouseEnter={(e) => {
              e.target.style.background = `${THEME.blush}30`;
              e.target.style.borderColor = THEME.rose;
              e.target.style.color = THEME.burgundy;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = THEME.border;
              e.target.style.color = THEME.text;
            }}
          >
            Google
          </button>
          <button
            style={S.socialBtn}
            onMouseEnter={(e) => {
              e.target.style.background = `${THEME.blush}30`;
              e.target.style.borderColor = THEME.rose;
              e.target.style.color = THEME.burgundy;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = THEME.border;
              e.target.style.color = THEME.text;
            }}
          >
            Apple
          </button>
        </div>

        {/* Toggle Mode */}
        <div style={S.toggle}>
          {mode === "login" ? "New to ARKE? " : "Already have account? "}
          <button
            style={S.toggleLink}
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setErr("");
              setSuccess("");
              setForm({ name: "", email: "", phone: "", password: "" });
            }}
            onMouseEnter={(e) => {
              e.target.style.color = THEME.burgundy;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = THEME.rose;
            }}
          >
            {mode === "login" ? "Create account" : "Sign in"}
          </button>
        </div>

        {/* Footer Note */}
        <div
          style={{
            marginTop: "24px",
            paddingTop: "20px",
            borderTop: `1px solid ${THEME.border}`,
            fontSize: "10px",
            color: THEME.textMuted,
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.3px",
            lineHeight: 1.6,
          }}
        >
          By continuing, you agree to our <br />
          <button
            style={{
              background: "none",
              border: "none",
              color: THEME.rose,
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: 600,
              padding: 0,
            }}
          >
            Terms of Service
          </button>
          {" & "}
          <button
            style={{
              background: "none",
              border: "none",
              color: THEME.rose,
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: 600,
              padding: 0,
            }}
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}