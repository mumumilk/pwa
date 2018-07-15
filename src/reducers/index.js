import { combineReducers, Reducer } from 'redux'

import { firebaseReducer } from 'react-redux-firebase'
import { authReducer } from './authReducer'
import { locationReducer } from './locationReducer'
import { spotReducer } from './spotReducer'

const reducers: Reducer<any> = combineReducers({
  auth: authReducer,
  location: locationReducer,
  api: firebaseReducer,
  spot: spotReducer
})

export default reducers
