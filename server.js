import express from 'express'
import http from 'http'
function createServer(){
  function start(){
    const
    app = express(),
    server = http.createServer(app),
    port = process.env.PORT || 3000

    app.get('/produtos',(req,res)=>
        res.send("Hello Worldfd")
      )

      app.use(express.static('.'))
      server.listen(port)
    console.log('INCIEI ESSA MERDA')
  }
  function stop(){
    console.log("TOP O CARALHO!!!!")
  }
  return{
    start,
    stop
  }
}

export default createServer