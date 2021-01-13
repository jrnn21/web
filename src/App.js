import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Dashboard from './screen/Dashboard';
import LogIn from './screen/LogIn';
import SignUp from './screen/SignUp';
import './style/bootstrap.css';

function App() {
 return (
  <>
   <Router>
    <NavBar />
    <Switch>
     <Route path="/" component={Dashboard} exact />
     <Route path="/login" component={LogIn} />
     <Route path="/signup" component={SignUp} />
    </Switch>
   </Router>
  </>
 );
}

export default App;
