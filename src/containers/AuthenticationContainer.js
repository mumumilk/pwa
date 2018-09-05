import React from 'react'

import { connect } from 'react-redux'

const AuthenticationContainer = Component => {
  class Authentication extends React.Component {
    componentDidMount() {
      const { auth, history } = this.props

      if (!auth.authenticated) {
        history.push('/')
      }
    }

    render() {
      const { auth } = this.props

      return auth.authenticated
        ? <Component {...this.props} />
        : null
    }
  }

  const mapStateToProps = state => state

  return connect(mapStateToProps)(Authentication)
}

export default AuthenticationContainer
