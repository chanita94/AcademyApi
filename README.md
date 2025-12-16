# Academy Full-Stack Application

A full-stack web application built with **ASP.NET Core Web API** and **React**.

## Tech Stack
- Backend: ASP.NET Core, Entity Framework Core, SQL Server
- Frontend: React, Vite, React Router, Context API
- Authentication: JWT (JSON Web Token) based authentication
- Styling: Bootstrap, CSS Modules

## Features
- User registration & login
- Session-based authentication
- Protected routes
- Courses and users management (CRUD after authenticated access)

## Project Structure
Academy/

├── client/ # React frontend (Vite)


│ ├── public/ # Static assets

│ ├── src/

│ │ ├── components/ # Reusable UI components

│ │ ├── contexts/ # React Context (AuthContext)

│ │ ├── services/ # API calls

│ │ ├── App.jsx # App routes

│ │ └── main.jsx # Entry point

│ ├── index.html

│ ├── package.json

│ └── vite.config.js


├── server/ # ASP.NET Core backend

│ └── AcademyApi/

│ ├── Controllers/ # API controllers

│ ├── Models/ # Entity models

│ ├── DTOs/ # Data Transfer Objects

│ ├── Services/ # Business logic

│ ├── Data/ # DbContext & EF Core config

│ ├── Migrations/ # Database migrations

│ ├── Program.cs

│ └── appsettings.json
├── .gitignore
── README.md
