import React, { Component, PureComponent } from 'react'

export default class App extends PureComponent {
  state = {
    num: 2
  }


  // PureComponent内部实现了shouldComponentUpdate,对state和props进行浅比较
  // shouldComponentUpdate和PureComponent同时存在时，只生效shouldComponentUpdate

  shouldComponentUpdate(nextProps, nextState) {
    // 当state和props数据更新时才需要重新渲染
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
    var hasOwnProperty$2 = Object.prototype.hasOwnProperty
    this.setState({
      num: 7
    })
  }
  render() {
    console.log('render');

    return (
      <div>
        <button onClick={this.updateData}>点击更新</button>
      </div>
    )
  }
}
