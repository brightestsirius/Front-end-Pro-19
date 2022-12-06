import React from "react";

import List from "./List";
import Switcher from "./Switcher";

import ThemeContext from '../../context/ThemeContext';
import ListContext from './../../context/ListContext'

import useTheme from "../../hooks/useTheme";
import useList from './../../hooks/useList';

export default function ContextExample() {

  return (
    <ThemeContext.Provider value={useTheme()}>
      <Switcher />
      <ListContext.Provider value={useList()} >
        <List />
      </ListContext.Provider>
    </ThemeContext.Provider>
  );
}
