import React, { Component } from 'react'

import { connect } from 'react-redux'

import { signInWithFacebook } from '../actions/auth'

import Button from '../components/Button'

class Landing extends Component {
  componentDidMount() {
    const { history, auth } = this.props

    if (auth.authenticated) {
      history.push('/spots/list')

    }
  }

  componentDidUpdate(prevProps) {
    const { history, auth } = this.props

    if (auth.authenticated && !prevProps.auth.authenticated) {
      history.push('/spots/list')
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="home">
          <div className="home__header">
            <img className="home__logo" src="../static/images/logo.svg" />

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

        <div className="socials">
          <h2 className="socials__title">Siga nossas redes</h2>

          <a className="socials__icon icon--facebook" rel="noopener" target="_blank" href="https://facebook.com/ondetempico"></a>
          <a className="socials__icon icon--instagram" rel="noopener" target="_blank" href="https://instagram.com/ondetempico"></a>
        </div>
      </div>
    )
  }
}

const mapActionsToProps = (dispatch, { firebase }) => ({
  signIn: () => dispatch(signInWithFacebook(firebase))
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapActionsToProps)(Landing)
