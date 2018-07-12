import React, { Component } from 'react'

import { Marker } from 'react-google-maps'

class SpotMarker extends Component {
  constructor() {
    super()

    this.openDialogInformation = this.openDialogInformation.bind(this)
  }


  openDialogInformation() {

  }

  render() {
    return (
      <div className="spot-marker">
        <Marker
          className="spot-marker__marker"
          position={{ lat: this.props.latitude, lng: this.props.longitude }} />

        <div className="spot-marker__dialog"></div>
      </div>
    )
  }
}

export default SpotMarker
