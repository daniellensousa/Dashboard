from flask import Flask
from config import ApplicationConfig
from models import db
from flask_cors import CORS
from routes.auth_routes import auth_routes
from routes.order_routes import order_routes

app = Flask(__name__)
app.config.from_object(ApplicationConfig)
CORS(app)
db.init_app(app)

app.register_blueprint(auth_routes)
app.register_blueprint(order_routes)

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
