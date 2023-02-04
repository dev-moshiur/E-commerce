

import { configureStore } from "@reduxjs/toolkit";

import cartItemReducer from "../features/cartItem/cartitemSlice";
import viewProductReducer from "../features/viewProduct/viewSlice";

const store = configureStore({
  reducer: {
    cartItem: cartItemReducer,
    viewProduct:viewProductReducer,
  },
});
export default store;