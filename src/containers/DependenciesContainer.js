import React from 'react'

import { compose } from 'recompose'

import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'

const DependenciesContainer = Component => {
  class Dependencies extends React.Component {
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  return compose(withFirebase, withRouter)(Dependencies)
}

export default DependenciesContainer