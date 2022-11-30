const redux = require(`redux`);

const INITIAL_STATE = {
    counter: 0
}

const reducer = (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case `increment`:
            return {counter: state.counter+1};
        case `decrement`:
            return {counter: state.counter-1};
        case `set`:
            return {counter: payload};
        default:
            return state;
    }
}

const store = redux.createStore(reducer);

// action types
const ACTION_INCREMENT_COUNTER = `increment`;
const ACTION_DECREMENT_COUNTER = `decrement`;
const ACTION_SET_COUNTER = `set`;

// action function
const setAction = (type, payload) => {
    let action = {type}
    if(payload) action.payload = payload;
    return action;
}

// actions
const incrementCounter = setAction(ACTION_INCREMENT_COUNTER);
const decrementCounter = setAction(ACTION_DECREMENT_COUNTER);
const setCounter = setAction(ACTION_SET_COUNTER, 5);

console.log(store.getState());

store.dispatch(incrementCounter);
console.log(store.getState());

store.dispatch(decrementCounter);
console.log(store.getState());

store.dispatch(setCounter);
console.log(store.getState());