import Constants from '../constants'

import RecordableCenter from '../model/spots/RecordableCenter'

/**
 * @param {RecordableCenter} center
 * @returns {Function}
 */
export function recordCenter(center: RecordableCenter) {
  return dispatch => {
    dispatch({
      type: Constants.CENTER_WAS_RECORDED,
      payload: {
        latitude: center.getLatitude(),
        longitude: center.getLongitude(),
        zoom: center.getZoom()
      }
    })
  }
}
