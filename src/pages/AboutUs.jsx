import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../context/ToastProvider";

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
  lavender: "#d4c4e0",
  border: "#e8ddd4",
  borderLight: "#f0ebe5",
  success: "#70c878",
};

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { success, error: showError } = useToast();

  // ── Load comments on mount ──────────────────────────────
  useEffect(() => {
    fetchComments();
  }, []);

  // ── Fetch all comments from localStorage ────────────────
  const fetchComments = () => {
    try {
      setLoading(true);
      const stored = localStorage.getItem("about_comments");
      if (stored) {
        const parsed = JSON.parse(stored);
        setComments(Array.isArray(parsed) ? parsed : []);
      }
    } catch (err) {
      console.error("Failed to load comments:", err);
    } finally {
      setLoading(false);
    }
  };

  // ── Handle submit comment ───────────────────────────────
  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!visitorName.trim()) {
      showError("Please enter your name");
      return;
    }

    if (!visitorEmail.trim()) {
      showError("Please enter your email");
      return;
    }

    if (!commentText.trim()) {
      showError("Please enter a comment");
      return;
    }

    setSubmitting(true);

    try {
      const newComment = {
        id: Date.now(),
        name: visitorName.trim(),
        email: visitorEmail.trim(),
        text: commentText.trim(),
        rating: rating,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      };

      // Save to localStorage
      const updated = [newComment, ...comments];
      localStorage.setItem("about_comments", JSON.stringify(updated));
      setComments(updated);

      // Reset form
      setCommentText("");
      setVisitorName("");
      setVisitorEmail("");
      setRating(5);

      success("Thank you! Your feedback has been posted.");
    } catch (err) {
      console.error("Error posting comment:", err);
      showError("Failed to post comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const achievements = [
    { label: "Happy Customers", value: "50K+", icon: "💕" },
    { label: "Products Sold", value: "100K+", icon: "💎" },
    { label: "Years in Business", value: "4+", icon: "👑" },
    { label: "5-Star Reviews", value: "9.8/10", icon: "✨" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      text: "ARKE jewellery is absolutely stunning! The quality is exceptional and the customer service is outstanding. I've bought multiple pieces and I'm obsessed!",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      location: "Delhi, India",
      text: "Finally found a brand that offers luxury jewellery at affordable prices. Every piece is a masterpiece. Highly recommended!",
      rating: 5,
    },
    {
      name: "Neha Kapoor",
      location: "Bangalore, India",
      text: "The hallmark certified gold and waterproof design gives me complete peace of mind. ARKE is my go-to for all occasions!",
      rating: 5,
    },
  ];

  const values = [
    {
      icon: "✨",
      title: "Clarity",
      desc: "Transparent pricing, genuine products, and honest communication. No hidden surprises.",
    },
    {
      icon: "💎",
      title: "Quality",
      desc: "Hallmark certified, precision crafted, and built to last. Every detail matters.",
    },
    {
      icon: "💕",
      title: "Loyalty",
      desc: "We value long-term relationships. Lifetime support and exclusive benefits for you.",
    },
  ];

  const timeline = [
    {
      year: 2020,
      title: "The Beginning",
      desc: "ARKE was founded with a vision to democratize luxury jewellery.",
    },
    {
      year: 2021,
      title: "First Collection",
      desc: "Launched 50+ unique designs, all hallmark certified & handcrafted.",
    },
    {
      year: 2022,
      title: "Expansion",
      desc: "Reached 50K+ customers across India with premium quality pieces.",
    },
    {
      year: 2023,
      title: "Innovation",
      desc: "Introduced waterproof & tarnish-proof technology to collections.",
    },
    {
      year: 2024,
      title: "Today",
      desc: "Growing strong with new designs, partnerships, and experiences.",
    },
  ];

  return (
    <div
      style={{
        background: THEME.bg,
        minHeight: "100vh",
        paddingTop: 120,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Hero Section */
        .about-hero {
          text-align: center;
          padding: 100px 0 80px;
          margin-bottom: 100px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-bottom: 1px solid ${THEME.border};
        }

        .about-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          letter-spacing: 3px;
          color: ${THEME.text};
          margin-bottom: 24px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          letter-spacing: 0.5px;
          color: ${THEME.textMuted};
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.9;
          font-weight: 400;
        }

        /* Section Title */
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${THEME.text};
          margin-bottom: 50px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, ${THEME.rose}, transparent);
        }

        .about-section {
          margin-bottom: 120px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Story Section */
        .section-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-top: 50px;
        }

        .section-content:nth-child(even) {
          direction: rtl;
        }

        .section-content:nth-child(even) > * {
          direction: ltr;
        }

        .section-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 2;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
        }

        .section-text h3 {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: ${THEME.burgundy};
          text-transform: uppercase;
          margin-bottom: 16px;
          margin-top: 28px;
        }

        .section-text h3:first-child {
          margin-top: 0;
        }

        .section-text p {
          margin-bottom: 24px;
        }

        .section-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, ${THEME.blush}30, ${THEME.champagne}20);
          border: 1.5px solid ${THEME.border};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 140px;
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .value-card {
          padding: 48px 40px;
          border: 1.5px solid ${THEME.border};
          background: ${THEME.surface};
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${THEME.rose}15, transparent);
          transition: left 0.6s ease;
        }

        .value-card:hover {
          border-color: ${THEME.rose};
          background: ${THEME.surface};
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(232, 180, 196, 0.2);
        }

        .value-card:hover::before {
          left: 100%;
        }

        .value-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
          animation: float 3s ease-in-out infinite;
        }

        .value-card h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          margin-bottom: 16px;
        }

        .value-card p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
        }

        /* Achievements Grid */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .achievement-card {
          text-align: center;
          padding: 40px;
          border: 1.5px solid ${THEME.border};
          background: ${THEME.surface};
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .achievement-card:hover {
          border-color: ${THEME.rose};
          background: linear-gradient(135deg, ${THEME.blush}8, ${THEME.champagne}4);
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(232, 180, 196, 0.15);
        }

        .achievement-icon {
          font-size: 48px;
          margin-bottom: 16px;
          animation: float 3s ease-in-out infinite;
        }

        .achievement-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 300;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .achievement-label {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${THEME.textMuted};
        }

        /* Timeline */
        .timeline {
          position: relative;
          margin-top: 60px;
          padding-left: 50px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, ${THEME.rose}, ${THEME.rose}40, transparent);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -57px;
          top: 8px;
          width: 16px;
          height: 16px;
          background: ${THEME.rose};
          border-radius: 50%;
          border: 3px solid ${THEME.bg};
          box-shadow: 0 0 0 6px ${THEME.rose}30;
          transition: all 0.3s;
        }

        .timeline-item:hover::before {
          transform: scale(1.3);
          box-shadow: 0 0 0 8px ${THEME.rose}40;
        }

        .timeline-year {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: right;
        }

        .timeline-content h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          margin-bottom: 12px;
        }

        .timeline-content p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .testimonial-card {
          padding: 40px;
          border: 1.5px solid ${THEME.border};
          background: ${THEME.surface};
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 8px;
          right: 20px;
          font-size: 64px;
          color: ${THEME.rose}30;
          font-family: 'Cormorant Garamond', serif;
        }

        .testimonial-card:hover {
          border-color: ${THEME.rose};
          background: linear-gradient(135deg, ${THEME.blush}8, ${THEME.champagne}4);
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(232, 180, 196, 0.2);
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .star {
          color: ${THEME.rose};
          font-size: 14px;
        }

        .testimonial-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.9;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: ${THEME.text};
          margin-bottom: 4px;
          position: relative;
          z-index: 1;
        }

        .testimonial-location {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${THEME.textMuted};
          position: relative;
          z-index: 1;
        }

        /* Comments Section */
        .comments-section {
          background: linear-gradient(135deg, ${THEME.blush}10, ${THEME.champagne}5);
          border: 1.5px solid ${THEME.border};
          border-radius: 16px;
          padding: 60px;
          margin-bottom: 80px;
        }

        .comments-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1.5px solid ${THEME.border};
        }

        .comments-count {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Comment Form */
        .comment-form {
          background: ${THEME.surface};
          border: 1.5px solid ${THEME.border};
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 48px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .comment-form h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${THEME.textMuted};
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          background: ${THEME.bg};
          border: 1.5px solid ${THEME.border};
          color: ${THEME.text};
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 0.3px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: ${THEME.rose};
          background: ${THEME.surface};
          box-shadow: 0 0 0 3px rgba(232, 180, 196, 0.15);
        }

        .form-group textarea {
          min-height: 120px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .rating-group {
          margin-bottom: 24px;
        }

        .rating-group label {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${THEME.textMuted};
          margin-bottom: 12px;
        }

        .rating-stars {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .rating-stars input {
          display: none;
        }

        .rating-stars label {
          margin: 0;
          text-transform: none;
          letter-spacing: normal;
          font-weight: normal;
          font-size: 28px;
          cursor: pointer;
          color: ${THEME.borderLight};
          transition: all 0.3s;
        }

        .rating-stars input:checked ~ label,
        .rating-stars label:hover {
          color: ${THEME.rose};
          transform: scale(1.2);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          color: white;
          border: none;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(232, 180, 196, 0.2);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(232, 180, 196, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Comments List */
        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .comment-item {
          background: ${THEME.surface};
          border: 1.5px solid ${THEME.border};
          padding: 32px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .comment-item:hover {
          border-color: ${THEME.rose};
          box-shadow: 0 8px 20px rgba(232, 180, 196, 0.15);
        }

        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 16px;
        }

        .comment-author {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: ${THEME.text};
        }

        .comment-rating {
          display: flex;
          gap: 2px;
        }

        .comment-rating .star {
          font-size: 12px;
          color: ${THEME.rose};
        }

        .comment-date {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${THEME.textMuted};
          font-style: italic;
        }

        .comment-email {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${THEME.textMuted};
          margin-top: 4px;
        }

        .comment-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
        }

        .no-comments {
          text-align: center;
          padding: 60px 20px;
        }

        .no-comments-icon {
          font-size: 48px;
          color: ${THEME.rose}30;
          margin-bottom: 16px;
        }

        .no-comments-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${THEME.textMuted};
          letter-spacing: 0.3px;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 100px 60px;
          background: linear-gradient(135deg, ${THEME.blush}15, ${THEME.champagne}10);
          border: 1.5px solid ${THEME.border};
          border-radius: 16px;
          margin-top: 120px;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at top right, ${THEME.rose}10, transparent);
          pointer-events: none;
        }

        .cta-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 2px;
          background: linear-gradient(135deg, ${THEME.text}, ${THEME.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 24px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .cta-section p {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 1.9;
          color: ${THEME.textMuted};
          margin-bottom: 40px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
          letter-spacing: 0.3px;
          position: relative;
          z-index: 1;
        }

        .cta-btn {
          display: inline-flex;
          padding: 14px 48px;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          color: white;
          border: none;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 24px rgba(232, 180, 196, 0.25);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(232, 180, 196, 0.4);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 20px;
          }

          .about-hero {
            padding: 60px 0;
            margin-bottom: 60px;
          }

          .about-hero h1 {
            font-size: 40px;
            letter-spacing: 2px;
          }

          .about-hero p {
            font-size: 13px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .section-content:nth-child(even) {
            direction: ltr;
          }

          .section-image {
            height: 300px;
            font-size: 100px;
          }

          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .timeline {
            padding-left: 30px;
          }

          .timeline-item {
            grid-template-columns: 80px 1fr;
            gap: 30px;
          }

          .timeline-year {
            font-size: 28px;
          }

          .comment-form {
            padding: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .comments-section {
            padding: 32px;
          }

          .comments-header {
            flex-direction: column;
            gap: 12px;
          }

          .comment-item {
            padding: 20px;
          }

          .comment-header {
            flex-direction: column;
          }

          .cta-section {
            padding: 60px 30px;
            margin-top: 80px;
          }

          .cta-section h2 {
            font-size: 32px;
          }

          .cta-section p {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>About ARKE</h1>
          <p>
            Jewellery for everyone. Designed for clarity, crafted with loyalty.
            <br />
            We believe in creating pieces that tell your unique story.
          </p>
        </div>

        {/* Our Story */}
        <div className="about-section">
          <h2 className="section-title">Our Story</h2>
          <div className="section-content">
            <div className="section-text">
              <p>
                ARKE was born from a passion to democratize luxury jewellery.
                We believe that everyone deserves to wear pieces that make them
                feel confident, beautiful, and empowered. Our journey started
                with a simple vision: create stunning, hallmark-certified
                jewellery that's accessible and authentic.
              </p>
              <p>
                Each piece in our collection is carefully designed by our team
                of master craftspeople, ensuring that every detail is perfect.
                From concept to creation, we maintain the highest standards of
                quality, sustainability, and artistry.
              </p>
              <h3>Our Commitment</h3>
              <p>
                We're committed to ethical sourcing, premium materials, and
                exceptional customer service. Your satisfaction is our greatest
                achievement.
              </p>
            </div>
            <div className="section-image">💎</div>
          </div>
        </div>

        {/* Achievements */}
        <div className="about-section">
          <h2 className="section-title">By The Numbers</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-value">{achievement.value}</div>
                <div className="achievement-label">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="about-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="about-section">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="about-section">
          <h2 className="section-title">Customer Love</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author">
                  {testimonial.name}
                </div>
                <div className="testimonial-location">
                  📍 {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="about-section comments-section">
          <div className="comments-header">
            <h2 className="section-title">Visitor Feedback</h2>
            <span className="comments-count">
              💬 {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
            </span>
          </div>

          {/* Comment Form */}
          <form className="comment-form" onSubmit={handleSubmitComment}>
            <h3>Share Your Thoughts</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  id="email"
                  type="email"
                  value={visitorEmail}
                  onChange={(e) => setVisitorEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="rating-group">
              <label>How would you rate ARKE?</label>
              <div className="rating-stars">
                {[5, 4, 3, 2, 1].map((num) => (
                  <div key={num} style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id={`star${num}`}
                      type="radio"
                      name="rating"
                      value={num}
                      checked={rating === num}
                      onChange={(e) => setRating(Number(e.target.value))}
                    />
                    <label
                      htmlFor={`star${num}`}
                      style={{
                        color: rating >= num ? THEME.rose : THEME.borderLight,
                      }}
                    >
                      ★
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comment">Your Feedback *</label>
              <textarea
                id="comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your experience with us..."
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={submitting || loading}
            >
              {submitting ? "Posting..." : "Post Comment"}
            </button>
          </form>

          {/* Comments Display */}
          <div className="comments-list">
            {loading ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  color: THEME.textMuted,
                }}
              >
                Loading comments...
              </div>
            ) : comments.length === 0 ? (
              <div className="no-comments">
                <div className="no-comments-icon">💭</div>
                <div className="no-comments-text">
                  Be the first to share your feedback!
                </div>
              </div>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <div>
                      <div className="comment-author">{comment.name}</div>
                      <div className="comment-email">📧 {comment.email}</div>
                      <div className="comment-date">
                        Posted on {comment.date}
                      </div>
                    </div>
                    <div className="comment-rating">
                      {[...Array(comment.rating)].map((_, i) => (
                        <span key={i} className="star">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="comment-text">"{comment.text}"</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to Discover?</h2>
          <p>
            Explore our latest collections and find the perfect piece that
            speaks to your heart. Every item is handcrafted with care and
            designed just for you.
          </p>
          <Link to="/products" className="cta-btn">
            Shop Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}