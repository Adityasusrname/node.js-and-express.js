const authorize = (req,res,next)=>{

const {user} = req.query

console.log(req.query)

if(user === 'Aditya'){

    req.user={name:'Aditya'}

    //Token is given

next()

}

else{

return res.status(401).send('Not Authorized!')

}




}

module.exports={authorize}