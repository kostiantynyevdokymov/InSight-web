export const handleFetchDiet = (state, action) => {
  state.dailyCalories = action.payload.dailyIntake;
  state.stopProducts = action.payload.stopProd;
  return state;
};
export const handleFetchUserDiet = (state, action) => {
  state.dailyCalories = action.payload.dailyIntake;
  state.stopProducts = action.payload.stopProd;
  return state;
};
