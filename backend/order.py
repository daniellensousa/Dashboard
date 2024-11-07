# order.py
from models import db
from uuid import uuid4

def get_uuid4():
    return uuid4().hex

class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.String(32), primary_key=True, default=get_uuid4)
    date = db.Column(db.Date, nullable=False)
    customer = db.Column(db.String(100), nullable=False)
    payment = db.Column(db.String(50), nullable=False)
    total = db.Column(db.Float, nullable=False)
    delivery = db.Column(db.String(100), nullable=False)
    items = db.relationship('OrderItem', backref='order', lazy=True)
    fulfillment = db.Column(db.String(50), nullable=False)

class OrderItem(db.Model):
    __tablename__ = 'order_items'
    id = db.Column(db.String(32), primary_key=True, default=get_uuid4)
    order_id = db.Column(db.String(32), db.ForeignKey('orders.id'), nullable=False)
    product_name = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
