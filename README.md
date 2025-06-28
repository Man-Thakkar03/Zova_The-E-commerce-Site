
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

-> Zova Home page1 ![Zova Home page1](https://github.com/user-attachments/assets/01fc4239-9614-4779-88bb-7bafec58a37a)

-> Zova Home page2 ![Zova Home page2](https://github.com/user-attachments/assets/25a2e1ed-266e-401a-a7c8-50f55423dc9b)

-> Zova Home page3 ![Zova Home page3](https://github.com/user-attachments/assets/92a6dbbd-06b9-4f67-9539-143ee26969de)

-> Zova Home page4 ![Zova Home page4](https://github.com/user-attachments/assets/5c874e8b-72c8-4286-9d79-ebc2bc06ad17)

-> Zova Collection page ![Zova Collection page](https://github.com/user-attachments/assets/be8e2ae4-5960-438f-98ac-cc9803a7392f)

-> Zova About page ![Zova About page](https://github.com/user-attachments/assets/7966785f-45d9-44d7-9295-ac753d69eee3)

-> Zova Contact page ![Zova Contact page](https://github.com/user-attachments/assets/ae15b293-2c4a-447b-9627-fe0867e2e8a9)

-> Zova Product Page1 ![Zova Product Page1](https://github.com/user-attachments/assets/91dea618-df39-44d4-9e93-19856574fc35)

-> Zova Product page2 ![Zova Product page2](https://github.com/user-attachments/assets/14c06877-f0b0-4e92-acdc-10c69c70b8d7)

-> Zova Cart page ![Zova Cart page](https://github.com/user-attachments/assets/027b65f4-3757-46a2-9560-0fd234fdb7f4)

-> Zova PlaceOrder page ![Zova PlaceOrder page](https://github.com/user-attachments/assets/d0bde5e1-fed1-446a-9389-97df00e852e8)

-> Zova Orders page ![Zova Orders page](https://github.com/user-attachments/assets/3ea3964e-0e99-4990-b336-a1d0f428911d)

-> Zova Signup page ![Zova Signup page](https://github.com/user-attachments/assets/3c1c8253-2e69-41d0-a391-c4b8ca7dee6e)


## Admin Dashboard


-> Zova-Admin Login page ![Zova-Admin Login page](https://github.com/user-attachments/assets/7f4ada39-8136-4fdd-af9c-e9eab6284344)

-> Zova-Admin Add item page ![Zova-Admin Add item page](https://github.com/user-attachments/assets/ba3dda75-1de2-42cb-aa8e-d5df13f2b2aa)

-> Zova-Admin List items page ![Zova-Admin List items page](https://github.com/user-attachments/assets/e4fd357b-9d6f-4088-963f-fd29f4b3be8a)

-> Zova-Admin Orders page ![Zova-Admin Orders page](https://github.com/user-attachments/assets/f3e34bc2-ae5f-47bc-9f23-c3a6d1cb827d)








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
