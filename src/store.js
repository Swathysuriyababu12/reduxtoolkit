import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./slices";

export const store = configureStore({
  reducer: {
    app: getProducts,
  },
});
