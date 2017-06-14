import React from 'react';
import ReactDOM  from 'react-dom';
import AppRoutes from './pages/components/AppRoutes.jsx';
import {HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  
  <Router>
      <AppRoutes />
  </Router>,
  document.getElementById('root'));

