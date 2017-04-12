import React, { Component } from 'react'
import moment from 'moment'

class TimeBar extends Component {
  componentDidMount () {
    this.updateInterval = setInterval(this.forceUpdate.bind(this), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.updateInterval)
  }

  timestamp (date) {
    const format = 'h:mm:ss'
    const timestamp = date.format(format)
    return timestamp
  }

  floorToZeroOrThirty (date) {
    const minute = date.minute()
    const lessThanThirty = minute < 30
    const flooredMinute = lessThanThirty ? 0 : 30

    const result = date.clone()
    result.minute(flooredMinute)
    result.second(0)

    return result
  }

  nextHalfHours (length = 1) {
    const result = []
    const now = moment()

    while (length--) {
      result.push(
        this.floorToZeroOrThirty(now)
      )

      now.add(30, 'minutes')
    }

    return result
  }

  render () {
    const now = moment()
    const timestamp = this.timestamp(now)
    const nextHalfHours = this.nextHalfHours(3)

    return (
      <div>
        <div>
          {timestamp}
        </div>

        {
          nextHalfHours.map(date => (
            <div key={date.format()}>
              {date.format('h:mm')}
            </div>
          ))
        }
      </div>
    )
  }
}

export default TimeBar
