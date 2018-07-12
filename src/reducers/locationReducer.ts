import Constants from '../constants'

const initialState = {

}

export function locationReducer(state = initialState, { payload, type }) {
  switch (type) {
    case Constants.LOCATION_FETCHED:
      const { coords } = payload
      return {
        ...state,
        coords
      }
    case Constants.LOCATION_NOT_FETCHED:
      return initialState
    default:
      return {
        ...state
      }
  }
}
