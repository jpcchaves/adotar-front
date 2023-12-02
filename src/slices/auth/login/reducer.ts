import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginResponseDTO } from "domain/DTO/auth/LoginResponseDTO";
import { UserModel } from "domain/models/user/UserModel";

export interface AuthState {
  user: UserModel | null;
  accessToken: string | null;
  errorMessage: string | null;
  hasError: boolean;
}

export interface ErrorState extends Pick<AuthState, "errorMessage" | "hasError"> {}

interface PayloadAuth extends PayloadAction<LoginResponseDTO> {}
interface PayloadError extends PayloadAction<ErrorState> {}

export const initialState: AuthState = {
  user: null,
  accessToken: null,
  errorMessage: null,
  hasError: false,
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
      state.accessToken = null;
    },
    loadUserEmail: (state: AuthState, action: PayloadAction<{ email: string }>) => {
      state.user = { email: action.payload.email } as UserModel;
    },
    loadAuthError: (state: AuthState, action: PayloadError) => {
      state.errorMessage = action.payload.errorMessage;
      state.hasError = true;
    },
    loadClearError: (state: AuthState) => {
      state.errorMessage = null;
      state.hasError = false;
    },
  },
});

export const { loadAuth, logout, loadAuthError, loadClearError, loadUserEmail } = authSlice.actions;

export default authSlice.reducer;
