import { createSlice } from '@reduxjs/toolkit';

export const backendLinkSlice = createSlice({
  name: 'BackendLink',
  initialState: {
    BackendLink: 'https://pubshup-back.vercel.app',
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
