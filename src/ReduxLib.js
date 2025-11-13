
import { setProductsStock } from "./Redux/CartSlice";
import { selectReviewsByProduct } from "./Redux/reviewSlice";

// Export all Redux actions & selectors in one object
export const ReduxLib = {
  setProductsStock,
  selectReviewsByProduct,
};
