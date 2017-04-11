import React, { Component } from 'react'

import './App.css'
import ChannelList from '../ChannelList'
import TimeBar from '../TimeBar'

class App extends Component {
  componentDidMount () {
    this.props.fetchChannels()
  }

  render () {
    return (
      <div className='App'>
        <div className='Advertisements' />
        <TimeBar />
        <ChannelList />
      </div>
    )
  }
}

export default App
