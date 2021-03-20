import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { RootState } from '../../app/store';
import { TOKEN_COOKIE_NAME } from '../../utils';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: Boolean(Cookies.get(TOKEN_COOKIE_NAME)),
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      Cookies.set(TOKEN_COOKIE_NAME, action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      Cookies.remove(TOKEN_COOKIE_NAME);
    },
  },
});

export const { login, logout } = counterSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default counterSlice.reducer;
