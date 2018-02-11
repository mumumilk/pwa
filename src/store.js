import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

import { firebaseApp } from './firebase'
import { reactReduxFirebase } from 'react-redux-firebase'

import reducers from './reducers'
const middlewares = applyMiddleware(promise(), createLogger(), thunk)

const firebaseConfigs = {
  userProfile: 'users'
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseApp, firebaseConfigs)
)(createStore)

const store = createStoreWithFirebase(reducers, middlewares)

export default store
