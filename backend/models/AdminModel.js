const mongoose = require('mongoose');

const adminModel = new mongoose.Schema({

    "date_created": {
      "type": "Date"
    },
    "firstname": {
      "type": "String"
    },
    "middlename": {
      "type": "String"
    },
    "lastname": {
      "type": "String"
    },
    "email": {
      "type": "String"
    },
    "profile_pic_url": {
      "type": "String"
    },
    "password": {
      "type": "String"
    }
  })

module.exports = mongoose.model('adminModel', adminModel, 'admin')