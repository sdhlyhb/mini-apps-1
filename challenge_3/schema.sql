DROP DATABASE IF EXISTS orders;

CREATE DATABASE orders;

USE orders;

CREATE TABLE orderInfo (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) ,
  email VARCHAR(255) ,
  password VARCHAR(255) ,
  city VARCHAR(255),
  state VARCHAR(255),
  zipcode VARCHAR(255),
  phoneNumber VARCHAR(255),
  creditCardNumber VARCHAR(255),
  expiryDate DATE,
  cvv VARCHAR(255) ,
  billingZip VARCHAR(255) ,

  PRIMARY KEY (id)


)