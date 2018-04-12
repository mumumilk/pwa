import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import { withFirebase } from 'react-redux-firebase'

const Menu = props => (
  <div className="menu">
    <div className="header">

    </div>

    <div className="body">
      <Link className="link" to="">Todos os picos</Link>
    </div>
  </div>
)

export default compose(
  withFirebase,
  connect(null, null)
)(Menu)
