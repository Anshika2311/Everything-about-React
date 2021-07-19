import React, { Component } from 'react';

class CC extends React.Component{

    constructor(){
        super();

        this.state={
            
            'color':'red',
            'bgcolor':'yellow'
            
        }
    }

    changecolor=()=>{
        this.setState({
            color:'green'
        })
    }

    changebgcolor=()=>{
        this.setState({
            bgcolor:'white'
        })
    }

    render(){
        return <div>
            <h1 style={{color:this.state.color,backgroundColor:this.state.bgcolor}}>Dynamic CSS</h1>
            <button onClick={this.changecolor}>Change Color</button>
            <button onClick={this.changebgcolor}>Change Background color</button>
        </div>
    }
}

export default CC