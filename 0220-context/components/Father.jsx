import React, { Component } from 'react'
import Son from './Son'
import Grandson from './Grandson'
export default class Father extends Component {
    render() {
        return (
            <>
                <p>Father....</p>
                <Son />
                {/* <Grandson /> */}
            </>
        )
    }
}
