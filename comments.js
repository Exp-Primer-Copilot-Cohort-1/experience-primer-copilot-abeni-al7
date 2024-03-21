// Create web server
var express = require('express');
var app = express();

// Add middleware to parse the POST data of the body
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Add middleware to serve static files
app.use(express.static('public'));

// Add middleware to use pug
app.set('view engine', 'pug');
app.set('views', './views');

// Add middleware to use the comments route
var comments = require('./routes/comments');
app.use('/comments', comments);

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
