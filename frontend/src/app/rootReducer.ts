import { combineReducers } from '@reduxjs/toolkit';
import counter from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
