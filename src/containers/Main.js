import React, { Component } from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'

import Menu from '../pages/Menu'

class Main extends Component {

  constructor(props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {

  }

  render() {
    const title = this.props.location.pathname

    return (
      <div className="main">
        <Menu />

        <div className="content">
          <div className="bar">
            <i className="icon fa fa-bars" onClick={this.toggleMenu}></i>
          </div>

          {this.props.children}
        </div>
      </div>
    )
  }
}

export default compose(
  withFirebase,
  connect(null, null)
)(Main)
