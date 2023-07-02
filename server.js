const express = require('express')

const serevrconfig = require('./config/server.config');


const app = express();


app.listen (serevrconfig.PORT,()=>{
    console.log(`server started on the port ${serevrconfig.PORT}`);
})