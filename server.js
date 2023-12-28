const express = require('express');
const app = express();
const bcrypt = require('bcrypt')


//method 1
app.use(express.urlencoded({ extended: false }))

//method 2
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view-engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index.ejs', {name:'allan'})
})

app.post('/login', (req,res)=>{
    res.render('login.ejs')
})

app.get('/login', (req,res)=>{
    res.render('login.ejs')
})

app.get('/registerform', (req,res)=>{
    res.render('register.ejs')
})
app.listen(3000)