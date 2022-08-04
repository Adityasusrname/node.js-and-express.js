const express = require('express')
const app = express()
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth.js')
const {people} = require('./data.js')


app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/people',peopleRouter)
app.use('/login',authRouter)


app.get('/',(req,res)=>{

    res.json(people)
})






app.listen(5000,()=>{
    console.log('Server is listening at port 5000')
})