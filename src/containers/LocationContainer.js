import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Map, TileLayer } from 'react-leaflet'

import RecordableCenter from '../model/spots/RecordableCenter'

import { fetchLocation } from '../actions/locationActions'
import { recordCenter } from '../actions/spotActions'

import Loader from '../components/Loader'
import Container from '../Container'
import EventType from '../EventType'

class LocationContainer extends Component {
  constructor() {
    super()

    this.recordCenter = this.recordCenter.bind(this)

    Container.get('event').add(EventType.CENTER_WAS_RECORDED, this.recordCenter)
  }

  /**
   * @todo Verify that the viewport property is available
   */
  recordCenter() {
    const { center: [lat, lng], zoom } = this.reference.viewport
    this.props.recordCenter(RecordableCenter.build(lat, lng, zoom))
  }

  componentDidMount() {
    this.props.fetchLocation()
  }

  render() {
    if (!this.props.location.coords) {
      return <Loader text="Carregando mapa" />
    }

    const { location: { coords }} = this.props

    return (
      <Map
        zoom={17}
        ref={reference => this.reference = reference}
        style={{height: 'calc(100vh - 50px)'}}
        center={{ lat: coords.latitude, lng: coords.longitude }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        {this.props.children}
      </Map>
    )
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation()),
  recordCenter: center => dispatch(recordCenter(center))
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapActionsToProps)(LocationContainer)
