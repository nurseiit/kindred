import { combineReducers } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import user from '../features/user/userSlice';

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;
