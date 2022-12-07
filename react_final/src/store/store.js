// import { combineReducers } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import list from "./list/reducer";
import filter from "./filter/reducer";
import loader from "./loader/reducer";

const rootReducer = combineReducers({ list, filter, loader });

const store = configureStore({
  reducer: rootReducer,
});

// const store = createStore(rootReducer);
export default store;

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(rootReducer, composeEnhancer(applyMiddleware(logger, thunk)));
