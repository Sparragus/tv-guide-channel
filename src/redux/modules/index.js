import { combineReducers } from 'redux'

import channels from './channels'
import channelList from './channelList'

export default combineReducers({
  channels,
  channelList
})
