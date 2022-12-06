import { ACTION_SET_FILTER } from "./actions";

import { FILTER_ALL } from "./../../constants/filter";

const INITIAL_STATE = {
  todoFilter: FILTER_ALL
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_SET_FILTER:
      return { ...state, todoFilter: payload };
    default:
      return state;
  }
};

export default reducer;
