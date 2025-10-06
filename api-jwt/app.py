from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config["JWT_SECRET_KEY"] = "4geeks"
db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app)

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)
    username = db.Column(db.String(250), nullable=False)
    password = db.Column(db.String(250), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "username": self.username,
            "password": self.password
        }
    
@app.route("/users", methods=["GET", "POST"])
def getOrAddUser():
    if (request.method == "GET"):
        result = User.query.all()
        result = list(map(lambda x: x.serialize(), result))
    
        return jsonify(result)
    elif (request.method == "POST"):
        datos = request.get_json()
        result = User(name=datos["name"], lastname=datos["lastname"], username=datos["username"], password=datos["password"])
        db.session.add(result)
        db.session.commit()

        return jsonify({"estado":"ok", "mensaje":"El Usuario se agregó correctamente!"})

@app.route("/users/<int:id>", methods=["GET", "DELETE"])
def getOrDeleteUser(id):
    result = User.query.get(id)

    if result is None:
        return jsonify({"estado":"error", "mensaje":"No se encontró al Usuario!"}), 400
    
    if (request.method == "GET"):
        return User.serialize(result)    
    elif (request.method == "DELETE"):
        db.session.delete(result)
        db.session.commit()
        
        return jsonify({"estado":"ok", "mensaje":"El Usuario se eliminó correctamente!"})
    
@app.route("/token", methods=["POST"])
def generateToken():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username, password=password).first()

    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=str(user.id))

    return jsonify({ "token": access_token, "user_id": user.id, "user_name": user.name, "user_username": user.username })

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user is None:
        return jsonify({"msg": "No sé encontró un Usuario!"}), 401

    return jsonify({"id": user.id, "name": user.name, "lastname": user.lastname, "username": user.username }), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0')