import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/user/userSlice.jsx";

export const store = configureStore({
  // reducer: todoReducer
  reducer: {
    user: userReducer,
  },
});
