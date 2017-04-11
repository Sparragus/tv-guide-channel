import React, { Component } from 'react'

class TimeBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      now: this._now()
    }
  }

  componentDidMount () {
    this.updateNowInterval = setInterval(this.updateNow.bind(this), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.updateNowInterval)
  }

  updateNow () {
    const now = this._now()
    this.setState({ now })
  }

  _now () {
    const now = new Date()
    const timestring = now.toTimeString().split(' ')[0]
    return timestring
  }

  render () {
    const { now } = this.state

    return (
      <div>
        {now}
      </div>
    )
  }
}

export default TimeBar
