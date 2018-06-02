import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { locationReducer } from './locationReducer'
import { spotReducer } from './spotReducer'
import { firebaseReducer } from 'react-redux-firebase'

const reducers = combineReducers({
  auth: authReducer,
  location: locationReducer,
  firebase: firebaseReducer,
  spot: spotReducer
})

export default reducers
