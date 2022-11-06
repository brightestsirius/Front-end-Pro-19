import React from "react";

export default function ToDoForm({submitForm, changeTitle}) {
  return (
    <form onSubmit={submitForm}>
      <label>
        Title <input type="text" onChange={changeTitle} />
      </label>
      <button>Create todo item</button>
    </form>
  );
}
