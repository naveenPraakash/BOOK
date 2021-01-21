const mongoose= require('mongoose')


// Making a schema for our book store. 


const PostSchema= mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    Author : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('books', PostSchema);