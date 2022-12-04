import React, {useContext} from "react";

import ThemeContext from "../../context/ThemeContext";
import ListContext from "../../context/ListContext";

export default function List() {
  const {themeColor} = useContext(ThemeContext);
  const {todoList, listStyleType} = useContext(ListContext);
  
  return (
    <ul style={{background: themeColor, listStyleType}}>
      {todoList.map((item) => (
        <li key={item.id} style={{ color: item.isDone ? `green` : `red` }}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
