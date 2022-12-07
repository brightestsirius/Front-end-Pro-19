import {ACTION_SET_LIST, ACTION_UPDATE_ITEM, ACTION_DELETE_ITEM, ACTION_ADD_ITEM} from './actions'

const INITIAL_STATE = {
    todoList: []
}

const reducer = (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case ACTION_SET_LIST:
            return {...state, todoList: payload}
        case ACTION_UPDATE_ITEM:
            return {...state, todoList: state.todoList.map(item => {
                if(item.id === payload.id){
                    item = payload;
                }
                return item;
            })}
        case ACTION_DELETE_ITEM:
            return {...state, todoList: state.todoList.filter(item => item.id !== payload)}
        case ACTION_ADD_ITEM:
            return {...state, todoList: [...state.todoList, payload]}
        default:
            return state
    }
}

export default reducer;