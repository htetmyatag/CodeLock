// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>CodeLock</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          {/* Add more routes for other pages/components */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
