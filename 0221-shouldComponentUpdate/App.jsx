import React, { Component } from 'react'

export default class App extends Component {
  state = {
    num: 2
  }

  shouldComponentUpdate(nextProps, nextState) {
    /* 
      当state和props数据更新时才需要重新渲染
    */
    const nextStateKeys = Object.keys(nextState)
    for (let i = 0; i < nextStateKeys.length; i++) {
      const nextStateKey = nextStateKeys[i]
      if (!this.state.hasOwnProperty(nextStateKey) || this.state[nextStateKey] !== nextState[nextStateKey]
      ) {
        return true
      }
    }
    return false
  }

  updateData = () => {
    this.setState({
      num: 7
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.updateData}>点击更新</button>
      </div>
    )
  }
}
