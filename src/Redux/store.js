import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rockets from './slices/rockets-dux';

const rootReducer = combineReducers({
  Rockets: rockets,
  // Missions: missions,
});

const store = configureStore({ reducer: rootReducer });

export default store;
