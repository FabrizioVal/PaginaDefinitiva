const http = require('http');

const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const { ConnectDB } = require ('./config/config.js')
const PORT = process.env.PORT || 3000;

const app = express();
app.set('json spaces', 2);
app.use(express.json());

// aca iria mencion de cors y su instalacion

const server = http.createServer(app)

// rutas
app.use('/api/auth', require ('./routes/auth')); 

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); 
app.use(express.json());

app.listen(PORT, async () => { //npm run dev
    console.log(`App is listening to port: ${PORT}`);
    await ConnectDB();
});

