const mongoose = require('mongoose');

const jobsModel = new mongoose.Schema(
  {
    "slug": {
      "type": "Date"
    },
    "id": {
      "type": "String"
    },
    "epoch": {
      "type": "Number"
    },
    "date": {
      "type": "Date"
    },
    "company": {
      "type": "String"
    },
    "company_logo": {
      "type": "String"
    },
    "position": {
      "type": "String"
    },
    "tags": {
      "type": [
        "String"
      ]
    },
    "logo": {
      "type": "String"
    },
    "description": {
      "type": "String"
    },
    "location": {
      "type": "String"
    },
    "salary_min": {
      "type": "Number"
    },
    "salary_max": {
      "type": "Number"
    },
    "url": {
      "type": "Date"
    },
    "apply_url": {
      "type": "Date"
    }
  });

module.exports = mongoose.model('JobsModel', jobsModel, 'jobs')