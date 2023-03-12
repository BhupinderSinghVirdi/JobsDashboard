const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  date_applied: { type: String },
  job_id: { type: String, required: true },
  archive: { type: Boolean, default: false },
  status: { type: String },
});

const JobsAppliedSchema = new Schema({
  user_id: { type: String, required: true },
  jobs_applied: [jobApplicationSchema],
});

module.exports = mongoose.model('JobsApplied', JobsAppliedSchema, 'jobsapplied');