import { createStore } from 'redux'

import initialState from './initialState'
import reducers from './reducers'

export default createStore(reducers, initialState)
