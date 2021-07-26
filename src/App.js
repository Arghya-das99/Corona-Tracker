import logo from './logo.svg';
import './App.css';
import Statewise from './components/stateWiseData/statewise';
import Home from './components/stateWiseData/Home';
import State from './components/stateWiseData/State';

import {Route, Link} from 'react-router-dom';
import Navabar from './components/stateWiseData/Navabar';


function App() {
  return (
    <>

    <div className = 'App'>
      <Navabar/>
      <Route exact path = '/' component ={Home}/>
      <Route exact path = '/state' component ={State}/>
      
    </div>
    </>
  
  );
}

export default App;
