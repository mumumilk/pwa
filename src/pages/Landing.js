import React, { Component } from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'
import { signInWithFacebook } from '../actions/authActions'

import Button from '../components/Button'

class Landing extends Component {
  componentDidUpdate() {
    const { history, auth } = this.props

    if (auth.authenticated) {
      history.push('/home')
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="header">
          <img className="logo" src="../statics/images/logo.svg" />

          <div className="sign">
            <Button medium white text="Saiba mais" onClick={this.props.signIn}></Button>
          </div>
        </div>

        <div className="body">
          <h1 className="title">Em breve, encontre e compartilhe novos picos para sua sessão.</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapActionsToProps = (dispatch, state) => ({
  signIn: () => {
    const { firebase } = state
    dispatch(signInWithFacebook(firebase))
  }
})

export default compose(
  withFirebase,
  connect(mapStateToProps, mapActionsToProps)
)(Landing)
