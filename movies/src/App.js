import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Addmovie from './Addmovie';
import Movieslist from './Movieslist';
import Moviescontext from './Moviescontext';

function App() {
  return (
    <div className="App">
      <h1>Movies App</h1>
      <Moviescontext>

      <Navbar/>
      <Addmovie/>
      <Movieslist/>

      </Moviescontext>
    
    </div>
  );
}

export default App;
