const express = require('express')
const app = express()
const {employees} = require('./data.js')

app.get('/',(req,res)=>{

res.send('<h1>Home Page</h1> <a href="/employees/data">Data</a>')

})


app.get('/employees/data',(req,res)=>{

const data = employees.map((employee)=>{

const {id,name} = employee



return {id,name}

})

res.json(data)

})



app.listen(5000)