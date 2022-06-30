import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    loggedIn: false,
    account: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      const metamaskAccount = action.payload;
      if (metamaskAccount) {
        state.value.loggedIn = true;
        state.value.account = metamaskAccount;
      }
    },
    logOutUser: (state) => {
      state.value.loggedIn = false;
      state.value.account = "";
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
