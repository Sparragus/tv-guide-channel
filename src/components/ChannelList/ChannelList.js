import React, { Component } from 'react'

import './ChannelList.css'

class ChannelList extends Component {
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
