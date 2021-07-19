import logo from './logo.svg';
import './App.css';
import CC from './CC'

function App() {

  function getalert(){
    alert("The button is clicked")

  }

  function inputalert(){
    alert("The input is changed")
  }

  function mouse(){
    alert("The text is hovered")
  }

  return (
    <div className="App">
      <h1>Event handling in React</h1>
      <button onClick={getalert}>Click me</button>
      <br/>
      <input type="text" onChange={inputalert}/>
      <h1 onMouseOver={mouse}>Hover Me</h1>
      <CC/>
    </div>
  );
}

export default App;
