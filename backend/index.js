require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const cookieSession = require("cookie-session");

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

app.use(
    cookieSession({
      name: "bezkoder-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true
    })
  );

/*
    Define routes
*/
const jobsRoutes = require('./routes/jobs');

const accountRoutes = require('./routes/account')

const jobsAppliedRoutes = require('./routes/jobsapplied');

const adminRoutes = require('./routes/admin');

const login = require('./routes/login');


/*
    add route to middleware
*/
app.use('/api/jobs', jobsRoutes)

app.use('/api/account', accountRoutes)

app.use('/api/jobsapplied', jobsAppliedRoutes)

app.use('/api/admins', adminRoutes)

// app.use('/api/login', login)




app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})