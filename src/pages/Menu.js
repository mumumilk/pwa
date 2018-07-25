import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOut } from '../actions/authActions'
import { withFirebase } from 'react-redux-firebase'
import { compose } from 'recompose'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.closeMenu = this.closeMenu.bind(this)
  }

  closeMenu() {
    let menu = document.querySelector('.menu')
    let content = document.querySelector('.content')

    const MENU_HIDDEN_MODIFIER = 'menu--hidden'
    const CONTENT_MODIFIER = 'content--fullable'

    menu.classList.add(MENU_HIDDEN_MODIFIER)
    content.classList.add(CONTENT_MODIFIER)
  }

  render() {
    const { api, auth, signOut } = this.props

    return (
      <div className="menu menu--hidden">
        <div className="menu__header">
          <img className="menu__photo" src={api.profile.avatarUrl} />
          <h2 className="menu__name">{api.profile.displayName}</h2>
          <span className="menu__role">Usuário</span>
        </div>

        <div className="menu__body">
          <Link className="menu__link" to="/spots/list" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--skateboarder"></span>
            Todos os picos
          </Link>

          {auth.isAdmin && <Link className="menu__link" to="/spots/analyze" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--configuration"></span>
            Analisar pico
          </Link>}

          <Link className="menu__link" to="/spots/new" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--plus"></span>
            Adicionar novo pico
          </Link>

          <Link className="menu__link" to="" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--trophy"></span>
            Campeonatos
          </Link>

          <Link className="menu__link" to="" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--shopping"></span>
            Skateshops
          </Link>

          <span className="menu__link" onClick={signOut}>
            <span className="menu__link__icon icon--logout"></span>
            Sair
          </span>
        </div>
      </div>
    )
  }
}

const mapActionsToProps = (dispatch, state) => ({
  signOut: () => dispatch(signOut(state.firebase))
})

const mapStateToProps = state => state

export default compose(
  withFirebase,
  connect(mapStateToProps, mapActionsToProps)
)(Menu)
