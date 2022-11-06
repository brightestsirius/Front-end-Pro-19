import React from "react";

export default function ToDoItem({item, getClass, changeCompleted, removeItem}) {
  return (
    <li
      onClick={e => changeCompleted(e, item)}
      className={getClass(item)}
    >
      {item.title}
      <button onClick={(e) => removeItem(e, item.id)}>Remove</button>
    </li>
  );
}
