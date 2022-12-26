const initialState = {
  name: null,
  email: null,
  token: null,
  params: {
    height: 0,
    age: 0,
    currentWeight: 0,
    desiredWeight: 0,
    bloodType: 0,
  },
  isLoading: false,
  error: null,
};

export const handleLoginUser = (state, action) => ({ ...state, ...action.payload });
export const handleRegisterUser = (state, action) => ({ ...state, ...action.payload });
export const handleLogoutUser = state => (state = initialState);
export const handleRefreshUser = (state, action) => ({ ...state, ...action.payload });
export const handleSetParams = (state, action) => ({ ...state, params: action.payload });
export const handleGoogleLogin = (state, action) => ({ ...state, ...action.payload });
