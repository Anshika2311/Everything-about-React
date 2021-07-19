import React from 'react'

function Child_function(props){
    return<div>
        <h1>This is child Component(Functional Component)</h1>
        <h1>The recieved country from Praent Component is :- {props.country}</h1>
    </div>
}

export default Child_function