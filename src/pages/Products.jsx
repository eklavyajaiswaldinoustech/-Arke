import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { api, extract, getCategoryId, getCategoryName } from "../services/api";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";

const THEME = {
  bg: "#faf8f5",
  surface: "#ffffff",
  text: "#2a2a2a",
  textMuted: "#8a8a8a",
  rose: "#e8b4c4",
  blush: "#f5d5e0",
  burgundy: "#8b4654",
  roseGold: "#c78a7f",
  champagne: "#e8d4c2",
  lavender: "#d4c4e0",
  border: "#e8ddd4",
  borderLight: "#f0ebe5",
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { success, error: showError } = useToast();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedCat, setSelectedCat] = useState(
    searchParams.get("category") || "all"
  );
  const [priceRange, setPriceRange] = useState([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 100000,
  ]);
  const [sort, setSort] = useState(searchParams.get("sort") || "default");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const ITEMS_PER_PAGE = 12;

  // ── Load products and categories ──────────────────────────
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [p, c] = await Promise.all([
          api.getAllProducts(),
          api.getCategories(),
        ]);
        const loadedProducts = extract(p, "products", "data") || [];
        setProducts(loadedProducts);
        setCategories(extract(c, "categories", "data") || []);

        if (!searchParams.get("maxPrice") && loadedProducts.length > 0) {
          const realMax = Math.max(
            ...loadedProducts.map((prod) => Number(prod.price || 0))
          );
          if (realMax > 0) {
            setPriceRange((prev) => [prev[0], realMax]);
          }
        }
      } catch (err) {
        console.error("Failed to load products:", err);
        setError("Failed to load products. Please try again.");
        showError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showError]);

  // ── Update URL params ────────────────────────────────────
  const updateSearchParams = useCallback(
    (newParams) => {
      const params = {};
      if (newParams.search) params.search = newParams.search;
      if (newParams.category && newParams.category !== "all")
        params.category = newParams.category;
      if (newParams.minPrice > 0) params.minPrice = newParams.minPrice;
      if (newParams.maxPrice < 100000) params.maxPrice = newParams.maxPrice;
      if (newParams.sort && newParams.sort !== "default")
        params.sort = newParams.sort;
      if (newParams.page && newParams.page > 1) params.page = newParams.page;
      setSearchParams(params);
    },
    [setSearchParams]
  );

  // ── Filter products ──────────────────────────────────────
  const filtered = useMemo(() => {
    if (loading) return [];

    return products.filter((p) => {
      if (selectedCat !== "all") {
        const prodCat = p.category;
        if (!prodCat) return false;
        const catMatch =
          typeof prodCat === "object"
            ? String(prodCat._id) === String(selectedCat)
            : String(prodCat) === String(selectedCat);
        if (!catMatch) return false;
      }

      const price = Number(p.price || p.salePrice || 0);
      if (price < priceRange[0] || price > priceRange[1]) return false;

      if (search.trim()) {
        const searchLower = search.toLowerCase();
        return (
          (p.name && p.name.toLowerCase().includes(searchLower)) ||
          (p.description &&
            p.description.toLowerCase().includes(searchLower)) ||
          (p.category &&
            getCategoryName(p.category)
              .toLowerCase()
              .includes(searchLower))
        );
      }

      return true;
    });
  }, [products, selectedCat, priceRange, search, loading]);

  // ── Sort products ────────────────────────────────────────
  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sort === "price-asc")
      arr.sort((a, b) => (a.price || 0) - (b.price || 0));
    if (sort === "price-desc")
      arr.sort((a, b) => (b.price || 0) - (a.price || 0));
    if (sort === "name")
      arr.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    if (sort === "newest") arr.reverse();
    return arr;
  }, [filtered, sort]);

  // ── Pagination ───────────────────────────────────────────
  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return sorted.slice(start, start + ITEMS_PER_PAGE);
  }, [sorted, page]);

  // ── Handlers ─────────────────────────────────────────────
  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
    updateSearchParams({
      search: value,
      category: selectedCat,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sort,
    });
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCat(categoryId);
    setPage(1);
    updateSearchParams({
      search,
      category: categoryId,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sort,
    });
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    setPage(1);
    updateSearchParams({
      search,
      category: selectedCat,
      minPrice: min,
      maxPrice: max,
      sort,
    });
  };

  const handleSortChange = (sortBy) => {
    setSort(sortBy);
    updateSearchParams({
      search,
      category: selectedCat,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sort: sortBy,
    });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      updateSearchParams({
        search,
        category: selectedCat,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        sort,
        page: newPage,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const maxPrice = useMemo(
    () =>
      products.length > 0
        ? Math.max(...products.map((p) => Number(p.price || 0)))
        : 100000,
    [products]
  );

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", paddingTop: 106 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position:  600px 0; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.7; }
        }

        /* ── Hero ── */
        .prod-hero {
          position: relative;
          padding: 64px 80px 56px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          overflow: hidden;
          border-bottom: 1px solid ${THEME.border};
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .prod-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 90% 50%,
              rgba(232,180,196,0.10) 0%,
              transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%,
              rgba(139,70,84,0.04) 0%,
              transparent 70%);
          pointer-events: none;
        }

        /* ── Eyebrow ── */
        .prod-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          animation: fadeInLeft 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
        }
        .prod-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${THEME.rose}, ${THEME.burgundy});
          border-radius: 2px;
        }
        .prod-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${THEME.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .prod-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${THEME.text} 0%, ${THEME.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
        }

        /* ── Sub ── */
        .prod-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${THEME.textMuted};
          line-height: 1.75;
          font-weight: 400;
          max-width: 440px;
          margin: 0 0 24px;
          letter-spacing: 0.2px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
        }

        /* ── Sort Controls ── */
        .prod-controls {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
        }
        .prod-sort-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${THEME.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .prod-sort-select {
          background: ${THEME.surface};
          border: 1px solid ${THEME.border};
          color: ${THEME.text};
          padding: 10px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          cursor: pointer;
          outline: none;
          letter-spacing: 0.5px;
          border-radius: 6px;
          font-weight: 500;
          min-width: 170px;
          transition: all 0.3s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a8a8a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }
        .prod-sort-select:hover,
        .prod-sort-select:focus {
          border-color: ${THEME.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Search Bar ── */
        .prod-search-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${THEME.borderLight};
          animation: fadeInUp 0.5s ease 0.25s both;
        }
        .prod-search-input {
          width: 100%;
          max-width: 400px;
          background: ${THEME.surface};
          border: 1px solid ${THEME.border};
          color: ${THEME.text};
          padding: 12px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
          letter-spacing: 0.3px;
        }
        .prod-search-input:focus {
          border-color: ${THEME.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-search-input::placeholder {
          color: ${THEME.textMuted};
        }

        /* ── Filter Bar ── */
        .prod-filter-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${THEME.borderLight};
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 24px;
          align-items: center;
          animation: fadeInUp 0.5s ease 0.3s both;
        }
        .prod-filter-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${THEME.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .prod-category-scroll {
          display: flex;
          gap: 10px;
          align-items: center;
          overflow-x: auto;
          padding-bottom: 4px;
          scroll-behavior: smooth;
        }
        .prod-category-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .prod-category-scroll::-webkit-scrollbar-track {
          background: ${THEME.borderLight};
          border-radius: 2px;
        }
        .prod-category-scroll::-webkit-scrollbar-thumb {
          background: ${THEME.rose};
          border-radius: 2px;
        }
        .prod-cat-btn {
          padding: 10px 20px;
          background: ${THEME.surface};
          border: 1px solid ${THEME.border};
          color: ${THEME.text};
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
          border-radius: 6px;
          font-weight: 500;
        }
        .prod-cat-btn.active {
          background: ${THEME.rose};
          border-color: ${THEME.rose};
          color: ${THEME.surface};
        }
        .prod-cat-btn:hover:not(.active) {
          border-color: ${THEME.rose};
        }

        /* ── Price Inputs ── */
        .prod-price-inputs {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .prod-price-input {
          width: 90px;
          background: ${THEME.surface};
          border: 1px solid ${THEME.border};
          color: ${THEME.text};
          padding: 10px 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
        }
        .prod-price-input:focus {
          border-color: ${THEME.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-price-dash {
          color: ${THEME.textMuted};
          font-weight: 500;
        }

        /* ── Toolbar ── */
        .prod-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${THEME.borderLight};
          animation: fadeInUp 0.5s ease 0.35s both;
          flex-wrap: wrap;
          gap: 16px;
        }
        .prod-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${THEME.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .prod-count strong {
          color: ${THEME.burgundy};
          font-weight: 700;
        }
        .prod-page-info {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.5px;
          color: ${THEME.textMuted};
        }

        /* ── Grid ── */
        .prod-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
          animation: fadeInUp 0.6s ease 0.4s both;
        }

        /* ── Empty ── */
        .prod-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 16px;
          text-align: center;
        }
        .prod-empty-icon {
          font-size: 48px;
          opacity: 0.4;
          margin-bottom: 8px;
        }
        .prod-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          color: ${THEME.textMuted};
          font-style: italic;
        }
        .prod-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${THEME.textMuted};
          letter-spacing: 0.5px;
        }

        /* ── Loading ── */
        .prod-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          gap: 20px;
          padding: 40px 80px;
        }
        .prod-spinner {
          width: 44px;
          height: 44px;
          border: 2px solid ${THEME.borderLight};
          border-top-color: ${THEME.rose};
          border-right-color: ${THEME.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .prod-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${THEME.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        /* ── Error Banner ── */
        .prod-error-banner {
          background: rgba(232,180,196,0.1);
          border-bottom: 1px solid ${THEME.rose};
          color: ${THEME.burgundy};
          padding: 16px 80px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.3px;
          animation: fadeInUp 0.5s ease both;
        }

        /* ── Pagination ── */
        .prod-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 48px;
          flex-wrap: wrap;
          animation: fadeInUp 0.5s ease 0.45s both;
        }
        .prod-page-btn {
          padding: 10px 16px;
          background: ${THEME.surface};
          border: 1px solid ${THEME.border};
          color: ${THEME.text};
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 6px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .prod-page-btn.active {
          background: ${THEME.rose};
          border-color: ${THEME.rose};
          color: ${THEME.surface};
        }
        .prod-page-btn:hover:not(.active):not(:disabled) {
          border-color: ${THEME.rose};
          background: ${THEME.blush};
        }
        .prod-page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ── Skeleton ── */
        .prod-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
        }
        .prod-skeleton-card {
          border-radius: 8px;
          overflow: hidden;
          background: ${THEME.surface};
          border: 1px solid ${THEME.borderLight};
        }
        .prod-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${THEME.borderLight} 25%,
            ${THEME.champagne} 50%,
            ${THEME.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }
        .prod-skeleton-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .prod-skeleton-line {
          height: 10px;
          border-radius: 4px;
          background: linear-gradient(
            90deg,
            ${THEME.borderLight} 25%,
            ${THEME.champagne} 50%,
            ${THEME.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }

        /* ── Quick Add Button ── */
        .prod-add-btn {
          margin-top: 12px;
          padding: 12px 16px;
          background: ${THEME.rose};
          color: ${THEME.surface};
          border: 1.5px solid ${THEME.rose};
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border-radius: 6px;
          width: 100%;
        }
        .prod-add-btn:hover:not(:disabled) {
          background: ${THEME.burgundy};
          border-color: ${THEME.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(139,70,84,0.15);
        }
        .prod-add-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 40px 60px 80px;
          }
          .prod-hero { padding: 60px 60px 50px; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 20px 60px; }
        }
        @media (max-width: 1024px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 32px 40px 64px;
          }
          .prod-hero { padding: 56px 40px 48px; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 18px 40px; }
        }
        @media (max-width: 768px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            padding: 28px 20px 56px;
          }
          .prod-hero {
            padding: 48px 20px 40px;
            flex-direction: column;
            align-items: flex-start;
          }
          .prod-controls {
            width: 100%;
            flex-direction: row;
          }
          .prod-sort-select { flex: 1; min-width: unset; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 16px 20px; }
          .prod-filter-bar {
            grid-template-columns: 1fr;
          }
          .prod-category-scroll {
            order: 2;
          }
        }
        @media (max-width: 480px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 20px 14px 48px;
          }
          .prod-hero { padding: 36px 14px 32px; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 14px; }
          .prod-filter-bar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── Error Banner ── */}
      {error && (
        <div className="prod-error-banner">
          ⚠ {error}
        </div>
      )}

      {/* ── Hero ── */}
      <div className="prod-hero">
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="prod-eyebrow">
            <div className="prod-eyebrow-line" />
            <span className="prod-eyebrow-text">Shop Our Collection</span>
          </div>

          <h1 className="prod-heading">
            All Jewellery
          </h1>

          <p className="prod-sub">
            Discover our complete collection of handcrafted pieces.
            Find the perfect style that speaks to you.
          </p>
        </div>

        <div className="prod-controls">
          <span className="prod-sort-label">Sort by</span>
          <select
            className="prod-sort-select"
            value={sort}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A-Z</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* ── Search Bar ── */}
      <div className="prod-search-bar">
        <input
          type="text"
          placeholder="Search products, categories..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="prod-search-input"
        />
      </div>

      {/* ── Category & Price Filter ── */}
      {!loading && categories.length > 0 && (
        <div className="prod-filter-bar">
          <span className="prod-filter-label">Category</span>
          <div className="prod-category-scroll">
            <button
              className={`prod-cat-btn ${selectedCat === "all" ? "active" : ""}`}
              onClick={() => handleCategoryChange("all")}
            >
              All
            </button>
            {categories.map((c) => {
              const categoryId = getCategoryId(c);
              if (!categoryId) return null;
              return (
                <button
                  key={categoryId}
                  className={`prod-cat-btn ${
                    selectedCat === categoryId ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(categoryId)}
                >
                  {getCategoryName(c)}
                </button>
              );
            })}
          </div>

          <div className="prod-price-inputs">
            <span className="prod-filter-label">Price:</span>
            <input
              type="number"
              min="0"
              value={priceRange[0]}
              onChange={(e) =>
                handlePriceChange(Number(e.target.value), priceRange[1])
              }
              className="prod-price-input"
              placeholder="Min"
            />
            <span className="prod-price-dash">–</span>
            <input
              type="number"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceChange(priceRange[0], Number(e.target.value))
              }
              className="prod-price-input"
              placeholder="Max"
            />
          </div>
        </div>
      )}

      {/* ── Toolbar ── */}
      {!loading && (
        <div className="prod-toolbar">
          <span className="prod-count">
            Showing <strong>{paginatedProducts.length}</strong> of{" "}
            <strong>{sorted.length}</strong> piece
            {sorted.length !== 1 ? "s" : ""}
          </span>
          {totalPages > 1 && (
            <div className="prod-page-info">
              Page {page} of {totalPages}
            </div>
          )}
        </div>
      )}

      {/* ── Loading Skeleton ── */}
      {loading ? (
        <>
          <div className="prod-loading">
            <div className="prod-spinner" />
            <p className="prod-loading-text">Loading collection…</p>
          </div>
        </>
      ) : sorted.length === 0 ? (
        /* ── Empty State ── */
        <div className="prod-grid">
          <div className="prod-empty">
            <div className="prod-empty-icon">✨</div>
            <p className="prod-empty-title">No pieces found</p>
            <p className="prod-empty-sub">
              Try adjusting your filters or search terms
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* ── Products Grid ── */}
          <div className="prod-grid">
            {paginatedProducts.map((p, i) => (
              <div
                key={p._id || i}
                style={{
                  animation: `fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${
                    i * 40
                  }ms both`,
                }}
              >
                <ProductCardWithAddToCart product={p} />
              </div>
            ))}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div style={{ padding: "0 80px 80px" }}>
              <div className="prod-pagination">
                <button
                  className="prod-page-btn"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                >
                  ← Previous
                </button>

                {Array.from({
                  length: Math.min(5, totalPages),
                }).map((_, i) => {
                  const pageNum =
                    totalPages <= 5
                      ? i + 1
                      : Math.max(1, page - 2) + i;
                  if (pageNum > totalPages) return null;
                  return (
                    <button
                      key={pageNum}
                      className={`prod-page-btn ${
                        pageNum === page ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  className="prod-page-btn"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                >
                  Next →
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Product Card with Add to Cart ────────────────────────
function ProductCardWithAddToCart({ product }) {
  const { addToCart } = useCart();
  const { success, error: showError } = useToast();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setLoading(true);
    try {
      await addToCart(product._id || product.id, 1);
      success("Added to cart!");
    } catch (err) {
      showError(err?.message || "Failed to add to cart");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProductCard product={product} />

      <button
        onClick={handleAddToCart}
        disabled={loading}
        className="prod-add-btn"
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}