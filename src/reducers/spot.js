import { CENTER_WAS_RECORDED } from '../constants'

const initialState = {

}

export function spot(state = initialState, { payload, type }) {
  switch (type) {
    case CENTER_WAS_RECORDED:
      const { latitude, longitude, zoom } = payload
      return {
        ...state,
        latitude,
        longitude,
        zoom
      }
    default:
      return {
        ...state
      }
  }
}
