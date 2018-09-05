import {
  INIT_AUTH,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from '../constants'

export const signInWithFacebook = firebase => {
  return dispatch => {
    firebase
      .login({ provider: 'facebook', type: 'popup' })
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)))
  }
}

export const initAuth = user => {
  return {
    type: INIT_AUTH,
    payload: user
  }
}

export const signInError = error => {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  }
}

export const signInSuccess = result => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  }
}

export const signOut = firebase => {
  return dispatch => {
    firebase.logout()
      .then(() => dispatch(signOutSuccess()))
  }
}

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS
  }
}
