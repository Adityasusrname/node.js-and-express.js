const express=require('express')
const app = express()
const {logger}=require('./logger.js')

req => middleware => res

//Let's say we have to print method,url and time at every request


app.use(logger)

//Order matters



app.get('/',(req,res)=>{

res.send('HoMe PaGe')

})

app.get('/about',(req,res)=>{


   res.send('AbOuT PaGe')

})



app.listen(5000,()=>{

console.log('Server is listening at port 5000')

})