# 📘 Mini SaaS Backend API – Info Guide

## Overview

This backend provides:

- User authentication (JWT access + refresh tokens)
- Role-based authorization
- Subscription logic (Free vs Pro plans)
- Rate limiting per plan
- Centralized logging and error handling
- Modular folder structure for scalability

---

## 🌍 Live API

**Production Base URL:**  
![Deployment](https://img.shields.io/badge/Hosted%20on-Render-blue)
 https://mini-saas-backend-api.onrender.com

**Local Base URL:**  
http://localhost:5000

✔ Use the production URL for public testing  
✔ Use the local URL for development

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Kunalsahuji/Mini-SaaS-Backend-API.git
cd Mini-SaaS-Backend-API
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/minisaas
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

### 4️⃣ Run the server

**Development**
```bash
npm run dev
```

**Production**
```bash
npm start
```

---

## 📂 Postman Setup

### 1️⃣ Import Collection

Save the following JSON as **MiniSaaS.postman_collection.json** and import it into Postman:

```json
{
  "info": {
    "name": "Mini SaaS Backend API",
    "_postman_id": "f58ad091-ee48-4bdc-9334-24e422183a1c",
    "description": "Postman collection for testing Mini SaaS Backend API endpoints",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Register",
      "request": {
        "method": "POST",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Kunal\",\n  \"email\": \"kunal@example.com\",\n  \"password\": \"Password123\"\n}"
        },
        "url": {
          "raw": "{{base_url}}/api/auth/register"
        }
      }
    },
    {
      "name": "Login",
      "request": {
        "method": "POST",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"email\": \"kunal@example.com\",\n  \"password\": \"Password123\"\n}"
        },
        "url": {
          "raw": "{{base_url}}/api/auth/login"
        }
      }
    },
    {
      "name": "Refresh Token",
      "request": {
        "method": "POST",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"refreshToken\": \"{{refreshToken}}\"\n}"
        },
        "url": {
          "raw": "{{base_url}}/api/auth/refresh"
        }
      }
    },
    {
      "name": "Get Profile",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{accessToken}}"
          }
        ],
        "url": {
          "raw": "{{base_url}}/api/users/profile"
        }
      }
    },
    {
      "name": "Change Plan",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{accessToken}}"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"plan\": \"pro\"\n}"
        },
        "url": {
          "raw": "{{base_url}}/api/subscriptions/change"
        }
      }
    }
  ]
}
```

---

### 2️⃣ Import Environment

Save the following JSON as **MiniSaaS.postman_environment.json**:

```json
{
  "id": "f58ad091-ee48-4bdc-9334-24e422183a1c-env",
  "name": "Mini SaaS Backend API Environment",
  "values": [
    {
      "key": "base_url",
      "value": "http://localhost:5000",
      "enabled": true
    },
    {
      "key": "accessToken",
      "value": "",
      "enabled": true
    },
    {
      "key": "refreshToken",
      "value": "",
      "enabled": true
    }
  ],
  "_postman_variable_scope": "environment",
  "_postman_exported_at": "2026-02-02T16:30:00.000Z",
  "_postman_exported_using": "Postman/10.0.0"
}
```

---

## 🔑 How to Test Endpoints

### 🧾 Register
```http
POST {{base_url}}/api/auth/register
```
```json
{
  "name": "Kunal",
  "email": "kunal@example.com",
  "password": "Password123"
}
```

---

### 🔐 Login
```http
POST {{base_url}}/api/auth/login
```
```json
{
  "email": "kunal@example.com",
  "password": "Password123"
}
```

➡️ Copy `accessToken` and `refreshToken` into Postman environment variables.

---

### ♻️ Refresh Token
```http
POST {{base_url}}/api/auth/refresh
```
```json
{
  "refreshToken": "{{refreshToken}}"
}
```

---

### 👤 Get Profile (Protected + Rate Limited)
```http
GET {{base_url}}/api/users/profile
```
Header:
```
Authorization: Bearer {{accessToken}}
```

---

### 💳 Change Plan (Protected)
```http
PUT {{base_url}}/api/subscriptions/change
```
Header:
```
Authorization: Bearer {{accessToken}}
```
Body:
```json
{
  "plan": "pro"
}
```

---

## 📝 Notes

- Logs are written to:
  - `logs/error.log`
  - `logs/combined.log`
- Add `logs/` to `.gitignore` to avoid committing runtime logs.
- **Rate limits**
  - Free: 20 requests/min
  - Pro: 100 requests/min
- **Error Handling**
  - All errors return JSON:
```json
{
  "success": false,
  "message": "Error message"
}
```

---

## 👨‍💻 Author

**Kunal Sahu**  
Full Stack Developer | Backend & API Specialist

📦 GitHub: https://github.com/Kunalsahuji  
🔗 LinkedIn: https://www.linkedin.com/in/kunal-sahu-7688ba1b0  
📌 Notion: https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4  
📧 Email: ksahu0103@gmail.com
