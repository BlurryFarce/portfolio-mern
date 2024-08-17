// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');



// Load environment variables from .env file
dotenv.config();

// Import custom modules for database operations and email sending functionality
const db = require("./modules/database/db");

// Initialize an Express application
const app = express();

// Set the port for the server, default to 8888 if not specified in environment variables
const port = process.env.PORT || "8888";

// Middleware to parse URL-encoded data and JSON data from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Middleware to set up CORS headers, allowing cross-origin requests from any domain
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "*"); // Allow all methods (GET, POST, etc.)
  res.setHeader("Access-Control-Allow-Headers", "*"); // Allow all headers
  next(); // Pass control to the next middleware/handler
});

// Route to handle GET requests to "/api/projects"
// This retrieves a list of projects from the database
app.get("/api/projects", async (req, res) => {
  let projectList = await db.getProjects();
  
  // If no projects are found, initialize the data and fetch again
  if (!projectList.length) {
    await db.initializeProjects();
    projectList = await db.getProjects();
  }
  
  // Send the list of projects as the response
  res.send(projectList);
});

// Route to handle GET requests to "/api/skills"
// This retrieves a list of skills from the database
app.get("/api/skills", async (req, res) => {
  let skillList = await db.getSkills();
  
  // If no skills are found, initialize the data and fetch again
  if (!skillList.length) {
    await db.initializeSkills();
    skillList = await db.getSkills();
  }
  
  // Send the list of skills as the response
  res.send(skillList);
});


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});