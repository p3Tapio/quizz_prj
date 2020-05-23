import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Header/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quizzes from './Views/QuizzList';
import Quizz from './Views/Quizz';
import Login from './Views/Login';
import { Register } from './Views/Register';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/tietovisat"><Quizzes /></Route>
          <Route path="/tietovisat/:id"><Quizz /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
