import express from 'express'
import http from 'http'
const
    app = express(),
    server = http.createServer(app),
    port = process.env.PORT || 3000
function createServer(){
  function start(){
    console.log('Conectando ao servidor...')
    

    app.get('/produtos',(req,res)=>
        res.send("Hello Worldfd")
      )

      app.use(express.static('.'))
      //server.listen(port)
      console.log('Conecção Estabelicida com Sucesso...')
  }
  function stop(){
    console.log('Desonectando do servidor...')
    server.close()
    console.log('Desconectado...')
  }
  return{
    start,
    stop
  }
}

export default createServer