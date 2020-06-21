const express = require('express');
const app = express();

var cors = require("cors");
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.listen(9000, function (req, res){
    console.log("Node is running and is listening to port: 9000")
});

/**
 * used to validation of user.
 * @param req : request form frontend which has user detail as username and password
 */
app.post('/login', function(req, res){
   if(req.body.username === "admin" && req.body.password === "admin123"){
        result = {
            status : 200,
            messsage : "Authorrized!"
        } 
    }
   result = {
       status : 403,
       messsage : "You are not Authorized to visit!"
   }
   res.send(result)
})