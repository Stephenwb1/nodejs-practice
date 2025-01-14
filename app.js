const express = require('express');

// express app
const app = express();

//resigeter view engine
app.set('view engine', 'ejs'); //default folder title is "views" //app.set('views', 'folder') to change it

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.render('index');
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render();
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
});