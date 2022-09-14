import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducer: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
