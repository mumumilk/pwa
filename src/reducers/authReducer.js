import {
  INIT_AUTH,
  SIGN_OUT_SUCCESS,
  SIGN_IN_SUCCESS
} from '../constants'

const initialState = {
  authenticated: false,
  id: null
}

export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticated: !!payload,
        id: payload.uid
      }

    case SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
