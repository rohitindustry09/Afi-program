import { configureStore } from '@reduxjs/toolkit';
import backendLinkReducer from './Store-Slices/BackendLinkSlice.js';

export const store = configureStore({
  reducer: {
    Link: backendLinkReducer,
  },
});
