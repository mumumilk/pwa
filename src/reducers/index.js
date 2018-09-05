import { combineReducers } from 'redux'

import { firebaseReducer } from 'react-redux-firebase'
import { auth } from './auth'
import { location } from './location'
import { spot } from './spot'

const reducers = combineReducers({
  auth,
  location,
  spot,
  api: firebaseReducer
})

export default reducers
