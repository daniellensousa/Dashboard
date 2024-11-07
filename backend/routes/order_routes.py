from flask import Blueprint
from controllers.order_controller import get_orders, count_orders, create_order  # Importe todas as funções

order_routes = Blueprint('order_routes', __name__)

order_routes.route('/orders', methods=['GET'])(get_orders)
order_routes.route('/orders', methods=['POST'])(create_order)
order_routes.route('/orders/count', methods=['GET'])(count_orders)
