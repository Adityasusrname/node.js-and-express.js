const express = require('express')
const app = express()
const {people} = require('./data.js')


app.use(express.urlencoded({extended:false}))

app.use(express.json())



app.get('/',(req,res)=>{

    res.json(people)
})


app.post('/people',(req,res)=>{

    const {name} = req.body

    if(name){

           res.json({success:true,data:[...people,name]})

    }
    else{

        res.send('Provide a name!')

    }
  
    

})

app.put('/people/:id',(req,res)=>{

   const {id} =req.params
   const {name}=req.body

   console.log(id,name)

   const person = people.find((person)=>person.id === Number(id))
   console.log(person)

   if(!person){
    return res.status(404).json({success:false,msg:`no person with id: ${id}`})
   }

   else{
    const newPeople = people.map((person)=>{

    if(person.id === Number(id)){
        person.name=name
    }

    return person

    })
           res.json({success:true,data:newPeople })

   }
   





})






app.listen(5000,()=>{
    console.log('Server is listening at port 5000')
})