// Import the mongoose module
const mongoose = require("mongoose");
const project = require("./models/project.js");
const skill = require("./models/skill.js");

// Construct the MongoDB connection URL using environment variables
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

// Function to connect to MongoDB
async function connect() {
    await mongoose.connect(dbUrl); // Establish connection to MongoDB
}


// Function to initialize the projects collection with some data
async function initializeProjects() {
    // Define an array of project objects to be inserted into the collection
    const projectList = [
        {
            title: "Portfolio Website",
            liveLink: "https://example.com",
            sourceLink: "",
            imageUrl: "/assets/img/project-default.png",
        },
    ];
    // Ensure the database connection is established
    await connect();
    // Insert the list of projects into the collection
    await project.insertMany(projectList);
}

// Function to initialize the skills collection with some data
async function initializeSkills() {
    // Define the skillset document to be inserted into the collection
    const skillsetData = {
        languages: ["Javascript", "Typescript", "HTML5", "CSS3", "C#"],
        frameworksandlibraries: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "ASP.NET"],
        databasesandcloud: ["MySQL", "MongoDB", "Firebase", "AWS", "PostgresSQL", "Google GCP"],
        testing: ["Jest", "Cypress", "Jasmine"],
        tools: ["Git", "Visual Studio", "Figma", "Jira", "Linux", "Docker"]
    };
    // Ensure the database connection is established
    await connect();

    // Insert the skillset document into the collection
    const skillset = new skill(skillsetData);
    await skillset.save();

    console.log('Skillset initialized successfully.');
}

async function getProjects() {
    await connect(); // Ensure the database connection is established
    return await project.find({});
}

async function getSkills() {
    await connect(); // Ensure the database connection is established
    return await skill.find({});
}

// Export the database functions for use in other parts of the application
module.exports = {
    getProjects,
    getSkills,
    initializeProjects,
    initializeSkills,
};