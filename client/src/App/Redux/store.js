import {configureStore} from '@reduxjs/toolkit'
import { deviceReducer } from './slice/device'
import { filterReducer } from './slice/filter';

export const store = configureStore({
  reducer: {
    devices: deviceReducer,
    filter: filterReducer
  }
})