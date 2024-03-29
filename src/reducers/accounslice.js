// accountSlice.js

import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    username: null,
    name: null,
  },
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateUsername, updateName } = accountSlice.actions;
export const selectUsername = (state) => state.account.username;
export const selectName = (state) => state.account.name;

export default accountSlice.reducer;
