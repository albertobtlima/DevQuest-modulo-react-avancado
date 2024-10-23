import cartReducer from "./reducers/cart";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cartProducts: cartReducer,
  },
});

export default store;
