import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Menu = props => {
  const { api } = props

  return (
    <div className="menu">
      <div className="header">
        <img className="photo" src={api.profile.avatarUrl} />
        <h2 className="name">{api.profile.displayName}</h2>
        <span className="role">Usuário</span>
      </div>

      <div className="body">
        <Link className="link" to="/spots/list">
          <span className="link-icon icon--skateboarder"></span>
          Todos os picos
        </Link>

        <Link className="link" to="/spots/new">
          <span className="link-icon icon--plus"></span>
          Adicionar novo pico
        </Link>

        <Link className="link" to="">
          <span className="link-icon icon--trophy"></span>
          Campeonatos
        </Link>

        <Link className="link" to="">
          <span className="link-icon icon--shopping"></span>
          Skateshops
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(Menu)
