import time
from flask import Flask
from flask_cors import CORS , cross_origin
import Config

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, support_credentials=True)

@app.route('/')
@cross_origin(support_credentials=True)
def get_default_msg():
    return "Welcome to EY Hackpions 3"


@app.route('/time')
@cross_origin(support_credentials=True)
def get_current_time():
    return {'time': time.time()}


app.run(port=5000, debug=True)
