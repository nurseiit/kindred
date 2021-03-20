import { combineReducers } from '@reduxjs/toolkit';
import counter from '../features/counter/counterSlice';
import auth from '../features/auth/authSlice';

const rootReducer = combineReducers({
  counter,
  auth,
});

export default rootReducer;
