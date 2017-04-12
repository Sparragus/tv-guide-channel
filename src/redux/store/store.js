import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import reducers from '../modules'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware, thunk)
)

const store = createStore(reducers, enhancers)

sagaMiddleware.run(rootSaga)

export default store
