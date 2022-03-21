const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.urlencoded())

app.use('/', function (req) {
    let email = req.body.email
    let msg = ""
    let re = /\S+@\S+\.\S+/
    if (req.body.email) {
        msg = re.test(email)
        console.log(msg)
    }
});



app.listen(3000, function (err) {
    console.log('Connection has been established on port 3000')
});