import createServer from './server.js'
import createDatabase from './database.js'

function createCore(configuration={}){
    const webServer =   createServer()
    const database = configuration.database || createDatabase()

        function start(){
            webServer.start()
            database.start()
            console.log('SEJA BEM-VINDO(A)...')
        }
        function stop(){
            console.log('ATÉ A PRÓXIMA...')
            webServer.stop()
            database.stop()
        }    
        return{
            start,
            stop
        }
}

export default createCore