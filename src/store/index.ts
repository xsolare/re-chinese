import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import profileReducer from './slices/profile';
import type { AppStore } from './types';

export const store = configureStore({
  reducer: {
    profile: profileReducer
  },
  devTools: true
});

export const makeStore = () => store;

export const wrapper = createWrapper<AppStore>(makeStore);
