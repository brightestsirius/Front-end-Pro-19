import React, { useEffect, useState } from "react";
import { getList } from "./../../../services/todoService";
import ToDoItem from "./../ToDoItem";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    (async () => {
      let todo = await getList();
      setList(todo.slice(0, 10));
    })();
  }, []);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={`${url}${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}:id`}>
          <ToDoItem />
        </Route>
      </Switch>
    </div>
  );
}
