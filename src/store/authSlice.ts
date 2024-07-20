// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    name: string | null;
    family: string | null;
    phoneNumber: string | null;
    nationalCode: string | null;
    emailAddress: string | null;
    password: string | null;
    isLoggedIn: boolean;
  }
}

const initialState: AuthState = {
  user: {
    name: "",
    family: "",
    phoneNumber: "",
    nationalCode: "",
    emailAddress: "",
    password: "",
    isLoggedIn: false,
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ phoneNumber: string, password: string }>) {
      state.user.phoneNumber = action.payload.phoneNumber;
      state.user.password = action.payload.password;
      state.user.isLoggedIn = true;
    },
    logout(state) {
      state.user.isLoggedIn = false;
    },
    // setuser(state,action) {
    //   state.user = action.payload;
    // }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
