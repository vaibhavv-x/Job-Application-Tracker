# 🚀 Job Application Tracker

A full-stack web application to manage and track job applications efficiently.  
Built using **React (Vite) + Tailwind CSS** for the frontend and **FastAPI** for the backend.

---

## ✨ Features

- 🔐 User Authentication (JWT based)
- 📝 Add job applications (Company & Role)
- 📌 Track application status (Applied, Interview, Rejected, etc.)
- ❌ Delete applications
- 🎨 Modern and responsive UI (Tailwind CSS)
- ⚡ Fast backend with FastAPI
- 💾 SQLite database for storage

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication (python-jose)
- Password hashing (passlib)

---

## 📂 Project Structure
job-tracker/
│
├── backend/
│   ├── main.py
│   ├── auth.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── jobs.db
│   ├── requirements.txt
│   └── routes/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

git clone https://github.com/your-username/job-application-tracker.git
cd job-application-tracker

### 🔹 2. Backend Setup

cd backend

python3 -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate    # Windows

pip install -r requirements.txt

uvicorn main:app --reload

👉 Backend runs at: http://127.0.0.1:8000

### 🔹 3. Frontend Setup

cd frontend

npm install
npm run dev

👉 Frontend runs at: http://localhost:5173

⸻

### 🔐 Authentication Flow
	•	User registers with email & password
	•	Password is securely hashed
	•	Login returns JWT token
	•	Token is used for protected routes
	•	User accesses dashboard after login

⸻

### 📸 Features Overview
	•	Login & Register UI
	•	Dashboard with job applications
	•	Add application form
	•	Status tracking dropdown
	•	Delete functionality

⸻

### 🎯 Future Improvements
	•	📊 Analytics dashboard (charts)
	•	📅 Application deadlines
	•	🔔 Notifications
	•	🌐 Deployment (Vercel + Render)
	•	📱 Mobile responsiveness

⸻

### 👨‍💻 Author

#### Vaibhav

⸻

⭐ If you like this project

Give it a ⭐ on GitHub!
