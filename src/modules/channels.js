import * as api from '../api'
import {
  createActionType,
  action,
  reducer
} from './utils'

// CONSTANTS
export const NAME = 'channels'

// ACTION TYPES
const actionType = createActionType(NAME)
const FETCH_START = actionType('FETCH_START')
const FETCH_SUCCESS = actionType('FETCH_SUCCESS')
const FETCH_FAILURE = actionType('FETCH_FAILURE')

// ACTIONS
export function fetch () {
  return dispatch => {
    dispatch(action(FETCH_START))

    return api.channels.fetch().then(
      channels => dispatch(action(FETCH_SUCCESS, channels)),
      error => dispatch(action(FETCH_FAILURE, error))
    )
  }
}

// SELECTORS
const getState = state => state[NAME]
export const getChannels = state => getState(state)

// REDUCERS
export default reducer({
  [FETCH_SUCCESS]: (state, action) => [...state, ...action.payload]
}, [])
