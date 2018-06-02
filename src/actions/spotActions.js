import { SPOT_LOCATION_WAS_RECORDED } from '../constants'
import RecordableSpot from '../queryModel/spots/RecordableSpot'

/**
 * @param {RecordableSpot} recordableSpot
 * @returns {Function}
 */
export function recordSpotLocation(recordableSpot) {
  return dispatch => {
    dispatch({
      type: SPOT_LOCATION_WAS_RECORDED,
      payload: {
        latitude: recordableSpot.getLatitude(),
        longitude: recordableSpot.getLongitude(),
        zoom: recordableSpot.getZoom()
      }
    })
  }
}
