const express= require('express');

const app= express();

const mongoose= require('mongoose');

require('dotenv/config');

const bodyparser = require('body-parser');

const cors = require('cors');

//middlewares

app.use(cors());

app.use(bodyparser.json());

// connecting to the routes

const postRoutes= require('./routes/posts');

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.json({message: 'we are at home'});
});



// connecting to the database

mongoose.connect(process.env.DB_CONNECT_DATA, 
{   useNewUrlParser: true,
    useUnifiedTopology: true
 },
() => {
    console.log('connected');
});

app.listen(3000);