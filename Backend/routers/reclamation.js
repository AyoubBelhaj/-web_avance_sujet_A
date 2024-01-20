const express = require('express');
const router = express.Router();
const Reclamation = require('../models/reclamation');
const multer = require('multer');

//Crud for reclamations 
//Post request 

//config of uploads files
namefile = '';
const mystorage = multer.diskStorage({

    destination: './uploads',
    filename: (req, file, redirect) => {
        console.log(file)
        let date = Date.now();
        let filename = file.originalname + '.' + date + '.' + file.mimetype.split('/')[1];
        req.body.attachement = filename
        redirect(null, filename);
    }

})
//middleware
const upload = multer({ storage: mystorage });

router.post('/ajout', upload.any('attachement'), async (req, res) => {
    console.log('test')
    try {
        rec = new Reclamation({
            ...req.body,
            clientInfo: JSON.parse(req.body.clientInfo),
        });
        saved = await rec.save();
        res.status(200).send(saved);
    } catch (error) {
        res.status(401).send(error);
    }

})

router.post('/add', (req, res) => {

    data = req.body;
    rec = new Reclamation(data);
    rec.save()
        .then(
            (savedData) => {
                res.status(200).send(savedData);
            }
        )
        .catch(
            (err) => {
                res.status(401).send(err);
            }
        )

})
//Get request
router.get('/getall', async (req, res) => {

    try {
        users = await Reclamation.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(401).send(error);
    }

})

router.get('/getid/:id', async (req, res) => {

    try {
        id = req.params.id;
        rec = await Reclamation.findOne({ _id: id });
        res.status(200).send(rec);
    } catch (error) {
        res.status(401).send(error);
    }

})



module.exports = router;