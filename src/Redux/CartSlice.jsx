import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, selectedImage, selectedSize } = action.payload;
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedImage === selectedImage &&
          item.selectedSize === selectedSize
      );
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
    },

    deleteItem: (state, action) => {
      const { productId, selectedImage, selectedSize } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.id === productId &&
            item.selectedImage === selectedImage &&
            item.selectedSize === selectedSize
          )
      );
    },
  },
});

// ✅ Export Actions
export const { addToCart, removeFromCart, deleteItem } = cartSlice.actions;

// ✅ Selector to get all items
export const selectCartItems = (state) => state.cart.cartItems;

// ✅ Selector to get total quantity (for navbar badge)
export const selectCartTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

// ✅ Selector to get total price (optional, useful for cart page)
export const selectCartTotalPrice = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.quantity * item.new_price,
    0
  );

export default cartSlice.reducer;
