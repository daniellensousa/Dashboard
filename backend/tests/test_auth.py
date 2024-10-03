import unittest
from app import app, db
from models import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class AuthTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    # Testa a rota de registro com sucesso
    def test_register_user(self):
        response = self.app.post('/register', json={
            'email': 'test@example.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 201)
        self.assertIn(b'test@example.com', response.data)

     # Testa o caso de um email já registrado
    def test_register_existing_user(self):
        hashed_password = bcrypt.generate_password_hash('password123').decode('utf-8')
        user = User(email='test@example.com', password=hashed_password)
        with app.app_context():
            db.session.add(user)
            db.session.commit()

        # Tenta registrar o mesmo usuário novamente
        response = self.app.post('/register', json={
            'email': 'test@example.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 409)
        self.assertIn(b'User already exists', response.data)

     # Testa a rota de login com sucesso
    def test_login_user(self):
        hashed_password = bcrypt.generate_password_hash('password123').decode('utf-8')
        user = User(email='test@example.com', password=hashed_password)
        with app.app_context():
            db.session.add(user)
            db.session.commit()

        # Tenta fazer login com as credenciais corretas
        response = self.app.post('/login', json={
            'email': 'test@example.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'test@example.com', response.data)

    # Testa a rota de login com email inexistente
    def test_login_nonexistent_user(self):
        response = self.app.post('/login', json={
            'email': 'nonexistent@example.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 401)
        self.assertIn(b'Unauthorized', response.data)

if __name__ == '__main__':
    unittest.main()
