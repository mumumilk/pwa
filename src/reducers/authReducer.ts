import Constants from '../constants'

const initialState = {
  authenticated: false,
  id: null
}

export function authReducer(state = initialState, { payload, type }) {
  switch (type) {
    case Constants.INIT_AUTH:
    case Constants.SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticated: !!payload,
        id: payload.uid
      }

    case Constants.SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
