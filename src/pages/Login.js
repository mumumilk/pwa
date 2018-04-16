import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'
import { signInWithFacebook } from '../actions/authActions'

const Login = props => (
  <div>
    <button onClick={props.signIn}>Login</button>
  </div>
)

const mapActionsToProps = (dispatch, state) => ({
  signIn: () => {
    const { firebase } = state
    dispatch(signInWithFacebook(firebase))
  }
})

export default compose(
  withFirebase,
  connect(null, mapActionsToProps)
)(Login)
