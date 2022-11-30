import React, {useState} from 'react'
import Heading from './Heading'
import Switcher from './Switcher'
import ThemeContext from './../../context/ThemeContext'

export default function ContextEample() {
  const [themeColor, setThemeColor] = useState("#ed143d");

  return (
    <ThemeContext.Provider value={{themeColor, setThemeColor}}>
      <Switcher />
      <Heading />
    </ThemeContext.Provider>
  )
}