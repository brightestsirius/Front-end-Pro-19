import { configureStore, combineReducers } from "@reduxjs/toolkit";

import list from "./list/reducer";

const rootReducer = combineReducers({ list });

const store = configureStore({
    reducer: rootReducer
});
export default store;

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(rootReducer, composeEnhancer(applyMiddleware(reduxThunk)));
