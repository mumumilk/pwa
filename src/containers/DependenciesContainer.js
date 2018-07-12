import React from 'react'

import { compose } from 'recompose'

import { withFirebase } from 'react-redux-firebase'

const DependenciesContainer = Component => {
  class Dependencies extends React.Component {
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  return compose(withFirebase)(Dependencies)
}

export default DependenciesContainer
