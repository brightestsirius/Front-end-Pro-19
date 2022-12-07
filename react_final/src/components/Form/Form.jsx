import React from "react";

import useForm from "../../hooks/useForm";

import {useDispatch} from 'react-redux'
import {createItem} from './../../store/list/action'

export default function Form() {
  const { task, changeInput } = useForm();

  const dispatch = useDispatch();

  const handleChange = (e) => changeInput(e.target.name, e.target.value);
  const handleChangeCheckbox = (e) => changeInput(e.target.name, e.target.checked);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createItem(task));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task title <input name="title" type="text" onBlur={handleChange} />
      </label>
      <label>
        Task completed{" "}
        <input name="completed" type="checkbox" onChange={handleChangeCheckbox} />
      </label>
      <button>Add</button>
    </form>
  );
}