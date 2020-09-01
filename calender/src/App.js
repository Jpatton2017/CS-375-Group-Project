import React from "react";

import Calendar from "./components/Calendar";

import "./App.css";

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
			Start Day:<input type="datetime-local" name="startDate" id="startDate" />
			</label>
			<br />
			<label>
			End Day:<input type="datetime-local" name="endDate" id="endDate" />
			</label>
			<br />
			<input type="submit" value="Add event to Calendar" id="submit" />
		</form>
		</div>
    );
  }
}

export default App;
