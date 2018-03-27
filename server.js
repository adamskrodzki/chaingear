'use strict';

const express = require('express');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';


const data = require('./data/chaingear.json');


// App
const app = express();
app.use('/logos', express.static('logos'));

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/crowdsales/:system', (req, res) => {
	let crowdsales = data.find(system => system.system == req.params.system);
	res.json(crowdsales);
});

app.get('/api/crowdsales', (req, res) => {
	let crowdsales = data.filter(system => !!system.crowdsales );
	res.json(crowdsales);
});


app.get('/api/tokens/:symbol', (req, res) => {
	let projects = data.find(system => system.token && system.token.symbol ==req.params.symbol);
	res.json(projects);
});


app.get('/api/tokens', (req, res) => {
	let projects = data.filter(system => (system.descriptions && system.descriptions.system_type !== "fiat" ));
	res.json(projects);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);