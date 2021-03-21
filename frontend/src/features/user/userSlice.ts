import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { ICommunity, IEvent, IUser } from '../../types';
import { api, EVENTS_URL, PROFILE_URL } from '../../utils';

interface UserState {
  isLoading: boolean;
  user: IUser | null;
  userRequest: {
    isLoading: boolean;
    error: any;
  };
  events: Array<IEvent>;
  eventsRequest: {
    isLoading: boolean;
    error: any;
  };
  currentCommunity: ICommunity | null;
}

const initialState: UserState = {
  isLoading: false,
  user: null,
  userRequest: {
    isLoading: false,
    error: null,
  },
  events: [],
  eventsRequest: {
    isLoading: false,
    error: null,
  },
  currentCommunity: null,
};

export const requestUser = createAsyncThunk(
  'user/requestUser',
  async (_, thunkApi) => {
    const response = await api.get(PROFILE_URL);
    thunkApi.dispatch(loadUser(response.data));
  }
);

export const getEvents = createAsyncThunk(
  'user/getEvents',
  async (_, thunkApi) => {
    const response = await api.get(EVENTS_URL);
    thunkApi.dispatch(loadEvents(response.data));
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<IUser>) => {
      state.userRequest.isLoading = false;
      state.userRequest.error = null;
      state.user = action.payload;
      state.currentCommunity = action.payload.communities?.[0];
    },
    loadEvents: (state, action: PayloadAction<IEvent[]>) => {
      state.eventsRequest.isLoading = false;
      state.eventsRequest.error = null;
      state.events = action.payload;
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
    builder.addCase(getEvents.pending, (state) => {
      state.eventsRequest.isLoading = true;
      state.eventsRequest.error = null;
    });
    builder.addCase(getEvents.rejected, (state, action) => {
      state.eventsRequest.isLoading = false;
      state.eventsRequest.error = action.error;
    });
  },
});

export const { loadUser, loadEvents } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
