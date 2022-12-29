import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import {
  handleAddDiaryEntry,
  handleDeleteDiaryEntry,
  handleGetDailyDiary,
  handleResetDailyDiary,
} from './diaryHandlers';
import { addDiaryEntry, deleteDiaryEntry, getDailyDiary } from './diaryOperations';

const initialState = {
  date: null,
  inputDiary: [],
  isLoading: false,
  error: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    resetDailyDiary: handleResetDailyDiary,
  },
  extraReducers: builder => {
    builder
      .addCase(addDiaryEntry.fulfilled, handleAddDiaryEntry)
      .addCase(deleteDiaryEntry.fulfilled, handleDeleteDiaryEntry)
      .addCase(getDailyDiary.fulfilled, handleGetDailyDiary)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const { resetDailyDiary } = diarySlice.actions;
export default diarySlice.reducer;
