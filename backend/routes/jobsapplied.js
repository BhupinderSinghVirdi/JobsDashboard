const express = require('express');
const JobsAppliedModel = require('../models/JobsAppliedModel');
const JobsModel = require('../models/JobsModel');
const router = express.Router();


//Get all Method
router.get('/', async (req, res) => {
  try {
    const jobsAppliedData = await JobsAppliedModel.find().lean();
    const transformedData = await Promise.all(jobsAppliedData.map(async (job_data) => {
      const transformedJobs = await Promise.all(job_data.jobs_applied.map(async (job) => {
        const job_id = job.job_id;
        const jobdata = await JobsModel.find({_id: job_id}).lean();
        const output = jobdata.map(({ _id, ...jobdata }) => jobdata);
        return {...job, ...output[0]};
      }));
      return { ...job_data, jobs_applied: transformedJobs };
    }));
    res.json(transformedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Get by ID Method
router.get('/:id', async (req, res) => {
  try {
    const data = await JobsAppliedModel.findById(req.params.id).lean();
    if (!data) return res.status(404).json({ message: 'Job application not found' });

    const transformedJobs = await Promise.all(data.jobs_applied.map(async (job) => {
      const jobdata = await JobsModel.findById(job.job_id).lean();
      const output = jobdata && jobdata.title ? {job_id: job.job_id, job_title: jobdata.title} : {job_id: job.job_id};
      return {...job, ...output};
    }));
    res.json({...data, jobs_applied: transformedJobs});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Post Method
router.post('/', async (req, res) => {
  try {
    const { user_id, job_id } = req.body;
    const job = await JobsModel.findById(job_id).lean();
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const jobApplication = { date_applied: new Date(), job_id };
    const data = await JobsAppliedModel.findOneAndUpdate(
      { user_id },
      { $push: { jobs_applied: jobApplication } },
      { upsert: true, new: true }
    ).lean();
    const transformedJob = job.title ? {job_id, job_title: job.title} : {job_id};
    res.status(200).json({...data, jobs_applied: [{...jobApplication, ...transformedJob}]});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update by ID Method
router.patch('/:id/:job_id', async (req, res) => {
    try {
    const id = req.params.id;
    const job_id = req.params.job_id;
    const updatedData = req.body;
    const options = { new: true };
        const result = await JobsAppliedModel.findOneAndUpdate(
            { _id: id, "jobs_applied._id": job_id }, 
            { $set: { "jobs_applied.$": updatedData } },
            options
        );
    
        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Delete by ID Method
router.delete('/:id/:job_id', async (req, res) => {
    try {
        const id = req.params.id;
        const job_id = req.params.job_id;

        const result = await JobsAppliedModel.findOneAndUpdate(
            { _id: id },
            { $pull: { jobs_applied: { _id: job_id } } }
        );

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});