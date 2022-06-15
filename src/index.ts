import 'dotenv/config'

import {server} from './service/server'

server.listen(process.env.SERVICE_PORT, ()=> {
    console.log('Server Available: ', server.name, server.url)
})