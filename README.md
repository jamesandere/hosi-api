# HOSI MANAGEMENT

## Description

This is a NodeJS/Express application used to manage hospital patients, rooms and doctors.

#### By **James Andere**

## Setup/Installation Requirements

1. Clone the repository.
2. Navigate to the file.
3. Open with the text editor of your choice
4. Run "npm start" to open the application on your browser.

#### To re-create the database, follow these steps;

In PSQL:

- CREATE DATABASE illest;
- \c illest
- CREATE TABLE patients (id serial PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, birth_date DATE, sex VARCHAR, room_id INTEGER, FOREIGN KEY (room_id) REFERENCES rooms (id), doctor_id INTEGER, FOREIGN KEY (doctor_id) REFERENCES doctors (id), created_at TIMESTAMP DEFAULT NOW());
- CREATE TABLE doctors (id serial PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, created_at TIMESTAMP DEFAULT NOW());
- CREATE TABLE rooms (id serial PRIMARY KEY, name VARCHAR, availability BOOLEAN DEFAULT FALSE, created_at TIMESTAMP DEFAULT NOW());
- CREATE TABLE diseases (id serial PRIMARY KEY, name VARCHAR, created_at TIMESTAMP DEFAULT NOW());

- CREATE TABLE diseases_patients (id serial PRIMARY KEY, disease_id INTEGER, FOREIGN KEY (disease_id) REFERENCES diseases (id), patient_id INTEGER, FOREIGN KEY (patient_id) REFERENCES patients (id));
- CREATE TABLE users (id serial PRIMARY KEY, username VARCHAR(100) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(200) NOT NULL, role INTEGER DEFAULT 0 NOT NULL, created_on TIMESTAMP DEFAULT NOW() NOT NULL);

# App Modules and Code organisation

### Modules

| Module        | Core             | Patients                         | Diseases                     | Doctors                      |
| ------------- | ---------------- | -------------------------------- | ---------------------------- | ---------------------------- |
| Functionality | - login system   | - add / delete patients          | - add / delete diseases      | - assign doctors to patients |
| .             | - add users      | - update patient's diagnosis     | - assign disease to patients | - add / remove doctors       |
| .             | - view dashboard | - view patient’s page            |
| .             | .                | - retrieve patient's information |

# REST Apis

The backend and frontend communicate through REST Apis. On the frontend, we make requests to the following routes:

| URI           | Returns                                                    |
| ------------- | ---------------------------------------------------------- |
| /signup       | adds user to the system                                    |
| /login        | logs in user to the system                                 |
| /doctors      | returns information about all doctors in the system        |
| /doctors/:id  | returns information about a specific doctor in the system  |
| /patients     | returns information about all patients in the system       |
| /patients/:id | returns information about a specific patient               |
| /rooms        | returns information about the rooms in the system          |
| /diseases     | returns information about all diseases in the system       |
| /diseases/:id | returns information about a specific disease in the system |

## Known Bugs

There are no known bugs as at now but in case of any you may find please contact me.

## Technologies and language used

This aplication was written using JavaScript programming language.

- NodeJS
- Express JS
- Postgres SQL - Database

## Support and contact details

In case of any questions or feedback or clarifications, you can reach me at:
jamesandere56@gmail.com

### License

_Licenced under the [MIT Licence](LICENCE)._
Copyright (c) 2019 **James Andere**
