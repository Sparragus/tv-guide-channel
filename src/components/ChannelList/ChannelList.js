import React, { Component } from 'react'

import './ChannelList.css'
import ProgramList from '../ProgramList'

class ChannelList extends Component {
  componentDidMount () {
    this.startScrolling()
  }

  componentWillUnmount () {
    this.stopScrolling()
  }

  startScrolling () {
    this.scrollInterval = setInterval(this.scroll.bind(this), 2 * 6000)
  }

  stopScrolling () {
    clearInterval(this.scrollInterval)
  }

  scroll () {
    const { channels, position } = this.props

    const MAX_STEPS = 3

    const channelsUntilEnd = channels.length - (position + MAX_STEPS)
    const steps = Math.min(MAX_STEPS, channelsUntilEnd)

    if (steps > 0) {
      this.props.scroll(steps)
    } else {
      this.stopScrolling()
      this.props.fetchChannels()
      .then(() => this.startScrolling())
    }
  }

  render () {
    const { channels, position } = this.props

    return (
      <ul className='ChannelList unstyled'>
        <ListAutoScroller position={position} step='4 * 5px + 3em' />
        {
          channels.map((channel, index) => (
            <li key={index} className='ChannelList-item'>
              <Channel channel={channel} />
            </li>
          ))
        }

      </ul>
    )
  }
}

function ListAutoScroller ({ position = 0, step = 1, direction = 'UP' }) {
  const stepDirection = direction === 'UP' ? -1 : 1

  const style = {
    marginTop: `calc(${stepDirection} * ${position} * (${step}))`,
    transition: 'margin-top 6s linear'
  }

  return <div style={style} />
}

function Channel ({ channel = {} }) {
  const {
    name = 'Channel',
    programs = []
  } = channel

  return (
    <div className='Channel'>
      <div className='ChannelInformation'>
        {name}
      </div>

      <ProgramList programs={programs} />
    </div>
  )
}

export default ChannelList
