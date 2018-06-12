const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT ||3000;
const user = require('./routes/users-routes');
const config = require('./config/database');


app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user',user);

app.listen(port,function () {
    console.log("listening to port "+ port);
});
