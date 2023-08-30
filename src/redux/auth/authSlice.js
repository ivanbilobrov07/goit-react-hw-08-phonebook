import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './authIhInitialState';
import { login, logout, refreshUser, register } from './authApi';
import { errorNotify, successNotify } from 'utils';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  errorNotify(payload);
};

const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
};

const handleRegOrLoginFullfield = (state, payload) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.token = payload.token;
  state.isLoading = false;
};

const handleRegisterFullfield = (state, { payload }) => {
  handleRegOrLoginFullfield(state, payload);
  successNotify('You have successfully registered');
};

const handleLoginFullfield = (state, { payload }) => {
  handleRegOrLoginFullfield(state, payload);
  successNotify('You have successfully logged in');
};

const handleRefreshUserFullfield = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleLogoutFullfield = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  successNotify('See you later');
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFullfield)
      .addCase(login.fulfilled, handleLoginFullfield)
      .addCase(refreshUser.fulfilled, handleRefreshUserFullfield)
      .addCase(logout.fulfilled, handleLogoutFullfield)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        handleRejected
      );
  },
});

export const { reducer: authReducer } = authSlice;
