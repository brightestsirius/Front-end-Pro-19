import React from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <h1>Hello, world!</h1>
      <input></input>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cat">Cat</Link>
          </li>
          <li>
            <Link to="/dog">Dog</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <h3>Home</h3>
        </Route>
        <Route path="/cat">
          <Cat />
        </Route>
        <Route path="/dog">
          <Dog />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>

      <Switch>
        <Route path="/cat">
          <hr></hr>
          <h4>Cat Alisa</h4>
        </Route>
      </Switch>
    </Router>
  );
}
