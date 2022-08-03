const authorize = (req,res,next)=>{

const {user} = req.query

console.log(req.query)

if(user === 'Aditya'){

next()

}

else{

return res.status(401).send('Not Authorized!')

}




}

module.exports={authorize}