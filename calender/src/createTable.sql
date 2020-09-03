CREATE TABLE events (
    id SERIAL PRIMARY KEY,
	userID VARCHAR(50),
    event VARCHAR(255),
	description VARCHAR(255),
    startDate DATE, 
	endDate DATE,
	startTime TIME,
	endTime TIME	
);