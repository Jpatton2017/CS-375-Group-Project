CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    userID VARCHAR(100),
    event VARCHAR(255),
    eventDate DATE, 
	eventTime Time 
);