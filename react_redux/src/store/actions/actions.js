export const ACTION_SET_THEME_COLOR = `ACTION_SET_THEME_COLOR`;
export const setThemeColor = (payload) => ({
  type: ACTION_SET_THEME_COLOR,
  payload,
});

export const ACTION_CHANGE_ITEM_IS_DONE = `ACTION_CHANGE_ITEM_IS_DONE`;
export const changeItemIsDone = (payload) => ({
  type: ACTION_CHANGE_ITEM_IS_DONE,
  payload,
});