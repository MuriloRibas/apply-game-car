import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LobbyPage from './pages/lobby/index';
import './styles/configs/reset.css'
import './styles/global/index.css'
import './styles/global/variables.css'
import PlayPage from './pages/play/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LobbyPage} />
        <Route path="/play" component={PlayPage} />
      </Switch>
    </Router>
  );
}

export default App;
