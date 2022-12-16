const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  start_weight: 0,
  desired_weight: 0,
  inputDiary: [
    {
      _id: {
        $oid: '',
      },
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
