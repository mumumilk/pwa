import React, { Component } from 'react'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Event from '../../Event'

import LocationContainer from '../../containers/LocationContainer'

class NewSpot extends Component {

  /**
   * @type Event
   */
  event;

  constructor(props) {
    super(props)

    this.registerSpotLocationConfirmed = this.registerSpotLocationConfirmed.bind(this)
  }

  registerSpotLocationConfirmed() {
    let content = document.querySelector('.new-spot__content')
    content.classList.add('new-spot__content--visible')
  }

  render() {
    return (
      <div className="new-spot">
        <div className="new-spot__content">
          <h1 className="new-spot__title">Cadastrar novo pico</h1>

          <form className="new-spot__form">
            <Input
              medium
              id="name"
              label="Nome do pico" />

            <Button
              full
              black
              className="new-spot__form__button"
              text="Salvar esse local" />
          </form>
        </div>

        <i className="fa fa-map-marker new-spot__marker"></i>

        <Button
          full
          black
          onClick={this.registerSpotLocationConfirmed}
          className="new-spot__button"
          text="Confirmar local" />

        <LocationContainer
          event={this.event}
          className="new-spot__location" />
      </div>
    )
  }
}

export default NewSpot
