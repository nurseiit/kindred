import { combineReducers } from '@reduxjs/toolkit';
import counter from '../features/counter/counterSlice';
import auth from '../features/auth/authSlice';
import user from '../features/user/userSlice';

const rootReducer = combineReducers({
  counter,
  auth,
  user,
});

export default rootReducer;
