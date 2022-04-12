import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    rocketsReceived: (state, action) => {
      console.log(state, action);
    },
  },
});

export default slice.reducer;
