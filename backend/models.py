from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Newsletter(db.Model,SerializerMixin):
    __tablename__ = 'newsletter_signups'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    
    def __repr__(self):
        return f"Newsletter(id={self.id}, name='{self.name}', email='{self.email}')"
#add validations for name, address, and description to make sure field isn't empty
    @validates('name', 'email')
    def validate_non_empty_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value   
        
class Agency(db.Model, SerializerMixin):
    __tablename__ = 'agencies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    fulladdress = db.Column(db.String)
    zipcode = db.Column(db.String)
    category = db.Column(db.String)
    phone = db.Column(db.String)
    google_maps_url = db.Column(db.String)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    website = db.Column(db.String)
    opening_hours = db.Column(db.Text)

#add relationship
    # consultations = db.relationship('Consultation', secondary='consultationAgencies', backref='agencies')
    consultations = db.relationship('Consultation', backref='agency')

    #this is a fix for SerializerMixIn not working properly.
    #Caused error "AttributeError: 'Agency' object has no attribute 'o'" <<<*note Letter kept changing
    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
#add __repr__ for debugging purposes
    def __repr__(self):
        return f"Agency(id={self.id}, name='{self.name}', image='{self.image}', fulladdress='{self.fulladdress}', phone='{self.phone}', category='{self.category}', google_maps_url='{self.google_maps_url}', latitude={self.latitude}, longitude={self.longitude}, website='{self.website}', opening_hours='{self.opening_hours}')"

#add serialization
#Exclude consultations relationship
    serialize_rules = ('-consultations')

#add validations for name, address, and description to make sure field isn't empty
    @validates('name', 'fulladdress', 'phone','category')
    def validate_non_empty_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value

class SafetyPlan(db.Model, SerializerMixin):
    __tablename__ = 'safetyplans'

    id = db.Column(db.Integer, primary_key=True)
    question1 = db.Column(db.String)
    question2 = db.Column(db.String)
    question3 = db.Column(db.String)
    question4 = db.Column(db.String)
    question5= db.Column(db.String)



#add __repr__ for debugging purposes
    def __repr__(self):
            return f"SafetyPlan(id={self.id}, question1 ='{self.question1}'),question2 ='{self.question2}'),question3 ='{self.question3}'),question4 ='{self.question4}'),question5 ='{self.question5}'),"
    

#add validation to check that plan_content and creation_date fields are not empty
    @validates('question_1', 'question_2', 'question_3', 'question_4', 'question_5')
    def validate_question_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value
        

class Consultation(db.Model, SerializerMixin):
    __tablename__ = 'consultations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    message = db.Column(db.String)

#add relationship
    # agencies = db.relationship('Agency', secondary='consultationAgencies', backref='consultations')
    agency_id = db.Column(db.Integer, db.ForeignKey('agencies.id'))

#add__repr__ for debugging purposes
    def __repr__(self):
        return f"Consultation(id={self.id}, name='{self.name}', email='{self.email}', message='{self.message}')"

#add serialization
#Exclude consultation_agencies relationship
    serialize_rules = ('-consultation_agencies.consultation',)  

#add validation
    @validates('name', 'email', 'subject', 'message')
    def validate_non_empty_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value
        
# class ConsultationAppt(db.Model, SerializerMixin):
#     __tablename__= 'consultationAgencies'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String)
#     email = db.Column(db.String)
#     day = db.Column(db.String)
#     startTime = db.Column(db.String)
#     endTime = db.Column(db.String)

class ConsultationAgency(db.Model, SerializerMixin):
    __tablename__= 'consultationAgencies'
    id = db.Column(db.Integer, primary_key=True)
    consultation_id = db.Column(db.Integer, db.ForeignKey('consultations.id'))
    agency_id = db.Column(db.Integer, db.ForeignKey('agencies.id'))

#add __repr__ for debugging purposes
    def __repr__(self):
        return f"ConsultationAgency(consultation_id={self.consultation_id}, agency_id={self.agency_id})"
    
#add serialization
#Exclude consultation_resources relationship
    serialize_rules = ('-consultation_agencies.agency',) 

