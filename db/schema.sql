### Schema

CREATE DATABASE btdt_db;
USE btdt_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


-- double check YELP API for ratings to use the API
CREATE TABLE btdts (
	user_id int NOT NULL,
	yelp_id varchar(128) NOT NULL
	PRIMARY KEY (user_id, yelp_id)
)
-- when you insert in lat/long it will quicky be able to search for a point on  map
-- Look Google Maps Adress LookUP plugin, address lookup serach and authcompletes addresses
--the GPS info will not be stored because it will be changed each session, instead we can 
-- override each time someone has been to a place

