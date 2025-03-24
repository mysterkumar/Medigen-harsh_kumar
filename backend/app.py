# Flask entry point ye rahega

# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from config import SQLALCHEMY_DATABASE_URI
from models import db, Product, Salt, ProductSalt, Review, Description

app = Flask(__name__)
CORS(app)

# Config
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Use .env in real projects

# Initialize extensions
db.init_app(app)
jwt = JWTManager(app)

@app.route('/')
def home():
    return {'message': 'Medigen Flask API is running ✅'}


# /login (Dummy Auth)


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username == 'admin' and password == 'admin':
        access_token = create_access_token(identity=username)
        return jsonify(token=access_token), 200
    else:
        return jsonify({'msg': 'Invalid credentials'}), 401

#  /products


@app.route('/products', methods=['GET'])
@jwt_required()
def get_products():
    products = Product.query.all()
    result = [{
        'id': p.id,
        'name': p.name,
        'manufacturer': p.manufacturer,
        'price': p.price,
        'quantity': p.quantity,
        'image_url': p.image_url
    } for p in products]
    return jsonify(result)

#  /salts/<product_id>

@app.route('/salts/<int:product_id>', methods=['GET'])
@jwt_required()
def get_salts(product_id):
    mappings = ProductSalt.query.filter_by(product_id=product_id).all()
    result = [{
        'id': s.salt.id,
        'name': s.salt.name,
        'description': s.salt.description
    } for s in mappings]
    return jsonify(result)


#  /reviews/<product_id>


@app.route('/reviews/<int:product_id>', methods=['GET'])
@jwt_required()
def get_reviews(product_id):
    reviews = Review.query.filter_by(product_id=product_id).all()
    result = [{
        'rating': r.rating,
        'review_text': r.review_text
    } for r in reviews]
    return jsonify(result)

#  /descriptions/<product_id>

@app.route('/descriptions/<int:product_id>', methods=['GET'])  
@jwt_required()  
def get_description(product_id):  
    desc = Description.query.filter_by(product_id=product_id).first()  
    if desc:  
        return jsonify({  
            'id': desc.id,  
            'product_id': desc.product_id,  
            'content': desc.content if desc.content else "No description available."  
        })  
    else:  
        return jsonify({'msg': 'Not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
