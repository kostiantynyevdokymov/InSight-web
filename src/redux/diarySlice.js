const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  inputDiary: [
    {
      date: '',
      productInput: [
        {
          _id: {
            $oid: '',
          },
          weight: 0,
        },
      ],
    },
  ],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addInput: (state, action) => state + action.payload,
    deleteInput: (state, action) => state + action.payload,
  },
});

export const { addInput, deleteInput } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
