import React from 'react'

import {useDispatch} from 'react-redux'
import {fetchChangeItemThunk} from './../../store/list/actions'

export default function ListItemCompleted({item}) {
    const dispatch = useDispatch();

  return (
    <input type="checkbox" defaultChecked={item.completed} onChange={() => dispatch(fetchChangeItemThunk(item))} />
  )
}
