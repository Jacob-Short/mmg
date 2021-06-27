import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import About from "./components/layout/About";
import Alert from "./components/layout/Alert";
import Home from "./components/home/Home";
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
// Bringing our redux store into our app
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToeken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser);
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
