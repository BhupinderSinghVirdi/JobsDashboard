const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
  _id: {type:Schema.Types.ObjectId , auto: true},
  date_applied: { type: String },
  job_id: { type: String, required: true },
  apply_with_name:{ type: String },
  apply_with_email:{ type: String },
  apply_with_phone:{ type: String },
  resume:{ type: String },
  archive: { type: Boolean, default: false },
  status: { type: String },
});

const JobsAppliedSchema = new Schema({
  user_id: { type: String, required: true },
  jobs_applied: [jobApplicationSchema],
});

module.exports = mongoose.model('JobsApplied', JobsAppliedSchema, 'jobsapplied');