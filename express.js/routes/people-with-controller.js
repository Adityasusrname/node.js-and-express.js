const express = require('express')
const router = express.Router()

const {createPerson,updatePerson,deletePerson} = require('../controllers/people')


router.post('/',createPerson)

router.put('/:id',updatePerson)


router.delete('/:id',deletePerson)

module.exports=router

