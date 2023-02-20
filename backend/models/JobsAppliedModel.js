const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const jobs_appliedSchema = new Schema({
  date_applied : String,
  job_id : String
});


JobsAppliedSchema = new Schema({
  jobs_applied : [jobs_appliedSchema],
  user_id : String,
});

module.exports = mongoose.model('JobsApplied', JobsAppliedSchema, 'jobsapplied')