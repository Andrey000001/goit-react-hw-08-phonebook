import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const initialState = { items: [], isLoading: false, error: null };
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      //fetchContacts
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      //addContact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items.push(action.payload);
      })
      //deleteContact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
