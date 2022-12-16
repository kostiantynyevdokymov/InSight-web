import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  height: 0,
  age: 0,
  current_weight: 0,
  desired_weight: 0,
  weight_history: [
    {
      date: '',
      weight: 0,
    },
  ],
  blood_type: 0,
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => state + action.payload,
    logout: (state, action) => state + action.payload,
    refresh: (state, action) => state + action.payload,
    register: (state, action) => state + action.payload,
  },
});

export const { login, logout, refresh, register } = userSlice.actions;
export const userReducer = userSlice.reducer;
