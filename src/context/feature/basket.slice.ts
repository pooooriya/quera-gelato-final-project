"use client";
import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  initialState: [],
  name: "basket",
  reducers: {
    AddToBasket: (state, action) => {
      const currentItem = state.find((item) => item.id === action.payload.id);

      if (currentItem) {
        currentItem.count += 1;
      } else {
        const newItem = { ...action.payload, count: 1 };
        state.push(newItem);
      }
    },
    RemoveFromBasket: (state, action) => {
      let currentItem = state.filter((x) => x.id === action.payload.id);

      if (currentItem.length > 0) {
        state.forEach((element) => {
          if (element.id === action.payload.id) {
            if (element.count > 1) {
              element.count -= 1;
            } else {
              state.splice(
                state.findIndex((arrow) => arrow.id === action.payload.id),
                1
              );
            }
          }
        });
      }
    },
  },
});

export const { AddToBasket, RemoveFromBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
