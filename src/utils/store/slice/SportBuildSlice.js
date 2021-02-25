import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "sportBuild",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      let foundItem = state.cart.find((item) => item.id === action.payload.id);
      if (foundItem) {
        foundItem.price += action.payload.price;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    incrementCart: (state, action) => {
      let foundItem = state.cart.find((item) => item.id === action.payload.id);
      if (foundItem) {
        foundItem.price += 500;
      }
    },
    decrementCart: (state, action) => {
      let foundItem = state.cart.find((item) => item.id === action.payload.id);
      if (foundItem) {
        if (foundItem.price > 1) {
          foundItem.price -= 500;
        } else {
          let index = state.cart.indexOf(foundItem);
          state.cart.splice(index, 1);
        }
      }
    },
  },
});

export const { incrementCart, decrementCart, addCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
