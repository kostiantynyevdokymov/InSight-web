export const handleAddDiaryEntry = (state, action) => {
  const retDiary = state.inputDiary.filter(item => item._id !== action.payload._id);
  retDiary.unshift(action.payload);
  state.inputDiary = retDiary;
};

export const handleDeleteDiaryEntry = (state, action) => {
  // const retDiary = ;
  state.inputDiary = state.inputDiary.filter(item => item._id !== action.payload._id);
};

export const handleGetDailyDiary = (state, action) => {
  state.inputDiary = action.payload;
};

export const handleResetDailyDiary = state => {
  state.inputDiary = [];
};
