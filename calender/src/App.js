import React from "react";

import Calendar from "./components/Calendar";

import "./App.css";



function getInput(){
	let eventName = document.getElementById("event").value;
	let description = document.getElementById("description").value;
	let startDate = document.getElementById("startDate").value;
	let endDate = document.getElementById("endDate").value;
	let startTime = document.getElementById("startTime").value;
	let endTime = document.getElementById("endTime").value;

	const data = {"user": "Jordan" ,"Event": eventName,"description": description, "startDate": startDate, "endDate": endDate, "startTime": startTime, "endTime" : endTime};
	console.log(data)
	
	fetch('/add', {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
		}).then(function (res) {
			console.log(res);
		})
}

class App extends React.Component {
  render() {
    return (
		<div className="App">
			<main>
				<Calendar />
			</main>
		
		<form>
			<h1> 
			Add Event to Calendar
			</h1>
			<label>
			Event Name:<input type="text" name="event" id="event" />
			</label>
			<br />
			<label>
			Event Description:<input type="text" name="description" id="description" />
			</label>
			<br />
			<label>
			Start Day:<input type="date" name="startDate" id="startDate" />
			</label>
			<br />
			<label>
			End Day:<input type="date" name="endDate" id="endDate" />
			</label>
			<br />
			<label>
			Start Time:<input type="time" name="startTime" id="startTime" />
			</label>
			<br />
			<label>
			End Time:<input type="time" name="endTime" id="endTime" />
			</label>
			<br />
			<input type="submit" value="Add event to Calendar" id="submit" onClick={getInput}/>
		</form>
		</div>
    );
  }
}


export default App;
