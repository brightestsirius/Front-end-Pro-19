import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import todo from "./todo/reducer";
import theme from "./theme/reducer";
import filter from "./filter/reducer";

const rootReducer = combineReducers({
  todo,
  theme,
  filter,
});

const store = createStore(rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancer(applyMiddleware()));

// export default store;