"use client";

import { configureStore } from "@reduxjs/toolkit";
import { BasketSlice } from "./feature/basket.slice";

export const Store = configureStore({
  reducer: {
    basket: BasketSlice.reducer,
  },
});
