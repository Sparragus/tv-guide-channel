import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import './index.css'
import channels from './channels.json'

ReactDOM.render(
  <App channels={channels} />,
  document.getElementById('root')
)
