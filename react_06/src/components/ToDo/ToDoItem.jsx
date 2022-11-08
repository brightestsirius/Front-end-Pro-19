import React from "react";

export default function ToDoItem({ item, completeItem, removeItem }) {
  return (
    <li onClick={completeItem} className={item.completed ? `completed` : null}>
      {item.title}
      <button onClick={removeItem}>Remove</button>
    </li>
  );
}
