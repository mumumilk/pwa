import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'

export default function(Component) {
  class Authentication extends React.Component {
    componentWillMount() {
      const { auth, history } = this.props

      if (auth.authenticated) {
        history.push('/')
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  const mapStateToProps = state => state

  return compose(
    withFirebase,
    connect(mapStateToProps)
  )(Authentication)
}
