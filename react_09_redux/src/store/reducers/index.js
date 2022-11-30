import {ACTION_SET_THEME_COLOR} from './../actions'

const INITIAL_STATE = {
    themeColor: `#ed143d`
}

const reducer = (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case ACTION_SET_THEME_COLOR:
            return {themeColor: payload}
        default:
            return state;
    }
}
export default reducer;