import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './pages/Login'

const App = () => (
  <Switch>
    <Route exact path='/' component={Login} />
  </Switch>
)

export default App
