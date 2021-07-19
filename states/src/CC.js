import React,{Component} from 'react';

class CC extends React.Component{

    // constructor(){

    //     super()
    //     this.state={

    //         'player':'Ronaldo',
    //         'name':"Japan"

    //     }

    // }

    constructor(){

        super()
        this.state={

            'Country':"Japan",
            'language':'Japanese'

        }

    }

    changecountry=()=>{

        this.setState({
            Country:'India',
            language:'English'
        })
    }

  render() {
    return (
      <div>
        <h1>This is Class Component </h1>

        {
        /* <h1>The player name is :- {this.state.player}</h1>
        <h1>The country name is :- {this.state.name}</h1> */}

        <h1>The country name is :- {this.state.Country}</h1> 
        <h1>The declared language is:- {this.state.language}</h1>

        <button onClick={this.changecountry}>Change Country</button>

      </div>
    );
  }
}

export default CC;