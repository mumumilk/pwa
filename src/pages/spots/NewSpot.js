import React, { Component } from 'react'

import { withHandlers } from 'recompose'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Radio from '../../components/Radio/Radio'
import Checkbox from '../../components/Checkbox/Checkbox'

import LocationContainer from '../../containers/LocationContainer'

class NewSpot extends Component {
  constructor(props) {
    super(props)

    this.formSpotWasSubmit = this.formSpotWasSubmit.bind(this)
    this.registerSpotLocationConfirmed = this.registerSpotLocationConfirmed.bind(this)
  }

  registerSpotLocationConfirmed() {
    let content = document.querySelector('.new-spot__content')
    content.classList.add('new-spot__content--visible')
  }

  formSpotWasSubmit(event) {
    event.preventDefault()

    const { name, street, longboard, free } = event.target

    const data = {
      name: name.value,
      hasFree: !!free.checked,
      modalities: {
        street: street.checked,
        longboard: longboard.checked,
      }
    }

    this.props.recordSpot(data)
  }

  render() {
    return (
      <div className="new-spot">
        <div className="new-spot__content">
          <div className="new-spot__container">
            <h1 className="new-spot__title">Adicionar novo pico</h1>

            <form className="new-spot__form" onSubmit={this.formSpotWasSubmit}>
              <Input
                required
                id="name"
                label="Nome do pico" />

              <h3 className="new-spot__label">Esse pico é sugerido para qual modalidade? Selecione as categorias.</h3>

              <Checkbox
                medium
                id="street"
                label="Street" />

              <Checkbox
                medium
                id="longboard"
                label="Longboard" />

              <h3 className="new-spot__label">É necessário pagar para andar aí?, Marque a opção.</h3>

              <Radio
                name="cost"
                id="paid"
                label="O acesso é pago" />

              <Radio
                name="cost"
                defaultChecked
                id="free"
                label="O acesso é gratuito" />

              <Button
                full
                black
                className="new-spot__form__button"
                text="Salvar esse local" />
            </form>
          </div>
        </div>

        <i className="fa fa-map-marker new-spot__marker"></i>

        <Button
          full
          black
          onClick={this.registerSpotLocationConfirmed}
          className="new-spot__button"
          text="Confirmar essa posição" />

        <LocationContainer
          event={this.event}
          className="new-spot__location" />
      </div>
    )
  }
}

const mapHandlers = ({
  recordSpot: props => data => {
    return props.firebase.push('spots', {
      location: props.spot,
      uid: props.auth.id,
      data
    })
  }
})

export default withHandlers(mapHandlers)(NewSpot)
