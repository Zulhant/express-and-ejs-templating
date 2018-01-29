var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', function(req, res){
    var data = { title : "our project", project: ['amaxon','facebook','google']};
    res.render('index', data);
});

app.get('/profile', function (req, res){
    var data = { nama : "zulhan", alamat : "anjani lombok timur", status: "menikah"};
    res.render('profile',data);
});

app.get('/galery', function(req, res){
var data = { galeri1 : "halaman galeri satu", aplication: ['zaihan','amak kahe','inak kake']};
    res.render('galery', data);
});

app.get('/makan', function(req, res){
    var data = { title : "menu makanan", listmakan : ['nasi ayam','nasi uduk','nasi jadung']};
    res.render('makanan', data)
});
module.exports = app;