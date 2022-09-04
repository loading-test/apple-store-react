import {configureStore} from '@reduxjs/toolkit'
import { deviceReducer } from './slice/device'

export const store = configureStore({
  reducer: {
    device: deviceReducer
  }
})