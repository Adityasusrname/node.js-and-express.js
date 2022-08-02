const express = require('express')
const app = express()
const {employees} = require('./data.js')


app.get('/employees/:employeeId',(req,res)=>{

         console.log(req.params.employeeId)

          const singleEmployee = employees.find((employee)=> employee.id === Number(req.params.employeeId))

        

          res.json(singleEmployee)

})




app.listen(5000,(req,res)=>{

console.log("Server is listening at port 5000")

})