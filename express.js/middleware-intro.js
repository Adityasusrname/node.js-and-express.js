const express=require('express')
const app = express()

req => middleware => res

//Let's say we have to print method,url and time at every request

const logger=(req,res,next)=>{
    const method = req.method
    const url = req.url
    const time =new Date().getFullYear()
    console.log(method,url,time)
    next()
}


app.get('/',logger,(req,res)=>{

res.send('HoMe PaGe')

})

app.get('/about',logger,(req,res)=>{


   res.send('AbOuT PaGe')

})



app.listen(5000,()=>{

console.log('Server is listening at port 5000')

})