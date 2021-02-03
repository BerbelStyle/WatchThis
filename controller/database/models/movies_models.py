from database.db import db


class Movies(db.Document):
    type = db.StringField(required=True)
    name = db.StringField(required=True)
    description = db.StringField(required=True)
    genres = db.ListField(db.StringField(), required=True)
    director = db.StringField(required=True)
    duration = db.StringField(required=True)
    cast = db.ListField(db.StringField(), required=True)
    img_url = db.StringField(required=True)
    link = db.ListField(db.StringField(), required=True)
