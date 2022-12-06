import {ACTION_SET_THEME_COLOR, ACTION_CHANGE_ITEM_IS_DONE} from './../actions/actions'

const INITIAL_STATE = {
  todoList: [
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
      title: `Todo 4`,
      isDone: false,
    },
  ],
  listStyleType: `disclosure-closed`,
  themeColor: `#8bc34a`
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case ACTION_SET_THEME_COLOR:
          return {...state, themeColor: payload}
        case ACTION_CHANGE_ITEM_IS_DONE:
          return {...state, todoList: state.todoList.map(item => {
            if(item.id === payload) item.isDone = !item.isDone;
            return item;
          })}
        default:
            return state;
    }
};

export default reducer;