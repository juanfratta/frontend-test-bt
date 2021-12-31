import { createReducer } from '@reduxjs/toolkit';
import { LoadingState } from '../../typings/state.types';
import { User } from '../../typings/user.types';
import { getAllUsers, getUserByName, getUsers, removeUser } from './actions.users';

interface UsersState {
  loading: LoadingState;
  users: User[];
  totalUsers: User[];
}

const initialState: UsersState = {
  loading: LoadingState.IDLE,
  users: [],
  totalUsers: [],
};

export const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllUsers.pending, (state) => {
    state.loading = LoadingState.PENDING;
    state.totalUsers = [];
  });

  builder.addCase(getAllUsers.fulfilled, (state, action) => {
    state.loading = LoadingState.COMPLETED;
    state.totalUsers = action.payload as User[];
  });
  builder.addCase(getAllUsers.rejected, (state) => {
    state.loading = LoadingState.FAILURE;
    state.totalUsers = [];
  });

  builder.addCase(getUserByName.pending, (state) => {
    state.loading = LoadingState.PENDING;
    state.users = [];
  });

  builder.addCase(getUserByName.fulfilled, (state, action) => {
    state.loading = LoadingState.COMPLETED;
    state.users = action.payload as any;
  });

  builder.addCase(getUserByName.rejected, (state) => {
    state.loading = LoadingState.FAILURE;
    state.users = [];
  });

  builder.addCase(getUsers.pending, (state) => {
    state.loading = LoadingState.PENDING;
    state.users = [];
  });

  builder.addCase(getUsers.fulfilled, (state, action) => {
    state.loading = LoadingState.COMPLETED;
    state.users = action.payload as any;
  });

  builder.addCase(getUsers.rejected, (state) => {
    state.loading = LoadingState.FAILURE;
    state.users = [];
  });

  builder.addCase(removeUser.pending, (state) => {
    state.loading = LoadingState.PENDING;
  });

  builder.addCase(removeUser.fulfilled, (state, action) => {
    state.loading = LoadingState.COMPLETED;
  });

  builder.addCase(removeUser.rejected, (state) => {
    state.loading = LoadingState.FAILURE;
  });
});
