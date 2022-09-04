import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios';

export const fetchDevice = createAsyncThunk('/devices/fetchDevice', async () => {
  const {data} = await axios.get('/devices')
  console.log(data);
  return data
})

const initialState = {
  device: {
    items: [],
    status: 'loading'
  }
}

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducer: {}
})

export const deviceReducer = deviceSlice.reducer