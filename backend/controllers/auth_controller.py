from flask import request, jsonify, abort
from flask_bcrypt import Bcrypt
from models import db, User
import traceback

bcrypt = Bcrypt()

def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8') 
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    }), 201

def login_user():
    try:
        email = request.json["email"]
        password = request.json["password"]

        user = User.query.filter_by(email=email).first()

        if user is None:
            return jsonify({"error": "Unauthorized"}), 401
        if not bcrypt.check_password_hash(user.password, password):
            return jsonify({"error": "Unauthorized"}), 401

        return jsonify({
            "id": user.id,
            "email": user.email
        }), 200

    except Exception as e:
        # Log the error details (opcional, útil para depuração)
        traceback.print_exc()  # Isso imprime o rastreamento completo do erro no console
        return jsonify({"error": "Internal Server Error", "message": str(e)}), 500