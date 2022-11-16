import React from "react";
import Cat from "./pages/Cat";
import CatAnton from "./pages/CatAnton";
import CatName from './pages/CatName';
import Dog from "./pages/Dog";
import ToDo from "./pages/ToDo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from '@mui/material/Button';

export default function App() {
  return (
    <Router>
      <h1>Hello, world!</h1>
      <input></input>
      <hr></hr>
      <Button variant="outlined">Hello World</Button>
      <hr></hr>
      <Switch>
        <Route path="/cat" exact>
          <Cat />
        </Route>
        <Route path="/cat/Anton">
          <CatAnton />
        </Route>
        <Route path="/cat/:catSpecial/:catId">
          <CatName />
        </Route>
        <Route path="/dog">
          <Dog />
        </Route>
        <Route path="/">
          <ToDo />
        </Route>
      </Switch>
    </Router>
  );
}
