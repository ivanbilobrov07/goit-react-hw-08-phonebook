import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './authIhInitialState';
import { login, logout, refreshUser, register } from './authApi';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;

  console.log(payload);
};

const handleRefreshUserRejected = (state, { payload }) => {
  state.isRefreshing = false;
};

const handleRegisterFullfield = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.token = payload.token;
  state.isLoading = false;
  state.error = '';
};

const handleLoginFullfield = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.token = payload.token;
  state.isLoading = false;
  state.error = '';
};

const handleRefreshUserFullfield = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = '';
};

const handleLogoutFullfield = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = '';
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFullfield)
      .addCase(login.fulfilled, handleLoginFullfield)
      .addCase(refreshUser.fulfilled, handleRefreshUserFullfield)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addCase(logout.fulfilled, handleLogoutFullfield)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        handlePending
      );
  },
});

export const { reducer: authReducer } = authSlice;
