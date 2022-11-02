import React, { Component } from 'react'
import Lists from './components/Lists/Lists';

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        title: `Task 1`
      },
      {
        id: 2,
        title: `Task 2`
      },
      {
        id: 3,
        title: `Task 3`
      },
      {
        id: 4,
        title: `Task 4`
      }
    ],
    animals: [
      {
        id: 1,
        title: `cat`
      },
      {
        id: 2,
        title: `dog`
      }
    ]
  }

  render() {
    return (
      <div>
         <Lists list={this.state.list} />
      </div>
    )
  }
}