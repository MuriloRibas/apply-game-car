import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LobbyPage from './pages/lobby/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LobbyPage} />
      </Switch>
    </Router>
  );
}

export default App;
