var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async (req, res, next) => {
    const lat = req.query.lat;
    const lng = req.query.lng;

    var config = {
        method: 'get',
        url: `https://api.tomorrow.io/v4/timelines?location=${lat},${lng}&fields=temperature&fields=temperatureApparent&fields=temperatureMin&fields=temperatureMax&fields=windSpeed&fields=windDirection&fields=humidity&fields=pressureSeaLevel&fields=uvIndex&fields=weatherCode&fields=precipitationProbability&fields=precipitationType&fields=visibility&fields=cloudCover&units=imperial&timesteps=1h&timezone=America/Los_Angeles&apikey=yODx9w6WUkq27c1Vb3HlQsMiUlxcTVlC`,
        headers: { }
    };

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
            res.json({"lat": lat, "lng": lng, "error": error});
        });
});

router.get('/example', async (req, res, next) => {
    let sampleJson = {
        "data": {
            "timelines": [
                {
                    "timestep": "1h",
                    "startTime": "2021-11-06T08:00:00-07:00",
                    "endTime": "2021-11-10T19:00:00-08:00",
                    "intervals": [
                        {
                            "startTime": "2021-11-06T08:00:00-07:00",
                            "values": {
                                "temperature": 46.4,
                                "temperatureApparent": 46.4,
                                "temperatureMin": 46.4,
                                "temperatureMax": 46.4,
                                "windSpeed": 1.12,
                                "windDirection": 338.13,
                                "humidity": 68,
                                "pressureSeaLevel": 30.32,
                                "uvIndex": 2,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T09:00:00-07:00",
                            "values": {
                                "temperature": 50.45,
                                "temperatureApparent": 50.45,
                                "temperatureMin": 50.45,
                                "temperatureMax": 50.45,
                                "windSpeed": 10.29,
                                "windDirection": 22.13,
                                "humidity": 54.01,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 3,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T10:00:00-07:00",
                            "values": {
                                "temperature": 52.41,
                                "temperatureApparent": 52.41,
                                "temperatureMin": 52.41,
                                "temperatureMax": 52.41,
                                "windSpeed": 8.55,
                                "windDirection": 0.64,
                                "humidity": 59.43,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 3,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 93.13
                            }
                        },
                        {
                            "startTime": "2021-11-06T11:00:00-07:00",
                            "values": {
                                "temperature": 53.91,
                                "temperatureApparent": 53.91,
                                "temperatureMin": 53.91,
                                "temperatureMax": 53.91,
                                "windSpeed": 8.77,
                                "windDirection": 338.91,
                                "humidity": 60.74,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 3,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T12:00:00-07:00",
                            "values": {
                                "temperature": 54.7,
                                "temperatureApparent": 54.7,
                                "temperatureMin": 54.7,
                                "temperatureMax": 54.7,
                                "windSpeed": 8.23,
                                "windDirection": 337.39,
                                "humidity": 59.83,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 2,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 99.42
                            }
                        },
                        {
                            "startTime": "2021-11-06T13:00:00-07:00",
                            "values": {
                                "temperature": 55.69,
                                "temperatureApparent": 55.69,
                                "temperatureMin": 55.69,
                                "temperatureMax": 55.69,
                                "windSpeed": 7.34,
                                "windDirection": 339.09,
                                "humidity": 55.27,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 1,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T14:00:00-07:00",
                            "values": {
                                "temperature": 55.6,
                                "temperatureApparent": 55.6,
                                "temperatureMin": 55.6,
                                "temperatureMax": 55.6,
                                "windSpeed": 7.65,
                                "windDirection": 332.6,
                                "humidity": 52.4,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T15:00:00-07:00",
                            "values": {
                                "temperature": 53.69,
                                "temperatureApparent": 53.69,
                                "temperatureMin": 53.69,
                                "temperatureMax": 53.69,
                                "windSpeed": 7,
                                "windDirection": 322.86,
                                "humidity": 53.72,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T16:00:00-07:00",
                            "values": {
                                "temperature": 49.64,
                                "temperatureApparent": 49.64,
                                "temperatureMin": 49.64,
                                "temperatureMax": 49.64,
                                "windSpeed": 6.93,
                                "windDirection": 318.16,
                                "humidity": 61.88,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T17:00:00-07:00",
                            "values": {
                                "temperature": 47.14,
                                "temperatureApparent": 47.14,
                                "temperatureMin": 47.14,
                                "temperatureMax": 47.14,
                                "windSpeed": 7.87,
                                "windDirection": 322.86,
                                "humidity": 64.33,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T18:00:00-07:00",
                            "values": {
                                "temperature": 45.88,
                                "temperatureApparent": 45.88,
                                "temperatureMin": 45.88,
                                "temperatureMax": 45.88,
                                "windSpeed": 8.41,
                                "windDirection": 335.2,
                                "humidity": 67.96,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 34.47
                            }
                        },
                        {
                            "startTime": "2021-11-06T19:00:00-07:00",
                            "values": {
                                "temperature": 44.2,
                                "temperatureApparent": 44.2,
                                "temperatureMin": 44.2,
                                "temperatureMax": 44.2,
                                "windSpeed": 5.03,
                                "windDirection": 3.28,
                                "humidity": 75.68,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-06T20:00:00-07:00",
                            "values": {
                                "temperature": 43.23,
                                "temperatureApparent": 43.23,
                                "temperatureMin": 43.23,
                                "temperatureMax": 43.23,
                                "windSpeed": 5.12,
                                "windDirection": 3.2,
                                "humidity": 78.42,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-06T21:00:00-07:00",
                            "values": {
                                "temperature": 42.51,
                                "temperatureApparent": 42.51,
                                "temperatureMin": 42.51,
                                "temperatureMax": 42.51,
                                "windSpeed": 4.14,
                                "windDirection": 3.31,
                                "humidity": 77.66,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-06T22:00:00-07:00",
                            "values": {
                                "temperature": 42.62,
                                "temperatureApparent": 42.62,
                                "temperatureMin": 42.62,
                                "temperatureMax": 42.62,
                                "windSpeed": 3.83,
                                "windDirection": 22.53,
                                "humidity": 68.24,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-06T23:00:00-07:00",
                            "values": {
                                "temperature": 41.47,
                                "temperatureApparent": 41.47,
                                "temperatureMin": 41.47,
                                "temperatureMax": 41.47,
                                "windSpeed": 5.73,
                                "windDirection": 355.78,
                                "humidity": 66.25,
                                "pressureSeaLevel": 30.13,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T00:00:00-07:00",
                            "values": {
                                "temperature": 40.03,
                                "temperatureApparent": 40.03,
                                "temperatureMin": 40.03,
                                "temperatureMax": 40.03,
                                "windSpeed": 2.44,
                                "windDirection": 304.69,
                                "humidity": 78.78,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T01:00:00-07:00",
                            "values": {
                                "temperature": 40.15,
                                "temperatureApparent": 40.15,
                                "temperatureMin": 40.15,
                                "temperatureMax": 40.15,
                                "windSpeed": 6.58,
                                "windDirection": 316.39,
                                "humidity": 75.66,
                                "pressureSeaLevel": 30.11,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T01:00:00-08:00",
                            "values": {
                                "temperature": 39.81,
                                "temperatureApparent": 35.33,
                                "temperatureMin": 39.81,
                                "temperatureMax": 39.81,
                                "windSpeed": 6.31,
                                "windDirection": 323.48,
                                "humidity": 77.31,
                                "pressureSeaLevel": 30.1,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T02:00:00-08:00",
                            "values": {
                                "temperature": 38.61,
                                "temperatureApparent": 33.39,
                                "temperatureMin": 38.61,
                                "temperatureMax": 38.61,
                                "windSpeed": 7.07,
                                "windDirection": 326.32,
                                "humidity": 81.95,
                                "pressureSeaLevel": 30.17,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T03:00:00-08:00",
                            "values": {
                                "temperature": 38.43,
                                "temperatureApparent": 33.17,
                                "temperatureMin": 38.43,
                                "temperatureMax": 38.43,
                                "windSpeed": 7.05,
                                "windDirection": 322.41,
                                "humidity": 82.38,
                                "pressureSeaLevel": 30.19,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T04:00:00-08:00",
                            "values": {
                                "temperature": 37.94,
                                "temperatureApparent": 32.81,
                                "temperatureMin": 37.94,
                                "temperatureMax": 37.94,
                                "windSpeed": 6.71,
                                "windDirection": 319.64,
                                "humidity": 84.32,
                                "pressureSeaLevel": 30.2,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T05:00:00-08:00",
                            "values": {
                                "temperature": 40.68,
                                "temperatureApparent": 40.68,
                                "temperatureMin": 40.68,
                                "temperatureMax": 40.68,
                                "windSpeed": 7.96,
                                "windDirection": 319.97,
                                "humidity": 80.18,
                                "pressureSeaLevel": 30.22,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T06:00:00-08:00",
                            "values": {
                                "temperature": 45.91,
                                "temperatureApparent": 45.91,
                                "temperatureMin": 45.91,
                                "temperatureMax": 45.91,
                                "windSpeed": 6.4,
                                "windDirection": 316.52,
                                "humidity": 74.59,
                                "pressureSeaLevel": 30.23,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T07:00:00-08:00",
                            "values": {
                                "temperature": 51.19,
                                "temperatureApparent": 51.19,
                                "temperatureMin": 51.19,
                                "temperatureMax": 51.19,
                                "windSpeed": 6.17,
                                "windDirection": 318.72,
                                "humidity": 65.75,
                                "pressureSeaLevel": 30.23,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T08:00:00-08:00",
                            "values": {
                                "temperature": 55.69,
                                "temperatureApparent": 55.69,
                                "temperatureMin": 55.69,
                                "temperatureMax": 55.69,
                                "windSpeed": 5.44,
                                "windDirection": 325.31,
                                "humidity": 59.21,
                                "pressureSeaLevel": 30.23,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0.78
                            }
                        },
                        {
                            "startTime": "2021-11-07T09:00:00-08:00",
                            "values": {
                                "temperature": 59.2,
                                "temperatureApparent": 59.2,
                                "temperatureMin": 59.2,
                                "temperatureMax": 59.2,
                                "windSpeed": 4.94,
                                "windDirection": 325.58,
                                "humidity": 54,
                                "pressureSeaLevel": 30.21,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0.78
                            }
                        },
                        {
                            "startTime": "2021-11-07T10:00:00-08:00",
                            "values": {
                                "temperature": 61.39,
                                "temperatureApparent": 61.39,
                                "temperatureMin": 61.39,
                                "temperatureMax": 61.39,
                                "windSpeed": 4.59,
                                "windDirection": 320.98,
                                "humidity": 49.59,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T11:00:00-08:00",
                            "values": {
                                "temperature": 62.51,
                                "temperatureApparent": 62.51,
                                "temperatureMin": 62.51,
                                "temperatureMax": 62.51,
                                "windSpeed": 4.92,
                                "windDirection": 312.09,
                                "humidity": 47.2,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T12:00:00-08:00",
                            "values": {
                                "temperature": 62.73,
                                "temperatureApparent": 62.73,
                                "temperatureMin": 62.73,
                                "temperatureMax": 62.73,
                                "windSpeed": 6.51,
                                "windDirection": 309,
                                "humidity": 47.33,
                                "pressureSeaLevel": 30.13,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0.78
                            }
                        },
                        {
                            "startTime": "2021-11-07T13:00:00-08:00",
                            "values": {
                                "temperature": 61.74,
                                "temperatureApparent": 61.74,
                                "temperatureMin": 61.74,
                                "temperatureMax": 61.74,
                                "windSpeed": 7.49,
                                "windDirection": 309.33,
                                "humidity": 49.15,
                                "pressureSeaLevel": 30.13,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0.78
                            }
                        },
                        {
                            "startTime": "2021-11-07T14:00:00-08:00",
                            "values": {
                                "temperature": 58.33,
                                "temperatureApparent": 58.33,
                                "temperatureMin": 58.33,
                                "temperatureMax": 58.33,
                                "windSpeed": 7,
                                "windDirection": 310.06,
                                "humidity": 55.51,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T15:00:00-08:00",
                            "values": {
                                "temperature": 54.34,
                                "temperatureApparent": 54.34,
                                "temperatureMin": 54.34,
                                "temperatureMax": 54.34,
                                "windSpeed": 8.68,
                                "windDirection": 317.23,
                                "humidity": 54.13,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T16:00:00-08:00",
                            "values": {
                                "temperature": 52.56,
                                "temperatureApparent": 52.56,
                                "temperatureMin": 52.56,
                                "temperatureMax": 52.56,
                                "windSpeed": 9.31,
                                "windDirection": 325.76,
                                "humidity": 53.1,
                                "pressureSeaLevel": 30.17,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T17:00:00-08:00",
                            "values": {
                                "temperature": 50.95,
                                "temperatureApparent": 50.95,
                                "temperatureMin": 50.95,
                                "temperatureMax": 50.95,
                                "windSpeed": 8.7,
                                "windDirection": 332.31,
                                "humidity": 51.86,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T18:00:00-08:00",
                            "values": {
                                "temperature": 49.93,
                                "temperatureApparent": 49.93,
                                "temperatureMin": 49.93,
                                "temperatureMax": 49.93,
                                "windSpeed": 8.39,
                                "windDirection": 335.81,
                                "humidity": 52.76,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T19:00:00-08:00",
                            "values": {
                                "temperature": 49.14,
                                "temperatureApparent": 49.14,
                                "temperatureMin": 49.14,
                                "temperatureMax": 49.14,
                                "windSpeed": 8.7,
                                "windDirection": 335.26,
                                "humidity": 54.67,
                                "pressureSeaLevel": 30.19,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T20:00:00-08:00",
                            "values": {
                                "temperature": 48.45,
                                "temperatureApparent": 48.45,
                                "temperatureMin": 48.45,
                                "temperatureMax": 48.45,
                                "windSpeed": 8.7,
                                "windDirection": 332.02,
                                "humidity": 57.13,
                                "pressureSeaLevel": 30.19,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T21:00:00-08:00",
                            "values": {
                                "temperature": 47.61,
                                "temperatureApparent": 47.61,
                                "temperatureMin": 47.61,
                                "temperatureMax": 47.61,
                                "windSpeed": 8.3,
                                "windDirection": 331.71,
                                "humidity": 59.13,
                                "pressureSeaLevel": 30.19,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T22:00:00-08:00",
                            "values": {
                                "temperature": 46.06,
                                "temperatureApparent": 46.06,
                                "temperatureMin": 46.06,
                                "temperatureMax": 46.06,
                                "windSpeed": 6.76,
                                "windDirection": 333.85,
                                "humidity": 63.05,
                                "pressureSeaLevel": 30.19,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-07T23:00:00-08:00",
                            "values": {
                                "temperature": 44.29,
                                "temperatureApparent": 44.29,
                                "temperatureMin": 44.29,
                                "temperatureMax": 44.29,
                                "windSpeed": 5.86,
                                "windDirection": 333.88,
                                "humidity": 68.85,
                                "pressureSeaLevel": 30.2,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T00:00:00-08:00",
                            "values": {
                                "temperature": 42.98,
                                "temperatureApparent": 42.98,
                                "temperatureMin": 42.98,
                                "temperatureMax": 42.98,
                                "windSpeed": 5.55,
                                "windDirection": 328.97,
                                "humidity": 74,
                                "pressureSeaLevel": 30.2,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T01:00:00-08:00",
                            "values": {
                                "temperature": 41.56,
                                "temperatureApparent": 41.56,
                                "temperatureMin": 41.56,
                                "temperatureMax": 41.56,
                                "windSpeed": 4.97,
                                "windDirection": 331.04,
                                "humidity": 79.13,
                                "pressureSeaLevel": 30.21,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T02:00:00-08:00",
                            "values": {
                                "temperature": 40.37,
                                "temperatureApparent": 40.37,
                                "temperatureMin": 40.37,
                                "temperatureMax": 40.37,
                                "windSpeed": 4.81,
                                "windDirection": 330.91,
                                "humidity": 83.12,
                                "pressureSeaLevel": 30.22,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T03:00:00-08:00",
                            "values": {
                                "temperature": 39.76,
                                "temperatureApparent": 36.5,
                                "temperatureMin": 39.76,
                                "temperatureMax": 39.76,
                                "windSpeed": 4.54,
                                "windDirection": 323.8,
                                "humidity": 85.34,
                                "pressureSeaLevel": 30.23,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T04:00:00-08:00",
                            "values": {
                                "temperature": 39.24,
                                "temperatureApparent": 35.74,
                                "temperatureMin": 39.24,
                                "temperatureMax": 39.24,
                                "windSpeed": 4.76,
                                "windDirection": 325.43,
                                "humidity": 87.04,
                                "pressureSeaLevel": 30.25,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T05:00:00-08:00",
                            "values": {
                                "temperature": 42.64,
                                "temperatureApparent": 42.64,
                                "temperatureMin": 42.64,
                                "temperatureMax": 42.64,
                                "windSpeed": 5.95,
                                "windDirection": 326.96,
                                "humidity": 81.34,
                                "pressureSeaLevel": 30.27,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T06:00:00-08:00",
                            "values": {
                                "temperature": 49.23,
                                "temperatureApparent": 49.23,
                                "temperatureMin": 49.23,
                                "temperatureMax": 49.23,
                                "windSpeed": 4.34,
                                "windDirection": 315.61,
                                "humidity": 78.49,
                                "pressureSeaLevel": 30.29,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T07:00:00-08:00",
                            "values": {
                                "temperature": 56.08,
                                "temperatureApparent": 56.08,
                                "temperatureMin": 56.08,
                                "temperatureMax": 56.08,
                                "windSpeed": 3.02,
                                "windDirection": 311.55,
                                "humidity": 66.16,
                                "pressureSeaLevel": 30.3,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T08:00:00-08:00",
                            "values": {
                                "temperature": 61.54,
                                "temperatureApparent": 61.54,
                                "temperatureMin": 61.54,
                                "temperatureMax": 61.54,
                                "windSpeed": 2.98,
                                "windDirection": 301.91,
                                "humidity": 53.8,
                                "pressureSeaLevel": 30.3,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T09:00:00-08:00",
                            "values": {
                                "temperature": 64.89,
                                "temperatureApparent": 64.89,
                                "temperatureMin": 64.89,
                                "temperatureMax": 64.89,
                                "windSpeed": 2.68,
                                "windDirection": 285.65,
                                "humidity": 46.05,
                                "pressureSeaLevel": 30.27,
                                "uvIndex": 4,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T10:00:00-08:00",
                            "values": {
                                "temperature": 66.9,
                                "temperatureApparent": 66.9,
                                "temperatureMin": 66.9,
                                "temperatureMax": 66.9,
                                "windSpeed": 2.39,
                                "windDirection": 266.51,
                                "humidity": 42.76,
                                "pressureSeaLevel": 30.25,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T11:00:00-08:00",
                            "values": {
                                "temperature": 68.05,
                                "temperatureApparent": 68.05,
                                "temperatureMin": 68.05,
                                "temperatureMax": 68.05,
                                "windSpeed": 2.46,
                                "windDirection": 259.6,
                                "humidity": 41.49,
                                "pressureSeaLevel": 30.22,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T12:00:00-08:00",
                            "values": {
                                "temperature": 68.4,
                                "temperatureApparent": 68.4,
                                "temperatureMin": 68.4,
                                "temperatureMax": 68.4,
                                "windSpeed": 2.26,
                                "windDirection": 265.72,
                                "humidity": 41.88,
                                "pressureSeaLevel": 30.21,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T13:00:00-08:00",
                            "values": {
                                "temperature": 67.77,
                                "temperatureApparent": 67.77,
                                "temperatureMin": 67.77,
                                "temperatureMax": 67.77,
                                "windSpeed": 2.1,
                                "windDirection": 293.13,
                                "humidity": 46.44,
                                "pressureSeaLevel": 30.22,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T14:00:00-08:00",
                            "values": {
                                "temperature": 63.09,
                                "temperatureApparent": 63.09,
                                "temperatureMin": 63.09,
                                "temperatureMax": 63.09,
                                "windSpeed": 3.87,
                                "windDirection": 319.97,
                                "humidity": 71.52,
                                "pressureSeaLevel": 30.22,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T15:00:00-08:00",
                            "values": {
                                "temperature": 54.95,
                                "temperatureApparent": 54.95,
                                "temperatureMin": 54.95,
                                "temperatureMax": 54.95,
                                "windSpeed": 5.46,
                                "windDirection": 318.32,
                                "humidity": 76.43,
                                "pressureSeaLevel": 30.23,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T16:00:00-08:00",
                            "values": {
                                "temperature": 52.25,
                                "temperatureApparent": 52.25,
                                "temperatureMin": 52.25,
                                "temperatureMax": 52.25,
                                "windSpeed": 5.91,
                                "windDirection": 310.6,
                                "humidity": 75.92,
                                "pressureSeaLevel": 30.24,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T17:00:00-08:00",
                            "values": {
                                "temperature": 50.34,
                                "temperatureApparent": 50.34,
                                "temperatureMin": 50.34,
                                "temperatureMax": 50.34,
                                "windSpeed": 5.64,
                                "windDirection": 309.59,
                                "humidity": 76.47,
                                "pressureSeaLevel": 30.25,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T18:00:00-08:00",
                            "values": {
                                "temperature": 48.76,
                                "temperatureApparent": 48.76,
                                "temperatureMin": 48.76,
                                "temperatureMax": 48.76,
                                "windSpeed": 6.04,
                                "windDirection": 310.24,
                                "humidity": 81.09,
                                "pressureSeaLevel": 30.25,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T19:00:00-08:00",
                            "values": {
                                "temperature": 47.37,
                                "temperatureApparent": 47.37,
                                "temperatureMin": 47.37,
                                "temperatureMax": 47.37,
                                "windSpeed": 6.33,
                                "windDirection": 310.17,
                                "humidity": 83.98,
                                "pressureSeaLevel": 30.26,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T20:00:00-08:00",
                            "values": {
                                "temperature": 46.38,
                                "temperatureApparent": 46.38,
                                "temperatureMin": 46.38,
                                "temperatureMax": 46.38,
                                "windSpeed": 5.91,
                                "windDirection": 309.37,
                                "humidity": 85.47,
                                "pressureSeaLevel": 30.26,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T21:00:00-08:00",
                            "values": {
                                "temperature": 45.27,
                                "temperatureApparent": 45.27,
                                "temperatureMin": 45.27,
                                "temperatureMax": 45.27,
                                "windSpeed": 5.61,
                                "windDirection": 303.76,
                                "humidity": 87.57,
                                "pressureSeaLevel": 30.26,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T22:00:00-08:00",
                            "values": {
                                "temperature": 45.25,
                                "temperatureApparent": 45.25,
                                "temperatureMin": 45.25,
                                "temperatureMax": 45.25,
                                "windSpeed": 4.7,
                                "windDirection": 308,
                                "humidity": 87.88,
                                "pressureSeaLevel": 30.25,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-08T23:00:00-08:00",
                            "values": {
                                "temperature": 46.08,
                                "temperatureApparent": 46.08,
                                "temperatureMin": 46.08,
                                "temperatureMax": 46.08,
                                "windSpeed": 5.17,
                                "windDirection": 310.93,
                                "humidity": 87.34,
                                "pressureSeaLevel": 30.26,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T00:00:00-08:00",
                            "values": {
                                "temperature": 45.99,
                                "temperatureApparent": 45.99,
                                "temperatureMin": 45.99,
                                "temperatureMax": 45.99,
                                "windSpeed": 5.03,
                                "windDirection": 310.66,
                                "humidity": 89.21,
                                "pressureSeaLevel": 30.26,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T01:00:00-08:00",
                            "values": {
                                "temperature": 44.67,
                                "temperatureApparent": 44.67,
                                "temperatureMin": 44.67,
                                "temperatureMax": 44.67,
                                "windSpeed": 5.35,
                                "windDirection": 308.24,
                                "humidity": 91.52,
                                "pressureSeaLevel": 30.25,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T02:00:00-08:00",
                            "values": {
                                "temperature": 44.51,
                                "temperatureApparent": 44.51,
                                "temperatureMin": 44.51,
                                "temperatureMax": 44.51,
                                "windSpeed": 4.94,
                                "windDirection": 309.24,
                                "humidity": 91.46,
                                "pressureSeaLevel": 30.26,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T03:00:00-08:00",
                            "values": {
                                "temperature": 44.62,
                                "temperatureApparent": 44.62,
                                "temperatureMin": 44.62,
                                "temperatureMax": 44.62,
                                "windSpeed": 5.1,
                                "windDirection": 313.75,
                                "humidity": 91.35,
                                "pressureSeaLevel": 30.27,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T04:00:00-08:00",
                            "values": {
                                "temperature": 43.36,
                                "temperatureApparent": 43.36,
                                "temperatureMin": 43.36,
                                "temperatureMax": 43.36,
                                "windSpeed": 4.97,
                                "windDirection": 318.37,
                                "humidity": 92.61,
                                "pressureSeaLevel": 30.27,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T05:00:00-08:00",
                            "values": {
                                "temperature": 47.1,
                                "temperatureApparent": 47.1,
                                "temperatureMin": 47.1,
                                "temperatureMax": 47.1,
                                "windSpeed": 5.53,
                                "windDirection": 316.59,
                                "humidity": 87.7,
                                "pressureSeaLevel": 30.28,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T06:00:00-08:00",
                            "values": {
                                "temperature": 54.25,
                                "temperatureApparent": 54.25,
                                "temperatureMin": 54.25,
                                "temperatureMax": 54.25,
                                "windSpeed": 3.85,
                                "windDirection": 302.53,
                                "humidity": 75.89,
                                "pressureSeaLevel": 30.29,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 10.37,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T07:00:00-08:00",
                            "values": {
                                "temperature": 60.58,
                                "temperatureApparent": 60.58,
                                "temperatureMin": 60.58,
                                "temperatureMax": 60.58,
                                "windSpeed": 3.06,
                                "windDirection": 294.12,
                                "humidity": 63.31,
                                "pressureSeaLevel": 30.3,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 10.79,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-09T08:00:00-08:00",
                            "values": {
                                "temperature": 65.44,
                                "temperatureApparent": 65.44,
                                "temperatureMin": 65.44,
                                "temperatureMax": 65.44,
                                "windSpeed": 2.8,
                                "windDirection": 283.95,
                                "humidity": 52.44,
                                "pressureSeaLevel": 30.29,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 11.21,
                                "cloudCover": 1.48
                            }
                        },
                        {
                            "startTime": "2021-11-09T09:00:00-08:00",
                            "values": {
                                "temperature": 68.92,
                                "temperatureApparent": 68.92,
                                "temperatureMin": 68.92,
                                "temperatureMax": 68.92,
                                "windSpeed": 3.33,
                                "windDirection": 286.97,
                                "humidity": 42.56,
                                "pressureSeaLevel": 30.26,
                                "uvIndex": 4,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 11.63,
                                "cloudCover": 0.42
                            }
                        },
                        {
                            "startTime": "2021-11-09T10:00:00-08:00",
                            "values": {
                                "temperature": 71.08,
                                "temperatureApparent": 71.08,
                                "temperatureMin": 71.08,
                                "temperatureMax": 71.08,
                                "windSpeed": 4.45,
                                "windDirection": 282.78,
                                "humidity": 36.47,
                                "pressureSeaLevel": 30.22,
                                "uvIndex": 3,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 12.05,
                                "cloudCover": 32.78
                            }
                        },
                        {
                            "startTime": "2021-11-09T11:00:00-08:00",
                            "values": {
                                "temperature": 72.27,
                                "temperatureApparent": 72.27,
                                "temperatureMin": 72.27,
                                "temperatureMax": 72.27,
                                "windSpeed": 5.1,
                                "windDirection": 287.36,
                                "humidity": 33.82,
                                "pressureSeaLevel": 30.19,
                                "uvIndex": 2,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 12.47,
                                "cloudCover": 24.73
                            }
                        },
                        {
                            "startTime": "2021-11-09T12:00:00-08:00",
                            "values": {
                                "temperature": 72.48,
                                "temperatureApparent": 72.48,
                                "temperatureMin": 72.48,
                                "temperatureMax": 72.48,
                                "windSpeed": 5.32,
                                "windDirection": 289.52,
                                "humidity": 32.87,
                                "pressureSeaLevel": 30.17,
                                "uvIndex": 1,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 12.9,
                                "cloudCover": 25.83
                            }
                        },
                        {
                            "startTime": "2021-11-09T13:00:00-08:00",
                            "values": {
                                "temperature": 71.51,
                                "temperatureApparent": 71.51,
                                "temperatureMin": 71.51,
                                "temperatureMax": 71.51,
                                "windSpeed": 5.37,
                                "windDirection": 291.29,
                                "humidity": 34.29,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1102,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 13.31,
                                "cloudCover": 67.62
                            }
                        },
                        {
                            "startTime": "2021-11-09T14:00:00-08:00",
                            "values": {
                                "temperature": 68.58,
                                "temperatureApparent": 68.58,
                                "temperatureMin": 68.58,
                                "temperatureMax": 68.58,
                                "windSpeed": 4.5,
                                "windDirection": 302.07,
                                "humidity": 38.4,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 13.74,
                                "cloudCover": 75.08
                            }
                        },
                        {
                            "startTime": "2021-11-09T15:00:00-08:00",
                            "values": {
                                "temperature": 64.35,
                                "temperatureApparent": 64.35,
                                "temperatureMin": 64.35,
                                "temperatureMax": 64.35,
                                "windSpeed": 3.89,
                                "windDirection": 314.79,
                                "humidity": 44,
                                "pressureSeaLevel": 30.17,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 14.16,
                                "cloudCover": 76.52
                            }
                        },
                        {
                            "startTime": "2021-11-09T16:00:00-08:00",
                            "values": {
                                "temperature": 62.49,
                                "temperatureApparent": 62.49,
                                "temperatureMin": 62.49,
                                "temperatureMax": 62.49,
                                "windSpeed": 4.43,
                                "windDirection": 317.73,
                                "humidity": 46.15,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 0,
                                "weatherCode": 1102,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 14.58,
                                "cloudCover": 70.47
                            }
                        },
                        {
                            "startTime": "2021-11-09T17:00:00-08:00",
                            "values": {
                                "temperature": 61.59,
                                "temperatureApparent": 61.59,
                                "temperatureMin": 61.59,
                                "temperatureMax": 61.59,
                                "windSpeed": 4.21,
                                "windDirection": 321.16,
                                "humidity": 46.45,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-09T18:00:00-08:00",
                            "values": {
                                "temperature": 60.24,
                                "temperatureApparent": 60.24,
                                "temperatureMin": 60.24,
                                "temperatureMax": 60.24,
                                "windSpeed": 4.63,
                                "windDirection": 304.13,
                                "humidity": 49.03,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 85.6
                            }
                        },
                        {
                            "startTime": "2021-11-09T19:00:00-08:00",
                            "values": {
                                "temperature": 59.29,
                                "temperatureApparent": 59.29,
                                "temperatureMin": 59.29,
                                "temperatureMax": 59.29,
                                "windSpeed": 3.71,
                                "windDirection": 328.15,
                                "humidity": 50.31,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 90.39
                            }
                        },
                        {
                            "startTime": "2021-11-09T20:00:00-08:00",
                            "values": {
                                "temperature": 58.59,
                                "temperatureApparent": 58.59,
                                "temperatureMin": 58.59,
                                "temperatureMax": 58.59,
                                "windSpeed": 2.53,
                                "windDirection": 331.86,
                                "humidity": 50.6,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 92.84
                            }
                        },
                        {
                            "startTime": "2021-11-09T21:00:00-08:00",
                            "values": {
                                "temperature": 57.94,
                                "temperatureApparent": 57.94,
                                "temperatureMin": 57.94,
                                "temperatureMax": 57.94,
                                "windSpeed": 3.02,
                                "windDirection": 325.65,
                                "humidity": 50.99,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 94.28
                            }
                        },
                        {
                            "startTime": "2021-11-09T22:00:00-08:00",
                            "values": {
                                "temperature": 57.56,
                                "temperatureApparent": 57.56,
                                "temperatureMin": 57.56,
                                "temperatureMax": 57.56,
                                "windSpeed": 2.86,
                                "windDirection": 336.76,
                                "humidity": 51.35,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 95.2
                            }
                        },
                        {
                            "startTime": "2021-11-09T23:00:00-08:00",
                            "values": {
                                "temperature": 57.38,
                                "temperatureApparent": 57.38,
                                "temperatureMin": 57.38,
                                "temperatureMax": 57.38,
                                "windSpeed": 2.66,
                                "windDirection": 343.86,
                                "humidity": 51.77,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T00:00:00-08:00",
                            "values": {
                                "temperature": 56.91,
                                "temperatureApparent": 56.91,
                                "temperatureMin": 56.91,
                                "temperatureMax": 56.91,
                                "windSpeed": 3.47,
                                "windDirection": 327.43,
                                "humidity": 53.33,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T01:00:00-08:00",
                            "values": {
                                "temperature": 56.39,
                                "temperatureApparent": 56.39,
                                "temperatureMin": 56.39,
                                "temperatureMax": 56.39,
                                "windSpeed": 2.24,
                                "windDirection": 341.03,
                                "humidity": 55.18,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T02:00:00-08:00",
                            "values": {
                                "temperature": 56.16,
                                "temperatureApparent": 56.16,
                                "temperatureMin": 56.16,
                                "temperatureMax": 56.16,
                                "windSpeed": 1.3,
                                "windDirection": 340.98,
                                "humidity": 56.18,
                                "pressureSeaLevel": 30.14,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T03:00:00-08:00",
                            "values": {
                                "temperature": 55.85,
                                "temperatureApparent": 55.85,
                                "temperatureMin": 55.85,
                                "temperatureMax": 55.85,
                                "windSpeed": 3.44,
                                "windDirection": 315.13,
                                "humidity": 57.1,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T04:00:00-08:00",
                            "values": {
                                "temperature": 55.36,
                                "temperatureApparent": 55.36,
                                "temperatureMin": 55.36,
                                "temperatureMax": 55.36,
                                "windSpeed": 2.33,
                                "windDirection": 334.39,
                                "humidity": 58.6,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T05:00:00-08:00",
                            "values": {
                                "temperature": 56.41,
                                "temperatureApparent": 56.41,
                                "temperatureMin": 56.41,
                                "temperatureMax": 56.41,
                                "windSpeed": 1.36,
                                "windDirection": 54.57,
                                "humidity": 56.65,
                                "pressureSeaLevel": 30.17,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T06:00:00-08:00",
                            "values": {
                                "temperature": 59.36,
                                "temperatureApparent": 59.36,
                                "temperatureMin": 59.36,
                                "temperatureMax": 59.36,
                                "windSpeed": 0.78,
                                "windDirection": 122.68,
                                "humidity": 50.09,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 1,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T07:00:00-08:00",
                            "values": {
                                "temperature": 64.08,
                                "temperatureApparent": 64.08,
                                "temperatureMin": 64.08,
                                "temperatureMax": 64.08,
                                "windSpeed": 2.35,
                                "windDirection": 158.87,
                                "humidity": 39.45,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 2,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 99.8
                            }
                        },
                        {
                            "startTime": "2021-11-10T08:00:00-08:00",
                            "values": {
                                "temperature": 67.53,
                                "temperatureApparent": 67.53,
                                "temperatureMin": 67.53,
                                "temperatureMax": 67.53,
                                "windSpeed": 3.69,
                                "windDirection": 172.98,
                                "humidity": 31.76,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 3,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 99.85
                            }
                        },
                        {
                            "startTime": "2021-11-10T09:00:00-08:00",
                            "values": {
                                "temperature": 71.29,
                                "temperatureApparent": 71.29,
                                "temperatureMin": 71.29,
                                "temperatureMax": 71.29,
                                "windSpeed": 3.29,
                                "windDirection": 168,
                                "humidity": 25.86,
                                "pressureSeaLevel": 30.12,
                                "uvIndex": 4,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 97.45
                            }
                        },
                        {
                            "startTime": "2021-11-10T10:00:00-08:00",
                            "values": {
                                "temperature": 73.83,
                                "temperatureApparent": 73.83,
                                "temperatureMin": 73.83,
                                "temperatureMax": 73.83,
                                "windSpeed": 2.89,
                                "windDirection": 166.89,
                                "humidity": 22.51,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 4,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 82.93
                            }
                        },
                        {
                            "startTime": "2021-11-10T11:00:00-08:00",
                            "values": {
                                "temperature": 75.11,
                                "temperatureApparent": 75.11,
                                "temperatureMin": 75.11,
                                "temperatureMax": 75.11,
                                "windSpeed": 3.65,
                                "windDirection": 153.66,
                                "humidity": 20.62,
                                "pressureSeaLevel": 30.07,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 10.92
                            }
                        },
                        {
                            "startTime": "2021-11-10T12:00:00-08:00",
                            "values": {
                                "temperature": 75.63,
                                "temperatureApparent": 75.63,
                                "temperatureMin": 75.63,
                                "temperatureMax": 75.63,
                                "windSpeed": 4.03,
                                "windDirection": 144.6,
                                "humidity": 19.51,
                                "pressureSeaLevel": 30.05,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 8.22
                            }
                        },
                        {
                            "startTime": "2021-11-10T13:00:00-08:00",
                            "values": {
                                "temperature": 75.22,
                                "temperatureApparent": 75.22,
                                "temperatureMin": 75.22,
                                "temperatureMax": 75.22,
                                "windSpeed": 4.34,
                                "windDirection": 146.39,
                                "humidity": 19.69,
                                "pressureSeaLevel": 30.05,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 8.69
                            }
                        },
                        {
                            "startTime": "2021-11-10T14:00:00-08:00",
                            "values": {
                                "temperature": 72.66,
                                "temperatureApparent": 72.66,
                                "temperatureMin": 72.66,
                                "temperatureMax": 72.66,
                                "windSpeed": 4.32,
                                "windDirection": 141.4,
                                "humidity": 22.61,
                                "pressureSeaLevel": 30.06,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 10.11
                            }
                        },
                        {
                            "startTime": "2021-11-10T15:00:00-08:00",
                            "values": {
                                "temperature": 68.99,
                                "temperatureApparent": 68.99,
                                "temperatureMin": 68.99,
                                "temperatureMax": 68.99,
                                "windSpeed": 4.79,
                                "windDirection": 136.38,
                                "humidity": 27.63,
                                "pressureSeaLevel": 30.08,
                                "uvIndex": 0,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 28.1
                            }
                        },
                        {
                            "startTime": "2021-11-10T16:00:00-08:00",
                            "values": {
                                "temperature": 67.6,
                                "temperatureApparent": 67.6,
                                "temperatureMin": 67.6,
                                "temperatureMax": 67.6,
                                "windSpeed": 5.3,
                                "windDirection": 131.36,
                                "humidity": 32.09,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 40.1
                            }
                        },
                        {
                            "startTime": "2021-11-10T17:00:00-08:00",
                            "values": {
                                "temperature": 66.33,
                                "temperatureApparent": 66.33,
                                "temperatureMin": 66.33,
                                "temperatureMax": 66.33,
                                "windSpeed": 5.1,
                                "windDirection": 130.34,
                                "humidity": 35.63,
                                "pressureSeaLevel": 30.1,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T18:00:00-08:00",
                            "values": {
                                "temperature": 65.16,
                                "temperatureApparent": 65.16,
                                "temperatureMin": 65.16,
                                "temperatureMax": 65.16,
                                "windSpeed": 4.97,
                                "windDirection": 126.75,
                                "humidity": 37.52,
                                "pressureSeaLevel": 30.11,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T19:00:00-08:00",
                            "values": {
                                "temperature": 64.13,
                                "temperatureApparent": 64.13,
                                "temperatureMin": 64.13,
                                "temperatureMax": 64.13,
                                "windSpeed": 5.48,
                                "windDirection": 122.92,
                                "humidity": 38.57,
                                "pressureSeaLevel": 30.11,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 100
                            }
                        }
                    ]
                }
            ]
        }
    };
    res.json(sampleJson);
});

module.exports = router;