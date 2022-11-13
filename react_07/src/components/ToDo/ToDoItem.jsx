import React from 'react'
import { useContext } from 'react'
import UserContext from '../../context/UserContext';
import ThemeContext from './../../context/ThemeContext'

export default function ToDoItem({item}) {
  const {theme} = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <li style={{color: theme===`light` ? `darkblue` : `yellow`}}>{item.title} for {user}</li>
  )
}