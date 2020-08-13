const pg = require("pg");
const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

const env = require("../env.json");
const Pool = pg.Pool;
const pool = new Pool(env);
pool.connect().then(function () {
    console.log(`Connected to database ${env.database}`);
});

app.use(express.static("public_html"));
let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/add', function (req, res) {
	let body = req.body
	console.log(body);
	if (
        !body.hasOwnProperty("user") ||
        !body.hasOwnProperty("Event") ||
        !body.hasOwnProperty("date") ||
		!body.hasOwnProperty("time")
    ){
		res.status(400);	
    }
	else{ 
		let user = req.body.user 
		let eventName = req.body.Event
		let date = req.body.date
		let time = req.body.time
		res.status(200);
			pool.query(
				`INSERT INTO events(userID, event, eventDate, eventTime) 
				VALUES($1, $2, $3, $4)
				RETURNING *`,
				[user, eventName, date, time]
				)
				.catch(function (error) {
				console.log(error);
				});
		
	}
	 
})


app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});