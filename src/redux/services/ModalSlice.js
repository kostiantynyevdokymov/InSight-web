import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
  contactId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => ({ ...state, isOpen: true }),
    closeModal: (state, action) => ({ ...state, isOpen: false }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
