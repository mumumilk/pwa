import React, { Component } from 'react'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const Map = withScriptjs(withGoogleMap(props => {
  const { coords } = props.children

  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: coords.latitude, lng: coords.longitude }}
    ></GoogleMap>
  )
}))

export default Map
