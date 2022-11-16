import React from 'react'
import DogList from './../components/Dog/DogList/DogList'
import DogPatron from './../components/Dog/DogPatron/DogPatron';
import DogHatico from './../components/Dog/DogHatico/DogHatico';
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom';

export default function Dog() {
  const {url, path} = useRouteMatch();

  return (
    <div className='container__dog'>
        <h3>Dog Page</h3>
        <DogList />

        <nav>
          <ul>
            <li>
              <Link to={`${url}/patron`}>Patron</Link>
            </li>
            <li>
              <Link to={`${url}/hatico`}>Hatico</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={`${path}/patron`}>
            <DogPatron />
          </Route>
          <Route path={`${path}hatico`}>
            <DogHatico />
          </Route>
        </Switch>
    </div>
  )
}
