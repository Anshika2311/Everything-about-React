import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conditional Rendering</h1>

    {
      (()=>{

        if(false){
          return<h1>if statement is executed</h1>
        }

        else{
          return<h1>
            Else statement is executed
          </h1>
        }

      })()


    }
    </div>
  )
}

export default App;
