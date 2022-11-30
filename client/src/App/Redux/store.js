import {configureStore} from '@reduxjs/toolkit'
import devices from './devices/slice'
import filter from './filter/slice';
import cart from './cart/slice';


export const store = configureStore({
  reducer: {
    devices,
    filter,
    cart
  }
})