import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './pages/Home'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Settings from './pages/Settings'

import Main from './containers/Main'
import LocationContainer from './containers/Location'
import AuthenticationContainer from './containers/Authentication'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Main>
      <Route path='/home' component={AuthenticationContainer(LocationContainer(Home))} />
      <Route path='/settings' component={AuthenticationContainer(Settings)} />
    </Main>
  </Switch>
)

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
