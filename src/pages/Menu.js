import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOut } from '../actions/auth'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.closeMenu = this.closeMenu.bind(this)
    this.redirectAndSignOut = this.redirectAndSignOut.bind(this)
  }

  closeMenu() {
    let menu = document.querySelector('.menu')
    let content = document.querySelector('.content')

    const MENU_HIDDEN_MODIFIER = 'menu--hidden'
    const CONTENT_MODIFIER = 'content--fullable'

    menu.classList.add(MENU_HIDDEN_MODIFIER)
    content.classList.add(CONTENT_MODIFIER)
  }

  redirectAndSignOut() {
    const { signOut, history } = this.props

    signOut()
  }

  render() {
    const {
      auth,
      api: { profile }
    } = this.props

    return (
      <div className="menu menu--hidden">
        <div className="menu__header">
          <img className="menu__photo" src={profile.avatarUrl} />
          <h2 className="menu__name">{profile.displayName}</h2>
          <span className="menu__role">Usuário</span>
        </div>

        <div className="menu__body">
          <Link className="menu__link" to="/spots/list" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--skateboarder" />
            Todos os picos
          </Link>

          {
            auth.isAdmin &&
            <Link className="menu__link" to="/spots/analyze" onClick={this.closeMenu}>
              <span className="menu__link__icon icon--configuration" />
              Analisar pico
            </Link>
          }

          <Link className="menu__link" to="/spots/new" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--plus" />
            Adicionar novo pico
          </Link>

          <Link className="menu__link" to="" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--trophy" />
            Campeonatos
          </Link>

          <Link className="menu__link" to="" onClick={this.closeMenu}>
            <span className="menu__link__icon icon--shopping" />
            Skateshops
          </Link>

          <span className="menu__link" onClick={this.redirectAndSignOut}>
            <span className="menu__link__icon icon--logout" />
            Sair
          </span>
        </div>
      </div>
    )
  }
}

const mapActionsToProps = (dispatch, { firebase }) => ({
  signOut: () => dispatch(signOut(firebase))
})

const mapStateToProps = ({ api, auth }) => ({
  api,
  auth
})

export default connect(mapStateToProps, mapActionsToProps)(Menu)
