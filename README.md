# 🏠 Rental Management System

A modern full-stack **Rental Management System** built using **React.js**, **FastAPI**, and **PostgreSQL**. The application helps property owners manage properties, tenants, rental agreements, payments, and reports through a secure web dashboard.

---

## 🌐 Live Demo

### Frontend
https://rental-management-system-frontend-a.vercel.app/

### Backend API
https://rms-backend-m3u4.onrender.com/

### API Documentation
https://rms-backend-m3u4.onrender.com/docs

---

# 📌 Features

## 🔐 Authentication
- JWT Authentication
- User Registration
- Secure Login
- Change Password
- User Profile

---

## 🏠 Property Management
- Add Property
- Edit Property
- Delete Property
- Search Property
- Export Property Data (CSV)

---

## 👥 Tenant Management
- Add Tenant
- Edit Tenant
- Delete Tenant
- Search Tenant
- Export Tenant Data (CSV)

---

## 📄 Rental Agreement Management
- Create Rental Agreement
- Update Agreement
- Delete Agreement
- Blockchain Hash Verification
- Export Agreement Data

---

## 💳 Payment Management
- Add Payment
- Edit Payment
- Delete Payment
- Payment History
- Email Receipt Notification
- Blockchain Verification
- Export Payment Data

---

## 📊 Dashboard
- Total Properties
- Total Tenants
- Total Agreements
- Total Payments
- Revenue Overview
- Interactive Charts

---

## 📈 Reports
- Revenue Analytics
- Monthly Reports
- Pie Charts
- Bar Charts
- Dashboard Statistics

---

## 🔗 Blockchain Verification
- Agreement Verification
- Payment Verification
- Tamper Detection using SHA-256 Hash

---

## 📜 Audit Logs
- User Activity Tracking
- Search Logs
- Export Audit Logs

---

## 👤 User Profile
- View Profile
- Update Profile
- Change Password

---

## ⚙️ Settings
- Notification Preferences
- Account Information
- Logout

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Chart.js
- React Icons
- CSS3

---

## Backend

- FastAPI
- SQLAlchemy
- JWT Authentication
- Passlib
- SMTP Email Service

---

## Database

- PostgreSQL

---

## Deployment

- Vercel (Frontend)
- Render (Backend)
- GitHub

---

# 📂 Project Structure

```
Rental Management System
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── utils
│   │   └── assets
│   │
│   └── public
│
└── backend
    ├── app
    │   ├── auth
    │   ├── crud
    │   ├── database
    │   ├── models
    │   ├── routes
    │   ├── schemas
    │   └── services
    │
    └── main.py
```

---

# 🗄️ Database Tables

- Users
- Properties
- Tenants
- Agreements
- Payments
- Audit Logs

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
FastAPI Authentication
      │
      ▼
JWT Token Generated
      │
      ▼
Stored in Browser
      │
      ▼
Protected API Requests
```

---

# 🔗 Blockchain Verification Flow

```
Agreement / Payment Created
            │
            ▼
Generate SHA-256 Hash
            │
            ▼
Store Hash in Database
            │
            ▼
Verify Current Data
            │
            ▼
VALID / TAMPERED
```

---

# 📧 Email Notifications

The system automatically sends an email receipt whenever a payment is successfully recorded.

---

# 📊 Modules

- Authentication
- Dashboard
- Property Management
- Tenant Management
- Agreement Management
- Payment Management
- Blockchain Verification
- Audit Logs
- Reports
- Profile
- Settings

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/atolesakshi10-netizen/rental-management-system-frontend.git

git clone https://github.com/atolesakshi10-netizen/rental-management-system-backend.git
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm start
```

---

# 📖 API Documentation

After running the backend:

```
http://127.0.0.1:8000/docs
```

Live API Documentation:

https://rms-backend-m3u4.onrender.com/docs

---

# 🎥 Demo

A complete demonstration video of the application has been created showcasing:

- Authentication
- Property Management
- Tenant Management
- Agreements
- Payments
- Blockchain Verification
- Reports
- Audit Logs
- Profile
- Settings

---

# 🚀 Future Enhancements

- Multi-user Roles
- Payment Gateway Integration
- Digital Signatures
- Property Image Upload
- Mobile Application
- SMS Notifications
- AI-based Rent Prediction
- Advanced Analytics

---

# 👨‍💻 Developer

**Harsh Yadav**

B.Tech Computer Science & Engineering

MIT ADT University

---

# 📜 License

This project is developed for educational purposes as a B.Tech Major Project.

---

# ⭐ If you found this project useful, please consider giving it a Star.
