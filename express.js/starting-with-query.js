const express = require('express')
const app= express()


app.get('/employees/query',(req,res)=>{
    console.log(req.query)
    res.send("Hello World!")
})

app.listen(5000,(req,res)=>{
    console.log('Server is listening on port 5000')
})