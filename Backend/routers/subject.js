const express = require('express');
const Subject = require('../models/subject');
const router = express.Router();

router.post('/ajout', (req, res) => {

    data = req.body;
    Subject.insertMany(data)
        .then(
            (saved) => {
                res.status(200).send(saved);
            }
        )
        .catch(
            (err) => res.status(401).send(err)
        )
});

router.get('/getall',  (req, res) => {

    Subject.find()
    .then(
        (allSubjects)=>{
            res.send(allSubjects);
        }
    )
    .catch(
        (error)=>{
            res.send(error);
        }
    )


});



module.exports = router;