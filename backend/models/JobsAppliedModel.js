const mongoose = require('mongoose');

const jobsAppliedModel = new mongoose.Schema({
    "jobs_applied" : {
        "type": "Array"
    }
})

module.exports = mongoose.model('JobsAppliedModel', jobsAppliedModel, 'jobsapplied')