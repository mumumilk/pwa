import { LOCATION_FETCHED } from '../constants'

const initialState = {

}

export function locationReducer(state = initialState, { payload, type }) {
  switch (type) {
    case LOCATION_FETCHED:
      console.log('LOCATION_FETCHED')
      const { coords } = payload
      return { coords }
    default:
      return initialState
  }
}
