import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Header/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quizzes from './Views/QuizzList';
import Quizz from './Views/Quizz';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/tietovisat"><Quizzes /></Route>
          <Route path="/tietovisat/:id"><Quizz /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
