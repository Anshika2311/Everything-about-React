import React,{ Component } from 'react';

export const Moviesprovider=React.createContext()

class Moviescontext extends React.Component {

    constructor(){
        super();
        this.state={

            director:"Christopher Nolun",
            movie:"Interstellar",

            changemovie:this.changemovie,
            changedirector:this.changedirector

        }

    }

    changemovie=()=>{

        this.setState({
            movie:"Inception"
        })

    }

    changedirector=()=>{

        this.setState({
            director:"James Cameron"
        })
    }

    render() { 
        return <Moviesprovider.Provider value={{...this.state}}>
            {this.props.children}

        </Moviesprovider.Provider>
    }
}
 
export default Moviescontext;