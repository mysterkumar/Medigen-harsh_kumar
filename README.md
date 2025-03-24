---

# 💊 Medigen – Medicine Comparison Web App

This is a full-stack single-page application built for an interview task. The project includes:

- ✅ **React** frontend for UI
- ✅ **Flask** backend API
- ✅ **MySQL** database for dynamic content
- ✅ **JWT-based authentication**
- ✅ Responsive design for desktop and mobile

---

## 🗂️ Project Structure

```
medigen-harsh_kumar/
├── backend/                    # Flask backend API
│ ├── app.py
│ ├── config.py
│ ├── models.py
│ ├── dummy_data.py             # Populates sample data
│ ├── requirements.txt
├── database/                   # DB schema
│ └── db_init.sql
├── frontend/                   # React app
│ ├── public/
│ ├── src/
├── docs/                
│ └── documentation/            # Documentation and API proof
│ └── postman_screenshots/      # Postman screenshots for API testing
├── README.md                   # This file
```

---

## 🧪 How to Run Locally

### 🐍 Backend (Flask API)

1. Go to backend directory:

```bash
cd backend
```

2. Create a virtual environment and activate it:

```bash
python -m venv venv
venv\Scripts\activate      # On Windows
# source venv/bin/activate # On macOS/Linux
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Set up MySQL:
- Install MySQL Server & Workbench
- Create a new connection (host: `127.0.0.1`, port: `3306`, user: `root`)
- Run the SQL script in `database/db_init.sql` to create tables

5. Insert sample data:

```bash
python dummy_data.py
```

6. Start Flask server:

```bash
python app.py
```

API runs at: `http://localhost:5000`

---

### ⚛️ Frontend (React App)

1. Go to frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm start
```

App runs at: `http://localhost:3000`

---

## 🔐 Authentication

A dummy login system is implemented using a username/password prompt.  
After login, a **JWT token** is returned and used for authenticating protected routes.

---

## 📦 API Endpoints

| Method | Endpoint                      | Description                        |
|--------|-------------------------------|------------------------------------|
| POST   | `/login`                      | Dummy login with username/password |
| GET    | `/products`                   | Get all products                   |
| GET    | `/salts/<product_id>`         | Get salt content for product       |
| GET    | `/reviews/<product_id>`       | Get reviews for product            |
| GET    | `/descriptions/<product_id>`  | Get product description            |

---

## 📊 Database Tables

- `products`
- `salts`
- `product_salts` (many-to-many)
- `reviews`
- `descriptions`

All tables are normalized and relationally linked.

---

## 📱 Features

- Fully dynamic UI (no hardcoded data in frontend)
- Responsive layout (mobile + desktop)
- Component-based React structure
- Uses React Context for state (token, product data)
- Flask REST API with SQLAlchemy + JWT
- MySQL DB integration with sample data

---

## 📌 Notes

- All logos/images used are from public placeholder sources.
- This project is for demo/interview purposes only.
```