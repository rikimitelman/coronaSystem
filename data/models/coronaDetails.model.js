const mongoose = require('mongoose');

const coronaDetailsSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true
  },
  date_of_receipt_vaccination: {
    type: [{
      type: Date,     
    }]
  },
  manufacturer_of_the_vaccine: {
    type: [{
      type: String,
    }]
  },
  date_of_result: {
    type: Date,
    required: true
  },
  recovery_date: {
    type: Date,
    required: true
  },
  identity: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{9}$/.test(v);
      },
      message: props => `${props.value} is not a valid identity number!`
    }
  }
});
  
  module.exports = mongoose.model('CoronaDetails', coronaDetailsSchema);
