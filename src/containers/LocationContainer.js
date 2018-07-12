import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

import RecordableSpot from '../queryModel/spots/RecordableSpot'

import { fetchLocation } from '../actions/locationActions'
import { recordSpotLocation } from '../actions/spotActions'

import Loader from '../components/Loader'

class LocationContainer extends Component {
  constructor(props) {
    super(props)

    this.getCenter = this.getCenter.bind(this)
  }

  getCenter(props, map) {
    const recordableSpot = new RecordableSpot(map.center.lat(), map.center.lng(), map.zoom)

    this.props.recordSpotLocation(recordableSpot)
  }

  componentDidMount() {
    this.props.fetchLocation()
  }

  render() {
    return Object.keys(this.props.location).length !== 0
      ? <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: this.props.location.coords.latitude, lng: this.props.location.coords.longitude }}>

          {this.props.children}
        </GoogleMap>
      : <Loader text="Carregando mapa" />
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation()),
  recordSpotLocation: recordableSpot => dispatch(recordSpotLocation(recordableSpot))
})

const mapStateToProps = state => state

const MapProps = {
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCFD7Qay7_Wzw9JH3NqBMnlPBgRpmi2YDo&v=3.exp&libraries=geometry,places',
  loadingElement: <Loader text="Carregando mapa" />,
  containerElement: <div style={{ height: `calc(100vh - 50px)` }} />,
  mapElement: <div style={{ height: `100%` }} />
}

export default compose(
  withProps(MapProps),
  withScriptjs,
  withGoogleMap,
  connect(mapStateToProps, mapActionsToProps)
)(LocationContainer)
