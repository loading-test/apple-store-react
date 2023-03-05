import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { identity, pickBy } from 'lodash';

const initialState = {
  searchValue: '',
  categoryId: 0,
  page: 1,
  size: 0,
};

export const fetchFilter = createAsyncThunk('/filter/fetchFilter', async (params) => {
  const { page, size, search } = params;
  const {data} = await axios.get(`/devices`, {
    params: pickBy({ page, size, search }, identity),
  })
  console.log('filter: ', data);
  return data
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setCurrentPage(state, action) {
      state.page = action.payload
    },
    setSizePage(state, action) {
      state.size = action.payload
    },
    // setSort(state, action) {
    //   state.sort = action.payload
    // },
    setFilter(state, action) {
      if(Object.keys(action.payload).length) {
        state.page = Number(action.payload.page)
        state.size = Number(action.payload.size)
        state.categoryId = Number(action.payload.categoryId)
        // state.sort = action.payload.sort
      } else {
        state.page = 1
        state.size = 0
        state.categoryId = ''
      }
    }
  },
});

export const { setSearchValue, setCategoryId, setCurrentPage, setSizePage, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
