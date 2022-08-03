const express = require('express')
const app= express()

const {logger}=require('./logger')
const {authorize}=require('./authorize')

app.use([authorize,logger])


app.get('/',(req,res)=>{

res.send('Home Page!')

})

app.get('/query',(req,res)=>{

res.send('Hello!')


})



app.listen(5000,()=>{
    console.log('Server listening at port 5000')
})