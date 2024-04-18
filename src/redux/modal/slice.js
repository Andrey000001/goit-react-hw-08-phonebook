import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    active(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { active } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
