/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
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
      const newState = action.payload.map((i) => {
        console.log(i);
        const {
          id, rocket_name, description, flickr_images,
        } = i;
        return {
          id, rocket_name, description, flickr_images, reserved: false,
        };
      });
      state.list = newState;
    },
    rocketsRequestFailed: (state) => {
      state.isLoading = false;
    },
    rocketReserved: (state, action) => {
      const id = parseInt(action.payload, 10);
      const index = state.list.findIndex((i) => i.id === id);
      state.list[index].reserved = true;
    },
    rocketReservedCanceled: (state, action) => {
      const id = parseInt(action.payload, 10);
      const index = state.list.findIndex((i) => i.id === id);
      state.list[index].reserved = false;
    },
  },
});

export const {
  rocketReserved,
  rocketReservedCanceled,
  rocketsRequested,
  rocketsReceived,
  rocketsRequestFailed,
} = slice.actions;

// Action Creators

// to handle API request Stages
export const apiRequest = createAction('api/Request');
export const apiRequestFailed = createAction('api/RequestFailed');

// to handle UI events
export const loadRockets = () => apiRequest({
  url: '/rockets',
  method: 'GET',
  onStart: rocketsRequested.type,
  onSuccess: rocketsReceived.type,
  onError: rocketsRequestFailed.type,
});

export default slice.reducer;
