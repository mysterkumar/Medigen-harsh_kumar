from app import app, db
from models import Product, Salt, ProductSalt, Review, Description

with app.app_context():
    db.create_all()

    # Products
    p1 = Product(name="Dolo 650", manufacturer="Micro Labs Ltd", price=30.00, quantity="15 Tablets", image_url="https://dummyimage.com/100x100/000/fff&text=Dolo")
    p2 = Product(name="Paracetamol 500", manufacturer="Cipla Ltd", price=25.00, quantity="10 Tablets", image_url="https://dummyimage.com/100x100/000/fff&text=PCM")

    db.session.add_all([p1, p2])
    db.session.commit()

    # Salts
    s1 = Salt(name="Paracetamol", description="Used to treat fever and mild to moderate pain.")
    s2 = Salt(name="Caffeine", description="Enhances pain relief from paracetamol or aspirin.")
    db.session.add_all([s1, s2])
    db.session.commit()

    # Product-Salt Mapping
    db.session.add_all([
        ProductSalt(product_id=p1.id, salt_id=s1.id),
        ProductSalt(product_id=p2.id, salt_id=s1.id),
        ProductSalt(product_id=p2.id, salt_id=s2.id),
    ])

    # Reviews
    db.session.add_all([
        Review(product_id=p1.id, rating=4, review_text="Effective and affordable"),
        Review(product_id=p2.id, rating=5, review_text="Works quickly and no side effects"),
    ])

    # Descriptions
    db.session.add_all([
        Description(product_id=p1.id, content="Dolo 650 is a commonly used medication for fever and pain relief."),
        Description(product_id=p2.id, content="Paracetamol 500 is ideal for fast fever reduction and minor aches."),
    ])

    db.session.commit()
    print("Dummy data inserted")
