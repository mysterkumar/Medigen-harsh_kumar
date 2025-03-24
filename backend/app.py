# Flask entry point ye rahega

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import SQLALCHEMY_DATABASE_URI

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from models import Product, Salt, Review, Description  # You’ll define these in models.py

@app.route('/')
def home():
    return {'message': 'Medigen Flask API is running!'}

if __name__ == '__main__':
    app.run(debug=True)
