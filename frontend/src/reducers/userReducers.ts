import { AnyAction } from 'redux'
import {
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  LOGOUT,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL,
} from '../constants/userConstants'

export const googleAuthReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GOOGLE_LOGIN_REQUEST:
      return { loading: true }
    case GOOGLE_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case GOOGLE_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export const currentUserReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_CURRENT_USER_REQUEST:
      return {
        loading: true,
      }
    case GET_CURRENT_USER_SUCCESS:
      return {
        loading: true,
        currentUser: action.payload,
      }
    case GET_CURRENT_USER_FAIL:
      return { loading: false, error: action.payload }
  }
}
