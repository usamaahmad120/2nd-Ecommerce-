import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productsReducer from "./productsSlice";
import reviewReducer from "./reviewSlice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    reviews: reviewReducer,
  },
});
