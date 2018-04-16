import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Settings from './pages/Settings'

import Main from './containers/Main'
import Authentication from './containers/Authentication'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Main>
      <Route path='/home' component={Authentication(Home)} />
      <Route path='/settings' component={Authentication(Settings)} />
    </Main>
  </Switch>
)

export default App
