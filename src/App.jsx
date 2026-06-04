import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import Homepage from "./pages/Homepage";
import NewCollection from "./pages/NewCollection";
import BestSellers from "./pages/BestSellers";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import GiftForHer from "./pages/Giftforher";
import GiftForHim from "./pages/Giftforhim";
import MyOrders from "./pages/MyOrders";
import AboutUs from "./pages/AboutUs";
import CustomerCare from "./pages/CustomerCare";
import BankDetails from "./pages/Bankdetails";

function Layout() {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <>
      <Navbar onLoginClick={() => setShowAuth(true)} />
      <Routes>
        <Route path="/"               element={<Homepage />} />
        <Route path="/new-collection" element={<NewCollection />} />
        <Route path="/best-sellers"   element={<BestSellers />} />
        <Route path="/products"       element={<Products />} />
        <Route path="/product/:id"    element={<ProductDetail />} />
        <Route path="/categories"     element={<Categories />} />
        <Route path="/blog"           element={<Blog />} />
        <Route path="/cart"           element={<Cart />} />
        <Route path="/wishlist"       element={<Wishlist />} />
        <Route path="/gift-for-him" element={<GiftForHim />} />
        <Route path="/gift-for-her" element={<GiftForHer />} />
        <Route path="/my-orders"     element={<MyOrders />} />
        <Route path="/about-us"      element={<AboutUs />} />
        <Route path="/customer-care" element={<CustomerCare/>} />
        <Route path="/bankdetails" element={<BankDetails/>} />
      </Routes>
      <Footer />
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout />
      </BrowserRouter>
    </StoreProvider>
  );
}