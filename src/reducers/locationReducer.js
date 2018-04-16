import { LOCATION_FETCHED } from '../constants'

const initialState = {
  coords: {
    latitude: -23.5493856,
    longitude: -46.6362231
  }
}

export function locationReducer(state = initialState, { payload, type }) {
  switch (type) {
    case LOCATION_FETCHED:
      const { coords } = payload
      return { coords }
    default:
      return initialState
  }
}
