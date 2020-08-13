function getInput(){
	let user  = document.getElementById("user").value;
	let eventName = document.getElementById("event").value;
	let date = document.getElementById("date").value;
	let time = document.getElementById("time").value;

	const data = {"user": user, "Event": eventName, "date": date, "time": time};
	console.log(data)
	
	fetch('/add', {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
		})
	

}




// event listner 
let button = document.getElementById("submit");
button.addEventListener("click", getInput);