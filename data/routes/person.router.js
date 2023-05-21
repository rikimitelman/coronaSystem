const router = require('express').Router()
const person = require('../controllers/person.controller')

router.get('/', person.getAllPerson)
router.get('/:identity', person.getPersonById)
router.post('/', person.addPerson)
router.get("/image/:id",person.getImage);
router.post("/image",person.addImage);
module.exports = router