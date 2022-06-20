import 'dotenv/config'
import {spawn} from 'child_process';
import {server} from './service/server'

// console.log(process.env)
const [,, portFromArgument] = process.argv


server.listen(portFromArgument, ()=> {
    console.log(require('path').join(process.cwd(),'inputvideo.webm'))
    console.log('Server Available: ', server.name, server.url)
})

// server.listen(process.env.PROJECT_SERVICE_PORT, ()=> {
//     console.log('Server Available: ', server.name, server.url)
// })
// ffmpeg -fflags +genpts -i inputvideo.webm -r 24 inputvideo.mp4
