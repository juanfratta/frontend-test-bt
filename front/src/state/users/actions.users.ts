import { createAsyncThunk } from '@reduxjs/toolkit';
import users_svc from '../../services/users/users.svc';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (params: any, thunkAPI) => {
    const { page, limit } = params;
    const { success, data, error } = await users_svc.fetchUsers(page, limit);

    if (success && data) return data;
    if (error) return thunkAPI.rejectWithValue(error?.message);
  }
);

export const getUserByName = createAsyncThunk(
  'users/getByName',
  async (name: string, thunkAPI) => {
    const { success, data, error } = await users_svc.fetchUser(name);

    if (success && data) return data;
    if (error) return thunkAPI.rejectWithValue(error?.message);
  }
);

/* Podría ser una misma función, y también el fetch. Pero se optó por trabajarlas por separado
por tener responsabilidades diferentes y por escalabilidad.
*/
