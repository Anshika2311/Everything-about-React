import React, { Component } from 'react';

class CC extends Component {

    constructor(){
        super()

        this.state={
            number:0
        }
    }

    componentWillMount(){
        
        // this.setState({
        //     number:1
        // })

        alert("component will mount")

    }

    componentDidMount(){
        
        alert("THis is component did mount")

    }

    render() {
        return (
            <div>
                <h1>This is Class Component</h1>
                <h1>The declared number is: {this.state.number}</h1>
            </div>
        );
    }
}

export default CC;