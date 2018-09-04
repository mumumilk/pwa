import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Marker } from 'react-leaflet'

class SpotMarker extends Component {
  static state = {
    isVibisible: false
  }

  constructor() {
    super()

    this.openDialogInformation = this.openDialogInformation.bind(this)
  }

  openDialogInformation() {
    this.setState({
      isVibisible: true
    })
  }

  render() {
    const {
      name,
      isFree,
      images,
      hasStreet,
      hasLongboard,
      latitude,
      longitude
    } = this.props

    return (
      <div className="spot-marker">
        {this.state.isVisible && <div className="spot-marker__modal">
          {name}
          {images.map(image => <img key={Math.random()} src={image} />)}
        </div>}

        <Marker
          className="spot-marker__marker"
          //icon="../static/images/skateboarder.png"
          onClick={this.openDialogInformation}
          position={{ lat: latitude, lng: longitude }} />
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(SpotMarker)
