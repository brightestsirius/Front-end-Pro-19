import React, {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'

export default function Heading() {
  const {themeColor} = useContext(ThemeContext);

  return (
    <h3 style={{color: themeColor}}>Hello, world</h3>
  )
}