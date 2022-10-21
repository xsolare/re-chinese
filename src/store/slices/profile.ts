import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { AppState } from '../types';

const GET_API = 'fetch/api';

export const getApi = createAsyncThunk(GET_API, async () => {
  const response = await fetch('https://www.google.com/');
  const data = await response.json();
  return data;
});

export const ProfileSlice = createSlice({
  name: 'Profile',

  initialState: {
    name: null
  },

  reducers: {
    setProfileData(state, action) {
      state.name = action.payload;
    }
  },

  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action) => {
      state.name = (action as unknown as { payload: AppState }).payload.profile.name;
    });
  }
});

export const { setProfileData } = ProfileSlice.actions;
export const selectProfile = (state: AppState) => state.profile;

export default ProfileSlice.reducer;
