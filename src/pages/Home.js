import React, { Component } from 'react'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from 'react-redux-firebase'

import { fetchLocation } from '../actions/locationActions'

const HomeMap = withScriptjs(withGoogleMap(props => {
  const { coords } = props.children

  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: coords.latitude, lng: coords.longitude }}
    ></GoogleMap>
  )
}))

class Home extends Component {
  constructor(props) {
    super(props)
    this.props.fetchLocation()
  }

  render() {
    return (
      <div className="home">
        <HomeMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement="<div style={{ height: `100%` }} />"
          containerElement={<div style={{ height: `calc(100vh - 50px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}>
          {this.props.geolocation}
        </HomeMap>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation())
})

export default compose(
  withFirebase,
  connect(mapStateToProps, mapActionsToProps)
)(Home)
