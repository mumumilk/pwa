import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'

const Settings = props => (
  <div className="settings">
    <h1></h1>
  </div>
)

export default compose(
  withFirebase,
  connect(null, null)
)(Settings)
