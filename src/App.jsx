import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/home/Home';
import HomePrivate from './containers/home-private/HomePrivate';
import Login from './containers/login/Login';
import About from './containers/about/About';
import Contact from './containers/contact/Contact';
import NotFound from './containers/not-found/NotFound';
import Skill from './containers/skill/Skill';
import { PrivateRoute } from './components/private-route/PrivateRoute';
import store from './store';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>      
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/private/home" component={HomePrivate} />
            <PrivateRoute path="/private/skills" component={Skill} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
