import {
  INIT_AUTH,
  SIGN_OUT_SUCCESS,
  SIGN_IN_SUCCESS
} from '../constants'

const initialState = {
  authenticated: false,
  isAdmin: false,
  id: null
}

export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      console.log(payload)
      return {
        ...state,
        isAdmin: (payload.profile.role === 'admin'),
        authenticated: !!payload.user,
        id: payload.user.uid
      }

    case SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
