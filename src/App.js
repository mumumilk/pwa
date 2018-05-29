import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'

import Home from './pages/Home'
import Landing from './pages/Landing'
import Settings from './pages/Settings'

import Main from './containers/Main'
import AuthenticationContainer from './containers/Authentication'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Main>
      <Route path='/home' component={AuthenticationContainer(Home)} />
      <Route path='/settings' component={AuthenticationContainer(Settings)} />
    </Main>
  </Switch>
)

export default compose(withFirebase)(App)
