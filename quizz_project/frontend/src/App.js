import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Header/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quizzes from './Views/QuizzList';
import Quizz from './Views/Quizz';
import Login from './Views/Login';
import Register from './Views/Register';
import PrivateRoute from './Components/Common/Auth/PrivateRoute';
import PublicRoute from './Components/Common/Auth/PublicRoute'
import UserPage from './Views/UserPage';


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
        </Switch>
      </Router>
    </div >
  );
}

export default App;
