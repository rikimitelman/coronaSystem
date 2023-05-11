const router = require('express').Router()
const CoronaDetails = require('../controllers/coronaDetails.controller')

router.get('/', CoronaDetails.getAllcoronaDetails)
router.post('/', CoronaDetails.addcoronaDetail)


module.exports = router