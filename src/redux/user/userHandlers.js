export const handleLoginUser = (state, action) => (state = action.payload);
export const handleRegisterUser = (state, action) => (state = action.payload);
export const handleLogoutUser = state => (state = { ...state, token: null });
export const handleRefreshUser = (state, action) => (state = action.payload);
<<<<<<< Updated upstream
export const handleSetParams = (state, action) => { state.params = action.payload };
=======
export const handleSetParams = (state, action) => {
  state.params = action.payload;
};
>>>>>>> Stashed changes
export const handleGoogleLogin = (state, action) => (state = action.payload);
