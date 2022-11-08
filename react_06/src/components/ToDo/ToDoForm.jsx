import React from "react";

export default function ToDoForm({ addTask, setTitle }) {
  return (
    <form onSubmit={addTask}>
      <input required type="text" onChange={setTitle} />
      <button>Add item</button>
    </form>
  );
}
