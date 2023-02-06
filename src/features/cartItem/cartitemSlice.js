

import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
  name: "counter",
  initialState: { cartItems:[],
                 totalPrice: 0 ,
                },
  reducers: {
    insert: (state,action) => {
        state.cartItems = [...state.cartItems,action.payload];
        state.totalPrice = state.totalPrice + action.payload.price;
      },
    drop: (state,action) => {
          state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id);
          state.totalPrice = state.totalPrice - action.payload.price;
   
       },
    
    increaseTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
    decreaseTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice - action.payload;
    },
  },
});

export const { insert, drop, increaseTotalPrice, decreaseTotalPrice } =
  counterSlice.actions;

export default counterSlice.reducer;
