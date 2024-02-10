const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Problem = require('./models/index.js')
const moment = require('moment');
moment().format();

mongoose.connect('mongodb+srv://abhiraj:abhiraj@cluster0.sbhxt0u.mongodb.net/registry_app?retryWrites=true&w=majority')
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('error in connecting to database'));

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('homepage.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
app.get('/services', (req, res) => {
    res.render('services.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/problems', async (req, res) => {
    const problems = await Problem.find({});
    res.render('problems.ejs', { problems });
})

app.listen(3000, () => {
    console.log("Server is listening");
})