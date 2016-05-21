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
	id varchar (128) NOT NULL
	name varchar(128) NOT NULL,
	rating_img_url varchar(2000) ,
	snippet_text varchar(2000),
	categories varchar(2000),
	image_url varchar (2000),
	url varchar (2000),
	PRIMARY KEY (id)
)


create table gps(

    latitude varchar (128)
    longitude varchar (128),
    country: varchar (128),
    countryCode: varchar (128),
    city: varchar (128),
    zipcode: varchar (128),
    streetName: varchar (128),
    streetNumber: varchar (128),

)
-- when you insert in lat/long it will quicky be able to search for a point on  map
-- Look Google Maps Adress LookUP plugin, address lookup serach and authcompletes addresses
--the GPS info will not be stored because it will be changed each session, instead we can 
-- override each time someone has been to a place

