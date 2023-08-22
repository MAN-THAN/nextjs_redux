"use client"
import { createSlice } from "@reduxjs/toolkit";

const AddUserSlice = createSlice({
  name: "userData",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

export default AddUserSlice.reducer;
export const { addUser } = AddUserSlice.actions;
