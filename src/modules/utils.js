const APP_NAME = 'TV_GUIDE'

export function createActionType (baseName) {
  return actionType => `${APP_NAME}/${baseName}/${actionType}`
}

export function action (type, payload = {}) {
  const action = {
    type,
    payload
  }

  if (payload instanceof Error) {
    action.error = true
  }

  return action
}

export function reducer (typeHandlers = {}, initialState) {
  return (state = initialState, action) => {
    try {
      const nextState = typeHandlers[action.type](state, action)
      return nextState
    } catch (e) {
      return state
    }
  }
}
