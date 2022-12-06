import {ACTION_SET_THEME_COLOR} from './actions'

const INITIAL_STATE = {
  listStyleType: `disclosure-closed`,
  themeColor: `#8bc34a`
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case ACTION_SET_THEME_COLOR:
          return {...state, themeColor: payload}
        default:
            return state;
    }
};

export default reducer;
