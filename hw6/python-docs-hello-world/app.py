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
    response = jsonify(request_1d_data(lat, lng))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


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
    return response.json()


def request_current_data(lat: str, lng: str):
    url = "https://api.tomorrow.io/v4/timelines"

    querystring = {"location": str(lat) + "," + str(lng),
                   "fields": ["temperature", "temperatureApparent", "temperatureMin", "temperatureMax", "windSpeed",
                              "windDirection", "humidity", "pressureSeaLevel", "uvIndex", "weatherCode",
                              "precipitationProbability", "precipitationType",
                              "visibility", "cloudCover"], "units": "imperial", "timesteps": "current",
                   "timezone": "America/Los_Angeles", "apikey": api_key}

    headers = {"Accept": "application/json"}

    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.json()


@app.route("/example/timelines")
def example():
    with open('example_1.json') as json_file:
        data = json.load(json_file)
        response = jsonify(data)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response


@app.route("/example/current")
def example_current():
    data = {
        "data": {
            "timelines": [
                {
                    "timestep": "current",
                    "startTime": "2021-10-03T20:01:00-07:00",
                    "endTime": "2021-10-03T20:01:00-07:00",
                    "intervals": [
                        {
                            "startTime": "2021-10-03T20:01:00-07:00",
                            "values": {
                                "temperature": 68.23,
                                "temperatureApparent": 68.23,
                                "temperatureMin": 68.23,
                                "temperatureMax": 68.23,
                                "windSpeed": 3.36,
                                "windDirection": 182,
                                "humidity": 96,
                                "pressureSeaLevel": 30.01,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 7.64,
                                "cloudCover": 76
                            }
                        }
                    ]
                }
            ]
        }
    }
    response = jsonify(data)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/current")
def current():
    data = request.args
    lat = data["lat"]
    lng = data["lng"]
    response = jsonify(request_current_data(lat, lng))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

