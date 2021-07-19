import React, { useContext } from 'react';
import { Moviesprovider } from './Moviescontext';

function B(){

    const obj=useContext(Moviesprovider)

    function change(){
        obj.changedirector()
    }

    return<div style={{backgroundColor:"blue"}}>
        <h1>This is B component</h1>
        <h1>The movie name is :-{obj. movie}</h1>
        <button onClick={change}style={{margin:"10px"}}>Change director name</button>
    </div>
}

export default B;
