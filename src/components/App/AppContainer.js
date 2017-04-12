import { connect } from 'react-redux'

import App from './App.js'

import { fetch as fetchChannels } from '../../redux/modules/channels'

const selector = (state) => ({})

const actions = {
  fetchChannels
}

export default connect(selector, actions)(App)
