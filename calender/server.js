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
	let startTime = req.body.startTime
	let endTime = req.body.endTime
	console.log(body);
	if (
        !body.hasOwnProperty("Event") ||
        !body.hasOwnProperty("description") ||
        !body.hasOwnProperty("user") ||
		!body.hasOwnProperty("startDate")||
		!body.hasOwnProperty("endDate")||
		!body.hasOwnProperty("startTime")||
		!body.hasOwnProperty("endTime")
    ){
		res.status(400);	
    }
	else if (
		startDate == "" ||
		endDate == "" ||
		startTime == "" ||
		endTime == "" 
	){
		res.status(400).send('Empty Date or Time');
		
	}
	else{ 
		pool.query(
			`INSERT INTO events(userID, event, description, startDate, endDate, startTime, endTime) 
			VALUES($1, $2, $3, $4, $5, $6, $7)
			RETURNING *`,
			[user, eventName, description, startDate, endDate, startTime, endTime]
			)
			.catch(function (error) {
			console.log(error);
			});		
	}
	 
})




app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});