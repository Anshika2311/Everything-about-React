import React,{useState} from 'react';

function Home(){

    const[color,setcolor]=useState("red")
    const[bgcolor,setbgcolor]=useState("yellow")

    function change(){

        setcolor("yellow")
        setbgcolor("red")
    }

    return <div>
        <h1>Manipulating CSS using Hooks</h1>

        <h1 style={{color:color}}>Anshika</h1>
        <h1 style={{backgroundColor:bgcolor}}> Maheshwari</h1>
        <button onClick={change}>Change styling</button>
        </div>
}

export default Home;