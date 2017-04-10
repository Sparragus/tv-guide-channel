import { connect } from 'react-redux'

import App from './App.js'

import {
  fetch as fetchChannels,
  getChannels
} from '../../modules/channels'

import {
  getPosition,
  scroll
} from '../../modules/channelList'

const selector = (state) => {
  return {
    channels: getChannels(state),
    position: getPosition(state)
  }
}

const actions = {
  fetchChannels,
  scroll
}

export default connect(selector, actions)(App)
