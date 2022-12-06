const {
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_SET,
  ACTION_IS_DONE_CHANGE,
} = require(`./actions`);

const INITIAL_STATE = {
  counter: 0,
  isDone: true,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ACTION_COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ACTION_COUNTER_SET:
      return { ...state, counter: payload };
    case ACTION_IS_DONE_CHANGE:
      return { ...state, isDone: !state.isDone };
    default:
      return state;
  }
};

module.exports = { reducer };