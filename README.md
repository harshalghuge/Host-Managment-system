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
