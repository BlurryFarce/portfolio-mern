# Portfolio

[**View Portfolio**](https://portfolio-zeta-five-86.vercel.app/)

## About the Project

This is a personal portfolio website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The primary objective was to build a full-stack application to showcase my skills, projects, and experience.

## Technologies Used

### Frontend
- **React.js** - JavaScript library for building user interfaces.
- **React Router** - For handling routing in the single-page application.
- **SCSS (CSS Modules)** - For component-specific styling.

### Backend
- **Node.js** - JavaScript runtime for executing server-side code.
- **Express.js** - Web framework for building the backend API.
- **MongoDB** - NoSQL database to store and manage the data.
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB and Node.js.

### Other Tools
- **Vite** - Frontend build tool for a fast development environment.
- **Vercel** - Platform for deploying both frontend and backend.
- **Git** - Version control system for tracking changes.

## Features

- **Responsive Design**: The portfolio is fully responsive, ensuring a great user experience on all devices.
- **Dynamic Content**: Projects and skills are fetched from the backend, making it easy to update content.
- **Modular SCSS**: Uses SCSS modules for component-specific styling.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:
- **Node.js**: [Download & Install Node.js](https://nodejs.org/)
- **MongoDB**: [Download & Install MongoDB](https://www.mongodb.com/try/download/community)

Setup the .env file
```env
DBUSER=<your_username>
DBPWD=<your_password>
DBHOST=<your_host>
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BlurryFarce/portfolio-mern.git
   cd portfolio-mern
   ```
   ```
   cd frontend
   npm i
   npm run dev
   ```
   ```
   cd ../backend
   npm i
   npm run dev
   ```
  The application should now be running on `http://localhost:5173/`.
