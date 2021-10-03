from flask import Flask, request, jsonify
import requests
import json

app = Flask(__name__)
api_key = "yODx9w6WUkq27c1Vb3HlQsMiUlxcTVlC"


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/timelines", methods=['GET'])
def timelines():
    data = request.args
    lat = data["lat"]
    lng = data["lng"]

    return jsonify(data)


def request_1d_data(lat: str, lng: str):
    url = "https://api.tomorrow.io/v4/timelines"

    querystring = {"location": str(lat) + "," + str(lng),
                   "fields": ["temperature", "temperatureApparent", "temperatureMin", "temperatureMax", "windSpeed",
                              "windDirection", "humidity", "pressureSeaLevel", "uvIndex", "weatherCode",
                              "precipitationProbability", "precipitationType", "sunriseTime", "sunsetTime",
                              "visibility", "moonPhase", "cloudCover"], "units": "imperial", "timesteps": "1d",
                   "timezone": "America/Los_Angeles", "apikey": api_key}

    headers = {"Accept": "application/json"}

    response = requests.request("GET", url, headers=headers, params=querystring)

    return jsonify(response.text)


@app.route("/example")
def example():
    with open('example_1.json') as json_file:
        data = json.load(json_file)
        return jsonify(data)
