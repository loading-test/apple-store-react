import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios'

const initialState = {
  totalPrice: 0,
  itemsCart: [],
  status: 'loading'
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const { data } = await axios.get('/cart')
  console.log(data);
  return data
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.itemsCart.find(obj => obj._id === action.payload._id)
      const {data} = axios.post('/cart', action.payload)
      
      if(findItem) {
        findItem.count++
      }else {
        state.itemsCart.push({...action.payload, count: 1})
      }

      return data
    },
    removeItem(state, action) {
      state.itemsCart = state.itemsCart.filter(obj => obj._id !== action.payload)
    },
    clearItems(state, action) {
      state.itemsCart = []
    }
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
  }
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
