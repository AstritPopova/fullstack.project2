# Full Stack Project 2 – Coursework App

This is my submission for the Full Stack Project 2.  
The goal was to build, secure and deploy a small full-stack application using:
- Node.js + Express backend (API)
- Simple frontend (HTML, CSS, JS)
- Secure environment variables
- Deployment on Render Web Service

---

## 🔗 Live Links

| Service | URL |
|---------|-----|
| 🌍 Live App (Render) | https://fullstack-project2-uves.onrender.com/ |
| 📦 GitHub Repository | https://github.com/AstritPopova/fullstack.project2 |

---

## 🧩 Features

- Health Check endpoint: `GET /api/health`
- CRUD API for items:
  - `GET /api/items` – list all
  - `POST /api/items` – add new
  - `PATCH /api/items/:id` – edit / mark done
  - `DELETE /api/items/:id` – remove
- UI to:
  - Add, edit, delete and mark items done in real time
  - See API connection through Health Check button
- In-memory data (resets when server restarts)

---

## 🖥️ Screenshots

### UI View (Localhost)
<img width="1900" height="924" alt="Screenshot 2025-12-03 174642" src="https://github.com/user-attachments/assets/971a00e8-4a74-4c10-b929-d32164c80a5f" />

### API Health Check
<img width="951" height="898" alt="Screenshot 2025-12-03 181041" src="https://github.com/user-attachments/assets/57faea4c-3d02-413d-8ad0-74c143b067bd" />

---

## 🚀 Run Locally

```bash
git clone https://github.com/AstritPopova/fullstack.project2
cd fullstack.project2
copy .env.example .env    # Windows
npm install
npm run dev
