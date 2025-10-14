// backend/server.js
const express = require('express');
const cors = require('cors');
const portfolioData = require('./data.json'); // Import the data

const app = express();
const PORT = process.env.PORT || 5001; // Use a different port from React

// Enable CORS for all routes
app.use(cors());

// Define the API endpoint
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
