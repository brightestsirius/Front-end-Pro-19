import React from "react";

export default function ToDoFilter({filterItems}) {
  return (
    <select onChange={filterItems}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="progress">Progress</option>
    </select>
  );
}
