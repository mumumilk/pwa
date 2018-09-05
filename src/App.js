import React from 'react'
import { compose } from 'recompose'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './static/styles/main.css'

import Landing from './pages/Landing'
import Settings from './pages/Preferences'

import NewSpot from './pages/spots/new/NewSpot'
import AnalyzeSpots from './pages/spots/AnalyzeSpots'
import ListSpots from './pages/spots/ListSpots'

import Main from './containers/Main'
import AuthenticationContainer from './containers/AuthenticationContainer'
import DependenciesContainer from './containers/DependenciesContainer'
import RoleContainer from './containers/RoleContainer'

import Container from './Container'
import Event from './Event'

Container.add('event', Event.getInstance())

const Containers = Component => compose(AuthenticationContainer, DependenciesContainer)(Component)

const MainWithDependencies = Containers(Main)
const LandingWithDependencies = DependenciesContainer(Landing)

const AnalyzeSpotsWithContainers = compose(RoleContainer, Containers)(AnalyzeSpots)

const NewSpotWithContainers = Containers(NewSpot)
const ListSpotsWithContainers = Containers(ListSpots)

const SettingsAuthenticated = AuthenticationContainer(Settings)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingWithDependencies} />

      <MainWithDependencies>
        <Route path='/settings' component={SettingsAuthenticated} />
        <Route path='/spots/list' component={ListSpotsWithContainers} />
        <Route path='/spots/new' component={NewSpotWithContainers} />
        <Route path='/spots/analyze' component={AnalyzeSpotsWithContainers} />
      </MainWithDependencies>
    </Switch>
  </BrowserRouter>
)

export default App
