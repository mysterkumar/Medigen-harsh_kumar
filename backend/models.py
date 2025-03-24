# SQLAlchemy model ye hoga (Db main table populate karne k liye)

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    manufacturer = db.Column(db.String(255))
    price = db.Column(db.Float)
    quantity = db.Column(db.String(50))
    image_url = db.Column(db.Text)

    salts = db.relationship('ProductSalt', backref='product', lazy=True)
    reviews = db.relationship('Review', backref='product', lazy=True)
    description = db.relationship('Description', backref='product', uselist=False)


class Salt(db.Model):
    __tablename__ = 'salts'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)

    products = db.relationship('ProductSalt', backref='salt', lazy=True)


class ProductSalt(db.Model):
    __tablename__ = 'product_salts'
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    salt_id = db.Column(db.Integer, db.ForeignKey('salts.id'))


class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    rating = db.Column(db.Integer)
    review_text = db.Column(db.Text)


class Description(db.Model):
    __tablename__ = 'descriptions'
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    content = db.Column(db.Text)
