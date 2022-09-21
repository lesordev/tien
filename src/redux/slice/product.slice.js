import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    addProduct: (state, action) => {
      state.push({ ...action.payload, id: state.length });
    },

    updateProduct: (state, action) => {
      const product = action.payload;
      const idx = state.findIndex((e) => e.id === product.id);
      state[idx] = product;
    },
  },
});

export const {
  actions: { addProduct, updateProduct },
  reducer: productReducers,
} = productSlice;

export const selectProducts = (state) => state.products;
