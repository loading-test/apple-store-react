import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  itemsCart: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.itemsCart.find(obj => obj._id === action.payload._id)
      
      if(findItem) {
        findItem.count++
      }else {
        state.itemsCart.push({...action.payload, count: 1})
      }
    },
    removeItem(state, action) {
      state.itemsCart = state.itemsCart.filter(obj => obj._id !== action.payload)
    },
    clearItems(state, action) {
      state.itemsCart = []
    }
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
