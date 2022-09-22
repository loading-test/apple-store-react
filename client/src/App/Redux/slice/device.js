import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchDevice = createAsyncThunk('/devices/fetchDevice', async () => {
  const { data } = await axios.get('/devices');

  return data;
});

const initialState = {
  devices: {
    items: [],
    status: 'loading',
  },
};

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducer: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchDevice.pending]: (state) => {
      state.devices.items = [];
      state.devices.status = 'loading';
    },
    [fetchDevice.fulfilled]: (state, action) => {
      state.devices.items = action.payload;
      state.devices.status = 'downloaded';
    },
    [fetchDevice.rejected]: (state) => {
      state.devices.items = [];
      state.devices.status = 'error';
    },
  },
});

export const { setItems } = deviceSlice.reducer;

export const deviceReducer = deviceSlice.reducer;
