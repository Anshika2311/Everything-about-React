import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const[username,setusername]=useState("")

  // const

  // function showinput(){

  //   alert(username)

  // }

  const[name,setname]=useState("")
  const[username,setusername]=useState("")
  const[age,setage]=useState()

  function printdetails(event){

    event.preventDefault()
    var user={
      name:name,
      username:username,
      age:age
    }

    console.log(user)

  }

  return (
    <div className="App">
      <h1>React Forms</h1>
      {/* <form>

          <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
          <br/>
          <button onClick={showinput}>Show input value</button>

      </form> */}

      <form onSubmit={printdetails}>

      <input type="text" placeholder="name" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="age" value={age} onChange={(e)=>{setage(e.target.value)}}/>
      <br/>
      <input type="submit" value="submit"/>


      </form>
    </div>
  );
}

export default App;
