import React, { Fragment, useEffect, useState, useContext } from "react";
import { getList, abortFetch, addItem } from "./../../services/todoServices";
import ToDoItem from "./ToDoItem";
import './style.sass';
import ThemeContext from "./../../context/ThemeContext";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      let data = await getList();
      setList(data.slice(0, 10));

      let newItem = await addItem({title: `New title`});
      console.log(newItem);
    })();
  }, []);

  return (
    <Fragment>
      <ul className={theme}>
        {list.map((item) => <ToDoItem key={item.id} item={item} />)}
      </ul>
      <button onClick={abortFetch}>Abort</button>
    </Fragment>
  );
}
