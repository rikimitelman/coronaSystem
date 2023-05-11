const router = require('express').Router()
const person = require('../controllers/person.controller')

router.get('/', person.getAllPerson)
router.get('/:id', person.getPersonById)
router.post('/', person.addPerson)
router.post("/users/image",person.uploadImage);
module.exports = router