import Constants from '../constants'

export function fetchLocation() {
  const geolocation = navigator.geolocation

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'))
    }

    geolocation.getCurrentPosition(position => {
      resolve(position)
    }, () => {
      reject (new Error('Permission denied'))
    })
  })

  return dispatch => {
    location
      .then(result => dispatch(locationFetched(result)))
      .catch(result => dispatch(locationNotFetched(result)))
  }
}

const locationFetched = result => {
  return {
    type: Constants.LOCATION_FETCHED,
    payload: result
  }
}

const locationNotFetched = result => {
  return {
    type: Constants.LOCATION_NOT_FETCHED,
    payload: result
  }
}
