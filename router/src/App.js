import logo from './logo.svg';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
            <Navbar/>
            <Route path="/home" component={Home} exact/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
