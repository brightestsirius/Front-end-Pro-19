import {getList, changeItem, removeItem, addItem} from './../../services/listService'
import {setLoading} from './../loader/actions'

export const ACTION_SET_LIST = `ACTION_SET_LIST`;
export const setList = payload => ({type: ACTION_SET_LIST, payload});

export const fetchList = () => {
    return async dispatch => {
        dispatch(setLoading(true));
        dispatch(setList(await getList()));
        dispatch(setLoading(false));
    }
}

export const ACTION_CHANGE_ITEM = `ACTION_CHANGE_ITEM`;
export const changeCompleted = item => {
    return async function(dispatch){
        dispatch(setLoading(true));
        let itemModified = await changeItem(item.id, {completed: !item.completed});
        dispatch({type: ACTION_CHANGE_ITEM, payload: itemModified})
        dispatch(setLoading(false));
    }
}

export const ACTION_DELETE_ITEM = `ACTION_DELETE_ITEM`;
export const deleteItem = id => {
    return async function(dispatch){
        dispatch(setLoading(true));
        await removeItem(id);
        dispatch({type: ACTION_DELETE_ITEM, payload: id});
        dispatch(setLoading(false));
    }
}

export const ACTION_ADD_ITEM = `ACTION_ADD_ITEM`;
export const createItem = obj => {
    return async function(dispatch){
        dispatch(setLoading(true));
        let addedItem = await addItem(obj);
        dispatch({type: ACTION_ADD_ITEM, payload: addedItem});
        dispatch(setLoading(false));
    }
}