import { createReducer } from '@reduxjs/toolkit';
import { LoadingState } from '../../typings/state.types';
import { User } from '../../typings/user.types';
import { getUserByName, getUsers, removeUser } from './actions.users';

interface UsersState {
  loading: LoadingState;
  users: User[];
}

const initialState: UsersState = {
  loading: LoadingState.IDLE,
  users: [],
};

export const usersReducer = createReducer(initialState, (builder) => {
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
