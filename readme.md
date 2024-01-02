# JobTracker App

## Overview

JobTracker is a full-stack web application built with React, Node.js, and Express. It helps users track and manage their job applications seamlessly. The app provides features for registration and login authentication, adding job applications with details like position, company, job location, status, and job type (full-time, part-time), as well as various visualization and filtering options.

## Table of Contents

- [Screenshot](#screenshots)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Course Landing Page](#course-landing-page)

## Screenshot

![View Screenshot](preview.gif)

## Live Demo

[JobTracker Project](https://jobify.alpaycelik.dev/)

## Features

### User Authentication

- Register an account and log in securely to access personalized features.

### Application Management

- Add job applications with details such as position, company, job location, status, and job type.

### Application List

- View a comprehensive list of all job applications.

### Job Search and Filtering

- Easily search for specific jobs and filter them based on various criteria.

### Stats Display

- View statistics on running applications, interviews, and rejections.

### Monthly Charts

- Visualize application trends with bar and line charts on a monthly basis.

### Profile Settings

- Modify user profile settings, including the ability to upload a profile picture.

### Admin Panel

- Access an admin panel for managing application data and user accounts.

### Dark Mode

- Enjoy a dark mode for improved user experience in low-light environments.

## Technologies Used

- **Frontend:**

  - React
  - Tanstack (Next.js, Apollo Client, Nexus, Prisma)
  - Axios
  - Dayjs
  - React Router DOM
  - Recharts
  - React Toastify
  - Styled Components

- **Backend:**

  - Node.js
  - Express

- **Authentication:**

  - JWT
  - Bcrypt

- **Database:**

  - MongoDB

- **External Services:**

  - Cloudinary (for image upload)

- **Other Libraries and Tools:**
  - Cookie-parser
  - Dotenv

## Getting Started

1. Clone the repository.
2. Install dependencies for the frontend and backend.
3. Set up a database and configure connection strings.
4. Run the application locally.

### Environment variables

1. Place your <code>.env</code> file in the root directory with the following variables

```
MONGO_URL=
NODE_ENV="development" or "production"
PORT=5100
JWT_SECRET=
JWT_EXPIRES_IN=1d
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

## Course Landing Page

Explore the Udemy course that inspired this project on the [JobTracker Udemy Course Landing Page](https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/).
