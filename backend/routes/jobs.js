const express = require('express');
const JobsModel = require('../models/JobsModel');
const router = express.Router();


//Get all Method
router.get('/', async (req, res) => {
    try {
        const data = await JobsModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Method
router.post('/', async (req, res) => {
    const data = new JobsModel({
        name: req.body.name,
        age: req.body.age
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
router.get('/:id', async (req, res) => {
    try {
        const data = await JobsModel.findOne({_id:req.params.id});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await JobsModel.findByIdAndUpdate(
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
        const data = await JobsModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;