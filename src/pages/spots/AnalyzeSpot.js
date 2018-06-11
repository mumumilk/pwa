import React, { Component } from 'react'

import { withFirebase } from 'react-redux-firebase'
import { compose } from 'redux'

class AnalyzeSpot extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="analyze-spot">
      </div>
    )
  }
}

export default compose(withFirebase)(AnalyzeSpot)
