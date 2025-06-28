import { createSlice } from '@reduxjs/toolkit';

export const backendLinkSlice = createSlice({
  name: 'BackendLink',
  initialState: {
    BackendLink: 'http://localhost:3715',
  },
  reducers: {
    updateBackendLink: (state, action) => {
      state.BackendLink = action.payload;
    },
  },
});

// Export the action creators
export const { updateBackendLink } = backendLinkSlice.actions;

export default backendLinkSlice.reducer;
