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


def request_hourly_data(lat: str, lng: str):
    url = "https://api.tomorrow.io/v4/timelines"

    querystring = {"location": str(lat) + "," + str(lng),
                   "fields": ["temperature", "temperatureApparent", "temperatureMin", "temperatureMax", "windSpeed",
                              "windDirection", "humidity", "pressureSeaLevel", "uvIndex", "weatherCode",
                              "precipitationProbability", "precipitationType",
                              "visibility", "cloudCover"], "units": "imperial", "timesteps": "1h",
                   "timezone": "America/Los_Angeles", "apikey": api_key}

    headers = {"Accept": "application/json"}

    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.json()


@app.route("/example/timelines")
def example():
    with open('example_daily.json') as json_file:
        data = json.load(json_file)
        response = jsonify(data)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response


@app.route("/example/current")
def example_current():
    with open('example_current.json') as json_file:
        data = json.load(json_file)
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


@app.route("/example/hourly")
def example_hourly():
    with open('example_hourly.json') as json_file:
        data = json.load(json_file)
        response = jsonify(data)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response


@app.route("/hourly")
def hourly():
    data = request.args
    lat = data["lat"]
    lng = data["lng"]
    response = jsonify(request_hourly_data(lat, lng))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
