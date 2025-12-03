# Full Stack Project 2 – Coursework API, Database and UI

This repository contains a small full-stack example that follows the **Full Stack Project 2** instructions.

The project includes:

- A Node.js / Express API server (`server.js`)
- A minimal but clean frontend in `/public` that talks to the API
- Environment variable handling with `.env` / `.env.example`
- A professional `.gitignore`
- Ready structure for deployment to **Render Web Service**

> ⚠️ Remember: do **not** commit real secrets or database URLs. Only use `.env` locally and Render's Environment tab in production.

---

## 1. Features (short list)

Feel free to rewrite this list to match your own design.

- Health check endpoint: `GET /api/health`
- Simple in-memory "items" collection with:
  - `GET /api/items` – list all items
  - `POST /api/items` – add a new item
  - `PATCH /api/items/:id` – edit item name or mark as done / not done
  - `DELETE /api/items/:id` – delete an item
- Frontend UI to:
  - Check API health
  - View items
  - Add new items
  - Edit, mark as done and delete items
- Ready to be connected to a real PostgreSQL or MongoDB database using `DATABASE_URL` or `MONGODB_URI`.

---

## 2. Getting started locally

### 2.1 Requirements

- Node.js 18 or newer
- npm (comes with Node.js)
- A terminal (PowerShell / Command Prompt on Windows, Terminal on macOS)

### 2.2 Steps (Windows & macOS)

1. **Clone or download** this repository.
2. Open the project folder in VS Code.
3. Copy `.env.example` to `.env` and edit values:

   ```bash
   cp .env.example .env      # macOS / Linux
   # or on Windows (PowerShell)
   copy .env.example .env
   ```

   - Set `PORT` if you want a custom port (3000 is fine).
   - For this demo app `DATABASE_URL` is not really used yet, but it is ready for a student database.
   - Choose a random strong string for `JWT_SECRET`.

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the server in development:

   ```bash
   npm run dev
   # or
   npm start
   ```

6. Open the browser at:

   - <http://localhost:3000> – frontend
   - <http://localhost:3000/api/health> – JSON health check
   - <http://localhost:3000/api/items> – JSON list of items

---

## 3. Environment variables & security

**Never commit real secrets.** This project uses:

- `.gitignore` – ignores:
  - `node_modules/`
  - `.env` and `.env.*`
  - local database files (`*.db`, `*.sqlite`, etc.)
  - logs, build outputs, editor settings
- `.env.example` – documents required environment variables with **fake or placeholder values**.

For local development:

1. Create `.env` from `.env.example`.
2. Fill in **real** values on your computer only.

For Render deployment:

1. Go to **Render Dashboard → Your Web Service → Environment**.
2. Add the same keys and real values there (for example):

   - `PORT`
   - `DATABASE_URL` or `MONGODB_URI`
   - `JWT_SECRET`
   - Any third-party API keys

3. Click **Save** and **Redeploy** if needed.

Do **not** paste secrets into:

- README
- Demo video
- Screenshots
- Canvas / assignment text fields

---

## 4. Deploying to Render Web Service

1. Ensure your project is in a Git repository:

   ```bash
   git init
   git add .
   git commit -m "chore: initialise Project 2 with API, DB config and docs"
   ```

2. Create a new repository on GitHub, for example `fs-project2`.

3. Connect and push:

   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fs-project2.git
   git push -u origin main
   ```

4. Open <https://render.com>, log in, and click **New → Web Service**.

5. Connect your GitHub repository.

6. Configure:

   - **Runtime**: Node
   - **Build command**: `npm install`
   - **Start command**: `npm start`

7. After deployment is live, open the public URL and test:

   - `/` (frontend)
   - `/api/health`
   - `/api/items`

8. In Render, open the **Environment** tab and add:

   - `PORT` (e.g. 10000 or leave empty and let Render choose)
   - `DATABASE_URL` or `MONGODB_URI`
   - `JWT_SECRET`
   - Any other keys you need

9. Save and redeploy if needed.


## 6. Reflection (200–300 words) – template

 In this project I practised building and deploying a small full-stack application using Node.js, Express and a simple frontend. The main learning goal was to understand how the API, basic CRUD operations and deployment to Render work together.
 
  I started by setting up the basic Express server and creating a JSON API with endpoints for listing, creating, updating and deleting items. After that I added a minimal but clean frontend inside the `public` folder to test the API with real user interactions. One important part of the work was to handle environment variables correctly. I used `.env` locally and `.env.example` plus the Render Environment tab to keep all secrets out of GitHub.
  
   During the work I faced some issues (for example, [ADD YOUR OWN ISSUES HERE]) but I solved them by [DESCRIBE HOW – e.g. checking logs, reading error messages carefully, asking for help, using documentation or Stack Overflow]. This process helped me to become more confident with troubleshooting.
   
    Overall, I feel that I reached the learning targets of the course. I now have a clearer picture of how to structure a small full-stack project, how to prepare it for deployment and how to keep the repository clean and safe.