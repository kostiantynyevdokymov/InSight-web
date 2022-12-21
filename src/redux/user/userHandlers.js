export const handleLoginUser = (state, action) => (state.user = action.payload.user);
export const handleRegisterUser = (state, action) => (state.user = action.payload.user);
export const handleLogoutUser = (state, action) => state;
export const handleRefreshUser = (state, action) => state;
