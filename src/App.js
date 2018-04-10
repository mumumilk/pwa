import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Landing from './pages/Landing'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
  </Switch>
)

export default App
