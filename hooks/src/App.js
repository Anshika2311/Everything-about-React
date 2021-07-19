import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import Home from './Home'

function App() {

  // /const[player,setplayer]=useState("Sachin")

  
  // function change(){
        
  //   setplayer('Dhoni')

  // }

  const[numbers,setnumbers]=useState([1,3,5,7])

  function change(){

    setnumbers([2,4,6,8])

  }


  const[language,setlanguage]=useState("Java")

  useEffect(()=>{

    setlanguage("Python")

  },[])

  return (
    <div className="App">
      <h1>REACT Hooks</h1>

      {/* <h1>The declared player is {player}</h1> */}

    <h1>The declared numbers {numbers}</h1>
      <button onClick={change}>Change player</button>

      <h1>This is useEffect hook</h1>
      <h1>The Declared language is: -{language}</h1>

      <Home/>
    </div>
  );
}

export default App;
