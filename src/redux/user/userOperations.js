import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authHeader } from 'redux/utils/authHeader';
import { constants } from 'constants';

axios.defaults.baseURL = constants.apiServerAddress;

export const loginUser = createAsyncThunk('user/login', async (val, thunkAPI) => {
  try {
    const response = await axios.post('/user/login', val);
    authHeader.set(response.data.token);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const registerUser = createAsyncThunk('user/register', async (val, thunkAPI) => {
  try {
    const response = await axios.post('/user', val);
    authHeader.set(response.data.token);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const logoutUser = createAsyncThunk('user/logout', async (val, thunkAPI) => {
  try {
    const response = await axios.patch('/user/logout', val);
    authHeader.clear();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const refreshUser = createAsyncThunk('user/refresh', async (val, thunkAPI) => {
  try {
    const response = await axios.get('/user/current', val);
    authHeader.set(response.data.token);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
