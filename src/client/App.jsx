import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// page imports
import HomeContainer from './components/Home';

const App = () => (
  <Router>
    <Route path="/" exact component={HomeContainer} />
  </Router>
);

export default App;
