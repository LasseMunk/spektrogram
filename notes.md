make alt tekst for alle videoer
aalborg / cyrano
https://www.youtube.com/watch?v=QlDTBUlZpbg



npm install nodemon -g // package which helps restarting server.js when edits has been made to it.


res.writeHead(200, {'Content-Type': 'text/plain'});
200 er OK

404 er no go something is wrong

setting up routes with express: 

app.get('/', function(req, res){ // user request on ip:3000/
    res.send('this is the homepage');

});

app.get('/contact', function (req, res) { // user request on ip:3000/
    res.send('this is the contact');

}); 


template engine : dynamic injectino of data using ejs
In express called 'view engine'
https://www.youtube.com/watch?v=oZGmHNZv7Scs

use to show description of projects. CMS system

// kig omkring 29:12 https://www.youtube.com/watch?v=65O-kmgmRI4
// bootstrap stylesheet?


grab data fra url ../profile/lasse
in server.js:
app.get('/profile/:name', function (req, res) { // user request on ip:3000/
  var data = {age: 29, job: 'ninja'};
  res.render('profile', { person: req.params.name, data: data});
}); 

in profile.ejs:
 profile name is <%= person %>