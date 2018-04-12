import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Landing from './pages/Landing'
import Home from './pages/Home'

import Main from './containers/Main'
import Authentication from './containers/Authentication'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Main>
      <Route path='/home' component={Authentication(Home)} />
    </Main>
  </Switch>
)

export default App
