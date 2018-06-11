import React, { Component } from 'react'

import { connect } from 'react-redux'

import { signInWithFacebook } from '../actions/authActions'

import Button from '../components/Button'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    const { history, auth } = this.props

    console.log(this.props)

    if (auth.authenticated) {
      history.push('/spots/list')
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="home">
          <div className="home__header">
            <img className="home__logo" src="../statics/images/logo.svg" />

            <div className="home__sign">
              <Button medium white text="Entrar" onClick={this.props.signIn} />
            </div>
          </div>

          <div className="home__body">
            <h1 className="home__title">Em breve, encontre e compartilhe novos picos para sua sessão.</h1>
          </div>
        </div>

        <div className="spots">
          <div className="spots__image"></div>

          <div className="spots__explanation">
            <h2 className="spots__title">Encontre diversos picos</h2>
            <p className="spots__description">De maneira colaborativa, skatistas compartilharem picos (locais para se praticar o esporte) para que haja troca de conhecimento entre estes, com características do local, sendo pago ou público, street e outras modalidades.</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapActionsToProps = (dispatch, state) => ({
  signIn: () => {
    const { firebase } = state
    dispatch(signInWithFacebook(firebase))
  }
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapActionsToProps)(Landing)
