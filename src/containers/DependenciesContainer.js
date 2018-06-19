import React from 'react'

import { withFirebase } from 'react-redux-firebase'
import { BrowserRouter } from 'react-router-dom'
import { compose } from 'recompose'

const DependenciesContainer = Component => {
  class Dependencies extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Component {...this.props} />
        </BrowserRouter>
      )
    }
  }

  return compose(withFirebase)(Dependencies)
}

export default DependenciesContainer
