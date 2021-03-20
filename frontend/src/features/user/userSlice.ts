import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { IUser } from '../../types';
import { api, PROFILE_URL } from '../../utils';

interface UserState {
  isLoading: boolean;
  user: IUser | null;
  userRequest: {
    isLoading: boolean;
    error: any;
  };
}

const initialState: UserState = {
  isLoading: false,
  user: null,
  userRequest: {
    isLoading: false,
    error: null,
  },
};

export const requestUser = createAsyncThunk(
  'useer/requestUser',
  async (_, thunkApi) => {
    const response = await api.get(PROFILE_URL);
    thunkApi.dispatch(loadUser(response.data));
  }
);

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<IUser>) => {
      state.userRequest.isLoading = false;
      state.userRequest.error = null;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestUser.pending, (state) => {
      state.userRequest.isLoading = true;
      state.userRequest.error = null;
    });
    builder.addCase(requestUser.rejected, (state, action) => {
      state.userRequest.isLoading = false;
      state.userRequest.error = action.error;
    });
  },
});

export const { loadUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
