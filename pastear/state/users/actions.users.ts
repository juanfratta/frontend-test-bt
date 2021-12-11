import { createAsyncThunk } from '@reduxjs/toolkit';
import users_svc from '../../services/users/users.svc';

export const getUsers = createAsyncThunk('users/getAllUsers', async (_, thunkAPI) => {
  const { success, data, error } = await users_svc.fetchUsers();

  if (success && data) return data;
  if (error) return thunkAPI.rejectWithValue(error?.message);
});
