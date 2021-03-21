import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { IPost } from '../../types';
import { api, COMMUNITY_POSTS_URL, POSTS_URL } from '../../utils';

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

export const getCommunityPosts = createAsyncThunk(
  'post/getCommunityPosts',
  async (communityId: number, thunkApi) => {
    const response = await api.get(COMMUNITY_POSTS_URL(communityId));
    thunkApi.dispatch(loadPosts(response.data.reverse()));
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
    thunkApi.dispatch(getCommunityPosts(community));
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
    builder.addCase(getCommunityPosts.pending, (state) => {
      state.postRequest.isLoading = true;
      state.postRequest.error = null;
    });
    builder.addCase(getCommunityPosts.rejected, (state, action) => {
      state.postRequest.isLoading = false;
      state.postRequest.error = action.error;
    });
  },
});

export const { loadPosts } = postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
