# 🏠 Hostel Management System

A full-stack web-based Hostel Management System built with **Angular** (frontend), **Node.js + Express** (backend), and **MongoDB** (database).
This system helps in efficiently managing hostel operations such as user registration, room allocations, bookings, and more.

✨ Features
✅ Admin and User login
✅ JWT-based Authentication
✅ Room assignment and booking system
✅ Dashboard with booking status
✅ User and room management
✅ Responsive design for desktop & mobile

---

## 🚀 Tech Stack

- **Frontend**: Angular, TypeScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Bootstrap / Angular Material (as per project)

---

## 📁 Project Folder Structure

hostelManagement/
├── backend/                  # Node.js + Express API (if applicable)
│   ├── config/               # DB config, JWT config
│   ├── controllers/          # Request handlers for each route
│   ├── models/               # Mongoose models (User, Room, etc.)
│   ├── routes/               # API route definitions
│   ├── middleware/           # Auth & validation middleware
│   └── server.js             # Entry point for backend server
│
├── src/                      # Angular Frontend Code
│   ├── app/                  # Main Angular app
│   │   ├── components/       # Reusable Angular components
│   │   ├── pages/            # Page components (Login, Dashboard, etc.)
│   │   ├── services/         # Angular services (API calls)
│   │   ├── models/           # Interfaces for data types
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets/               # Static files like images, icons
│   ├── environments/         # Environment config (dev/prod)
│   ├── index.html            # Main HTML file
│   └── main.ts               # Main entry point
│
├── .env                      # Environment variables (Mongo URI, JWT Secret)
├── angular.json              # Angular config
├── package.json              # Project dependencies and scripts
└── README.md                 # Project overview and instructions


---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js (v16 recommended)
- MongoDB installed and running locally
- Angular CLI installed globally

### 🔨 Backend Setup

```bash
cd hostelManagement/backend
npm install
npm run start

NODE_ENV=development
PORT=4050
MONGODB_URI=mongodb://localhost/hostel
MONGOOSE_DEBUG=true
JWT_SECRET=your-secret-key

🌐 Frontend Setup
cd hostelManagement
npm install
npm run start
Angular frontend runs on http://localhost:4200.
