const express = require('express');
const bodeParser = require('body-parser');
 const basicAuth = require('express-basic-auth')

var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodeParser.json({limit: '5000kb'}))

app.use('',basicAuth( { authorizer: myAuthorizer } ))

function myAuthorizer(username, password) {

    return  basicAuth.safeCompare(username, process.env.username) &  basicAuth.safeCompare(password, process.env.password)

}


const students = require('./route/students')


app.use('/index',students)

app.get('/',(req,res)=>{
    res.send('hello');
})

app.set('port', process.env.PORT || 5000);

let server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port' + server.address().port);
});