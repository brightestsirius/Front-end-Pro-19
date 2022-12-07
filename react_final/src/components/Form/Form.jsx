import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { fetchPostItemThunk } from "./../../store/list/actions";

export default function Form() {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: ``,
    completed: false,
  });

  const handleTitle = (e) =>
    setTask((prevState) => ({ ...prevState, title: e.target.value }));
  const handleCompleted = (e) =>
    setTask((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostItemThunk(task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type="text" onChange={handleTitle} />
      </label>
      <label>
        Completed: <input type="checkbox" onChange={handleCompleted} />
      </label>
      <button>Create</button>
    </form>
  );
}
