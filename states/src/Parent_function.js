import React from 'react'
import Child_function from './Child_function'

function Parent_function(){
    return<div>
        <h1>This is parent Component(Functional Component)</h1>
        <Child_function country="India"/>
    </div>
}

export default Parent_function