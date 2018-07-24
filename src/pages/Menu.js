import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOut } from '../actions/authActions'
import { withFirebase } from 'react-redux-firebase'
import { compose } from 'recompose'

const Menu = props => {
  const { api, auth } = props

  console.log(props)

  return (
    <div className="menu">
      <div className="menu__header">
        <img className="menu__photo" src={api.profile.avatarUrl} />
        <h2 className="menu__name">{api.profile.displayName}</h2>
        <span className="menu__role">Usuário</span>
      </div>

      <div className="menu__body">
        <Link className="menu__link" to="/spots/list">
          <span className="menu__link__icon icon--skateboarder"></span>
          Todos os picos
        </Link>

        {auth.isAdmin && <Link className="menu__link" to="/spots/analyze">
          <span className="menu__link__icon icon--configuration"></span>
          Analisar pico
        </Link>}

        <Link className="menu__link" to="/spots/new">
          <span className="menu__link__icon icon--plus"></span>
          Adicionar novo pico
        </Link>

        <Link className="menu__link" to="">
          <span className="menu__link__icon icon--trophy"></span>
          Campeonatos
        </Link>

        <Link className="menu__link" to="">
          <span className="menu__link__icon icon--shopping"></span>
          Skateshops
        </Link>

        <span className="menu__link" onClick={props.signOut}>
          <span className="menu__link__icon icon--logout"></span>
          Sair
        </span>
      </div>
    </div>
  )
}

const mapActionsToProps = (dispatch, state) => ({
  signOut: () => {
    console.log(state)
    dispatch(signOut(state.firebase))
  }
})

const mapStateToProps = state => state

export default compose(
  withFirebase,
  connect(mapStateToProps, mapActionsToProps)
)(Menu)
