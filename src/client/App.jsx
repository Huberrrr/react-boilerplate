import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// page imports
import Home from './components/Home';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
  </Router>
);

export default App;
