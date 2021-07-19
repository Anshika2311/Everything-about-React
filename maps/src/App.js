import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[numbers,setnumbers]=useState([1,2,3,4,5,6,7,8,9,10])
  const[players,setplayers]=useState([{name:"Sachin",country:"India"},{name:"Dhoni",country:"India"},{name:"Steve",country:"Australia"}])
  
  const numbersList= numbers.map((number)=>{

    return <h1>{number}</h1>

  })

  const playersList= players.map((player)=>{

    return <div>

      <h1>The name of the player is:-{player.name}</h1>
      <h1>The country is:-{player.country}</h1>
    </div>

  })

  return (
    <div className="App">
      <h1>React Maps</h1>
      {/* {numbersList} */}
      {playersList}
    </div>
  );
}

export default App;
