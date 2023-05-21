const coronaDetail = require('../models/coronaDetails.model')
const Joi =require('joi');

const getAllcoronaDetails = (req, res) => {
    coronaDetail.find()
        .then(coronaDetails => {
            res.send(coronaDetails)
        }).catch(err => {
            console.log(err);
            res.status(500).send('Error while fetching corona details from the database');
        })
}

const addcoronaDetail = (req, res) => {

    const addCorornaVaccines = req.body;
    
    // if(addCorornaVaccines.date_of_receipt_vaccination!=null)
    // {
    //     const schema=Joi.array().items(Joi.date().format('DD-MM-YYY')).max(4);
    //     const {error}=schema.validate(addCorornaVaccines.date_of_receipt_vaccination);
    //     if(error)
    //     {
    //         res.status(400).send(error.datails[0].message);
    //         return;
    //     }
    // }
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
            console.log(err);
            res.status(500).send('Error while saving corona detail to the database');
        })
}

module.exports = { getAllcoronaDetails, addcoronaDetail }