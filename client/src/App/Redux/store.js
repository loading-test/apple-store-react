import {configureStore} from '@reduxjs/toolkit'
import devices from './devices/slice'
import filter from './filter/slice';


export const store = configureStore({
  reducer: {
    devices,
    filter
  }
})