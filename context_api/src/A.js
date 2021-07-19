import React, { useContext } from 'react';
import { Moviesprovider } from './Moviescontext';

function A(){

    const obj=useContext(Moviesprovider)


    function change(){
        obj.changemovie()
    }


    return<div style={{backgroundColor:"red"}}>
        <h1>This is A component</h1>
        <h1>{obj.director}</h1>
        <button onClick={change} style={{margin:"10px"}}>Change movie name</button>
    </div>
}

export default A;
