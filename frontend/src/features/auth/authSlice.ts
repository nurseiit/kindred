import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import {
  api,
  getTokens,
  ITokens,
  LOGIN_URL,
  removeTokens,
  saveTokens,
} from '../../utils';

interface AuthState {
  isAuthenticated: boolean;
  loginRequest: {
    isLoading: boolean;
    error: any;
  };
}

const initialState: AuthState = {
  isAuthenticated: Boolean(getTokens()?.accessToken),
  loginRequest: { isLoading: false, error: null },
};

type ILoginData = {
  email: string;
  password: string;
};

export const requestLogin = createAsyncThunk(
  'auth/requestLogin',
  async (loginData: ILoginData, thunkApi) => {
    const { email, password } = loginData;
    const response = await api.post(LOGIN_URL, { email, password });
    const { access: accessToken, refresh: refreshToken } = response.data;
    thunkApi.dispatch(login({ accessToken, refreshToken }));
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ITokens>) => {
      state.loginRequest.isLoading = false;
      state.loginRequest.error = null;
      saveTokens(action.payload);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      removeTokens();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestLogin.pending, (state) => {
      state.loginRequest.isLoading = true;
      state.loginRequest.error = null;
    });
    builder.addCase(requestLogin.rejected, (state, action) => {
      state.loginRequest.isLoading = false;
      state.loginRequest.error = action.error;
    });
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
