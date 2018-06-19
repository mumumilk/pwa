import React, { Component } from 'react'

import { connect } from 'react-redux'

import Loader from '../../components/Loader'

import ListableSpot from '../../queryModel/spots/ListableSpot'
import FormWasFilled from '../../queryModel/spots/FormWasFilled'
import RecordableSpot from '../../queryModel/spots/RecordableSpot'
import ListableSpotCollection from '../../queryModel/spots/ListableSpotCollection'

import SpotMarker from './SpotMarker'

import { fetchLocation } from '../../actions/locationActions'
import LocationContainer from "../../containers/LocationContainer";

class ListSpots extends Component {
  constructor(props) {
    super(props)

    this.collection = new ListableSpotCollection()

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

        this.collection.add(new ListableSpot(
          new FormWasFilled(data.name, modalities.street, modalities.longboard, data.hasFree),
          new RecordableSpot(location.longitude, location.latitude, location.zoom)
        ))
      })
    })
  }

  render() {
    if (!this.collection) return <Loader text="Carregando picos" />

    return (
      <LocationContainer>
        {this.collection.getList().map(spot => (
          <SpotMarker
            key={spot.getData().getName()}
            name={spot.getData().getName()}
            latitude={spot.getLocation().getLatitude()}
            longitude={spot.getLocation().getLongitude()} />
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
