const express = require('express')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const bodyParsr = require('body-parser')
const personRouter = require('./routes/person.router')
const CoronaDetailsRouter =require('./routes/coronaDetails.router')

app.use(cors());
app.use(bodyParsr.json())

app.use('/person', personRouter)
app.use('/CoronaDetails',CoronaDetailsRouter)

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected  to db')
    }).catch(err => {
        console.log(err)
    })

app.listen(process.env.PORT, () => { console.log(`listening port ${process.env.PORT}`) })