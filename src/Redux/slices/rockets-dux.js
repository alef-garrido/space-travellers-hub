/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    rocketsRequested: (state) => {
      state.isLoading = true;
    },
    rocketsReceived: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    rocketsRequestFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const { rocketsRequested, rocketsReceived, rocketsRequestFailed } = slice.actions;

// Action Creators

// to handle API request Stages
export const apiRequest = createAction('api/Request');
export const apiRequestSucceed = createAction('api/RequestSucceed');
export const apiRequestFailed = createAction('api/RequestFailed');

// to handle UI events
export const loadRockets = () => apiRequest({
  method: 'GET',
  onStart: rocketsRequested.type,
  onSuccess: rocketsReceived.type,
  onError: rocketsRequestFailed.type,
});

export default slice.reducer;
