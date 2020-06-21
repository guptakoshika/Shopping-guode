const express = require('express');
var cors = require("cors")

const app = express();

app.use(cors());

app.post('/login', function(req, res){
    console.log(req.params);
    
})

app.listen(9000, function (req, res){
    console.log("Node is running and is listening to port: 9000")
});