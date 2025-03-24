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
├── backend/              # Flask backend API
│   ├── app.py
│   ├── config.py
│   ├── models.py
│   └── requirements.txt
├── database/             # DB schema and dummy data
│   └── db_init.sql
├── frontend/             # React app
│   ├── public/
│   ├── src/
├── README.md             # This file
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
- Create a database
- Run the SQL script in `database/db_init.sql` to initialize schema and insert sample data.

5. Start Flask server:

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

A dummy login system is implemented using username and password prompt (for demo purposes). Upon login, a JWT token is fetched and used to authenticate API requests.

---

## 📦 API Endpoints

| Method | Endpoint                    | Description                       |
|--------|-----------------------------|-----------------------------------|
| POST   | `/login`                    | Dummy login with username/password |
| GET    | `/products`                 | Get list of products              |
| GET    | `/salts/<product_id>`       | Get salt info for product         |
| GET    | `/reviews/<product_id>`     | Get product reviews               |
| GET    | `/descriptions/<product_id>`| Get product description           |

---

## 📊 Database Tables

- `products`
- `salts`
- `product_salts` (many-to-many)
- `reviews`
- `descriptions`

All tables are normalized to maintain clean data design.

---

## 📱 Features

- Fully dynamic UI (no hardcoded data)
- Responsive layout (mobile + desktop)
- Component-based structure
- Uses React Context for global state
- Flask API with SQLAlchemy and JWT
- MySQL database with sample data

---

## 📌 Notes

- All dummy images and logos used are from public sources.
- This project is for interview/demo purposes only.

---