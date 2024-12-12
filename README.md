# Server Middleware API

This project demonstrates how to create and use middleware in an Express.js server for validating and sanitizing user data. The API includes two POST endpoints, `/validateUser` and `/sanitizeUser`, with middleware to handle specific tasks such as input validation, age checking, and data sanitization.

---

## Features

- Middleware for validating user data.
- Middleware for sanitizing user data.
- Two endpoints:
  - `/validateUser`: Validates that the user is above 18 and that required fields are present.
  - `/sanitizeUser`: Sanitizes the user's data (e.g., capitalizing names, sorting arrays, converting strings to numbers).

---

## Technologies Used

- **Node.js**: Backend runtime for the server.
- **Express.js**: Framework for building the REST API.

---

## API Endpoints

### **POST** `/validateUser`
- **Description**: Validates the user data.
- **Request Body**: JSON object with user details.
  Example:
  ```json
  {
    "firstName": "steve",
    "lastName": "stevenson",
    "age": "129",
    "fbw": "36",
    "email": "steve@metallica.com"
  }

## How to run the Project:
1: Start the server:
```bash
node server.js
```

2: Test the endpoints using Postman, cURL, or any API testing tool.