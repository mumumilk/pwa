import React from 'react'
import { connect } from 'react-redux'
import { Map, GoogleApiWrapper } from 'google-maps-react'

import Container from '../Container'

import { fetchLocation } from '../actions/locationActions'

import Loader from '../components/Loader'
import EventType from '../EventType'

class LocationContainer extends React.Component {
  constructor(props) {
    super(props)

    this.getSpotLocationToRegister = this.getSpotLocationToRegister.bind(this)

    Container.get('Event').add(EventType.REGISTER_SPOT_LOCATION_WAS_CONFIRMED, this.getSpotLocationToRegister)
  }

  getSpotLocationToRegister() {
    console.log('retrieve center of map')
  }

  componentDidMount() {
    this.props.fetchLocation()
  }

  render() {
    return (this.props.location.coords && this.props.google)
      ? <Map
          google={this.props.google}
          zoom={17}
          initialCenter={{ lat: this.props.location.coords.latitude, lng: this.props.location.coords.longitude }} />
      : <Loader text="Carregando picos mais próximos" />
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation()),
})

const mapStateToProps = state => state

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCFD7Qay7_Wzw9JH3NqBMnlPBgRpmi2YDo'
})(connect(mapStateToProps, mapActionsToProps)(LocationContainer))
