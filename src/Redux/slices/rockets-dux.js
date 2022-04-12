/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

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

const { rocketsReceived, rocketsRequestFailed } = slice.actions;

// Action Creators

export const loadRockets = async (dispatch) => {
  try {
    const apiResponse = await fetch('https://api.spacexdata.com/v3/rockets', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => data);

    dispatch({ type: rocketsReceived.type, payload: apiResponse });
  } catch (error) {
    dispatch({ type: rocketsRequestFailed.type, payload: error.message });
  }
};

export default slice.reducer;
