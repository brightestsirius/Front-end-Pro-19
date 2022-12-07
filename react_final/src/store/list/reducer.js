import {ACTION_CHANGE_ITEM, ACTION_SET_LIST, ACTION_DELETE_ITEM, ACTION_ADD_ITEM} from './action'

const INITIAL_STATE = {
    list: []
}

const reducer = (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case ACTION_CHANGE_ITEM:
            return {...state, list: state.list.map(item => {
                if(item.id === payload.id) item = payload;
                return item;
            })}
        case ACTION_SET_LIST:
            return {...state, list: [...payload]}
        case ACTION_DELETE_ITEM:
            return {...state, list: state.list.filter(item => item.id!==payload)}
        case ACTION_ADD_ITEM:
            return {...state, list: [...state.list, payload]}
        default:
            return state;
    }
};

export default reducer;