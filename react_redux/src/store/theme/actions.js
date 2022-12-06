// action creator
const actionCreator = (type, payload) => {
    let action = {type};
    if(payload) action.payload = payload;
    return action;
} 

// action type
export const ACTION_THEME_COLOR_SET = `ACTION_THEME_COLOR_SET`;
export const setThemeColorAction = color => actionCreator(ACTION_THEME_COLOR_SET, color);

// {type: `ACTION_THEME_COLOR_SET`, payload: `#52653`}