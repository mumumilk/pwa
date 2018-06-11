import React from 'react'

import { withFirebase } from 'react-redux-firebase'

const FirebaseContainer = Component => {
  class Firebase extends React.Component {
    render() {
      return <Component firebase={this.props.firebase} />
    }
  }

  return withFirebase(Firebase)
}

export default FirebaseContainer
