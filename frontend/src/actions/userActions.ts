import { Action, AnyAction } from 'redux'
import axios from 'axios'

import {
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  LOGOUT,
} from '../constants/userConstants'

export const googleLogin = () => async (dispatch: any) => {
  try {
    dispatch({
      type: GOOGLE_LOGIN_REQUEST,
    })

    const { data } = await axios.get('/api/auth/google')

    dispatch({
      type: GOOGLE_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GOOGLE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT })
}
