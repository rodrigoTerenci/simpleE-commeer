import express from 'express'
import http from 'http'
const
 // express = require('express'),
  app = express(),
  server = http.createServer(app),
  port = process.env.PORT || 5000



app.use(express.static('.'))
server.listen(port)