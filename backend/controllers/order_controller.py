from flask import request, jsonify
from order import db, Order
from sqlalchemy import func
from datetime import datetime, timedelta

def get_orders():
    month = request.args.get('date')
    if month:
        start_date = datetime.strptime(month, '%Y-%m')
        end_date = start_date.replace(day=1) + timedelta(days=32)
        end_date = end_date.replace(day=1)

        orders = Order.query.filter(Order.date >= start_date, Order.date < end_date).all()
    else:
        orders = Order.query.all()

    return jsonify([{
        'id': order.id,
        'date': order.date.isoformat(),
        'customer': order.customer,
        'payment': order.payment,
        'total': order.total,
        'delivery': order.delivery,
        'items': [{'product_name': item.product_name, 'quantity': item.quantity, 'price': item.price} for item in order.items],
        'fulfillment': order.fulfillment
    } for order in orders])

def create_order():
    try:
        data = request.get_json()
        new_order = Order(
            date=datetime.strptime(data['date'], '%Y-%m-%d'),
            customer=data['customer'],
            payment=data['payment'],
            total=data['total'],
            delivery=data['delivery'],
            fulfillment=data['fulfillment']
        )

        db.session.add(new_order)
        db.session.commit()

        return jsonify({'message': 'Order created', 'id': new_order.id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def count_orders():
    current_month = datetime.now().month
    last_month = current_month - 1 if current_month > 1 else 12
    current_year = datetime.now().year
    last_month_year = current_year if current_month > 1 else current_year - 1

    current_month_orders = db.session.query(func.count(Order.id)).filter(
        func.extract('month', Order.date) == current_month,
        func.extract('year', Order.date) == current_year
    ).scalar()

    last_month_orders = db.session.query(func.count(Order.id)).filter(
        func.extract('month', Order.date) == last_month,
        func.extract('year', Order.date) == last_month_year
    ).scalar()

    return jsonify({
        'current_month_orders': current_month_orders,
        'last_month_orders': last_month_orders
    })
