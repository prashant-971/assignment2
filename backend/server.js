// Load environment variables from .env file
require('dotenv').config();

// importing external moduels
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// importing local moduels
const greetRoutes = require('./routes/greetRoutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route setup
app.use('/api', greetRoutes);

const port = process.env.PORT || 4000;

// Starting the server 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});