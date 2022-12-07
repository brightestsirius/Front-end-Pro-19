import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteItem} from './../../store/list/action'

export default function BtnDelete({id}) {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(deleteItem(id));
  return (
    <button onClick={handleClick}>Delete</button>
  )
}
