import { combineReducers } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import user from '../features/user/userSlice';
import post from '../features/post/postSlice';

const rootReducer = combineReducers({
  auth,
  user,
  post,
});

export default rootReducer;
