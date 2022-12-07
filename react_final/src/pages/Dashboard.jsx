import React from "react";

import List from "./../components/List/List";
import Filter from "./../components/Filter/Filter";
import Form from "./../components/Form/Form";

import { Provider } from "react-redux";
import store from "./../store/store";

export default function Dashboard() {
  return (
    <Provider store={store}>
      <h1>Dashboard</h1>
      <Form />
      <Filter />
      <List />
    </Provider>
  );
}
