import React,{Component} from 'react';

class CC extends React.Component{

    clickme=()=>{
        alert("The button is clicked")
    }

    change=()=>{
        alert("The input text is changed")
    }

    mouseover=()=>{
        alert("It is hovered")
    }

    render(){
        return<div>
            <h1>Eventhandling in Class Component</h1>
            <button onClick={this.clickme}>Click Me</button>
            <input type="text" onChange={this.change}/>Enter name
            <h1 onMouseOver={this.mouseover}>Hover Me</h1>
        </div>
    }
}

export default CC