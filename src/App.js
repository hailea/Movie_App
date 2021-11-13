import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Player from './components/Player'

function App() {
  return (
    <Router>
    <div className="App">      
          <Route exact path="/" component={Home} />          
          <Route exact path='/movie/:movieID' component = {Player} />               
    </div>
    </Router>
  );
}

export default App;
