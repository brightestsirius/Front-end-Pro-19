import React from 'react'

import {Provider} from 'react-redux'
import store from './../../store/store'

import List from './List'
import Switcher from './Switcher'

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <Switcher />
      <List />
    </Provider>
  )
}
