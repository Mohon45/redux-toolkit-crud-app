import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/books/booksSlice";
const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;
