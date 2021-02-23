import React, { Component } from 'react'
import personContext from '../context/context'
export default class Grandson extends Component {
    //给Grandson类添加属性contextType
    static contextType = personContext
    handleClick = () => {
        console.log(this.context);

    }
    render() {
        return (
            <>
                <h3 onClick={this.handleClick}>Grandson....</h3>
            </>
        )
    }
}
