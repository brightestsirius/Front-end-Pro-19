import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state, { type, payload }) => {
      state.isLoading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;