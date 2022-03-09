var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

app.get('/', function(req,res) {
    res.render('content');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);;
});