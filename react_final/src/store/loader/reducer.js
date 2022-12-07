import {ACTION_SET_LOADING} from './actions'

const INITIAL_STATE = {
    isLoading: false
}

const reducer = (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case ACTION_SET_LOADING:
            return {...state, isLoading: payload}
        default:
            return state;
    }
}
export default reducer;