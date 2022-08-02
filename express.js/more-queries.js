const express=require('express')
const app = express()
const {employees} = require('./data.js')


app.get('/employees/query',(req,res)=>{

const {search,limit} = req.query

let sortedEmployees = [...employees]

if(search){

  

    sortedEmployees=sortedEmployees.filter((employee)=>{
 return employee.name.startsWith(search)
})


}

if(limit){
  
    sortedEmployees=sortedEmployees.slice(0,Number(limit))


}

if(sortedEmployees.length<1){
   // res.status(200).send('No employee matched your search!')

  return  res.status(200).json({success:true})
}

res.status(200).json(sortedEmployees)




})

app.listen(5000,(req,res)=>{
    console.log('Server listening at port 5000')
})