import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/layout/About';
import Alert from './components/layout/Alert';
import './App.css';

// Redux
// Bringing our redux store into our app
import { Provider } from 'react-redux'
import store from './store'

const App = () => 
    <Provider store={store}>
    <Router>
    <Fragment>
      <Navigation/>
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
        </Switch>
      </section>
    </Fragment>
    </Router>
    </Provider>


export default App;
