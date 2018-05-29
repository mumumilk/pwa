import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { locationReducer } from './locationReducer'
import { firebaseReducer } from 'react-redux-firebase'

const reducers = combineReducers({
  auth: authReducer,
  location: locationReducer,
  firebase: firebaseReducer
})

export default reducers
