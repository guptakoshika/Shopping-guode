const express = require('express');
const app = express();

var cors = require("cors");
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.listen(9000);

/**
 * used to validation of user.
 * @param req : request form frontend which has user detail as username and password
 * @param res : for sending response
 * @param err : for sending error(if any)
 */
app.post('/login', function(req, res){
   if(req.body.username == "admin" && req.body.password == "admin123"){
        result = {
            status : 200,
            messsage : "Authorrized!"
        } 
        res.send(result);
    }
    return res.status(403).send({
        message: 'You are not Authorized!'
     });
})