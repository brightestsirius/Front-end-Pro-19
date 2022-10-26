import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter';
import Header from './components/Header';

const animals = [
  {
    type: `cat`
  },
  {
    type: `dog`
  },
  {
    type: `lion`
  }
];

export default class App extends Component {
  renderItem(index){
    this.setState({
      animals: this.state.animals.map((item,i) => {
        if(i === index) item.active = true;
        return item;
      })
    });

    console.log(this.state.animals);
  }

  state = {
    animals: animals
  }

  render() {
    return (
      <React.Fragment>
      <ul>
        {this.state.animals.map((item,index) => <li className={item.active && `active`} onClick={this.renderItem.bind(this, index)} key={index}>{item.type}</li>)}
      </ul>
      <hr></hr>
      <Counter />
      <Header />
      </React.Fragment>
    )
  }
}