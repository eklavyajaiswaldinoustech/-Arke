import React, { createContext, useState, useCallback } from "react";
export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now();
    const toast = { id, message, type };

    setToasts((prev) => [...prev, toast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const success = (msg, duration) => showToast(msg, "success", duration);
  const error = (msg, duration) => showToast(msg, "error", duration);
  const info = (msg, duration) => showToast(msg, "info", duration);
  const warning = (msg, duration) => showToast(msg, "warning", duration);

  return (
    <ToastContext.Provider value={{ showToast, removeToast, success, error, info, warning }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

// ── Toast Container ──────────────────────────────────────
function ToastContainer({ toasts, onRemove }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        right: 20,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: 400,
      }}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onRemove={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
}

// ── Individual Toast ──────────────────────────────────────
function Toast({ toast, onRemove }) {
  const colorMap = {
    success: { bg: "rgba(79, 195, 247, 0.95)", icon: "✓", color: "#fff" },
    error: { bg: "rgba(244, 67, 54, 0.95)", icon: "✕", color: "#fff" },
    info: { bg: "rgba(33, 150, 243, 0.95)", icon: "ℹ", color: "#fff" },
    warning: { bg: "rgba(255, 152, 0, 0.95)", icon: "⚠", color: "#fff" },
  };

  const config = colorMap[toast.type] || colorMap.info;

  return (
    <div
      style={{
        background: config.bg,
        color: config.color,
        padding: "14px 18px",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        animation: "slideInRight 0.3s ease-out",
        fontFamily: "'Jost', sans-serif",
        fontSize: 13,
      }}
    >
      <span style={{ fontSize: 16, flexShrink: 0 }}>{config.icon}</span>
      <span style={{ flex: 1 }}>{toast.message}</span>
      <button
        onClick={onRemove}
        style={{
          background: "none",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          fontSize: 16,
          padding: 0,
          opacity: 0.7,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.opacity = 1)}
        onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
      >
        ×
      </button>
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}