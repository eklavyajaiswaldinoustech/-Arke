import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";

/**
 * Smart Add to Cart Hook
 * - First click: adds product to cart
 * - Second click (same product): opens cart page with that product highlighted
 */
export function useSmartAddToCart() {
  const navigate = useNavigate();
  const { items, addToCart } = useCart();
  const { success, error: showError } = useToast();

  const handleSmartAddToCart = async (product, qty = 1) => {
    try {
      const productId = product?._id || product?.id || product;
      const productName = product?.name || product?.title || "Product";

      // Check if product already exists in cart
      const productExists = items.some((item) => {
        const itemProductId =
          item?.product?._id ||
          item?.product?.id ||
          item?.productId ||
          item?.id;
        return itemProductId?.toString() === productId?.toString();
      });

      if (productExists) {
        // Product already in cart — navigate to cart and highlight it
        success(`${productName} is already in your cart. Opening cart...`);
        setTimeout(() => {
          navigate(`/cart?highlight=${productId}`);
        }, 700);
      } else {
        // Not in cart — add it normally
        await addToCart(product, qty);
        success(`${productName} added to cart! ✨`);
      }
    } catch (err) {
      showError(err.message || "Failed to add to cart");
      console.error("Smart add to cart error:", err);
    }
  };

  return { handleSmartAddToCart };
}