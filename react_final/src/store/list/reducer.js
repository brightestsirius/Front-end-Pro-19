import {createSlice} from '@reduxjs/toolkit'
import {setLoading} from './../loader/actions'
import {addItem, removeItem, changeItem, getList} from './../../services/listService'

const initialState = {
    list: []
}

export const createItemThunk = obj => {
    return async function(dispatch){
        dispatch(setLoading(true));
        let addedItem = await addItem(obj);
        dispatch(createItem(addedItem));
        dispatch(setLoading(false));
    }
}

export const deleteItemThunk = id => {
    return async function(dispatch){
        dispatch(setLoading(true));
        await removeItem(id);
        dispatch(deleteItem(id));
        dispatch(setLoading(false));
    }
}

export const changeCompletedThunk = item => {
    return async function(dispatch){
        dispatch(setLoading(true));
        let itemModified = await changeItem(item.id, {completed: !item.completed});
        dispatch(changeCompleted(itemModified));
        dispatch(setLoading(false));
    }
}

export const fetchListThunk = () => {
    return async dispatch => {
        dispatch(setLoading(true));
        dispatch(setList(await getList()));
        dispatch(setLoading(false));
    }
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        changeCompleted: (state, {type, payload}) => {
            state.list = state.list.map(item => {
                if(item.id === payload.id) item = payload;
                return item;
            })
        },
        setList: (state, {type, payload}) => {
            state.list = [...payload];
        },
        deleteItem: (state, {type, payload}) => {
            state.list = state.list.filter(item => item.id!==payload)
        },
        createItem: (state, {type, payload}) => {
            state.list = [...state.list, payload]
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { changeCompleted, setList, deleteItem, createItem } = listSlice.actions
  
  export default listSlice.reducer