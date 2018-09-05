import {
  LOCATION_FETCHED,
  LOCATION_NOT_FETCHED
} from '../constants'

export const fetchLocation = () => {
  const geolocation = navigator.geolocation

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'))
    }

    geolocation
      .getCurrentPosition(
        position => resolve(position),
        error => reject(new Error(`Error, ${error}`))
      )
  })

  return dispatch => {
    location
      .then(result => dispatch(locationFetched(result)))
      .catch(result => dispatch(locationNotFetched(result)))
  }
}

const locationFetched = result => {
  return {
    type: LOCATION_FETCHED,
    payload: result
  }
}

const locationNotFetched = result => {
  return {
    type: LOCATION_NOT_FETCHED,
    payload: result
  }
}
