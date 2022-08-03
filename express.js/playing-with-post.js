const express = require('express')
const app = express()
const {people} = require('./data.js')


app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{

    res.json(people)
})


app.post('/people',(req,res)=>{

    const {name} = req.body

    if(name){

           res.send(`Welcome ${name}`)

    }
    else{

        res.send('Provide a name!')

    }
  
    

})




app.listen(5000,()=>{
    console.log('Server is listening at port 5000')
})