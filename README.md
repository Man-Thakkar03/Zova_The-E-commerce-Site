
# 🛍️ E-COMMERCE PLATFORM | Full-Stack MERN Application

[![MERN Stack](https://img.shields.io/badge/stack-MERN-3eaf7c?style=for-the-badge&logo=mongodb&logoColor=white)]()  
[![Code Quality](https://img.shields.io/badge/code_quality-A%2B-brightgreen?style=flat-square)]()  
[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=flat-square)](https://your-frontend-live-url.com)  
[![License](https://img.shields.io/github/license/Man-Thakkar03/Codealpha_tasks?style=flat-square)](https://github.com/Man-Thakkar03/Codealpha_tasks/blob/main/LICENSE)

---

## 🌐 Live Projects

- 🛍️ **Frontend**: [frontend-live-url.com](https://zova-mx6w.onrender.com)
- 🧑‍💼 **Admin Dashboard**: [admin-live-url.com](https://zova.onrender.com)
- ☁️ **API Server**: Deployed (Render)
- 🗃️ **Database**: MongoDB Atlas (cloud-hosted)

---

## 📦 About the Project

This is a **production-ready MERN-based e-commerce platform**, engineered for scalability, maintainability, and real-world use.  
It features:

- A **React-powered storefront**
- A **dynamic admin dashboard**
- A **Node.js & Express backend**
- A **MongoDB Atlas** cloud database

Designed to simulate modern e-commerce systems with real-time operations, reusable components, and secure RESTful APIs.

---

## 🧠 Core Features

### 👥 Customer Portal
- Responsive product browsing by category
- Cart system with item quantity control
- Checkout screen 
- Login & Sign-up pages 

### 🧑‍💼 Admin Dashboard
- CRUD operations on products
- Order tracking and management
- Real-time dashboard analytics 
- Role-based access patterns

### 🧩 Backend API
- 🔐 Authentication middleware for protected routes
- 🔑 JSON Web Tokens (JWT) for secure login/session
- ☁️ Cloudinary integration for product image uploads
- RESTful endpoints (CRUD for products/orders/users)
- MongoDB Atlas integration with Mongoose
- JWT-based auth logic 
- CORS, error handling, environment config

---

## 💻 Tech Stack

| Layer       | Tech Stack                              |
|-------------|------------------------------------------|
| Frontend    | React.js, Context API, React Router DOM  |
| Admin Panel | React.js, Chart.js, Axios                |
| Backend     | Node.js, Express.js, dotenv              |
| Database    | MongoDB Atlas              |
| Hosting     | Render          |

---

## 🗃️ Project Structure

```
E-COMMERCE/
├── frontend/        # User interface
│   └── src/
├── admin/           # Admin dashboard
│   └── src/
├── backend/         # Express server
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
└── README.md
```

---

## 🚀 Getting Started

### 🧩 Prerequisites

- Node.js ≥ 16.x
- MongoDB Atlas URI
- npm / yarn

### 🧪 Backend

```bash
cd backend
npm install
# Create .env file with:
# MONGODB_URL = "mongodb+srv://manthakkar2005:Manthakkar.39@cluster0.2uspafe.mongodb.net"
# PORT=4000
npm run server
```

Server: [http://localhost:4000](http://localhost:4000)

---

### 🎨 Frontend (User)

```bash
cd frontend
npm install
npm start
```

App: [http://localhost:5173](http://localhost:5173)

---

### 📊 Admin Panel

```bash
cd admin
npm install
npm start
```

Dashboard: [http://localhost:5174](http://localhost:5174)

---

## 🔐 Example `.env` (Backend)

```env
MONGODB_URL = "mongodb+srv://manthakkar2005:Manthakkar.39@cluster0.2uspafe.mongodb.net"
PORT=4000
JWT_SECRET ="manthakkar2005"
```

---

## 📸 Screenshots



## 📡 Sample API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | /api/products        | Fetch all products   |
| POST   | /api/orders          | Create new order     |
| GET    | /api/users           | Fetch user data      |
| POST   | /api/auth/login      | Login user           |

---

## 🧪 Advanced Features (Ideas)

- 🔐 Fully integrated JWT + refresh tokens
- 💳 Razorpay / Stripe payment gateway
- 📬 Email confirmation (Nodemailer)
- 🧠 ML-powered recommendation engine
- 🗺️ Address auto-fill using Google Maps API

---

## 🧑‍💻 Author

**Man Thakkar**  
🚀 [GitHub](https://github.com/Man-Thakkar03)  
🌐 [Portfolio](https://your-portfolio-link.com)

---

## 📄 License

This project is licensed under the **MIT License**.  
Refer to [`LICENSE`](https://github.com/Man-Thakkar03/Codealpha_tasks/blob/main/LICENSE) for terms.
