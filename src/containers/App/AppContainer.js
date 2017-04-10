import { connect } from 'react-redux'

import App from './App.js'

const selector = (state) => {
  return {
    channels: state.channels
  }
}

const actions = {}

export default connect(selector, actions)(App)
