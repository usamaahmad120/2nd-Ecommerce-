import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  productsStock: {}, // Product id ke basis pe stock
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsStock: (state, action) => {
      state.productsStock = action.payload;
    },

    addToCart: (state, action) => {
      const { product, selectedImage, selectedSize } = action.payload;

      const stock = state.productsStock[product.id] || 0;
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedImage === selectedImage &&
          item.selectedSize === selectedSize
      );

      if (stock > 0) {
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({
            ...product,
            selectedImage,
            selectedSize,
            quantity: 1,
          });
        }
        state.productsStock[product.id] -= 1; // Reduce stock on add
      }
    },

    removeFromCart: (state, action) => {
      const { productId, selectedImage, selectedSize } = action.payload;

      const existingItem = state.cartItems.find(
        (item) =>
          item.id === productId &&
          item.selectedImage === selectedImage &&
          item.selectedSize === selectedSize
      );

      if (existingItem) {
        existingItem.quantity -= 1;

        if (existingItem.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) =>
              !(
                item.id === productId &&
                item.selectedImage === selectedImage &&
                item.selectedSize === selectedSize
              )
          );
        }

        // Increase stock back
        state.productsStock[productId] =
          (state.productsStock[productId] || 0) + 1;
      }
    },

    deleteItem: (state, action) => {
      const { productId, selectedImage, selectedSize, quantity = 1 } =
        action.payload;

      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.id === productId &&
            item.selectedImage === selectedImage &&
            item.selectedSize === selectedSize
          )
      );

      // Return deleted quantity back to stock
      state.productsStock[productId] =
        (state.productsStock[productId] || 0) + quantity;
    },

    // ✅ NEW: Clear cart after successful order
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// ✅ Export actions
export const {
  addToCart,
  removeFromCart,
  deleteItem,
  setProductsStock,
  clearCart,
} = cartSlice.actions;

// ✅ Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrice = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.quantity * item.new_price,
    0
  );
export const selectProductStock = (state, productId) =>
  state.cart.productsStock[productId] || 0;

export default cartSlice.reducer;
