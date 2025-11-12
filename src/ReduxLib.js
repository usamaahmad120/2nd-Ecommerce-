
import { setProductsStock } from "./CartSlice";
import { selectReviewsByProduct } from "./reviewSlice";

// Export all Redux actions & selectors in one object
export const ReduxLib = {
  setProductsStock,
  selectReviewsByProduct,
};
