const { request } = require("express")
// import express / body-parser
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const bankRouter = require("./routes")
const {listBanksController,
    createBankController,
    updateBankController,
    deleteBankController
} = require("./controllers")

// create express server instace
const server = express()

mongoose.connect('mongodb+srv://doreenradiance:<radiance1>@cluster0.dlih7.mongodb.net/bankAPI?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//middlewares
server.use(bodyParser.json());

// define routes
server.use(bankRouter)

// start server
server.listen(4004, () => console.log("server is ready"))