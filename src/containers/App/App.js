import React, { Component } from 'react'

import './App.css'
import ChannelList from '../../components/ChannelList'

class App extends Component {
  componentDidMount () {
    this.props.fetchChannels()
  }

  componentWillUnmount () {
  }

  render () {
    const { channels } = this.props

    return (
      <div className='App'>
        <ChannelList channels={channels} />
      </div>
    )
  }
}

export default App
