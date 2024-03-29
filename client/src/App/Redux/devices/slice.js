import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { identity, pickBy } from 'lodash';
import axios from '../../axios';

const initialState = {
  items: [],
  status: 'loading',
};

export const fetchDevice = createAsyncThunk('devices/fetchDevice', async (params) => {
  const { category, page, size } = params;

  const { data } = await axios.get(`/devices`, {
    params: pickBy({ category, page, size }, identity),
  });

  return data.devices;
});

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
      state.items = [];
      state.status = 'loading';
    },
    [fetchDevice.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchDevice.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const { setItems } = deviceSlice.reducer;

export default deviceSlice.reducer;
