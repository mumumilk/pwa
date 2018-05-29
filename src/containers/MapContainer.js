import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {
  render() {
    return (this.props.coords && this.props.google)
      ? <Map
          google={this.props.google}
          zoom={17}
          initialCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }} />
      : <h1>Map not loaded</h1>
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCFD7Qay7_Wzw9JH3NqBMnlPBgRpmi2YDo'
})(MapContainer)
