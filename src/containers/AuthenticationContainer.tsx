import * as React from 'react'

import { connect } from 'react-redux'

const AuthenticationContainer = (Component: any) => {
  class Authentication extends React.Component<any> {
    componentWillMount() {
      const { auth, history } = this.props

      if (!auth.authenticated) {
        history.push('/')
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  const mapStateToProps = (state: any) => state

  return connect(mapStateToProps)(Authentication)
}

export default AuthenticationContainer
