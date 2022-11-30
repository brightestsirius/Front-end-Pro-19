import React from 'react'
import Heading from './Heading'
import Switcher from './Switcher'
import { Provider } from 'react-redux'
import store from './../../store/store'

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <Switcher />
      <Heading />
    </Provider>
  )
}