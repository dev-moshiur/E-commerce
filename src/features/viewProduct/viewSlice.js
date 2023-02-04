



import { createSlice } from "@reduxjs/toolkit";



export const viewSlice = createSlice({
  name: "counter",
  initialState: { item:{}},
  reducers: {
    addView: (state,action) => {
          state.item = action.payload;
      },
    
    removeView: (state) => {
          state.item = {};
      },
    
  },
});

export const { addView, removeView } = viewSlice.actions;


export default viewSlice.reducer;