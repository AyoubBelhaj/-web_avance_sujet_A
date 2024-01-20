const mongoose = require('mongoose');

const Subject = mongoose.model('Subject', {
    name:{
        type: String,
        unique: true
    }
})

module.exports = Subject;