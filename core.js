import createServer from './server.js'
import createDatabase from './database.js'

function createCore(configuration={}){
    const webServer = configuration.webServer || createServer()
    const database = configuration.database || createDatabase()

        function start(){
            webServer.start()
            database.start()
            console.log('FODA-SE')
        }
        function stop(){
            console.log('FODA-SE NAO VOU PARAR')
            webServer.stop()
            database.stop()
        }    
        return{
            start,
            stop
        }
}

export default createCore