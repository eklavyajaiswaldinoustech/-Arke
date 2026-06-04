import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, imgUrl, extract } from "../services/api";

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
};

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getBlogs()
      .then((r) => {
        setBlogs(extract(r, "blogs", "data"));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{
      background: THEME.bg,
      minHeight: "100vh",
      paddingTop: "120px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ── Header ── */
        .blog-header {
          padding: 100px 80px 70px;
          border-bottom: 1.5px solid ${THEME.border};
          background: linear-gradient(135deg, rgba(232,180,196,0.04) 0%, rgba(139,70,84,0.02) 100%);
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .blog-header::before {
          content: '';
          position: absolute;
          top: 0;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(232,180,196,0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .blog-header-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .blog-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          margin-bottom: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .blog-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${THEME.rose}, ${THEME.burgundy});
          border-radius: 2px;
        }

        .blog-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 300;
          color: ${THEME.text};
          letter-spacing: -1px;
          line-height: 1.1;
          background: linear-gradient(135deg, ${THEME.text} 0%, ${THEME.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .blog-header-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${THEME.textMuted};
          line-height: 1.8;
          letter-spacing: 0.3px;
          max-width: 600px;
        }

        /* ── Grid ── */
        .blog-grid-container {
          padding: 100px 80px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        /* ── Card ── */
        .blog-card {
          cursor: pointer;
          animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation-fill-mode: both;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: ${THEME.surface};
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid ${THEME.borderLight};
        }

        .blog-card:nth-child(1) { animation-delay: 0.1s; }
        .blog-card:nth-child(2) { animation-delay: 0.2s; }
        .blog-card:nth-child(3) { animation-delay: 0.3s; }
        .blog-card:nth-child(4) { animation-delay: 0.4s; }
        .blog-card:nth-child(5) { animation-delay: 0.5s; }
        .blog-card:nth-child(6) { animation-delay: 0.6s; }
        .blog-card:nth-child(7) { animation-delay: 0.7s; }
        .blog-card:nth-child(8) { animation-delay: 0.8s; }

        .blog-card:hover {
          transform: translateY(-12px);
          border-color: ${THEME.rose};
          box-shadow: 0 24px 48px rgba(139, 70, 84, 0.18);
        }

        /* ── Image ── */
        .blog-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, ${THEME.blush}20, ${THEME.champagne}15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-img {
          transform: scale(1.08);
        }

        .blog-img-placeholder {
          font-size: 80px;
          opacity: 0.5;
        }

        /* ── Badges ── */
        .blog-badges {
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          z-index: 10;
        }

        .blog-category-badge {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          background: rgba(232, 180, 196, 0.95);
          backdrop-filter: blur(10px);
          padding: 7px 14px;
          border-radius: 20px;
          font-weight: 700;
          border: 0.5px solid ${THEME.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-category-badge {
          background: ${THEME.rose};
          color: white;
          transform: scale(1.05);
        }

        .blog-featured-badge {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: white;
          background: ${THEME.burgundy};
          padding: 7px 14px;
          border-radius: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── Content ── */
        .blog-content {
          flex: 1;
          padding: 28px;
          display: flex;
          flex-direction: column;
          border-bottom: 1.5px solid ${THEME.borderLight};
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-content {
          border-color: ${THEME.rose};
        }

        .blog-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          color: ${THEME.text};
          line-height: 1.4;
          margin-bottom: 14px;
          transition: color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-title {
          color: ${THEME.burgundy};
        }

        .blog-excerpt {
          color: ${THEME.textMuted};
          font-family: 'Poppins', sans-serif;
          font-size: 12.5px;
          line-height: 1.75;
          margin-bottom: auto;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        /* ── Footer ── */
        .blog-footer {
          padding: 16px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: ${THEME.bg};
          transition: background 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-footer {
          background: ${THEME.blush}20;
        }

        .blog-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .blog-date {
          color: ${THEME.textMuted};
          font-size: 10px;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .blog-author {
          color: ${THEME.text};
          font-size: 11px;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .blog-read-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: ${THEME.blush};
          color: ${THEME.burgundy};
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-read-link {
          background: ${THEME.rose};
          color: white;
          transform: scale(1.1);
        }

        /* ── Loading State ── */
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 160px 40px;
        }

        .loading-spinner {
          width: 52px;
          height: 52px;
          border: 3px solid ${THEME.borderLight};
          border-top-color: ${THEME.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 28px;
        }

        .loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          color: ${THEME.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Empty State ── */
        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 100px 40px;
        }

        .empty-state-icon {
          font-size: 80px;
          margin-bottom: 24px;
          animation: fadeInUp 0.6s ease 0.2s both;
        }

        .empty-state-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          color: ${THEME.text};
          margin-bottom: 12px;
          letter-spacing: 1px;
          animation: fadeInUp 0.6s ease 0.3s both;
        }

        .empty-state-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${THEME.textMuted};
          font-weight: 400;
          line-height: 1.8;
          animation: fadeInUp 0.6s ease 0.4s both;
        }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          overflow-y: auto;
        }

        .modal-content {
          background: ${THEME.surface};
          border-radius: 16px;
          width: 90%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          margin: 20px auto;
        }

        .modal-header {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: linear-gradient(135deg, ${THEME.blush}30, ${THEME.champagne}20);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .modal-close:hover {
          background: white;
          transform: rotate(90deg) scale(1.1);
        }

        .modal-body {
          padding: 52px;
        }

        .modal-category {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          background: ${THEME.blush};
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
          font-weight: 700;
          border: 1px solid ${THEME.rose}60;
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 300;
          color: ${THEME.text};
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .modal-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1.5px solid ${THEME.borderLight};
          flex-wrap: wrap;
        }

        .modal-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .modal-author-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy});
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
        }

        .modal-author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .modal-author-name {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: ${THEME.text};
        }

        .modal-author-role {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          color: ${THEME.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-date {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${THEME.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-read-time {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${THEME.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-content-text {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          color: ${THEME.text};
          letter-spacing: 0.4px;
        }

        .modal-content-text p {
          margin-bottom: 24px;
        }

        .modal-content-text h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: ${THEME.text};
          margin: 36px 0 16px;
          letter-spacing: -0.5px;
        }

        .modal-content-text h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: ${THEME.text};
          margin: 28px 0 12px;
          letter-spacing: -0.5px;
        }

        .modal-content-text blockquote {
          border-left: 4px solid ${THEME.rose};
          padding-left: 20px;
          margin: 28px 0;
          color: ${THEME.textMuted};
          font-style: italic;
        }

        /* ── Scrollbar ── */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: ${THEME.bg};
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: ${THEME.rose};
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: ${THEME.burgundy};
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .blog-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 32px;
          }

          .blog-grid-container {
            padding: 80px 60px;
          }

          .blog-header {
            padding: 80px 60px 50px;
          }
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .blog-grid-container {
            padding: 60px 40px;
          }

          .blog-header {
            padding: 60px 40px;
          }

          .modal-body {
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .blog-grid-container {
            padding: 50px 20px;
          }

          .blog-header {
            padding: 50px 20px 40px;
          }

          .blog-heading {
            font-size: 36px;
          }

          .blog-title {
            font-size: 20px;
          }

          .modal-content {
            width: 95%;
            max-height: 95vh;
          }

          .modal-body {
            padding: 24px;
          }

          .modal-title {
            font-size: 28px;
          }

          .modal-content-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .blog-grid-container {
            padding: 40px 16px;
          }

          .blog-header {
            padding: 40px 16px 30px;
          }

          .blog-heading {
            font-size: 28px;
          }

          .blog-card {
            border-radius: 8px;
          }

          .modal-body {
            padding: 20px;
          }

          .modal-title {
            font-size: 22px;
          }

          .modal-meta {
            gap: 12px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="blog-header">
        <div className="blog-header-content">
          <div className="blog-eyebrow">Stories & Inspiration</div>
          <h1 className="blog-heading">From the Journal</h1>
          <p className="blog-header-sub">
            Discover inspiring stories about jewellery craftsmanship, styling tips,
            and the art of wearing pieces that celebrate your unique style.
          </p>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div style={{ padding: "80px 40px" }}>
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading our stories…</p>
          </div>
        </div>
      ) : blogs.length > 0 ? (
        /* Blog Grid */
        <div className="blog-grid-container">
          <div className="blog-grid">
            {blogs.map((b, i) => {
              const img = imgUrl(b.image || b.thumbnail || b.featuredImage);
              const date = b.date || b.createdAt;
              const readTime = b.readTime || Math.ceil((b.content?.length || 0) / 200);

              return (
                <div
                  key={i}
                  className="blog-card"
                  onClick={() => setSelectedBlog(b)}
                >
                  {/* Image */}
                  <div className="blog-img-wrap">
                    {img ? (
                      <img
                        src={img}
                        alt={b.title}
                        className="blog-img"
                      />
                    ) : (
                      <div className="blog-img-placeholder">📖</div>
                    )}
                    
                    {/* Badges */}
                    <div className="blog-badges">
                      {b.featured && (
                        <div className="blog-featured-badge">
                          <span>✦</span> Featured
                        </div>
                      )}
                      <div className="blog-category-badge">
                        {b.category || "Journal"}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="blog-content">
                    {/* Title */}
                    <h3 className="blog-title">{b.title}</h3>

                    {/* Excerpt */}
                    {b.excerpt && (
                      <p className="blog-excerpt">
                        {b.excerpt.length > 110
                          ? `${b.excerpt.slice(0, 110)}...`
                          : b.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="blog-footer">
                    <div className="blog-meta">
                      <div className="blog-date">
                        {date
                          ? new Date(date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : ""}
                      </div>
                      {readTime > 0 && (
                        <div className="blog-read-time">
                          {readTime} min read
                        </div>
                      )}
                    </div>
                    <div className="blog-read-link">
                      →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="blog-grid-container">
          <div className="blog-grid">
            <div className="empty-state">
              <div className="empty-state-icon">📝</div>
              <div className="empty-state-text">No Stories Yet</div>
              <div className="empty-state-desc">
                Check back soon for inspiring stories, style tips, and jewellery insights.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <BlogDetailModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </div>
  );
}

/* ── Blog Detail Modal Component ── */
function BlogDetailModal({ blog, onClose }) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const img = imgUrl(blog.image || blog.thumbnail || blog.featuredImage);
  const date = blog.date || blog.createdAt;
  const readTime = blog.readTime || Math.ceil((blog.content?.length || 0) / 200);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header Image */}
        <div className="modal-header">
          {img ? (
            <img
              src={img}
              alt={blog.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div style={{ fontSize: "120px", opacity: 0.3 }}>📖</div>
          )}
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Category Badge */}
          {blog.category && (
            <div className="modal-category">
              {blog.category}
            </div>
          )}

          {/* Title */}
          <h1 className="modal-title">{blog.title}</h1>

          {/* Meta Info */}
          <div className="modal-meta">
            {blog.author && (
              <div className="modal-author">
                <div className="modal-author-avatar">
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div className="modal-author-info">
                  <div className="modal-author-name">{blog.author}</div>
                  <div className="modal-author-role">Author</div>
                </div>
              </div>
            )}

            {date && (
              <div className="modal-date">
                {new Date(date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            )}

            {readTime > 0 && (
              <div className="modal-read-time">
                ⏱ {readTime} min read
              </div>
            )}
          </div>

          {/* Content */}
          {blog.content ? (
            <div
              className="modal-content-text"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          ) : (
            <div className="modal-content-text">
              {blog.excerpt || blog.description || "No content available for this blog post."}
            </div>
          )}

          {/* Divider */}
          <div
            style={{
              margin: "48px 0",
              padding: "28px 0",
              borderTop: `1.5px solid ${THEME.border}`,
              borderBottom: `1.5px solid ${THEME.border}`,
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "24px",
                color: THEME.textMuted,
              }}
            >
              ✦
            </span>
          </div>

          {/* Call to Action */}
          <div
            style={{
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "13px",
                color: THEME.textMuted,
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Enjoyed this story? Share it with someone special or explore more from our journal.
            </p>
            <button
              onClick={onClose}
              style={{
                padding: "12px 32px",
                background: `linear-gradient(135deg, ${THEME.rose}, ${THEME.burgundy})`,
                border: "none",
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: "700",
                cursor: "pointer",
                borderRadius: "6px",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 24px rgba(139, 70, 84, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Back to Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}