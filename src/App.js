import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import { withFirebase } from 'react-redux-firebase'

import Landing from './pages/Landing'
import Settings from './pages/Preferences'

import NewSpot from './pages/spots/NewSpot'
import AnalyzeSpot from './pages/spots/AnalyzeSpot'
import ListSpots from './pages/spots/ListSpots'

import Main from './containers/Main'
import AuthenticationContainer from './containers/AuthenticationContainer'
import FirebaseContainer from './containers/FirebaseContainer'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={FirebaseContainer(Landing)} />

      <Main>
        <Route path='/settings' component={AuthenticationContainer(Settings)} />

        <Route path='/spots/list' component={AuthenticationContainer(FirebaseContainer(ListSpots))} />
        <Route path='/spots/new' component={AuthenticationContainer(FirebaseContainer(NewSpot))} />
        <Route path='/spots/analyze' component={AuthenticationContainer(FirebaseContainer(AnalyzeSpot))} />
      </Main>
    </Switch>
  </Router>
)

export default withFirebase(App)
