# Full Stack Project 2 – Coursework App

This is my submission for the Full Stack Project 2.  
The goal was to build, secure and deploy a small full-stack application using:
- Node.js + Express backend (API)
- Simple frontend (HTML, CSS, JS)
- Secure environment variables
- Deployment on Render Web Service

---

##  Live Links

| Service | URL |
|---------|-----|
|  Live App (Render) | https://fullstack-project2-uves.onrender.com/ |
|  GitHub Repository | https://github.com/AstritPopova/fullstack.project2 |
| Video Link | https://video.laurea.fi/media/FullStack%20Project%202%20/0_anqcl2vl |

---

##  Features

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

##  Screenshots

### UI View (Localhost)
<img width="1900" height="924" alt="Screenshot 2025-12-03 174642" src="https://github.com/user-attachments/assets/971a00e8-4a74-4c10-b929-d32164c80a5f" />

### API Health Check
<img width="951" height="898" alt="Screenshot 2025-12-03 181041" src="https://github.com/user-attachments/assets/57faea4c-3d02-413d-8ad0-74c143b067bd" />

---

##  Run Locally

```bash
git clone https://github.com/AstritPopova/fullstack.project2
cd fullstack.project2
copy .env.example .env    # Windows
npm install
npm run dev
```

##  Reflection 

During this project, I learned how to build a full-stack application from scratch and how the frontend communicates with the backend through API calls. I also practiced working with CRUD operations, routing in Express, and debugging typical issues in full-stack development.

One important learning point was understanding how to handle environment variables correctly. I used .env locally and did not expose secrets publicly on GitHub. On Render, I added environment variables securely through the dashboard, which helped me understand real deployment workflows used in companies.

There were also some challenges during the work, for example connecting Git + GitHub correctly and making sure that .env was not committed to the repository. I solved these issues by checking error messages, trying different commands, and testing step by step. I also learned more about UI updates, DOM manipulation, and how to make changes appear instantly using fetch requests to the API.

Overall, I feel that I have grown in understanding how web applications work from the browser to the server side. I am happy that I was able to deploy the project successfully and see my application live online. This project increased my confidence and was great real-world practice for future work.
