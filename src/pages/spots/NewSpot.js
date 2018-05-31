import React, { Component } from 'react'

import Input from "../../components/Input/Input"

class NewSpot extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="new-spot">
        <h1 className="new-spot__title">Cadastrar novo pico</h1>

        <form className="new-spot__form">
          <Input
            medium
            id="name"
            label="Nome do pico" />
        </form>
      </div>
    )
  }
}

export default NewSpot
