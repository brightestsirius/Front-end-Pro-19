import React from 'react'

import {Provider} from 'react-redux'
import store from './../store/store'

import List from './../components/List/List'
import Form from './../components/Form/Form'

export default function Dashboard() {
  return (
    <Provider store={store}>
        <h1>Dashboard</h1>
        <Form />
        <List />
    </Provider>
  )
}