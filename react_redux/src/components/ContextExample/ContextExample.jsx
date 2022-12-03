import React from "react";

import ThemeContext from './../../context/ThemeContext'
import ListContext from './../../context/ListContext'

import List from "./List";
import Switcher from "./Switcher";

import useList from './../../hooks/useList'
import useThemeColor from './../../hooks/useThemeColor'

export default function ContextExample() {

  return (
    <ThemeContext.Provider value={useThemeColor()}>
      <h3>Context Example</h3>
      <Switcher />
      <ListContext.Provider value={useList()}>
        <List />
      </ListContext.Provider>
    </ThemeContext.Provider>
  );
}
