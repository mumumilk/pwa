import React, { Component } from 'react'

import { connect } from 'react-redux'

import Loader from '../../components/Loader'

import ListableSpot from '../../model/spots/ListableSpot'
import FilledForm from '../../model/spots/FilledForm'
import RecordableSpot from '../../model/spots/RecordableCenter'
import ListableSpotCollection from '../../model/spots/ListableSpotCollection'

import SpotMarker from './SpotMarker'

import { fetchLocation } from '../../actions/locationActions'
import LocationContainer from '../../containers/LocationContainer'

class ListSpots extends Component {
  constructor(props) {
    super(props)

    this.collection = []

    this.getSpots()
  }

  componentDidMount() {
    this.props.fetchLocation()
  }

  getSpots() {
    this.reference = this.props.firebase.database().ref('spots')
    this.reference.on('value', spots => {
      Object.values(spots.val()).map(spot => {
        const { location, data } = spot
        const { modalities } = data

        //}data.name, modalities.street, modalities.longboard, data.hasFree),

        this.collection.push({
          data: {
            name: data.name
          },
          location: {
            longitude: location.longitude,
            latitude: location.latitude,
            zoom: location.zoom
          }
        })
      })
    })
  }

  render() {
    if (!this.collection.length) return <Loader text="Encontrando picos" />

    return (
      <LocationContainer isMarkerShown>
        {this.collection.map(spot => (
          <SpotMarker
            key={spot.data.name}
            latitude={spot.location.latitude}
            longitude={spot.location.longitude} />
        ))}
      </ LocationContainer>
    )
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation())
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapActionsToProps)(ListSpots)
