from models import db, Agency, Consultation, Newsletter, SafetyPlan
from flask_migrate import Migrate
from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource
#from keys import username, password
import os



BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}"
)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True
app.json.compact = False



migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''
#get all resources
class AgencyC(Resource):
    def get(self):
        agencies = Agency.query.all()
        print(agencies[0])
        agencies_to_dict = [agency.to_dict() for agency in agencies]
        
        response = make_response(jsonify(agencies_to_dict), 200)#converts each resource into an obj and then makes a json response
        
        return response

api.add_resource(AgencyC, '/agencies')

#get resources by id
class AgencyById(Resource):
    def get(self, id):
        agency = Agency.query.filter(Agency.id == id).first()
        if agency:
            response = make_response(jsonify(agency.to_dict()),200)
            return response
        else:
            response = make_response({"error":"Agency not found"}, 404)
            return response
api.add_resource(AgencyById, '/agencies/<int:id>')

#get and post subscribers to newsletter
class NewsletterC(Resource):
    def get(self):
        subscribers = Newsletter.query.all()
        subs_to_dict = [subscriber.to_dict() for subscriber in subscribers]

        response = make_response(jsonify(subs_to_dict), 200)

        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_subscriber = Newsletter(
                name = data['name'],
                email = data['email']
            )
            db.session.add(new_subscriber)
            db.session.commit()

            response = make_response(jsonify(new_subscriber.to_dict()), 201)
        
        except ValueError:

            response = make_response({"error":["validation errors"]}, 400)

        return response
    
api.add_resource(NewsletterC, '/newsletter')

#patch and delete subscriber information for Newsletter
class NewsletterById(Resource):

    def patch(self, id):
        subscriber = Newsletter.query.filter(Newsletter.id == id).first()

        if not subscriber:
            return make_response({"error": "Newsletter subscriber not found"}, 404)

        try:
            data = request.get_json()

            for key in data:
                setattr(subscriber, key, data[key])

            db.session.commit()

            response = make_response(jsonify(subscriber.to_dict()), 202)

        except ValueError:
            response = make_response({"errors": ["Validation errors"]}, 400)

        return response
    
    def delete(self, id):
        subscriber = Newsletter.query.filter(Newsletter.id == id).first()

        if subscriber:
            
            db.session.delete(subscriber)
            db.session.commit()

            response = make_response({}, 204)
        
        else:   
            response = make_response({"error":"Subscriber not found"}, 404)
            
        return response

api.add_resource(NewsletterById, '/newsletter/<int:id>')

#get & post consultations 
class ConsultationC(Resource):
    def get(self):
        consultations = Consultation.query.all()
        consultations_to_dict = [consultation.to_dict() for consultation in consultations]
        
        response = make_response(jsonify(consultations_to_dict), 200)
        
        return response

    def post(self):
        data = request.get_json()

        try:
            new_consultation = Consultation(
                name=data.get('name', ''),     
                email=data.get('email', ''),   
                message=data.get('message', '') 
            )
            print(new_consultation)
            db.session.add(new_consultation)
            db.session.commit()

            response = make_response(jsonify(new_consultation.to_dict()),201)
        except ValueError:
            response = make_response({"error":["validation errors"]}, 400)
            return response
api.add_resource(ConsultationC, '/consultations')

#get, patch & delete consultations
class ConsultationById(Resource):
    def get(self, id):
        consultation = Consultation.query.filter(Consultation.id == id).first()
        if consultation:
            response = make_response(jsonify(consultation.to_dict()),200)
            return response
        else:
            response = make_response({"error":"Consultation Request Not Fount"})  
            return response

    def patch(self, id):
        data = request.get_json()

        try:
            consultation = Consultation.query.get(id)
            if not consultation:
                return make_response(jsonify({"error": "Consultation not found"}), 404)

            if 'name' in data:
                consultation.name = data['name']
            if 'email' in data:
                consultation.email = data['email']
            if 'message' in data:
                consultation.message = data['message']

            db.session.commit()

            return make_response(consultation.to_dict(), 200)
        
        except ValueError:
            return make_response({"error": ["validation errors"]}, 400)

    def delete(self, id):
        consultation = Consultation.query.get(id)
        if not consultation:
            return make_response(jsonify({"error": "Consultation not found"}), 404)

        db.session.delete(consultation)
        db.session.commit()
    
api.add_resource(ConsultationById, '/consultations/<int:id>')



class GenerateSafetyPlan(Resource):
    def get(self):
        safetyplans = SafetyPlan.query.all()
        safetyplans_to_dict = [safetyplan.to_dict() for safetyplan in safetyplans]

        response = make_response(jsonify(safetyplans_to_dict), 200)

        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_safety_plan = SafetyPlan(
            #email = f"{data['email']}",
            question1 = f"1. Reach out to these trusted people: {data['question1']}",
            question2 = f"2. This is how you're going to travel to safety: {data['question2']}",
            question3 = f"3. Safe locations outside your home: {data['question3']}",
            question4 = f"4. People you can trust and confide in about your situation: {data['question4']}",
            question5 = f"5. Physical description of the person: {data['question5']}"
            )
            print(new_safety_plan)
            db.session.add(new_safety_plan)
            db.session.commit()

            response = make_response(jsonify(new_safety_plan.to_dict()),201)
    
        except ValueError:
        
            response = make_response({"error":["validation errors"]}, 400)
    
        return response

api.add_resource(GenerateSafetyPlan, '/generate_safety_plan')




if __name__ == '__main__':
    app.run(port=5555, debug=True)

    







