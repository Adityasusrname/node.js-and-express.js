const express = require('express')

const app = express()


app.get('/',(req,res)=>{

    console.log('User hit the resource')

    res.send('Home Page')

})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})