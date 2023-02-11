require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

/*
    Define routes
*/
const jobsRoutes = require('./routes/jobs');

/*
    add route to middleware
*/
app.use('/api/jobs', jobsRoutes)

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})