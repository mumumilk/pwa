import Constants from '../constants'

export function signInWithFacebook(firebase) {
  return dispatch => {
    firebase
      .login({ provider: 'facebook', type: 'popup' })
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)))
  }
}

export function initAuth(user) {
  return {
    type: Constants.INIT_AUTH,
    payload: user
  }
}

export function signInError(error) {
  return {
    type: Constants.SIGN_IN_ERROR,
    payload: error
  }
}

export function signInSuccess(result) {
  console.log(result)
  return {
    type: Constants.SIGN_IN_SUCCESS,
    payload: result.user
  }
}

export function signOut(firebase) {
  return dispatch => {
    firebase.signOut()
      .then(() => dispatch(signOutSuccess()))
  }
}

export function signOutSuccess() {
  return {
    type: Constants.SIGN_OUT_SUCCESS
  }
}
