import logo from './logo.svg';
import './App.css';
import CC from './CC'
import Parent from './Parent';
import Parent_function from './Parent_function';

function App() {
  return (
    <div className="App">
     <h1>States</h1>
     <CC/>
     <Parent movie="YJHD"/>
     <Parent_function/>
    </div>
  );
}

export default App;
