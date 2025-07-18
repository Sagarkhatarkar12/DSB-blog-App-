﻿# DSB-blog-App-
📝 DSB Blog App
A full-stack blogging application built with Vue.js (Nuxt) on the frontend and Node.js + Express + MongoDB on the backend. This app allows users to create, read, update, and delete (CRUD) blog posts with a simple and user-friendly interface.

🚀 Features
✅ Create, Read, Update, Delete (CRUD) blog posts
✅ Responsive and modern UI built with Nuxt.js
✅ Backend API using Node.js + Express
✅ MongoDB for database storage
✅ RESTful API architecture
✅ Easy to integrate and scalable

🛠️ Tech Stack
Frontend
Nuxt.js (Vue 3)

Tailwind CSS

Backend
Node.js

Express.js

MongoDB (with Mongoose)

📂 Project Structure
bash
Copy
Edit
DSB-blog-App/
│
├── backend/               # Express API
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   └── server.js          # Entry point
│
├── frontend/              # Nuxt frontend
│   ├── components/        # UI components
│   ├── pages/             # Routes
│   └── assets/            # CSS, images
│
└── README.md
⚡ Installation & Setup
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/Sagarkhatarkar12/DSB-blog-App.git
cd DSB-blog-App
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file inside backend/:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the backend:

bash
Copy
Edit
npm start
3️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
🔗 API Endpoints
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create new post
GET	/api/posts/:id	Get single post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post

✅ Screenshots
(Add your screenshots here)

📌 Future Enhancements
Add user authentication (JWT)

Add comments and likes

Implement image upload for blogs

