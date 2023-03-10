const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const JobsAppliedModel = require('../models/JobsAppliedModel');
const JobsModel = require('../models/JobsModel');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });


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
router.post('/',upload.single('file'), async (req, res) => {
  try {
    const { user_id, job_id, apply_with_name, apply_with_email, apply_with_phone } = req.body;
    const job = await JobsModel.findById(job_id).lean();
    let filename = "";
    if (req.file) {
      filename = req.file.filename;
    }
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const jobApplication = { date_applied: new Date().toISOString().substring(0, 19), job_id:job_id,apply_with_name:apply_with_name,apply_with_email:apply_with_email,apply_with_phone:apply_with_phone,resume:filename, status:"Applied",archive:false };
    const data = await JobsAppliedModel.findOneAndUpdate(
      { user_id:user_id },
      { $set: { user_id:user_id , jobs_applied: jobApplication } },
      { upsert: true, new: true }
    ).lean();
    res.status(200).json({...data, jobs_applied: [{...jobApplication}]});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update by ID Method
router.patch('/:user_id/:job_id', async (req, res) => {
    try {
      const user_id = req.params.user_id;
      const job_id = req.params.job_id;
      const filter = {
        "user_id": user_id, 
        "jobs_applied._id": ObjectId(job_id)
      };
      const { _id, ...updatedData } = req.body;
      
      let setData = false;
      if(updatedData.hasOwnProperty('archive')){
        setData = { "jobs_applied.$.archive": updatedData.archive }
      }

      const options = { new: true };
      if(setData){
        const result = await JobsAppliedModel.findOneAndUpdate(
            filter, 
            { $set: setData },
            options
        );
        res.send(result);
      }else{
        res.send("No data to update");
      }
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

module.exports = router;