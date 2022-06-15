import restify from 'restify'
import logger from 'morgan'
import PrincipalRouter from '../routes/index'

const server = restify.createServer({
    name: 'First Application',
    version: '0.0.1'
})

server.use(logger('dev'))

PrincipalRouter.applyRoutes(server)

export {
    server
}
