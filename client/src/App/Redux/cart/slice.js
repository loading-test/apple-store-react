import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import { calcTotalPrice } from '../../utils/totalPrice';

const initialState = {
  totalPrice: 0,
  itemsCart: [],
  status: 'loading',
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  
  const { data } = await axios.get('/cart',);
  
  return data;
});

export const fetchRemoveItem = createAsyncThunk('cart/fetchRemoveItem', async (id) => {
  const { data } = await axios.delete(`/cart/${id}`);

  return data;
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.itemsCart.find((obj) => obj._id === action.payload._id);
      const { data } = axios.post('/cart', action.payload);

      if (findItem) {
        findItem.count++;
      } else {
        state.itemsCart.push({ ...action.payload, count: 1 });
        
      }

      state.totalPrice = calcTotalPrice(state.itemsCart);
      
      return data;
    },

    minusItem(state, action) {
      const findItem = state.itemsCart.find(obj => obj._id === action.payload)
      if(findItem) {
        findItem.count--
      }
    },
    // removeItem(state, action) {
    //   state.itemsCart = state.itemsCart.filter((obj) => obj._id !== action.payload);
    // },
    clearItems(state) {
      axios.delete('/cart')
      state.itemsCart = [];
    },
    
  },
  extraReducers: {
    [fetchCart.pending]: (state) => {
      state.itemsCart = [];
      state.status = 'loading';
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.itemsCart = action.payload;
      state.status = 'success';
    },
    [fetchCart.rejected]: (state) => {
      state.itemsCart = [];
      state.status = 'error';
    },
    [fetchRemoveItem.pending]: (state, action) => {
      state.itemsCart = state.itemsCart.filter((obj) => obj._id !== action.meta.arg);
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
