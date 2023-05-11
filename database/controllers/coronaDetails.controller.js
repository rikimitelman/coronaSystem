const coronaDetail = require('../models/coronaDetails.model')

const getAllcoronaDetails = (req, res) => {
    coronaDetail.find()
        .then(coronaDetails => {
            res.send(coronaDetails)
        }).catch(err => {
            console.log(err)
        })
}

const addcoronaDetail = (req, res) => {
    const addCorornaVaccines = req.body;
    if(addCorornaVaccines.date_of_receipt_vaccination!=null&&addCorornaVaccines.date_of_receipt_vaccination.length>4)
    {
        res.send('the limit is 4 ')
    }
    if(addCorornaVaccines.date_of_receipt_vaccination!=null&&
            addCorornaVaccines.date_of_receipt_vaccination.length!=addCorornaVaccines.manufacturer_of_the_vaccine.length)
            res.send('the limit is 4')
    
    if(addCorornaVaccines.date_of_result>addCorornaVaccines.recovery_date)
    res.send('the limit is 4')

    const newcoronaDetail = new coronaDetail(req.body)
    newcoronaDetail.save()
        .then(coronaDetail => {
            res.send(coronaDetail)
        }).catch(err => {
            console.log(err)
        })

}

module.exports = { getAllcoronaDetails, addcoronaDetail }