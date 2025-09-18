# Express.js API Project

## Setup Instructions
1. Install Node.js and npm.
2. Run `npm init -y` to initialize the project.
3. Install Express.js with `npm install express`.
4. Run the server with `node app.js`.

## API Documentation
### GET `/api/example`
- Returns a JSON message: `{ "message": "Hello from Express.js API!" }`

## Example Requests
- `GET http:                             
  - Expected response: `{ "message": "Hello from Express.js API!" }`
- `GET http://localhost:3000/api/non-existent`
  - Expected response: `{ "error": "Not Found (404)" }`


const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from Express.js API!' });
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found (404)' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error (500)' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
