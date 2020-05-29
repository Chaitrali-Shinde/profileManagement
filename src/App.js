import React from 'react';
import StartupForm from './components/startup/StartupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FrontPage from './components/FrontPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path= "/" component= {FrontPage}/>
        <Route path= "/startupform" component= {StartupForm}/>
          </div>
    </Router>
    
  );
}

export default App;
