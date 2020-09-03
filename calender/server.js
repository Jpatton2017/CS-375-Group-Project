const pg = require("pg");
const path = require('path');
const express = require("express");
const app = express();

const port = 5000;
const hostname = "localhost";

const env = require("../env.json");
const Pool = pg.Pool;
const pool = new Pool(env);
pool.connect().then(function () {
    console.log(`Connected to database ${env.database}`);
});

app.use(express.static(path.join('src', 'build')));
app.use(express.static("src"));
let bodyParser = require('body-parser');
app.use(bodyParser.json());

function isValidDate(date) {
  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

app.post('/add', function (req, res) {
	let body = req.body
	let user = req.body.user 
	let eventName = req.body.Event
	let description = req.body.description
	let startDate = req.body.startDate
	let endDate = req.body.endDate
	console.log(body);
	if (
        !body.hasOwnProperty("Event") ||
        !body.hasOwnProperty("description") ||
        !body.hasOwnProperty("user") ||
		!body.hasOwnProperty("startDate")||
		!body.hasOwnProperty("endDate")
    ){
		res.status(400);	
    }
	else if (
		startDate == "" ||
		endDate == "" 
	){
		res.status(400);	
	}
	else if (
		new Date(endDate) < new Date(startDate)
	){
		res.status(400);
	}
	else{
		res.status(200);
		pool.query(
			`INSERT INTO events(userID, event, description, startDate, endDate) 
			VALUES($1, $2, $3, $4, $5)
			RETURNING *`,
			[user, eventName, description, startDate, endDate]
			)
			.catch(function (error) {
			console.log(error);
			});
	}
	 
})




app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});