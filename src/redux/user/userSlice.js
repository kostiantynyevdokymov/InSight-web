import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import { handleLoginUser, handleRegisterUser, handleLogoutUser, handleRefreshUser } from './userHandlers';
import { loginUser, logoutUser, refreshUser, registerUser } from './userOperations';

const initialState = {
  auth: {
    name: null,
    email: null,
    token: null,
    isNew: true,
    isOAuth2: false,
  },
  params: {
    height: 0,
    age: 0,
    current_weight: 0,
    desired_weight: 0,
    blood_type: 0,
    proposedDiet: {
      daily_caliries: 0,
      stop_products: [],
    },
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    googleLogin: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, handleLoginUser)
      .addCase(registerUser.fulfilled, handleRegisterUser)
      .addCase(logoutUser.fulfilled, handleLogoutUser)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
export const { googleLogin } = userSlice.actions;
