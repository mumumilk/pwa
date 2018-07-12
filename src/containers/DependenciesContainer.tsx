import * as React from 'react'

import { withFirebase } from 'react-redux-firebase'

const DependenciesContainer = (Component: any) => {
  class Dependencies extends React.Component {
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  return withFirebase(Dependencies)
}

export default DependenciesContainer
