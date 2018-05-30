import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import { withFirebase } from 'react-redux-firebase'

const Menu = props => {
  const { firebase } = props

  return (
    <div className="menu">
      <div className="header">
        <img className="photo" src={firebase.profile.avatarUrl} />
        <h2 className="name">{firebase.profile.displayName}</h2>
        <span className="role">Usuário</span>
      </div>

      <div className="body">
        <Link className="link" to="/spots/list">
          <span className="link-icon fa fa-map"></span>
          Todos os picos
        </Link>

        <Link className="link" to="/spots/new">
          <span className="link-icon fa fa-plus"></span>
          Adicionar novo pico
        </Link>

        <Link className="link" to="">
          <span className="link-icon fa fa-trophy"></span>
          Campeonatos
        </Link>

        <Link className="link" to="">
          <span className="link-icon fa fa-shopping-bag"></span>
          Skateshops
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => state

export default compose(
  withFirebase,
  connect(mapStateToProps, null)
)(Menu)
