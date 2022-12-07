import {createSlice} from '@reduxjs/toolkit'
import { FILTER_ALL } from "./../../constants/filter";

const initialState = {
  filter: FILTER_ALL,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, {type, payload}) => {
      state.filter = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilter } = filterSlice.actions

export default filterSlice.reducer