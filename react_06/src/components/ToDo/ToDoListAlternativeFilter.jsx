import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  getList,
  addItem,
  updateItem,
  deleteItem,
} from "../../services/todoService";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import {useLocalStorage} from './../../hooks/common';
import "./style.sass";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState(``);
  const [filter, setFilter] = useLocalStorage(`filter`, `all`);
  const [mode, setMode] = useLocalStorage(`mode`, `light`);

  const getFilteredList = () => {
    console.log(`in getFilteredList`);

    if (filter === `all`) {
      return list;
    } else if (filter === `completed`) {
      return list.filter((item) => item.completed);
    } else if (filter === `non-completed`) {
      return list.filter((item) => !item.completed);
    }
  };

  const filteredList = useMemo(() => getFilteredList(), [list, filter]);

  useEffect(() => {
    getList().then((list) => setList(list.slice(0, 10)));
  }, []);

  const completeItem = useCallback(async (item) => {
    let updatedItem = await updateItem(item.id, { completed: !item.completed });
    setList((prevState) =>
      prevState.map((el, i) => {
        if (el.id === item.id) el = updatedItem;
        return el;
      })
    );
  }, []);

  const addTask = useCallback(
    async (e) => {
      e.preventDefault();
      let addedItem = await addItem({ title: title });
      setList((prevState) => [...prevState, addedItem]);
      e.target.reset();
    },
    [title]
  );

  const removeItem = useCallback(async (e, itemId) => {
    e.stopPropagation();
    await deleteItem(itemId);
    setList((prevState) => prevState.filter((el) => el.id !== itemId));
  }, []);

  return (
    <div className="todo">
      <ToDoForm addTask={addTask} setTitle={(e) => setTitle(e.target.value)} />
      <hr />
      <select defaultValue={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="non-completed">Non-completed</option>
      </select>
      <hr />
      <label>
        Light mode:{" "}
        <input
          type="checkbox"
          defaultChecked={mode===`light`}
          onChange={(e) => setMode(e.target.checked ? `light` : `dark`)}
        />
      </label>
      <hr />
      <ul className={mode}>
        {filteredList.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            completeItem={() => completeItem(item)}
            removeItem={(e) => removeItem(e, item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
