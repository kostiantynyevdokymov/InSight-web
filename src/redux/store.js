import { configureStore } from '@reduxjs/toolkit';
import { diaryReducer, userReducer } from './slices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    diet: diaryReducer,
  },
});
