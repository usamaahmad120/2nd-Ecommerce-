import { createSlice } from "@reduxjs/toolkit";
import all_product from "../component/Assest/all_product";

const initialState = {
  all_product: all_product,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
