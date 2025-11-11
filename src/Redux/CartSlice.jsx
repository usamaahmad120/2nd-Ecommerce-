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
      state.cartItems = state.cartItems
        .map((item) =>
          item.id === productId &&
          item.selectedImage === selectedImage &&
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      // Increase stock when removed
      const removedItem = state.cartItems.find(
        (item) =>
          item.id === productId &&
          item.selectedImage === selectedImage &&
          item.selectedSize === selectedSize
      );
      if (removedItem) {
        state.productsStock[productId] += 1;
      } else {
        state.productsStock[productId] += 1;
      }
    },

    deleteItem: (state, action) => {
      const { productId, selectedImage, selectedSize, quantity } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.id === productId &&
            item.selectedImage === selectedImage &&
            item.selectedSize === selectedSize
          )
      );

      // Return deleted quantity back to stock
      state.productsStock[productId] += quantity;
    },
  },
});

// Actions
export const { addToCart, removeFromCart, deleteItem, setProductsStock } = cartSlice.actions;

// Selectors
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
