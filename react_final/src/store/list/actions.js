import {getList, updateItem, deleteItem, addItem} from './../../services/todoService'

export const ACTION_SET_LIST = `ACTION_SET_LIST`;
export const setList = list => ({type: ACTION_SET_LIST, payload: list});

// Thunk action
export const fetchListThunk = () => {
    return async (dispatch, getState) => {
        dispatch(setList(await getList()));
    }
}

export const ACTION_UPDATE_ITEM = `ACTION_UPDATE_ITEM`;
export const modifyItem = item => ({type: ACTION_UPDATE_ITEM, payload: item})

// Thunk action
export const fetchChangeItemThunk = (item) => {
    return async function(dispatch){
        dispatch(modifyItem(await updateItem(item.id, {completed: !item.completed})))
    }
}

export const ACTION_DELETE_ITEM = `ACTION_DELETE_ITEM`;
export const deleteItemAction = id => ({type: ACTION_DELETE_ITEM, payload: id});

// Thunk action
export const fetchDeleteItemThunk = id => {
    return async function(dispatch){
        await deleteItem(id);
        dispatch(deleteItemAction(id));
    }
}


export const ACTION_ADD_ITEM = `ACTION_ADD_ITEM`;
export const addItemAction = obj => ({type: ACTION_ADD_ITEM, payload: obj});

// Thunk action
export const fetchPostItemThunk = obj => {
    return async function(dispatch){
        dispatch(addItemAction(await addItem(obj)))
    }
}