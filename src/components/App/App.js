import React, { Component } from 'react'

import './App.css'
import ChannelList from '../ChannelList'

class App extends Component {
  componentDidMount () {
    this.props.fetchChannels()
  }

  render () {
    return (
      <div className='App'>
        <ChannelList />
      </div>
    )
  }
}

export default App
