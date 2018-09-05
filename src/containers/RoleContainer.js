import React from 'react'

import { connect } from 'react-redux'

const RoleContainer = Component => {
  class Role extends React.Component {
    componentDidMount() {
      const { auth, history } = this.props

      if (!auth.isAdmin) {
        history.push('/spots/list')
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  const mapStateToProps = state => state

  return connect(mapStateToProps)(Role)
}

export default RoleContainer
