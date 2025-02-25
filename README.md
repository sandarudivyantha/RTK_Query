# RTK Query CRUD Web Application

This is a full-stack web application that demonstrates CRUD (Create, Read, Update, Delete) operations using **Express.js** for the backend and **React.js with Redux Toolkit Query (RTK Query)** for the frontend.

## Features
- Fetch all data from the API
- Fetch a single data entry by ID
- Add new data entries
- Update existing data entries
- Delete data entries

## Technologies Used
### Backend:
- Node.js
- Express.js
- CORS
- File System (fs) for handling JSON data as a mock database

### Frontend:
- React.js
- Redux Toolkit Query (RTK Query)
- React Hooks

---

## Project Structure
```
📂 RTK-Query-CRUD-App
│-- 📂 backend
│   │-- 📂 db
│   │   ├── db.json (Mock database)
│   │-- server.js (Backend API server)
│
│-- 📂 client
│   │-- 📂 src
│   │   ├── 📂 api (API service using RTK Query)
│   │   │   ├── dataApi.js
│   │   ├── 📂 store (Redux store setup)
│   │   │   ├── store.js
│   │   ├── App.js (React frontend)
│   │-- index.js (React entry point)
│
```

---

## Backend Setup
The backend is built using **Express.js** and serves data stored in a `db.json` file. It provides the following API endpoints:

### Endpoints
| Method | Route       | Description                        |
|--------|------------|------------------------------------|
| GET    | `/`        | Root route to test the server     |
| GET    | `/api`     | Fetch all data                    |
| GET    | `/api/:id` | Fetch data by ID                  |
| POST   | `/api`     | Add new data                      |
| PUT    | `/api/:id` | Update existing data by ID        |
| DELETE | `/api/:id` | Delete data by ID                 |

### Running the Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   nodemon server.js
   ```
4. The backend will be running at `http://localhost:5000`

---

## Frontend Setup
The frontend is built with **React.js** and uses **RTK Query** for handling API requests efficiently.

### API Service (dataApi.js)
- `useGetAllDataQuery()` → Fetches all data from the backend.
- `useGetDataByIdQuery(id)` → Fetches a single entry by ID.
- `useAddDataMutation()` → Adds a new data entry.
- `useUpdateDataByIdMutation()` → Updates an existing entry.
- `useDeleteDataByIdMutation()` → Deletes an entry.

### Redux Store (store.js)
The Redux store integrates `dataApi` for global state management.

### Running the Frontend
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in the browser.

---

## How It Works
- **Fetching Data:** The `App.js` component fetches and displays all data from the backend.
- **Adding Data:** Clicking the "Add Data" button sends a new data entry to the backend.
- **Updating Data:** Clicking "Update Data" modifies an existing entry.
- **Deleting Data:** Clicking "Delete Data" removes an entry from the database.
- **Fetching Single Data Entry:** The `SingleDataComponent` fetches and displays data by ID.

---

## Future Enhancements
- Connect the backend to a real database (MongoDB or PostgreSQL)
- Improve UI with Material-UI or Tailwind CSS
- Implement authentication using JWT

---

## Author
**Sandaru Divyantha**

Happy Coding! 🚀

