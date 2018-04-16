import { LOCATION_FETCHED } from '../constants'

export const fetchLocation = () => {
  const geolocation = navigator.geolocation
  console.log('CHAMOU A API')
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'))
    }

    geolocation.getCurrentPosition((position) => {
      resolve(position)
    }, () => {
      reject (new Error('Permission denied'))
    })
  })

  return dispatch => {
    location
      .then(result => dispatch(locationFetched(result)))
      .catch(result => console.info(result))
  }
}

export function locationFetched(location) {
  return {
    type: LOCATION_FETCHED,
    payload: location
  }
}
