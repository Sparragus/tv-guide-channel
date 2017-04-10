import { connect } from 'react-redux'

import App from './App.js'
import {
  fetch as fetchChannels,
  getChannels
} from '../../modules/channels'

const selector = (state) => {
  return {
    channels: getChannels(state)
  }
}

const actions = {
  fetchChannels
}

export default connect(selector, actions)(App)
