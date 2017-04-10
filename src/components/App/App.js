import React, { Component } from 'react'

import './App.css'
import ChannelList from '../ChannelList'

class App extends Component {
  componentDidMount () {
    this.props.fetchChannels()

    this.positionInterval = setInterval(() => {
      this.props.scroll(3)
    }, 6000)
  }

  componentWillUnmount () {
    clearInterval(this.positionInterval)
  }

  render () {
    const { channels, position } = this.props

    return (
      <div className='App'>
        <ChannelList channels={channels} position={position} />
      </div>
    )
  }
}

export default App
