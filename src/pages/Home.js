import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'
import { signInWithFacebook } from '../actions/authActions'

import Button from '../components/Button'

const Home = props => (
  <div className="home">
    <h1>OOOOOOOOOAA</h1>
  </div>
)

const mapDispatchToProps = (dispatch, state) => ({
  signIn: () => {
    const { firebase } = state
    dispatch(signInWithFacebook(firebase))
  }
})

export default compose(
  withFirebase,
  connect(null, mapDispatchToProps)
)(Home)
