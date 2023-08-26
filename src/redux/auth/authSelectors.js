export const selectUserData = state => state.auth.user;

export const selectIsLoggenIn = state => state.auth.isLoggedIn;

export const selectIsAuthLoading = state => state.auth.isLoading;

export const selectIsRefreshing = state => state.auth.isRefreshing;
