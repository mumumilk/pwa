import React, { Component } from 'react'

import { connect } from 'react-redux'

import Loader from '../../components/Loader'

import ListableSpot from '../../model/spots/ListableSpot'
import FilledForm from '../../model/spots/FilledForm'
import RecordableCenter from '../../model/spots/RecordableCenter'
import ListableSpotCollection from '../../model/spots/ListableSpotCollection'

import SpotMarker from './SpotMarker'

import { fetchLocation } from '../../actions/locationActions'
import LocationContainer from '../../containers/LocationContainer'

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

      if (!spots.val()) return

      Object.values(spots.val()).map(spot => {
        const { location, data } = spot
        const { modalities } = data

        const filledForm = FilledForm.build(
          data.name,
          modalities.street,
          modalities.longboard,
          data.hasFree,
          data.images
        )

        const recordableCenter = RecordableCenter.build(
          location.latitude,
          location.longitude,
          location.zoom
        )

        const listableSpot = ListableSpot.build(filledForm, recordableCenter)

        this.collection.add(listableSpot)
      })
    })
  }

  render() {
    if (!this.collection.getList().length) return <Loader text="Encontrando picos" />

    return (
      <LocationContainer isMarkerShown>
        {this.collection.getList().map(spot => {
          return (
            <SpotMarker
              showInfoBox={false}
              key={Math.random()}
              name={spot.getData().getName()}
              isFree={spot.getData().hasFree()}
              hasStreet={spot.getData().hasStreet()}
              hasLongboard={spot.getData().hasLongboard()}
              images={spot.getData().getImages()}
              latitude={spot.getLocation().getLatitude()}
              longitude={spot.getLocation().getLongitude()} />
          )
        })}
      </ LocationContainer>
    )
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation())
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapActionsToProps)(ListSpots)
