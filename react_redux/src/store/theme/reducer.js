import {ACTION_THEME_COLOR_SET} from './actions';

const INITIAL_STATE = {
    themeColor: `#bdc6f6`
}

const reducer = (state=INITIAL_STATE, {type, payload}) => {
   switch(type){
    case ACTION_THEME_COLOR_SET:
        return {...state, themeColor: payload}
    default:
        return state;
   }
}

export default reducer;