const express = require('express');
const JobsAppliedModel = require('../models/JobsAppliedModel');
const router = express.Router();


//Get all Method
router.get('/jobsapplied', async (req, res) => {
    try {
        const data = await JobsAppliedModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Method
router.post('/jobsapplied', async (req, res) => {
    let body = req.body;
    const data = new JobsAppliedModel({
        jobs_applied: {
            date_applied:body.date,
        },
        user_id: body.user_id
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/jobsapplied/:id', async (req, res) => {
    try {
        const data = await JobsAppliedModel.find({id:req.params.id});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/jobsapplied/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await JobsAppliedModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await JobsAppliedModel.findByIdAndDelete(id)
        res.send(`Job Applied with the given ID has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;