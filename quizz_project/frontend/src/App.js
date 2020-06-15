import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './app.css';
import Home from './views/home';
import Navbar from './components/header/navbar';
import {  HashRouter as Router, Route, Switch } from 'react-router-dom'
import Quizzes from './views/quizzlist';
import Quizz from './views/quizz';
import Login from './views/login';
import Register from './views/register';
import PrivateRoute from './components/common/auth/privateroute';
import PublicRoute from './components/common/auth/publicroute'
import UserPage from './views/userpage';
import CreateNewQuizz from './views/createnewquizz';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tietovisat" component={Quizzes} />
          <Route path="/tietovisat/:id" component={Quizz} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PrivateRoute path="/userpage" component={UserPage} />
          <PrivateRoute path="/luouusi" component={CreateNewQuizz} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
