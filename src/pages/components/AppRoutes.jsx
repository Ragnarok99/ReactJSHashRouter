import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx'
import About from './About.jsx'

function AppRoutes() {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route path="/about" component={About} /> 
    </Switch>
  );
}

export default AppRoutes;