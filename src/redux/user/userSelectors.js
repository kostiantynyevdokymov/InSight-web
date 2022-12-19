export const selectUserData = store => store.params;
export const selectAuth = ({ name, email, token }) => ({ name, email, token });
export const selectToken = store => store.token;
export const selectIsLoading = store => store.isLoading;
export const selectError = store => store.error;

export const selectLoaderShow = store =>