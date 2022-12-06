import {createStore, compose, applyMiddleware, combineReducers} from 'redux'

import list from './list/reducer'
import theme from './theme/reducer'

const rootReducer = combineReducers({list, theme});

// {
//     list: {todoList, listStyleType},
//     theme: {themeColor}
// }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancer(applyMiddleware()));

// const store = createStore(rootReducer);
// export default store;