let {people} = require('../data')


const createPerson = (req,res)=>{

    const {name} = req.body

    if(name){

           res.json({success:true,data:[...people,name]})

    }
    else{

        res.send('Provide a name!')

    }
  
    

}

const updatePerson=(req,res)=>{

    const {id} =req.params
    const {name}=req.body
 
    
 
    const person = people.find((person)=>person.id === Number(id))
  
 
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
    
 
 
 
 
 
 }

 const deletePerson = (req,res)=>{


    const {id} = req.params
 
    const person = people.find((person)=>person.id === Number(id))
 
    if(!person){
 
    res.status(404).json({success:false,msg:`No person with id: ${id}`})
 
 
    }
 
    else{
           
            const newPeople=people.filter((person)=> person.id !== Number(id))
 
            res.status(200).json({success:true,data:newPeople})
 
    }
 
 
 }

 module.exports={
   createPerson,
   updatePerson,
   deletePerson

 }