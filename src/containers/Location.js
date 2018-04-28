import React from 'react'
import { connect } from 'react-redux'

import { fetchLocation } from '../actions/locationActions'

const LocationContainer = Component => {
  class Location extends React.Component {
    componentDidMount() {
      this.props.fetchLocation()
    }

    render() {
      const { geolocation } = this.props

      return geolocation.coords ? <Component /> : <h1>Loading</h1>
    }
  }

  const mapActionsToProps = dispatch => ({
    fetchLocation: () => dispatch(fetchLocation())
  })

  return connect(null, mapActionsToProps)(Location)
}

export default LocationContainer
