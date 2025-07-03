require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import express
const app = express(); // Create an instance of express
const cors = require('cors'); // Import CORS for cross-origin requests. This is useful if your frontend and backend are on different domains or ports.
const PORT = process.env.PORT || 3000; // Set the port from environment variables or default to 3000

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('src/public')); // Serve static files from the 'public' directory

// Vue engine
const twig = require('twig'); // Import Twig for templating
app.set('view engine', 'twig'); // Set Twig as the view engine
app.set('views', './src/views'); // Set the directory for views

// Routes de base
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
