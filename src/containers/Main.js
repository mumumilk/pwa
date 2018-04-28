import React, { Component } from 'react'

import Menu from '../pages/Menu'

class Main extends Component {
  constructor() {
    super()

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {

  }

  render() {
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

export default Main
