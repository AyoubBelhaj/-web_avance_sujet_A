const express = require('express');
const mongoose = require('mongoose');
const Subject = require('./models/subject');
const cors = require('cors');
require('./config/connect');

const subjectRouter = require('./routers/subject');
const reclamationRouter = require('./routers/reclamation');


const app = express();
app.use(cors());

//accept and read json files :
app.use(express.json());

app.use('/subject', subjectRouter);
app.use('/reclamation', reclamationRouter);



app.listen('3000', () => {
    console.log("server is working");
})