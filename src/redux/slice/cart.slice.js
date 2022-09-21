import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const idx = state.findIndex((e) => e.id === product.id);
      if (idx !== -1) state[idx].quantity = state[idx].quantity + 1;
      else state.push({ ...product, quantity: 1 });
    },

    increaseQuantity: (state, action) => {
      const product = action.payload;
      const idx = state.findIndex((e) => e.id === product.id);
      state[idx].quantity = state[idx].quantity + 1;
    },

    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const idx = state.findIndex((e) => e.id === product.id);
      const quantity = state[idx].quantity - 1;
      if (quantity === 0) state.splice(idx, 1);
      else state[idx].quantity = quantity;
    },
  },
});

export const {
  actions: { addToCart, increaseQuantity, decreaseQuantity },
  reducer: cartReducers,
} = cartSlice;

export const selectCart = (state) => state.cart;
