import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginResponseDTO } from "domain/DTO/auth/LoginResponseDTO";
import { UserModel } from "domain/models/user/UserModel";

export interface AuthState {
  user: UserModel | null;
  accessToken: string | null;
}

interface PayloadAuth extends PayloadAction<LoginResponseDTO> {}

export const initialState: AuthState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadAuth: (state: AuthState, action: PayloadAuth) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state: AuthState, action: PayloadAction) => {
      state.user = null;
    },
  },
});

export const { loadAuth } = authSlice.actions;

export default authSlice.reducer;
