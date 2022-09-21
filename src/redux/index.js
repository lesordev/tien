import { cartReducers } from "./slice/cart.slice";
import { productReducers } from "./slice/product.slice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    products: productReducers,
    cart: cartReducers,
  },
});
