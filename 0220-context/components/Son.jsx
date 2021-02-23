import React, { Component } from 'react'
import personContext from '../context/context'
import Grandson from './Grandson'

export default class Son extends Component {
    render() {
        return (
            <>
                <personContext.Consumer>
                    {
                        (person) => {
                            console.log(person);
                            const { name, age, sex } = person
                            return (
                                <ul>
                                    <li>姓名：{name}</li>
                                    <li>年龄：{age}</li>
                                    <li>性别：{sex}</li>
                                </ul>
                            )

                        }
                    }
                </personContext.Consumer>
                <Grandson />

            </>
        )
    }
}
