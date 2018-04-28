import React, { Component } from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { fetchLocation } from '../actions/locationActions'

import Map from './Map'

class Home extends Component {
  componentDidMount() {
    this.props.fetchLocation()
  }

  render() {
    return (
      <div className="home">
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCFD7Qay7_Wzw9JH3NqBMnlPBgRpmi2YDo&libraries=drawing,places"
          loadingElement="<div style={{ height: `100%` }} />"
          containerElement={<div style={{ height: `calc(100vh - 50px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}>
          {this.props.geolocation}
        </Map>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation())
})

export default connect(mapStateToProps, mapActionsToProps)(Home)
