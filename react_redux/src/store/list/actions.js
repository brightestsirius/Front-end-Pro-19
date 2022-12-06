// action creator
const actionCreator = (type, payload) => {
    let action = {type};
    if(payload) action.payload = payload;
    return action;
}

export const ACTION_ITEM_CHANGE_STATUS = `ACTION_ITEM_CHANGE_STATUS`;
export const changeItemStatus = listId => actionCreator(ACTION_ITEM_CHANGE_STATUS, listId)

// {type: `ACTION_ITEM_CHANGE_STATUS`, 2}