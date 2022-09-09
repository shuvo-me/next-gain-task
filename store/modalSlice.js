import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
  },
  reducers: {
    // toggleModal: (state) => {
    //   state.show = !state.show;
    // },
    hideModal: (state) => {
      state.show = false;
    },
    openModal: (state) => {
      state.show = true;
    },
  },
});

export const { hideModal, openModal } = modalSlice.actions;

export const selectModalState = (state) => state.modal;

export default modalSlice.reducer;
