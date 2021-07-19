import React from 'react'
class Child extends React.Component{

    constructor(props){

        super(props)

    }

    render(){
        return<div>

        <h1>This is Child Component</h1>
        <h1>The received language from Parent component is: -{this.props.language}</h1>
        <h1>The received framework from Parent component is: -{this.props.framework}</h1>

        </div>
    }
}

export default Child