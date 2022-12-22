export const handleLoginUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};
export const handleRegisterUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};
export const handleLogoutUser = (state, action) => state;
export const handleRefreshUser = (state, action) => state;
