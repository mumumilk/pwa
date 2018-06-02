import React from 'react'
import { connect } from 'react-redux'
import { Map, GoogleApiWrapper } from 'google-maps-react'

import RecordableSpot from '../queryModel/spots/RecordableSpot'

import { fetchLocation } from '../actions/locationActions'
import { recordSpotLocation } from '../actions/spotActions'

import Loader from '../components/Loader'

class LocationContainer extends React.Component {
  constructor(props) {
    super(props)

    this.getCenter = this.getCenter.bind(this)
    this.getSpotLocationToRegister = this.getSpotLocationToRegister.bind(this)
  }

  getSpotLocationToRegister() {

  }

  getCenter(props, map) {
    const recordableSpot = new RecordableSpot(map.center.lat(), map.center.lng(), map.zoom)

    this.props.recordSpotLocation(recordableSpot)
  }

  componentDidMount() {
    this.props.fetchLocation()
  }

  render() {
    return (this.props.location.coords && this.props.google)
      ? <Map
          google={this.props.google}
          zoom={17}
          onDragend={this.getCenter}
          initialCenter={{ lat: this.props.location.coords.latitude, lng: this.props.location.coords.longitude }} />
      : <Loader text="Carregando picos mais próximos" />
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation()),
  recordSpotLocation: (recordableSpot) => dispatch(recordSpotLocation(recordableSpot))
})

const mapStateToProps = state => state

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCFD7Qay7_Wzw9JH3NqBMnlPBgRpmi2YDo',
  LoadingContainer: Loader
})(connect(mapStateToProps, mapActionsToProps)(LocationContainer))
