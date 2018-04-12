import React, { Component } from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'

import Menu from '../pages/Menu'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Menu />

        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}

export default compose(
  withFirebase,
  connect(null, null)
)(Main)
