const mongoose = require('mongoose');

const adminModel = new mongoose.Schema({


    "firstname": {
      "type": "String"
    },
    "lastname": {
      "type": "String"
    },
    "email": {
      "type": "String"
    },
    "password": {
      "type": "String"
    }
  });

module.exports = mongoose.model('adminModel', adminModel, 'admin')