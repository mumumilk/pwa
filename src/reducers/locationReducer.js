import {
  LOCATION_NOT_FETCHED,
  LOCATION_FETCHED
} from '../constants'

const initialState = {

}

export function locationReducer(state = initialState, { payload, type }) {
  switch (type) {
    case LOCATION_FETCHED:
      const { coords } = payload
      return {
        ...state,
        coords
      }
    case LOCATION_NOT_FETCHED:
      return initialState
    default:
      return {
        ...state
      }
  }
}
