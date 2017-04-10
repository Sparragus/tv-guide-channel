import channels from './channels.json'

function fetch () {
  return Promise.resolve(channels)
}

export {
  fetch
}
