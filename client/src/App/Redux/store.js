import {configureStore} from '@reduxjs/toolkit'
import { deviceReducer } from './slice/devices'

export const store = configureStore({
  reducer: {
    devices: deviceReducer
  }
})