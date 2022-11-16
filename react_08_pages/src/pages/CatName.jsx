import React from 'react'
import {useParams} from 'react-router-dom';

export default function CatName() {
  const {catSpecial, catId} = useParams();

  return (
    <div>Cat {catSpecial}, {catId}</div>
  )
}
