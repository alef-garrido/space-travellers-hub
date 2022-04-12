import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rockets from './slices/rockets';

const rootReducer = combineReducers({
  Rockets: rockets,
  // Missions: missions,
});

export default function Store() {
  return configureStore({ reducer: rootReducer });
}
