// action types
const ACTION_COUNTER_INCREMENT = `ACTION_COUNTER_INCREMENT`;
const ACTION_COUNTER_DECREMENT = `ACTION_COUNTER_DECREMENT`;
const ACTION_COUNTER_SET = `ACTION_COUNTER_SET`;
const ACTION_IS_DONE_CHANGE = `ACTION_IS_DONE_CHANGE`;

// action creator
const actionCreator = (type, payload) => {
  let action = { type };
  if (payload) action.payload = payload;
  return action;
};

// actions
const incrementAction = actionCreator(ACTION_COUNTER_INCREMENT);
const decrementAction = actionCreator(ACTION_COUNTER_DECREMENT);
const setAction = actionCreator(ACTION_COUNTER_SET, 10);
const changeStatus = actionCreator(ACTION_IS_DONE_CHANGE);

module.exports = {
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_SET,
  ACTION_IS_DONE_CHANGE,
  incrementAction,
  decrementAction,
  setAction,
  changeStatus
};
