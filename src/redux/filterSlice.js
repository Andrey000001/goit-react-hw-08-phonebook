import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateContacts(state, action) {
      return action.payload;
    },
  },
});

export const { updateContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
