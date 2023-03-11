var Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  date_applied: { type: Date, default: Date.now },
  job_id: { type: Schema.Types.ObjectId, required: true },
  archive: { type: Boolean, default: false },
});

const JobsAppliedSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },
  jobs_applied: [jobApplicationSchema],
});

module.exports = mongoose.model('JobsApplied', JobsAppliedSchema, 'jobsapplied');