import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'

import Home from './pages/Home'
import Landing from './pages/Landing'
import Settings from './pages/Settings'
import NewSpot from './pages/spots/NewSpot'
import ListSpots from './pages/spots/ListSpots'

import Main from './containers/Main'
import AuthenticationContainer from './containers/AuthenticationContainer'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Main>
      <Route path='/home' component={AuthenticationContainer(Home)} />
      <Route path='/settings' component={AuthenticationContainer(Settings)} />

      <Route path='/spots/list' component={AuthenticationContainer(ListSpots)} />
      <Route path='/spots/new' component={AuthenticationContainer(NewSpot)} />
    </Main>
  </Switch>
)

export default compose(withFirebase)(App)
