import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'
import { signInWithFacebook } from '../actions/authActions'

import Button from '../components/Button'

const Landing = props => (
  <div>
    <div className="header">
        <div className="logo">
        </div>

        <div className="sign">
          <Button black text="Saiba mais"></Button>
          {/* <button onClick={props.signIn}>Oi</button> */}
        </div>
        <div></div>
    </div>
    <div>

    </div>
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
)(Landing)
