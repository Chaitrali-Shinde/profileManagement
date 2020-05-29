import React from 'react';
import StartupForm from './components/startup/StartupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FrontPage from './components/FrontPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MentorForm from './components/Mentor/MentorForm';
import InvestorForm from './components/Investor/InvestorForm';
import CommunityForm from './components/Community/CommunityForm'

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path= "/" component= {FrontPage}/>
        <Route path= "/startupform" component= {StartupForm}/>
        <Route path= "/mentorform" component= {MentorForm}/>
        <Route path= "/investorform" component= {InvestorForm}/>
        <Route path= "/communityform" component= {CommunityForm}/>

          </div>
    </Router>
    
  );
}

export default App;
