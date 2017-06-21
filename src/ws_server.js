const WebSocket = require('ws')
const WEBSOCKET = new WebSocket.Server({ perMessageDeflate: false, port: 2222 })
let SOCKET = null

function count() {
  let counter = 0
  setInterval(() => {
    counter += 1
    SOCKET.send(counter)
  }, 1000)
}

WEBSOCKET.on('connection', function connection (ws) {
  console.log('WS: connection OPEN')
  SOCKET = ws
  count()
})

WEBSOCKET.on('message', function (action) {
  console.log('WS: ON MESSAGE')
})

WEBSOCKET.on('data', function (action) {
  console.log('WS: ON DATA')
})

WEBSOCKET.on('close', function () {
  console.log('WS: ON CLOSED')
})
