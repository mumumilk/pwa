import React from 'react'
import { connect } from 'react-redux'

import { fetchLocation } from '../actions/locationActions'
import Loader from '../components/Loader'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class LocationContainer extends React.Component {
  constructor(props) {
    super(props)
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
  fetchLocation: () => dispatch(fetchLocation())
})

const mapStateToProps = state => state

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCFD7Qay7_Wzw9JH3NqBMnlPBgRpmi2YDo'
})(connect(mapStateToProps, mapActionsToProps)(LocationContainer))
