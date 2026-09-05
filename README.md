# Student Portal REST API

A simple RESTful API for managing student accounts. This project was developed as a backend assignment using Node.js, Express.js, and MongoDB.

## Features

- Create a student account
- Retrieve student details using a student ID
- Update a student's name
- Prevent modification of registration number and email
- Permanently delete a student account
- MongoDB database integration
- Input validation
- RESTful API architecture
- Proper HTTP status codes and JSON responses

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Git & GitHub

## Project Structure

```text
student-portal-api/
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── Student.js
│
├── routes/
│   └── studentRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
