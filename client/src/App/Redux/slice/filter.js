import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'по цене'
  }
};

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
      state.currentPage = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setFilter(state, action) {
      if(Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage)
        state.categoryId = Number(action.payload.categoryId)
        state.sort = action.payload.sort
      } else {
        state.currentPage = 1
        state.categoryId = 0
        state.sort = {
          name: 'по цене'
        }
      }
    }
  },
});

export const { setSearchValue, setCategoryId, setCurrentPage, setSort, setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
