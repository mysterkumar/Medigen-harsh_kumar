# this file is being used to inject the dummy data in mysql. I added fresh start so whenever it runs it provide fresh data

from app import app, db
from models import Product, Salt, ProductSalt, Review, Description

with app.app_context():

#just to start fresh, nothing else. i mean the previous data that you might have injected will be removed

    db.session.query(Description).delete()
    db.session.query(Review).delete()
    db.session.query(ProductSalt).delete()
    db.session.query(Salt).delete()
    db.session.query(Product).delete()
    db.session.commit()

# Rest creations starts from here

    db.create_all()

    # Products
    p1 = Product(name="Dolo 650", manufacturer="Micro Labs Ltd", price=30.00, quantity="15 Tablets", image_url="https://d26lh6sqkii1nb.cloudfront.net/products/41532_0559-DOLO-650(2).jpg")
    p2 = Product(name="Paracetamol 500", manufacturer="Cipla Ltd", price=25.00, quantity="10 Tablets", image_url="https://d26lh6sqkii1nb.cloudfront.net/products/06859_0712-PARACETAMOL%20500MG.jpg")

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
    print("Dummy data inserted ✅")
