const { store } = require(`./store/store`);
const {
  incrementAction,
  decrementAction,
  setAction,
  changeStatus,
} = require(`./store/actions`);

console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(changeStatus);
console.log(store.getState());

store.dispatch(changeStatus);
console.log(store.getState());

store.dispatch(decrementAction);
console.log(store.getState());

store.dispatch(setAction);
console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());
