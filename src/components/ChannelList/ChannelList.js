import React, { Component } from 'react'

import './ChannelList.css'

class ChannelList extends Component {
  componentDidMount () {
    this.startScrolling()
  }

  componentWillUnmount () {
    this.stopScrolling()
  }

  startScrolling () {
    setTimeout(this.scroll.bind(this))

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
            <li key={index}>
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
    initials = 'CHNL',
    programs = []
  } = channel

  return (
    <div className='Channel'>
      <div className='ChannelInformation'>
        {name}, {initials}
      </div>

      <ul className='ProgramList unstyled'>
        {
          programs.map((program, index) => (
            <li key={index}>
              <div className='Program'>{program}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ChannelList
