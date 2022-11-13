import React, {useState} from 'react';

import ToDoList from './components/ToDo/ToDoList';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import CounterFirst from './components/Counter/CounterFirst';
import CountryWeather from './components/CountryWeather';

import ThemeContext from './context/ThemeContext';
import UserContext from './context/UserContext';

export default function App() {
  const [theme, setTheme] = useState(`dark`);
  const [user] = useState(`Oleg`);

  return (
    <div>

      <ThemeContext.Provider value={{theme, setTheme}}>
        <UserContext.Provider value={user}>
          <ThemeSwitcher />
          <hr></hr>
          <ToDoList />
        </UserContext.Provider>
      </ThemeContext.Provider>

      <hr></hr>

      <CounterFirst />

      <CountryWeather />
    </div>
  )
}