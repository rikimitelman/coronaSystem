const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true, // מסיר רווחים מתחילת וסוף המחרוזת
    minlength: [2, 'Full name must be at least 2 characters'], // מגביל את אורך המחרוזת לפחות 2 תווים
    maxlength: [50, 'Full name cannot exceed 50 characters'] // מגביל את אורך המחרוזת למקסימום 50 תווים
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
  },
  address: {
    city: {
      type: String,
      trim: true, // מסיר רווחים מתחילת וסוף המחרוזת
      maxlength: [50, 'City name cannot exceed 50 characters'] // מגביל את אורך המחרוזת למקסימום 50 תווים
    },
    street: {
      type: String,
      trim: true, // מסיר רווחים מתחילת וסוף המחרוזת
      maxlength: [50, 'Street name cannot exceed 50 characters'] // מגביל את אורך המחרוזת למקסימום 50 תווים
    },
    number: {
      type: Number,
      min: [1, 'Street number must be at least 1'], // מגביל את ערך השדה לפחות 1
      max: [10000, 'Street number cannot exceed 10000'] // מגביל את ערך השדה למקסימום 10000
    }
  },
  date_of_birth: {
    type: Date,
    required: true,
    validate: {
      validator: function(v) {
        return v < new Date();
      },
      message: props => `${props.value} is not a valid date of birth!`
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^0\d([\d]{0,1})([-]{0,1})\d{7}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  mobile_phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^05\d([\d]{0,1})([-]{0,1})\d{7}$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile phone number!`
    }
  },
  imageSrc:{
    type:String,
    trim: true
  }
});

module.exports = mongoose.model('Person', personSchema);