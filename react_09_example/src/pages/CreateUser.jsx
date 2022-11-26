import React, {Fragment} from 'react'
import UserForm from './../components/Users/UserForm'

export default function CreateUser() {
  return (
    <Fragment>
      <h1>Create user</h1>
      <UserForm createForm />
    </Fragment>
  )
}