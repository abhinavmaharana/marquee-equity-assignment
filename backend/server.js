const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({path: 'backend/config/config.env'})

const app = express();
app.use(bodyParser.json());

// Define your secret key for JWT
const secretKey = process.env.JWT_SECRET;

// Define your user data or connect to a database
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Endpoint for handling login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Validate username and password
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }

  // Generate JWT token
  const token = jwt.sign({ username }, secretKey);

  // Send token back to the client
  res.json({ token });
});

// Endpoint for handling logout
app.post('/api/logout', (req, res) => {
  // Perform any necessary cleanup or token invalidation logic
  // ...

  res.sendStatus(200);
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});