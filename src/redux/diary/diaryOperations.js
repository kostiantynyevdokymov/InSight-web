import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addDiaryEntry = createAsyncThunk('diary/addDiaryEntry', async ({ day, id, weight }, thunkAPI) => {
  try {
    const response = await axios.post(`/diary/${day}`, { id: id, weight: weight });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const deleteDiaryEntry = createAsyncThunk('diary/deleteDiaryEntry', async ({ day, id }, thunkAPI) => {
  try {
    const response = await axios.delete(`/diary/${day}/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const getDailyDiary = createAsyncThunk('diary/getDailyDiary', async (day, thunkAPI) => {
  try {
    const response = await axios.get(`/diary/${date}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const resetDailyDiary = createAsyncThunk('diary/resetDailyDiary', async (_, thunkAPI) => {
  return [];
});
