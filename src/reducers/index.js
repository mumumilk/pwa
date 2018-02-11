import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { authReducer } from './authReducer'

const reducers = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer
})

export default reducers
