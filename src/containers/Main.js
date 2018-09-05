import * as React from 'react'
import { connect } from 'react-redux'

import Menu from '../pages/Menu'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    let menu = document.querySelector('.menu')
    let content = document.querySelector('.content')

    const MENU_HIDDEN_MODIFIER = 'menu--hidden'
    const CONTENT_MODIFIER = 'content--fullable'

    const close = () => {
      menu.classList.remove(MENU_HIDDEN_MODIFIER)
      content.classList.remove(CONTENT_MODIFIER)
    }

    const open = () => {
      menu.classList.add(MENU_HIDDEN_MODIFIER)
      content.classList.add(CONTENT_MODIFIER)
    }


    return menu.classList.contains(MENU_HIDDEN_MODIFIER)
      ? close()
      : open()
  }

  render() {
    const { firebase, history } = this.props

    return (
      <div className="main">
        <Menu firebase={firebase} history={history} />

        <div className="content content--fullable">
            <div className="bar">
            <i className="icon icon--menu" onClick={this.toggleMenu}></i>
          </div>

          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Main)
