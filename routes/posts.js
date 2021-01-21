const express = require('express');

const router= express.Router();

const book= require('../models/post');


// Get all the books
router.get('/', async (req,res) => {
    try {
        const books = await book.find();
        res.json(books);
    } catch (error) {
        res.json({message: error});
    }
});


// Add a book
router.post('/', (req,res) => {
    const Book= new book({
        name: req.body.name,
        Author: req.body.Author,
        description: req.body.description
    });
    Book.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message : err});
    })
})

// get a specific book
router.get('/:bookId', async (req, res) => {
    try{
        const val = await book.findById(req.params.bookId);
        res.json(val);
    } catch (error){
        console.log(error);
        res.json({message : error});
    }
    
})

// Delete a book fron the database
router.delete('/:bookId', async (req, res) => {
    try {
        const removedBook= await book.remove({_id: req.params.bookId});
        res.json(removedBook);
    } catch (error) {
        res.json({message : error});
    }
})

// update a book
router.patch('/:bookId', async (req, res) => {
    try {
        const updatedBook= await book.updateOne(
            {_id: req.params.bookId}, 
            { $set: { name: req.body.name}});
        res.json(updatedBook);
    } catch (error) {
        res.json({message : error});
    }
})
module.exports= router;

