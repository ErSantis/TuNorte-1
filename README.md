
# Tu Norte 2 — Fullstack Monorepo (Nx, React, Vite, Express, TypeORM)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![Status](https://img.shields.io/badge/status-MVP-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)

**Tu Norte 2** is a student-centered academic management platform designed to improve university students' productivity and campus experience. It allows users to manage subject-specific tasks, access full course details, and navigate their campus using an interactive map.

---

## 📸 Screenshots

### Login Page
![Login Page](assets/LoginPage.png)

### Main Page
![Main Page](assets/MainPage.png)

### Course Page
![Course Page](assets/CoursePage.png)
---

## 🧠 Features

- 📚 Organize tasks by course
- ⏰ Track deadlines and schedules
- 🧭 Interactive campus map with classroom directions
- 🔐 Secure login using JWT authentication
- 🎨 Responsive and modern UI design

---

## 🛠 Tech Stack

| Area       | Tech Stack                                                  |
|------------|-------------------------------------------------------------|
| Frontend   | React, Vite, Tailwind, React Router, React Query, Leaflet   |
| Backend    | Express, TypeORM, PostgreSQL, JWT, dotenv, bcrypt           |
| Monorepo   | Nx                                                          |
| UI/UX      | Material Tailwind, Bootstrap, Lucide Icons, Radix UI        |

---

## 📁 Project Structure

```
apps/
├── frontend/       # React frontend with Vite
└── backend/        # Express backend with TypeORM

libs/               # Shared libraries (if any)
```
---

## 🗃️ Database Schema

Below is the entity-relationship diagram (ERD) of the application's database:

![ERD DB](assets/ERD.png)

This diagram illustrates the relationships between main entities such as Users, Courses, Tasks, and Locations.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.x
- npm or yarn
- PostgreSQL running locally or in the cloud

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tunorte.git
cd tunorte
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create `.env` files in both `apps/backend/` and `apps/frontend/`.

#### Example `.env` for Backend (`apps/backend/.env`):

```env
DATABASE_URL=postgres://username:password@localhost:5432/tunorte_db
JWT_SECRET=your_jwt_secret
PORT=3001
```

if you dont have a PostgreSQL database running, you can do the following.

 
#### 🐳Using Docker for PostgreSQL

To run the app with a preconfigured PostgreSQL database for testing, you can use Docker. Make sure you have Docker installed and running.

in the file `docker-compose.yml` you can find the configuration for the PostgreSQL database.You can change the database name, user, and password as needed.

A seed file is configured to populate the database with some initial data. You can find it in the `./db` directory.



```bash
docker compose up -d
```

This will start a PostgreSQL container with the database. You can then connect to this database using your preferred PostgreSQL client.

Make sure to update your `.env` file accordingly with the parameters you set in the `docker-compose.yml` file.

---

## 🧑‍💻 Running the App

### Run both frontend and backend simultaneously

```bash
npx nx run-many --target=serve --projects=frontend,backend --parallel
```

### Run individually

- **Frontend**: `npx nx serve frontend`
- **Backend**: `npx nx serve backend`

### Build for production

```bash
npx nx build frontend
npx nx build backend
```

---

## ⚙️ Useful Nx Scripts

| Action             | Command                              |
|--------------------|--------------------------------------|
| Build frontend     | `npx nx build frontend`              |
| Build backend      | `npx nx build backend`               |
| Start frontend     | `npx nx serve frontend`              |
| Start backend      | `npx nx serve backend`               |
| Lint               | `npx nx lint`                        |
| Format code        | `npx nx format:write`                |
| Run tests          | _*to be implemented*_                |

---

## 📦 Deployment

To deploy, build the apps and serve them via Docker, PM2, or a hosting platform:

```bash
npx nx build frontend
npx nx build backend
```

Then deploy the contents of `dist/apps/frontend/` and `dist/apps/backend/` accordingly.

---

## 📄 License

MIT License — see [`LICENSE`](./LICENSE)

---

## 👨‍💻 Authors

Developed by:
Me :)