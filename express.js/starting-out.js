const http = require('http')

const server = http.createServer((req,res)=>{
      console.log('user hit the server')
      res.end('Welcome to the homepage')
})

server.listen(5000)


//No meta-data about the data we are sending
//Gives same response on /about /contact /hhfjjkfhb.....