import {ACTION_SET_THEME} from './../actions/action'

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
  themeColor: `#9e9e9e`
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
      case ACTION_SET_THEME:
          return {...state, themeColor: payload}
        default:
            return state;
    }
};

export default reducer;
