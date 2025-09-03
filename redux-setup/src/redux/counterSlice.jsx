import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // used in store.jsx
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    // new function with variable(payload) declaration

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    loggedValue: (state) => {
      state.lastLogged = state.value;
    },
  },
});

export const { increment, decrement, incrementByAmount, loggedValue } =
  counterSlice.actions;

export default counterSlice.reducer;
