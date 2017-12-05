import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import {
  isAuthencated
} from './firebase'

import Login from './pages/Login'

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
)

const protectRouter = Component => props =>
  isAuthencated()
    ? <Component {...props} />
    : <Redirect to={{pathname: '/', state: {from: props.location}}} />

export default App
