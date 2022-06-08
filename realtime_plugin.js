import * as socket from 'socket.io'
import { realtimeapp } from './realtime.js'
import { instrument } from '@socket.io/admin-ui'

const realtimeserver = {
    name: 'realtimedev',
    configureServer(server) {
      const io = new socket.Server(server.httpServer, {
        cors: {
            origin: ["https://admin.socket.io"],
            credentials: true
          }
      })
      instrument(io, {
          auth: false
      })
      realtimeapp(io);
    },
  }

export default realtimeserver;