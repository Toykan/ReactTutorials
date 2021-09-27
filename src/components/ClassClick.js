import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('click handler on class component')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick
