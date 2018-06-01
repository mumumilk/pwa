import React, { Component } from 'react'

import Container from '../../Container'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import LocationContainer from '../../containers/LocationContainer'
import EventType from '../../EventType'

class NewSpot extends Component {
  constructor(props) {
    super(props)

    this.registerSpotLocationConfirmed = this.registerSpotLocationConfirmed.bind(this)
  }

  registerSpotLocationConfirmed() {
    Container.get('Event').dispatch(EventType.REGISTER_SPOT_LOCATION_WAS_CONFIRMED)
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
          </form>
        </div>

        <i className="fa fa-map-marker new-spot__marker"></i>
        <Button onClick={this.registerSpotLocationConfirmed} className="new-spot__button" full black text="Confirmar local" />

        <LocationContainer className="new-spot__location" />
      </div>
    )
  }
}

export default NewSpot
