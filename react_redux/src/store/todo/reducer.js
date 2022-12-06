import {ACTION_CHANGE_ITEM_IS_DONE, ACTION_SET_TODO} from './actions'

const INITIAL_STATE = {
  todoList: []
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case ACTION_CHANGE_ITEM_IS_DONE:
          return {...state, todoList: state.todoList.map(item => {
            if(item.id === payload) item.completed = !item.completed;
            return item;
          })}
        case ACTION_SET_TODO:
          return {...state, todoList: payload}
        default:
            return state;
    }
};

export default reducer;
