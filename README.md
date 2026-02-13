# 🚀 Mini SaaS Backend API

A **production-ready backend API** built with **Node.js, Express.js, and
MongoDB**, designed using modern backend best practices.\
This project demonstrates **secure authentication**, **role-based
authorization**, **subscription-based access control**, **admin user
management**, and **scalable architecture** suitable for real-world SaaS
applications.

------------------------------------------------------------------------

## ✨ Features

-   🔐 **Authentication & Authorization**
    -   JWT-based Access & Refresh Tokens
    -   Secure password hashing with bcrypt
    -   Role-based access control (User / Admin)
-   👤 **User Management**
    -   Register, Login, Logout
    -   Profile retrieval
    -   Subscription plan switching (Free / Pro)
-   💳 **Subscription Management**
    -   Free & Pro plans
    -   Plan-based feature and rate limiting logic
-   ⚡ **Rate Limiting**
    -   Different limits based on user subscription
-   🛠️ **Admin Operations**
    -   Admin-only routes and controllers
    -   Manage all users (CRUD operations)
    -   Edit user details (name, email, plan, role)
    -   Secure separation of admin logic from user logic
-   🧱 **Scalable Architecture**
    -   Modular folder structure
    -   Separation of concerns (Controllers, Services, Models)
-   🧾 **Centralized Logging**
    -   Winston-based logging
    -   Separate error and combined logs
-   ❌ **Centralized Error Handling**
    -   Custom AppError class
    -   Async handler for cleaner controllers

------------------------------------------------------------------------

## 🌍 Live API

**Production Base URL:**\
![Deployment](https://img.shields.io/badge/Hosted%20on-Render-blue)\
https://mini-saas-backend-api.onrender.com

**Local Base URL:**\
http://localhost:5000

✔ Use the production URL for public testing\
✔ Use the local URL for development

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js (ES Modules)
-   **Database:** MongoDB, Mongoose
-   **Authentication:** JWT (Access & Refresh Tokens)
-   **Security:** Helmet, bcryptjs, express-rate-limit
-   **Logging:** Winston, Morgan
-   **Other Tools:** Redis (rate limiting / caching ready)

------------------------------------------------------------------------

## 🚀 Installation

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/Kunalsahuji/Mini-SaaS-Backend-API.git
cd Mini-SaaS-Backend-API
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file in the root directory:

``` env
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

------------------------------------------------------------------------

## 📂 Folder Structure

``` bash
project-root/
├── src/
│   ├── config/          # DB, JWT, logger configurations
│   ├── modules/         # Feature-based modules
│   │   ├── auth/        # Auth controllers, services, routes
│   │   ├── user/        # User profile logic
│   │   ├── subscription/# Subscription logic
│   │   └── admin/       # Admin controllers, services, routes
│   ├── middlewares/     # Auth, error handling, rate limiters
│   ├── routes/          # API route definitions
│   ├── utils/           # Utility helpers
│   ├── app.js           # Express app setup
|── server.js            # Server entry point
├── logs/                # Winston logs
├── .env
├── package.json
├── package-lock.json
└── README.md
```

------------------------------------------------------------------------

## ▶️ Running the Project

### Development

``` bash
npm run dev
```

(uses **nodemon**)

### Production

``` bash
npm start
```

------------------------------------------------------------------------

## 🔑 API Endpoints

### 🔐 Authentication

-   `POST /api/auth/register` → Register a new user
-   `POST /api/auth/login` → Login user
-   `POST /api/auth/refresh` → Refresh access token

### 👤 Users (Protected + Rate Limited)

-   `GET /api/users/profile` → Get user profile

### 💳 Subscriptions (Protected)

-   `PUT /api/subscriptions/change` → Change subscription plan

### 🛠️ Admin (Protected, Admin-only)

-   `GET /api/admin/users` → Get all users
-   `POST /api/admin/users` → Create a new user (optional)
-   `PUT /api/admin/users/:id` → Update user details
-   `DELETE /api/admin/users/:id` → Delete user

------------------------------------------------------------------------

## 🧪 Testing with Postman

1.  **Register** a user → receive `accessToken` & `refreshToken`
2.  **Login** → validate credentials
3.  **Refresh Token** → generate new access token
4.  **Profile** → test protected route & rate limits
5.  **Change Plan** → upgrade from Free → Pro
6.  **Admin Dashboard** → login as admin and manage users (CRUD)

------------------------------------------------------------------------

## 📝 Logging

-   Logs are stored in:
    -   `logs/error.log`
    -   `logs/combined.log`

📌 **Note:** Add `logs/` to `.gitignore` to avoid committing runtime
logs.

------------------------------------------------------------------------

## 👨‍💻 About the Developer

**Kunal Sahu**\
Full Stack Developer with hands-on experience in **JavaScript, Node.js,
Express, MongoDB, React**, and modern backend architectures.\
Skilled in building **secure, scalable, and production-grade
applications**, with internship experience in **.NET and Full Stack
Development**.

------------------------------------------------------------------------

## 🔗 Connect with Me

📦 **GitHub:** https://github.com/Kunalsahuji  
🔗 **LinkedIn:** https://www.linkedin.com/in/kunal-sahu-7688ba1b0  
📌 **Notion:** https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4  
📧 **Email:** ksahu0103@gmail.com  

------------------------------------------------------------------------

⭐ If you found this project helpful, feel free to **star the
repository** and connect with me!
