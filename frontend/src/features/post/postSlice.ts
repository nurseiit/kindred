import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { IPost } from '../../types';
import { api, POSTS_URL } from '../../utils';

interface postState {
  isLoading: boolean;
  posts: Array<IPost>;
  postRequest: {
    isLoading: boolean;
    error: any;
  };
  postCreate: {
    isLoading: boolean;
    error: any;
  };
}

const initialState: postState = {
  isLoading: false,
  posts: [],
  postRequest: {
    isLoading: false,
    error: null,
  },
  postCreate: {
    isLoading: false,
    error: null,
  },
};

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, thunkApi) => {
    const response = await api.get(POSTS_URL);
    thunkApi.dispatch(loadPosts(response.data));
  }
);

export const createPost = createAsyncThunk(
  'post/createPost',
  async (
    args: { description: string; cb: () => void; community: number },
    thunkApi
  ) => {
    const { description, cb, community } = args;
    await api.post(POSTS_URL, {
      title: 'not needed',
      description,
      community,
    });
    cb?.();
    thunkApi.dispatch(getPosts());
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Array<IPost>>) => {
      state.postRequest.isLoading = false;
      state.postRequest.error = null;
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.postRequest.isLoading = true;
      state.postRequest.error = null;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.postRequest.isLoading = false;
      state.postRequest.error = action.error;
    });
  },
});

export const { loadPosts } = postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
