import { combineReducers } from 'redux'

import {
  createActionType,
  action,
  reducer
} from './utils'

// CONSTANTS
export const NAME = 'channelList'

// ACTION TYPES
const actionType = createActionType(NAME)
const SCROLL = actionType('SCROLL')

// ACTIONS
export const scroll = (steps = 1) => action(SCROLL, { steps })

// SELECTORS
const getState = state => state[NAME]
export const getPosition = state => getState(state).position

// REDUCERS
const position = reducer({
  [SCROLL]: (state, action) => state + action.payload.steps
}, 0)

export default combineReducers({
  position
})
