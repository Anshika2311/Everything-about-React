import React from 'react'
import Child from './Child'
class Parent extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return<div>

        <h1>This is Parent Component</h1>
        <h1>The received Movie from App component is: -{this.props.movie}</h1>

        <Child language='Javscript'framework='React'/>

        </div>
    }
}

export default Parent