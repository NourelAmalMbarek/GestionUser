const mongoose = require('mongoose');
require('dotenv').config();


const express = require('express');
const server = express();
const connectDB =require('./Config/db')


const userRoutes = require('./Routes/UserRoute');

server.use(express.json());
server.use(userRoutes);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    server.listen(port, () => console.log(`Server running on port ${port}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    // logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})









const port = process.env.PORT || 2000;
connectDB();
