const express = require('express');
const app = express();
//app.disable('x-powered-by');
app.set('view engine', 'ejs'); // use ejs as view engine
app.listen(3000); // start listening on port 3000

// automatically serves everything in public folder
// https://www.youtube.com/watch?v=-lRgL9kj_h0 static files
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
// .use is middleware. Is serving the folder /css using express.static

/*
app.get('/', function(req, res){ // user request on ip:3000/
    res.sendFile(path.join(__dirname + '/public/css/style.css'));
    
}); */ 



app.get('/', function (req, res) { // user request on ip:3000/
    res.render('_pages/index'); // express knows to look in views (ejs folder)

}); 

app.get('/about', function (req, res) { // user request on ip:3000/
    res.render('_pages/about');
}); 

app.get('/experiments', function (req, res) { // user request on ip:3000/
    res.render('_pages/experiments');
}); 
