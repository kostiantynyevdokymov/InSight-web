import { initialUserState } from './userSlice';

export const handleLoginUser = (state, action) => ({ ...state, ...action.payload });
export const handleRegisterUser = (state, action) => ({ ...state, ...action.payload });
export const handleLogoutUser = state => (state = initialUserState);
export const handleRefreshUser = (state, action) => {
  if (action.payload.params) return action.payload;
  else return { ...action.payload, params: state.params };
};
export const handleSetParams = (state, action) => ({ ...state, params: action.payload });
export const handleGoogleLogin = (state, action) => ({ ...state, ...action.payload });
