import React from 'react'

import List from './List'
import Switcher from './Switcher'
import Filter from './Filter'

import {Provider} from 'react-redux'
import store from './../../store/store'

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <Switcher />
      <Filter />
      <List />
    </Provider>
  )
}
