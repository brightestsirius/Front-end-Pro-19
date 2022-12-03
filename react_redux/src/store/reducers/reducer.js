import {
  ACTION_SET_THEME,
  ACTION_CHANGE_IS_DONE_LIST,
} from "./../actions/action";

const INITIAL_STATE = {
  list: [
    {
      id: 1,
      title: `Todo 1`,
      isDone: true,
    },
    {
      id: 2,
      title: `Todo 2`,
      isDone: false,
    },
    {
      id: 3,
      title: `Todo 3`,
      isDone: true,
    },
    {
      id: 4,
      title: `Todo 5`,
      isDone: false,
    },
  ],
  listStyleType: `disclosure-closed`,
  themeColor: `#9e9e9e`,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_SET_THEME:
      return { ...state, themeColor: payload };
    case ACTION_CHANGE_IS_DONE_LIST:
      return {...state, list: state.list.map(item => {
        if(item.id===payload) item.isDone = !item.isDone;
        return item;
      })}
    default:
      return state;
  }
};

export default reducer;
