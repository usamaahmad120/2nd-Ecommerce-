import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewsByProduct: {} // { productId: [ {user, rating, comment} ] }
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { productId, review } = action.payload;
      if (!state.reviewsByProduct[productId]) {
        state.reviewsByProduct[productId] = [];
      }
      state.reviewsByProduct[productId].push(review);
    }
  }
});

export const { addReview } = reviewSlice.actions;
export const selectReviewsByProduct = (state, productId) =>
  state.reviews?.reviewsByProduct?.[productId] || [];
export default reviewSlice.reducer;
