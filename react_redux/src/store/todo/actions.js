import {getTodo} from './../../services/todoService'

export const ACTION_CHANGE_ITEM_IS_DONE = `ACTION_CHANGE_ITEM_IS_DONE`;
export const changeItemIsDone = (payload) => ({
  type: ACTION_CHANGE_ITEM_IS_DONE,
  payload,
});

export const ACTION_SET_TODO = `ACTION_SET_TODO`;
export const setTodo = payload => ({type: ACTION_SET_TODO, payload});

export const fetchTodo = () => {
  return async function(dispatch, getState){
    dispatch(setTodo(await getTodo()))
  }
}