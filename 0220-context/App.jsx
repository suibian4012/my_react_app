
import React, { Component } from 'react'
import './App.css';
import Father from './components/Father'

/* 
  personContext内部包含两个组件
  personContext.Provider
  personContext.Consumer
*/
import personContext from './context/context'

export default class App extends Component {
  state = {
    person: {
      name: 'zhangsan',
      age: 12,
      sex: 'girl'
    }
  }
  render() {
    return (
      <div className="App">
        <personContext.Provider value={this.state.person}>
          <Father />
        </personContext.Provider>

      </div>
    );
  }
}
