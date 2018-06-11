import { SPOT_LOCATION_WAS_RECORDED } from '../constants'
import RecordableSpot from '../queryModel/spots/RecordableSpot'

/**
 * @param {RecordableSpot} recordableSpotLocation
 * @returns {Function}
 */
export function recordSpotLocation(recordableSpotLocation) {
  return dispatch => {
    dispatch({
      type: SPOT_LOCATION_WAS_RECORDED,
      payload: {
        latitude: recordableSpotLocation.getLatitude(),
        longitude: recordableSpotLocation.getLongitude(),
        zoom: recordableSpotLocation.getZoom()
      }
    })
  }
}

export function listSpots(spotCollection) {

}
