var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/players');
var Player = mongoose.model('Player', mongoose.Schema({
	name:String,
	joiningdate:Date,
	birthdate:Date,
	type:String,
	contact:String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/players', function(req, res){
	Player.find(function(err, players){
		if(err)
			res.send(err);
		res.json(players);
	});
});

app.get('/api/players/:id', function(req, res){
	Player.findOne({_id:req.params.id}, function(err, players){
		if(err)
			res.send(err);
		res.json(players);
	});
});
app.post('/api/players', function(req, res){
	Player.create( req.body, function(err, players){
		if(err)
			res.send(err);
		res.json(players);
	});
});

app.delete('/api/players/:id', function(req, res){
	Player.findOneAndRemove({_id:req.params.id}, function(err, players){
		if(err)
			res.send(err);
		res.json(players);
	});
});
app.put('/api/players/:id', function(req, res){
	var query = {
		name:req.body.name,
		joiningdate:req.body.joiningdate,
		birthdate:req.body.birthdate,
		type:req.body.type,
		contact:req.body.contact
	};
	Player.findOneAndUpdate({_id:req.params.id}, query, function(err, players){
		if(err)
			res.send(err);
		res.json(players);
	});
});
app.listen(3000, function(){
	console.log('server is running on port 3000..');
});