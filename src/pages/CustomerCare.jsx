import { useState, useEffect } from "react";
import { FaInstagram, FaPinterest, FaWhatsapp, FaEnvelope } from "react-icons/fa";

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
  error: "#d97070",
};

export default function CustomerCare() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email");
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone number");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Please select a subject");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/CustomerCare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Thank you! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
      console.error("CustomerCare form error:", error);
    } finally {
      setLoading(false);
    }
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

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .customercare-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .customercare-hero {
          text-align: center;
          padding: 80px 0 60px;
          border-bottom: 1.5px solid ${THEME.border};
          margin-bottom: 80px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .customercare-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${THEME.text};
          margin-bottom: 16px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .customercare-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          letter-spacing: 0.5px;
          color: ${THEME.textMuted};
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
        }

        .customercare-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 100px;
          align-items: start;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        .customercare-info {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .info-block {
          padding-bottom: 32px;
          border-bottom: 1.5px solid ${THEME.border};
        }

        .info-block:last-child {
          border-bottom: none;
        }

        .info-title {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          margin-bottom: 12px;
        }

        .info-content {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .info-content a {
          color: ${THEME.burgundy};
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 600;
        }

        .info-content a:hover {
          color: ${THEME.rose};
          transform: translateX(2px);
        }

        .customercare-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
        }

        .form-input,
        .form-textarea,
        .form-select {
          padding: 13px 14px;
          background: ${THEME.blush}15;
          border: 1.5px solid ${THEME.border};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${THEME.text};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: ${THEME.textMuted}60;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          background: ${THEME.blush}25;
          border-color: ${THEME.rose};
          box-shadow: 0 0 0 3px ${THEME.blush}40;
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
          font-family: 'Poppins', sans-serif;
        }

        .form-select {
          cursor: pointer;
        }

        .form-select option {
          background: ${THEME.surface};
          color: ${THEME.text};
        }

        .form-button {
          padding: 14px 32px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          color: white;
          border: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          margin-top: 10px;
          box-shadow: 0 4px 16px ${THEME.rose}30;
        }

        .form-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${THEME.rose}40;
        }

        .form-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .message-alert {
          padding: 14px 16px;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 0.3px;
          animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 500;
        }

        .success-message {
          background: rgba(112, 200, 120, 0.08);
          border: 1px solid ${THEME.success}40;
          color: ${THEME.success}90;
        }

        .error-message {
          background: rgba(217, 112, 112, 0.08);
          border: 1px solid ${THEME.error}40;
          color: ${THEME.error}90;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .social-link {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          text-decoration: none;
          color: ${THEME.rose};
          font-size: 20px;
          border: 1.5px solid ${THEME.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: transparent;
        }

        .social-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px ${THEME.rose}30;
        }

        .instagram:hover {
          background: #E4405F;
          border-color: #E4405F;
          color: white;
        }

        .pinterest:hover {
          background: #BD081C;
          border-color: #BD081C;
          color: white;
        }

        .whatsapp:hover {
          background: #25D366;
          border-color: #25D366;
          color: white;
        }

        .email:hover {
          background: #EA4335;
          border-color: #EA4335;
          color: white;
        }

        @media (max-width: 768px) {
          .customercare-container {
            padding: 0 20px;
          }

          .customercare-hero {
            padding: 60px 0 40px;
          }

          .customercare-hero h1 {
            font-size: 36px;
          }

          .customercare-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .customercare-info {
            order: 2;
          }

          .customercare-form {
            order: 1;
          }
        }
      `}</style>

      <div className="customercare-container">
        {/* Hero */}
        <div className="customercare-hero">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        {/* Content */}
        <div className="customercare-content">
          {/* Info Section */}
          <div className="customercare-info">
            <div className="info-block">
              <div className="info-title">📍 Address</div>
              <div className="info-content">
                ARKE Jewellery<br />
                123 Luxury Lane<br />
                Jaipur, Rajasthan 302001<br />
                India
              </div>
            </div>

            <div className="info-block">
              <div className="info-title">📞 Phone</div>
              <div className="info-content">
                <a href="tel:+919876543210">+91 98765 43210</a><br />
                <span style={{
                  color: THEME.textMuted,
                  fontWeight: 400,
                }}>
                  Mon - Fri, 10 AM - 6 PM IST
                </span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-title">✉️ Email</div>
              <div className="info-content">
                <a href="mailto:hello@arke.com">hello@arke.com</a><br />
                <a href="mailto:support@arke.com">support@arke.com</a>
              </div>
            </div>

            <div className="info-block">
              <div className="info-title">💬 Live Chat</div>
              <div className="info-content">
                Available on WhatsApp<br />
                <a href="https://wa.me/919876543210">Message us here →</a>
              </div>
            </div>

            <div className="info-block">
              <div className="info-title">Follow Us</div>
              <div className="social-links">
                <a
                  href="https://instagram.com/arke.jewellery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://pinterest.com/arkejewellery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link pinterest"
                  title="Pinterest"
                >
                  <FaPinterest />
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link whatsapp"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="mailto:hello@arke.com"
                  className="social-link email"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="customercare-form" onSubmit={handleSubmit}>
            {successMessage && (
              <div className="message-alert success-message">
                ✓ {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="message-alert error-message">
                ✕ {errorMessage}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject *</label>
              <select
                name="subject"
                className="form-select"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Related</option>
                <option value="return">Returns & Exchanges</option>
                <option value="warranty">Warranty Support</option>
                <option value="custom">Custom Design</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="form-button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}