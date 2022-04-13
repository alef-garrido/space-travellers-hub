import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import apiCalls from './middlware/apiCalls';
import rockets from './slices/rockets-dux';
import missions from './missions/missions';

const rootReducer = combineReducers({
  rockets,
  missions,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    apiCalls,
  ],
});

export default store;
