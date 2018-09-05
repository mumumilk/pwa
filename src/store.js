import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { persistStore, persistReducer } from 'redux-persist'

import localforage from 'localforage'

import { firebaseApp } from './firebase'
import { reactReduxFirebase } from 'react-redux-firebase'

import reducers from './reducers/index'
const middlewares = applyMiddleware(logger, thunk)

const firebaseConfig = {
  userProfile: 'users',
  updateProfileOnLogin: false,
  logErrors: false,
  profileParamsToPopulate: [
    ['role:roles']
  ]
}

const persistConfig = {
  key: 'root',
  storage: localforage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const createStoreWithFirebase = compose(reactReduxFirebase(firebaseApp, firebaseConfig))(createStore)

const store = createStoreWithFirebase(persistedReducer, middlewares)

const persistedStore = persistStore(store)

export {
  store,
  persistedStore
}
