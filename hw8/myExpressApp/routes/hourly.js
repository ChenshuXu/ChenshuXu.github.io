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
                    "startTime": "2021-11-09T20:00:00-08:00",
                    "endTime": "2021-11-14T08:00:00-08:00",
                    "intervals": [
                        {
                            "startTime": "2021-11-09T20:00:00-08:00",
                            "values": {
                                "temperature": 52.48,
                                "temperatureApparent": 52.48,
                                "temperatureMin": 52.48,
                                "temperatureMax": 52.48,
                                "windSpeed": 0,
                                "windDirection": 184.19,
                                "humidity": 82,
                                "pressureSeaLevel": 30.24,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 99
                            }
                        },
                        {
                            "startTime": "2021-11-09T21:00:00-08:00",
                            "values": {
                                "temperature": 52.11,
                                "temperatureApparent": 52.11,
                                "temperatureMin": 52.11,
                                "temperatureMax": 52.11,
                                "windSpeed": 2.21,
                                "windDirection": 263.59,
                                "humidity": 74.98,
                                "pressureSeaLevel": 30.13,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-09T22:00:00-08:00",
                            "values": {
                                "temperature": 50.61,
                                "temperatureApparent": 50.61,
                                "temperatureMin": 50.61,
                                "temperatureMax": 50.61,
                                "windSpeed": 4.7,
                                "windDirection": 288.95,
                                "humidity": 75.3,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-09T23:00:00-08:00",
                            "values": {
                                "temperature": 49.66,
                                "temperatureApparent": 49.66,
                                "temperatureMin": 49.66,
                                "temperatureMax": 49.66,
                                "windSpeed": 3.94,
                                "windDirection": 280.88,
                                "humidity": 75.65,
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
                            "startTime": "2021-11-10T00:00:00-08:00",
                            "values": {
                                "temperature": 48.78,
                                "temperatureApparent": 48.78,
                                "temperatureMin": 48.78,
                                "temperatureMax": 48.78,
                                "windSpeed": 4.61,
                                "windDirection": 292.11,
                                "humidity": 74.62,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T01:00:00-08:00",
                            "values": {
                                "temperature": 48.6,
                                "temperatureApparent": 48.6,
                                "temperatureMin": 48.6,
                                "temperatureMax": 48.6,
                                "windSpeed": 3.38,
                                "windDirection": 296.81,
                                "humidity": 71.54,
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
                            "startTime": "2021-11-10T02:00:00-08:00",
                            "values": {
                                "temperature": 47.68,
                                "temperatureApparent": 47.68,
                                "temperatureMin": 47.68,
                                "temperatureMax": 47.68,
                                "windSpeed": 4.5,
                                "windDirection": 279.61,
                                "humidity": 71.88,
                                "pressureSeaLevel": 30.13,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T03:00:00-08:00",
                            "values": {
                                "temperature": 46.42,
                                "temperatureApparent": 46.42,
                                "temperatureMin": 46.42,
                                "temperatureMax": 46.42,
                                "windSpeed": 3.51,
                                "windDirection": 287.12,
                                "humidity": 74.23,
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
                            "startTime": "2021-11-10T04:00:00-08:00",
                            "values": {
                                "temperature": 45.64,
                                "temperatureApparent": 45.64,
                                "temperatureMin": 45.64,
                                "temperatureMax": 45.64,
                                "windSpeed": 2.95,
                                "windDirection": 303.81,
                                "humidity": 74.94,
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
                            "startTime": "2021-11-10T05:00:00-08:00",
                            "values": {
                                "temperature": 47.48,
                                "temperatureApparent": 47.48,
                                "temperatureMin": 47.48,
                                "temperatureMax": 47.48,
                                "windSpeed": 2.33,
                                "windDirection": 259.13,
                                "humidity": 77.24,
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
                            "startTime": "2021-11-10T06:00:00-08:00",
                            "values": {
                                "temperature": 53.33,
                                "temperatureApparent": 53.33,
                                "temperatureMin": 53.33,
                                "temperatureMax": 53.33,
                                "windSpeed": 2.08,
                                "windDirection": 225.45,
                                "humidity": 79.29,
                                "pressureSeaLevel": 30.16,
                                "uvIndex": 1,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T07:00:00-08:00",
                            "values": {
                                "temperature": 59.25,
                                "temperatureApparent": 59.25,
                                "temperatureMin": 59.25,
                                "temperatureMax": 59.25,
                                "windSpeed": 3.27,
                                "windDirection": 259.07,
                                "humidity": 67.7,
                                "pressureSeaLevel": 30.18,
                                "uvIndex": 2,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T08:00:00-08:00",
                            "values": {
                                "temperature": 63.9,
                                "temperatureApparent": 63.9,
                                "temperatureMin": 63.9,
                                "temperatureMax": 63.9,
                                "windSpeed": 3.04,
                                "windDirection": 250.08,
                                "humidity": 58.57,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 6.13
                            }
                        },
                        {
                            "startTime": "2021-11-10T09:00:00-08:00",
                            "values": {
                                "temperature": 67.6,
                                "temperatureApparent": 67.6,
                                "temperatureMin": 67.6,
                                "temperatureMax": 67.6,
                                "windSpeed": 3.09,
                                "windDirection": 240.02,
                                "humidity": 47.81,
                                "pressureSeaLevel": 30.12,
                                "uvIndex": 4,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 47.79
                            }
                        },
                        {
                            "startTime": "2021-11-10T10:00:00-08:00",
                            "values": {
                                "temperature": 70.63,
                                "temperatureApparent": 70.63,
                                "temperatureMin": 70.63,
                                "temperatureMax": 70.63,
                                "windSpeed": 3.44,
                                "windDirection": 232.51,
                                "humidity": 40.54,
                                "pressureSeaLevel": 30.11,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0.95
                            }
                        },
                        {
                            "startTime": "2021-11-10T11:00:00-08:00",
                            "values": {
                                "temperature": 72.52,
                                "temperatureApparent": 72.52,
                                "temperatureMin": 72.52,
                                "temperatureMax": 72.52,
                                "windSpeed": 3.51,
                                "windDirection": 196.2,
                                "humidity": 36.06,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-10T12:00:00-08:00",
                            "values": {
                                "temperature": 73.09,
                                "temperatureApparent": 73.09,
                                "temperatureMin": 73.09,
                                "temperatureMax": 73.09,
                                "windSpeed": 4.23,
                                "windDirection": 191.13,
                                "humidity": 30.41,
                                "pressureSeaLevel": 30.08,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-10T13:00:00-08:00",
                            "values": {
                                "temperature": 72.77,
                                "temperatureApparent": 72.77,
                                "temperatureMin": 72.77,
                                "temperatureMax": 72.77,
                                "windSpeed": 4.7,
                                "windDirection": 193.63,
                                "humidity": 30.05,
                                "pressureSeaLevel": 30.08,
                                "uvIndex": 0,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 25.96
                            }
                        },
                        {
                            "startTime": "2021-11-10T14:00:00-08:00",
                            "values": {
                                "temperature": 69.44,
                                "temperatureApparent": 69.44,
                                "temperatureMin": 69.44,
                                "temperatureMax": 69.44,
                                "windSpeed": 3.49,
                                "windDirection": 210.01,
                                "humidity": 35.36,
                                "pressureSeaLevel": 30.06,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T15:00:00-08:00",
                            "values": {
                                "temperature": 58.48,
                                "temperatureApparent": 58.48,
                                "temperatureMin": 58.48,
                                "temperatureMax": 58.48,
                                "windSpeed": 5.82,
                                "windDirection": 132.61,
                                "humidity": 74.98,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 3.91
                            }
                        },
                        {
                            "startTime": "2021-11-10T16:00:00-08:00",
                            "values": {
                                "temperature": 56.3,
                                "temperatureApparent": 56.3,
                                "temperatureMin": 56.3,
                                "temperatureMax": 56.3,
                                "windSpeed": 6.69,
                                "windDirection": 133.07,
                                "humidity": 74.62,
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
                            "startTime": "2021-11-10T17:00:00-08:00",
                            "values": {
                                "temperature": 55.33,
                                "temperatureApparent": 55.33,
                                "temperatureMin": 55.33,
                                "temperatureMax": 55.33,
                                "windSpeed": 6.46,
                                "windDirection": 130.87,
                                "humidity": 74.35,
                                "pressureSeaLevel": 30.11,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0.78
                            }
                        },
                        {
                            "startTime": "2021-11-10T18:00:00-08:00",
                            "values": {
                                "temperature": 54.57,
                                "temperatureApparent": 54.57,
                                "temperatureMin": 54.57,
                                "temperatureMax": 54.57,
                                "windSpeed": 5.73,
                                "windDirection": 156.59,
                                "humidity": 76.3,
                                "pressureSeaLevel": 30.12,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 97.66
                            }
                        },
                        {
                            "startTime": "2021-11-10T19:00:00-08:00",
                            "values": {
                                "temperature": 51.62,
                                "temperatureApparent": 51.62,
                                "temperatureMin": 51.62,
                                "temperatureMax": 51.62,
                                "windSpeed": 6.35,
                                "windDirection": 162.28,
                                "humidity": 80.96,
                                "pressureSeaLevel": 30.12,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T20:00:00-08:00",
                            "values": {
                                "temperature": 51.85,
                                "temperatureApparent": 51.85,
                                "temperatureMin": 51.85,
                                "temperatureMax": 51.85,
                                "windSpeed": 5.61,
                                "windDirection": 157.38,
                                "humidity": 78.17,
                                "pressureSeaLevel": 30.12,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T21:00:00-08:00",
                            "values": {
                                "temperature": 52.2,
                                "temperatureApparent": 52.2,
                                "temperatureMin": 52.2,
                                "temperatureMax": 52.2,
                                "windSpeed": 5.84,
                                "windDirection": 150.36,
                                "humidity": 76.93,
                                "pressureSeaLevel": 30.12,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T22:00:00-08:00",
                            "values": {
                                "temperature": 52.52,
                                "temperatureApparent": 52.52,
                                "temperatureMin": 52.52,
                                "temperatureMax": 52.52,
                                "windSpeed": 5.19,
                                "windDirection": 150.96,
                                "humidity": 79.06,
                                "pressureSeaLevel": 30.11,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T23:00:00-08:00",
                            "values": {
                                "temperature": 52.36,
                                "temperatureApparent": 52.36,
                                "temperatureMin": 52.36,
                                "temperatureMax": 52.36,
                                "windSpeed": 5.15,
                                "windDirection": 149.59,
                                "humidity": 83.04,
                                "pressureSeaLevel": 30.1,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T00:00:00-08:00",
                            "values": {
                                "temperature": 52.93,
                                "temperatureApparent": 52.93,
                                "temperatureMin": 52.93,
                                "temperatureMax": 52.93,
                                "windSpeed": 5.59,
                                "windDirection": 143.43,
                                "humidity": 84.08,
                                "pressureSeaLevel": 30.1,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T01:00:00-08:00",
                            "values": {
                                "temperature": 53.08,
                                "temperatureApparent": 53.08,
                                "temperatureMin": 53.08,
                                "temperatureMax": 53.08,
                                "windSpeed": 5.37,
                                "windDirection": 142.5,
                                "humidity": 85.43,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T02:00:00-08:00",
                            "values": {
                                "temperature": 53.92,
                                "temperatureApparent": 53.92,
                                "temperatureMin": 53.92,
                                "temperatureMax": 53.92,
                                "windSpeed": 6.24,
                                "windDirection": 145.36,
                                "humidity": 86.16,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 97.66
                            }
                        },
                        {
                            "startTime": "2021-11-11T03:00:00-08:00",
                            "values": {
                                "temperature": 53.4,
                                "temperatureApparent": 53.4,
                                "temperatureMin": 53.4,
                                "temperatureMax": 53.4,
                                "windSpeed": 5.84,
                                "windDirection": 153.9,
                                "humidity": 90.67,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 95.31
                            }
                        },
                        {
                            "startTime": "2021-11-11T04:00:00-08:00",
                            "values": {
                                "temperature": 53.46,
                                "temperatureApparent": 53.46,
                                "temperatureMin": 53.46,
                                "temperatureMax": 53.46,
                                "windSpeed": 5.77,
                                "windDirection": 152.02,
                                "humidity": 92.14,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 87.5
                            }
                        },
                        {
                            "startTime": "2021-11-11T05:00:00-08:00",
                            "values": {
                                "temperature": 55.49,
                                "temperatureApparent": 55.49,
                                "temperatureMin": 55.49,
                                "temperatureMax": 55.49,
                                "windSpeed": 6.82,
                                "windDirection": 144.9,
                                "humidity": 89.19,
                                "pressureSeaLevel": 30.1,
                                "uvIndex": 0,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T06:00:00-08:00",
                            "values": {
                                "temperature": 57.38,
                                "temperatureApparent": 57.38,
                                "temperatureMin": 57.38,
                                "temperatureMax": 57.38,
                                "windSpeed": 6.62,
                                "windDirection": 151.95,
                                "humidity": 88.52,
                                "pressureSeaLevel": 30.1,
                                "uvIndex": 0,
                                "weatherCode": 4000,
                                "precipitationProbability": 20,
                                "precipitationType": 1,
                                "visibility": 8.69,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T07:00:00-08:00",
                            "values": {
                                "temperature": 59.38,
                                "temperatureApparent": 59.38,
                                "temperatureMin": 59.38,
                                "temperatureMax": 59.38,
                                "windSpeed": 5.97,
                                "windDirection": 169.19,
                                "humidity": 87.83,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 1,
                                "weatherCode": 4200,
                                "precipitationProbability": 20,
                                "precipitationType": 1,
                                "visibility": 6.4,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T08:00:00-08:00",
                            "values": {
                                "temperature": 60.46,
                                "temperatureApparent": 60.46,
                                "temperatureMin": 60.46,
                                "temperatureMax": 60.46,
                                "windSpeed": 7.11,
                                "windDirection": 183.5,
                                "humidity": 91.21,
                                "pressureSeaLevel": 30.07,
                                "uvIndex": 2,
                                "weatherCode": 4200,
                                "precipitationProbability": 20,
                                "precipitationType": 1,
                                "visibility": 5.51,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T09:00:00-08:00",
                            "values": {
                                "temperature": 61.2,
                                "temperatureApparent": 61.2,
                                "temperatureMin": 61.2,
                                "temperatureMax": 61.2,
                                "windSpeed": 6.51,
                                "windDirection": 186.32,
                                "humidity": 95.69,
                                "pressureSeaLevel": 30.04,
                                "uvIndex": 3,
                                "weatherCode": 4200,
                                "precipitationProbability": 20,
                                "precipitationType": 1,
                                "visibility": 2.39,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T10:00:00-08:00",
                            "values": {
                                "temperature": 61.59,
                                "temperatureApparent": 61.59,
                                "temperatureMin": 61.59,
                                "temperatureMax": 61.59,
                                "windSpeed": 8.86,
                                "windDirection": 190.51,
                                "humidity": 94.56,
                                "pressureSeaLevel": 30,
                                "uvIndex": 2,
                                "weatherCode": 4000,
                                "precipitationProbability": 25,
                                "precipitationType": 1,
                                "visibility": 7.78,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T11:00:00-08:00",
                            "values": {
                                "temperature": 64.63,
                                "temperatureApparent": 64.63,
                                "temperatureMin": 64.63,
                                "temperatureMax": 64.63,
                                "windSpeed": 15.75,
                                "windDirection": 199.16,
                                "humidity": 85.39,
                                "pressureSeaLevel": 29.97,
                                "uvIndex": 2,
                                "weatherCode": 4000,
                                "precipitationProbability": 25,
                                "precipitationType": 1,
                                "visibility": 7,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T12:00:00-08:00",
                            "values": {
                                "temperature": 65.07,
                                "temperatureApparent": 65.07,
                                "temperatureMin": 65.07,
                                "temperatureMax": 65.07,
                                "windSpeed": 10.47,
                                "windDirection": 202.47,
                                "humidity": 85.24,
                                "pressureSeaLevel": 29.94,
                                "uvIndex": 1,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 92.19
                            }
                        },
                        {
                            "startTime": "2021-11-11T13:00:00-08:00",
                            "values": {
                                "temperature": 66.47,
                                "temperatureApparent": 66.47,
                                "temperatureMin": 66.47,
                                "temperatureMax": 66.47,
                                "windSpeed": 9.1,
                                "windDirection": 196.49,
                                "humidity": 82.14,
                                "pressureSeaLevel": 29.93,
                                "uvIndex": 0,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 39.84
                            }
                        },
                        {
                            "startTime": "2021-11-11T14:00:00-08:00",
                            "values": {
                                "temperature": 65.91,
                                "temperatureApparent": 65.91,
                                "temperatureMin": 65.91,
                                "temperatureMax": 65.91,
                                "windSpeed": 8.79,
                                "windDirection": 206.64,
                                "humidity": 79.27,
                                "pressureSeaLevel": 29.94,
                                "uvIndex": 0,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 42.19
                            }
                        },
                        {
                            "startTime": "2021-11-11T15:00:00-08:00",
                            "values": {
                                "temperature": 62.17,
                                "temperatureApparent": 62.17,
                                "temperatureMin": 62.17,
                                "temperatureMax": 62.17,
                                "windSpeed": 7.58,
                                "windDirection": 235.06,
                                "humidity": 88.39,
                                "pressureSeaLevel": 29.96,
                                "uvIndex": 0,
                                "weatherCode": 4200,
                                "precipitationProbability": 40,
                                "precipitationType": 1,
                                "visibility": 2.61,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T16:00:00-08:00",
                            "values": {
                                "temperature": 60.8,
                                "temperatureApparent": 60.8,
                                "temperatureMin": 60.8,
                                "temperatureMax": 60.8,
                                "windSpeed": 9.33,
                                "windDirection": 232.08,
                                "humidity": 95.39,
                                "pressureSeaLevel": 29.98,
                                "uvIndex": 0,
                                "weatherCode": 4200,
                                "precipitationProbability": 35,
                                "precipitationType": 1,
                                "visibility": 2.89,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T17:00:00-08:00",
                            "values": {
                                "temperature": 59.36,
                                "temperatureApparent": 59.36,
                                "temperatureMin": 59.36,
                                "temperatureMax": 59.36,
                                "windSpeed": 9.51,
                                "windDirection": 227.12,
                                "humidity": 97.44,
                                "pressureSeaLevel": 30,
                                "uvIndex": 0,
                                "weatherCode": 4200,
                                "precipitationProbability": 35,
                                "precipitationType": 1,
                                "visibility": 2.96,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T18:00:00-08:00",
                            "values": {
                                "temperature": 59.59,
                                "temperatureApparent": 59.59,
                                "temperatureMin": 59.59,
                                "temperatureMax": 59.59,
                                "windSpeed": 8.57,
                                "windDirection": 244.67,
                                "humidity": 95.62,
                                "pressureSeaLevel": 30.01,
                                "uvIndex": 0,
                                "weatherCode": 4000,
                                "precipitationProbability": 30,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 92.97
                            }
                        },
                        {
                            "startTime": "2021-11-11T19:00:00-08:00",
                            "values": {
                                "temperature": 59.47,
                                "temperatureApparent": 59.47,
                                "temperatureMin": 59.47,
                                "temperatureMax": 59.47,
                                "windSpeed": 8.52,
                                "windDirection": 277.53,
                                "humidity": 97.91,
                                "pressureSeaLevel": 30.02,
                                "uvIndex": 0,
                                "weatherCode": 4000,
                                "precipitationProbability": 25,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T20:00:00-08:00",
                            "values": {
                                "temperature": 58.46,
                                "temperatureApparent": 58.46,
                                "temperatureMin": 58.46,
                                "temperatureMax": 58.46,
                                "windSpeed": 9.35,
                                "windDirection": 292.79,
                                "humidity": 96.05,
                                "pressureSeaLevel": 30.04,
                                "uvIndex": 0,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 34.38
                            }
                        },
                        {
                            "startTime": "2021-11-11T21:00:00-08:00",
                            "values": {
                                "temperature": 55.71,
                                "temperatureApparent": 55.71,
                                "temperatureMin": 55.71,
                                "temperatureMax": 55.71,
                                "windSpeed": 10,
                                "windDirection": 301.07,
                                "humidity": 96.56,
                                "pressureSeaLevel": 30.05,
                                "uvIndex": 0,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 13.28
                            }
                        },
                        {
                            "startTime": "2021-11-11T22:00:00-08:00",
                            "values": {
                                "temperature": 53.71,
                                "temperatureApparent": 53.71,
                                "temperatureMin": 53.71,
                                "temperatureMax": 53.71,
                                "windSpeed": 8.86,
                                "windDirection": 307.02,
                                "humidity": 97.36,
                                "pressureSeaLevel": 30.06,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 9.94,
                                "cloudCover": 8.59
                            }
                        },
                        {
                            "startTime": "2021-11-11T23:00:00-08:00",
                            "values": {
                                "temperature": 52,
                                "temperatureApparent": 52,
                                "temperatureMin": 52,
                                "temperatureMax": 52,
                                "windSpeed": 7.61,
                                "windDirection": 307.48,
                                "humidity": 97.21,
                                "pressureSeaLevel": 30.07,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 8.59
                            }
                        },
                        {
                            "startTime": "2021-11-12T00:00:00-08:00",
                            "values": {
                                "temperature": 50.4,
                                "temperatureApparent": 50.4,
                                "temperatureMin": 50.4,
                                "temperatureMax": 50.4,
                                "windSpeed": 7.09,
                                "windDirection": 310.55,
                                "humidity": 97.2,
                                "pressureSeaLevel": 30.08,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T01:00:00-08:00",
                            "values": {
                                "temperature": 48.88,
                                "temperatureApparent": 48.88,
                                "temperatureMin": 48.88,
                                "temperatureMax": 48.88,
                                "windSpeed": 6.93,
                                "windDirection": 312.65,
                                "humidity": 97.18,
                                "pressureSeaLevel": 30.08,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T02:00:00-08:00",
                            "values": {
                                "temperature": 47.59,
                                "temperatureApparent": 47.59,
                                "temperatureMin": 47.59,
                                "temperatureMax": 47.59,
                                "windSpeed": 6.73,
                                "windDirection": 314.14,
                                "humidity": 96.9,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T03:00:00-08:00",
                            "values": {
                                "temperature": 46.29,
                                "temperatureApparent": 46.29,
                                "temperatureMin": 46.29,
                                "temperatureMax": 46.29,
                                "windSpeed": 5.77,
                                "windDirection": 313.76,
                                "humidity": 96.96,
                                "pressureSeaLevel": 30.1,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0.78
                            }
                        },
                        {
                            "startTime": "2021-11-12T04:00:00-08:00",
                            "values": {
                                "temperature": 44.89,
                                "temperatureApparent": 44.89,
                                "temperatureMin": 44.89,
                                "temperatureMax": 44.89,
                                "windSpeed": 4.94,
                                "windDirection": 306.23,
                                "humidity": 97.16,
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
                            "startTime": "2021-11-12T05:00:00-08:00",
                            "values": {
                                "temperature": 46.08,
                                "temperatureApparent": 46.08,
                                "temperatureMin": 46.08,
                                "temperatureMax": 46.08,
                                "windSpeed": 5.97,
                                "windDirection": 300.03,
                                "humidity": 94.94,
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
                            "startTime": "2021-11-12T06:00:00-08:00",
                            "values": {
                                "temperature": 49.5,
                                "temperatureApparent": 49.5,
                                "temperatureMin": 49.5,
                                "temperatureMax": 49.5,
                                "windSpeed": 4.68,
                                "windDirection": 295.49,
                                "humidity": 90.67,
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
                            "startTime": "2021-11-12T07:00:00-08:00",
                            "values": {
                                "temperature": 52.77,
                                "temperatureApparent": 52.77,
                                "temperatureMin": 52.77,
                                "temperatureMax": 52.77,
                                "windSpeed": 4.36,
                                "windDirection": 305.57,
                                "humidity": 81.53,
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
                            "startTime": "2021-11-12T08:00:00-08:00",
                            "values": {
                                "temperature": 56.16,
                                "temperatureApparent": 56.16,
                                "temperatureMin": 56.16,
                                "temperatureMax": 56.16,
                                "windSpeed": 5.61,
                                "windDirection": 313.3,
                                "humidity": 66.59,
                                "pressureSeaLevel": 30.15,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T09:00:00-08:00",
                            "values": {
                                "temperature": 58.8,
                                "temperatureApparent": 58.8,
                                "temperatureMin": 58.8,
                                "temperatureMax": 58.8,
                                "windSpeed": 4.52,
                                "windDirection": 317.42,
                                "humidity": 50.78,
                                "pressureSeaLevel": 30.12,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T10:00:00-08:00",
                            "values": {
                                "temperature": 60.67,
                                "temperatureApparent": 60.67,
                                "temperatureMin": 60.67,
                                "temperatureMax": 60.67,
                                "windSpeed": 5.1,
                                "windDirection": 300.84,
                                "humidity": 44.21,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T11:00:00-08:00",
                            "values": {
                                "temperature": 61.84,
                                "temperatureApparent": 61.84,
                                "temperatureMin": 61.84,
                                "temperatureMax": 61.84,
                                "windSpeed": 5.55,
                                "windDirection": 293.32,
                                "humidity": 40.86,
                                "pressureSeaLevel": 30.07,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T12:00:00-08:00",
                            "values": {
                                "temperature": 62.19,
                                "temperatureApparent": 62.19,
                                "temperatureMin": 62.19,
                                "temperatureMax": 62.19,
                                "windSpeed": 4.47,
                                "windDirection": 289.86,
                                "humidity": 39.16,
                                "pressureSeaLevel": 30.05,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T13:00:00-08:00",
                            "values": {
                                "temperature": 61.74,
                                "temperatureApparent": 61.74,
                                "temperatureMin": 61.74,
                                "temperatureMax": 61.74,
                                "windSpeed": 2.68,
                                "windDirection": 264.53,
                                "humidity": 41,
                                "pressureSeaLevel": 30.03,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T14:00:00-08:00",
                            "values": {
                                "temperature": 59.63,
                                "temperatureApparent": 59.63,
                                "temperatureMin": 59.63,
                                "temperatureMax": 59.63,
                                "windSpeed": 2.77,
                                "windDirection": 266.7,
                                "humidity": 54.22,
                                "pressureSeaLevel": 30.03,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T15:00:00-08:00",
                            "values": {
                                "temperature": 58.39,
                                "temperatureApparent": 58.39,
                                "temperatureMin": 58.39,
                                "temperatureMax": 58.39,
                                "windSpeed": 0.6,
                                "windDirection": 311.71,
                                "humidity": 49.14,
                                "pressureSeaLevel": 30.03,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T16:00:00-08:00",
                            "values": {
                                "temperature": 55.33,
                                "temperatureApparent": 55.33,
                                "temperatureMin": 55.33,
                                "temperatureMax": 55.33,
                                "windSpeed": 2.42,
                                "windDirection": 185.16,
                                "humidity": 56.01,
                                "pressureSeaLevel": 30.04,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T17:00:00-08:00",
                            "values": {
                                "temperature": 53.1,
                                "temperatureApparent": 53.1,
                                "temperatureMin": 53.1,
                                "temperatureMax": 53.1,
                                "windSpeed": 3.89,
                                "windDirection": 205.22,
                                "humidity": 61.22,
                                "pressureSeaLevel": 30.05,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-12T18:00:00-08:00",
                            "values": {
                                "temperature": 47.37,
                                "temperatureApparent": 47.37,
                                "temperatureMin": 47.37,
                                "temperatureMax": 47.37,
                                "windSpeed": 6.51,
                                "windDirection": 212.49,
                                "humidity": 75.2,
                                "pressureSeaLevel": 30.03,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 10.37,
                                "cloudCover": 1.69
                            }
                        },
                        {
                            "startTime": "2021-11-12T19:00:00-08:00",
                            "values": {
                                "temperature": 48.34,
                                "temperatureApparent": 48.34,
                                "temperatureMin": 48.34,
                                "temperatureMax": 48.34,
                                "windSpeed": 6.04,
                                "windDirection": 230.26,
                                "humidity": 70.6,
                                "pressureSeaLevel": 30.02,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 10.79,
                                "cloudCover": 2.25
                            }
                        },
                        {
                            "startTime": "2021-11-12T20:00:00-08:00",
                            "values": {
                                "temperature": 49.06,
                                "temperatureApparent": 49.06,
                                "temperatureMin": 49.06,
                                "temperatureMax": 49.06,
                                "windSpeed": 5.57,
                                "windDirection": 249.7,
                                "humidity": 67.1,
                                "pressureSeaLevel": 30.02,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 11.21,
                                "cloudCover": 2.52
                            }
                        },
                        {
                            "startTime": "2021-11-12T21:00:00-08:00",
                            "values": {
                                "temperature": 50.09,
                                "temperatureApparent": 50.09,
                                "temperatureMin": 50.09,
                                "temperatureMax": 50.09,
                                "windSpeed": 6.17,
                                "windDirection": 255.81,
                                "humidity": 61.84,
                                "pressureSeaLevel": 30.01,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 11.63,
                                "cloudCover": 2.7
                            }
                        },
                        {
                            "startTime": "2021-11-12T22:00:00-08:00",
                            "values": {
                                "temperature": 50.38,
                                "temperatureApparent": 50.38,
                                "temperatureMin": 50.38,
                                "temperatureMax": 50.38,
                                "windSpeed": 6.6,
                                "windDirection": 266.58,
                                "humidity": 58.96,
                                "pressureSeaLevel": 30.01,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "visibility": 12.05,
                                "cloudCover": 2.8
                            }
                        },
                        {
                            "startTime": "2021-11-12T23:00:00-08:00",
                            "values": {
                                "temperature": 50.4,
                                "temperatureApparent": 50.4,
                                "temperatureMin": 50.4,
                                "temperatureMax": 50.4,
                                "windSpeed": 7.18,
                                "windDirection": 270.03,
                                "humidity": 57.27,
                                "pressureSeaLevel": 30,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 12.47,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T00:00:00-08:00",
                            "values": {
                                "temperature": 49.84,
                                "temperatureApparent": 49.84,
                                "temperatureMin": 49.84,
                                "temperatureMax": 49.84,
                                "windSpeed": 7.4,
                                "windDirection": 294.2,
                                "humidity": 57.47,
                                "pressureSeaLevel": 30,
                                "uvIndex": 0,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 12.9,
                                "cloudCover": 15.95
                            }
                        },
                        {
                            "startTime": "2021-11-13T01:00:00-08:00",
                            "values": {
                                "temperature": 49.15,
                                "temperatureApparent": 49.15,
                                "temperatureMin": 49.15,
                                "temperatureMax": 49.15,
                                "windSpeed": 8.19,
                                "windDirection": 306.43,
                                "humidity": 58.74,
                                "pressureSeaLevel": 30,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 13.31,
                                "cloudCover": 2.6
                            }
                        },
                        {
                            "startTime": "2021-11-13T02:00:00-08:00",
                            "values": {
                                "temperature": 48.33,
                                "temperatureApparent": 48.33,
                                "temperatureMin": 48.33,
                                "temperatureMax": 48.33,
                                "windSpeed": 9.1,
                                "windDirection": 308.92,
                                "humidity": 58.28,
                                "pressureSeaLevel": 30,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 13.74,
                                "cloudCover": 3.13
                            }
                        },
                        {
                            "startTime": "2021-11-13T03:00:00-08:00",
                            "values": {
                                "temperature": 47.53,
                                "temperatureApparent": 47.53,
                                "temperatureMin": 47.53,
                                "temperatureMax": 47.53,
                                "windSpeed": 10.11,
                                "windDirection": 312.8,
                                "humidity": 51.5,
                                "pressureSeaLevel": 30.01,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 14.16,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T04:00:00-08:00",
                            "values": {
                                "temperature": 46.51,
                                "temperatureApparent": 46.51,
                                "temperatureMin": 46.51,
                                "temperatureMax": 46.51,
                                "windSpeed": 10.25,
                                "windDirection": 317.33,
                                "humidity": 47.42,
                                "pressureSeaLevel": 30.02,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 14.58,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T05:00:00-08:00",
                            "values": {
                                "temperature": 46.31,
                                "temperatureApparent": 46.31,
                                "temperatureMin": 46.31,
                                "temperatureMax": 46.31,
                                "windSpeed": 10.65,
                                "windDirection": 316.97,
                                "humidity": 43.58,
                                "pressureSeaLevel": 30.04,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T06:00:00-08:00",
                            "values": {
                                "temperature": 47.53,
                                "temperatureApparent": 47.53,
                                "temperatureMin": 47.53,
                                "temperatureMax": 47.53,
                                "windSpeed": 11.36,
                                "windDirection": 315.19,
                                "humidity": 40.65,
                                "pressureSeaLevel": 30.04,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T07:00:00-08:00",
                            "values": {
                                "temperature": 49.41,
                                "temperatureApparent": 49.41,
                                "temperatureMin": 49.41,
                                "temperatureMax": 49.41,
                                "windSpeed": 11.36,
                                "windDirection": 311.87,
                                "humidity": 37.56,
                                "pressureSeaLevel": 30.03,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T08:00:00-08:00",
                            "values": {
                                "temperature": 51.1,
                                "temperatureApparent": 51.1,
                                "temperatureMin": 51.1,
                                "temperatureMax": 51.1,
                                "windSpeed": 11.77,
                                "windDirection": 308.47,
                                "humidity": 34.86,
                                "pressureSeaLevel": 30.03,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T09:00:00-08:00",
                            "values": {
                                "temperature": 52.3,
                                "temperatureApparent": 52.3,
                                "temperatureMin": 52.3,
                                "temperatureMax": 52.3,
                                "windSpeed": 11.5,
                                "windDirection": 308.3,
                                "humidity": 32.75,
                                "pressureSeaLevel": 30.01,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T10:00:00-08:00",
                            "values": {
                                "temperature": 53.33,
                                "temperatureApparent": 53.33,
                                "temperatureMin": 53.33,
                                "temperatureMax": 53.33,
                                "windSpeed": 11.3,
                                "windDirection": 306.69,
                                "humidity": 31.71,
                                "pressureSeaLevel": 29.98,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T11:00:00-08:00",
                            "values": {
                                "temperature": 56.79,
                                "temperatureApparent": 56.79,
                                "temperatureMin": 56.79,
                                "temperatureMax": 56.79,
                                "windSpeed": 10.94,
                                "windDirection": 312.24,
                                "humidity": 39.62,
                                "pressureSeaLevel": 29.94,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T12:00:00-08:00",
                            "values": {
                                "temperature": 56.73,
                                "temperatureApparent": 56.73,
                                "temperatureMin": 56.73,
                                "temperatureMax": 56.73,
                                "windSpeed": 11.32,
                                "windDirection": 309,
                                "humidity": 36.74,
                                "pressureSeaLevel": 29.94,
                                "uvIndex": 1,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0.48
                            }
                        },
                        {
                            "startTime": "2021-11-13T13:00:00-08:00",
                            "values": {
                                "temperature": 53.08,
                                "temperatureApparent": 53.08,
                                "temperatureMin": 53.08,
                                "temperatureMax": 53.08,
                                "windSpeed": 11.65,
                                "windDirection": 313.54,
                                "humidity": 32.97,
                                "pressureSeaLevel": 29.96,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T14:00:00-08:00",
                            "values": {
                                "temperature": 52.88,
                                "temperatureApparent": 52.88,
                                "temperatureMin": 52.88,
                                "temperatureMax": 52.88,
                                "windSpeed": 12.48,
                                "windDirection": 310.5,
                                "humidity": 36.54,
                                "pressureSeaLevel": 29.97,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 3.04
                            }
                        },
                        {
                            "startTime": "2021-11-13T15:00:00-08:00",
                            "values": {
                                "temperature": 49.59,
                                "temperatureApparent": 49.59,
                                "temperatureMin": 49.59,
                                "temperatureMax": 49.59,
                                "windSpeed": 9.48,
                                "windDirection": 315.24,
                                "humidity": 39.27,
                                "pressureSeaLevel": 30,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T16:00:00-08:00",
                            "values": {
                                "temperature": 48.36,
                                "temperatureApparent": 48.36,
                                "temperatureMin": 48.36,
                                "temperatureMax": 48.36,
                                "windSpeed": 11.97,
                                "windDirection": 314.21,
                                "humidity": 41.81,
                                "pressureSeaLevel": 30.03,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 2.8
                            }
                        },
                        {
                            "startTime": "2021-11-13T17:00:00-08:00",
                            "values": {
                                "temperature": 46.27,
                                "temperatureApparent": 46.27,
                                "temperatureMin": 46.27,
                                "temperatureMax": 46.27,
                                "windSpeed": 12.12,
                                "windDirection": 319.4,
                                "humidity": 44.95,
                                "pressureSeaLevel": 30.04,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T18:00:00-08:00",
                            "values": {
                                "temperature": 44.76,
                                "temperatureApparent": 44.76,
                                "temperatureMin": 44.76,
                                "temperatureMax": 44.76,
                                "windSpeed": 10.4,
                                "windDirection": 317.41,
                                "humidity": 48.19,
                                "pressureSeaLevel": 30.05,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T19:00:00-08:00",
                            "values": {
                                "temperature": 43.27,
                                "temperatureApparent": 43.27,
                                "temperatureMin": 43.27,
                                "temperatureMax": 43.27,
                                "windSpeed": 11.5,
                                "windDirection": 321.54,
                                "humidity": 49.44,
                                "pressureSeaLevel": 30.06,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T20:00:00-08:00",
                            "values": {
                                "temperature": 42.08,
                                "temperatureApparent": 42.08,
                                "temperatureMin": 42.08,
                                "temperatureMax": 42.08,
                                "windSpeed": 11.34,
                                "windDirection": 317.39,
                                "humidity": 51.09,
                                "pressureSeaLevel": 30.06,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T21:00:00-08:00",
                            "values": {
                                "temperature": 41.07,
                                "temperatureApparent": 41.07,
                                "temperatureMin": 41.07,
                                "temperatureMax": 41.07,
                                "windSpeed": 10.96,
                                "windDirection": 312.84,
                                "humidity": 52.44,
                                "pressureSeaLevel": 30.07,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T22:00:00-08:00",
                            "values": {
                                "temperature": 40.24,
                                "temperatureApparent": 39.83,
                                "temperatureMin": 40.24,
                                "temperatureMax": 40.24,
                                "windSpeed": 11.05,
                                "windDirection": 318.97,
                                "humidity": 53.8,
                                "pressureSeaLevel": 30.06,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-13T23:00:00-08:00",
                            "values": {
                                "temperature": 39.65,
                                "temperatureApparent": 33.57,
                                "temperatureMin": 39.65,
                                "temperatureMax": 39.65,
                                "windSpeed": 10.96,
                                "windDirection": 309.99,
                                "humidity": 54.73,
                                "pressureSeaLevel": 30.08,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-14T00:00:00-08:00",
                            "values": {
                                "temperature": 39,
                                "temperatureApparent": 32.18,
                                "temperatureMin": 39,
                                "temperatureMax": 39,
                                "windSpeed": 10.45,
                                "windDirection": 313.76,
                                "humidity": 56.01,
                                "pressureSeaLevel": 30.08,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0
                            }
                        },
                        {
                            "startTime": "2021-11-14T01:00:00-08:00",
                            "values": {
                                "temperature": 38.37,
                                "temperatureApparent": 31.44,
                                "temperatureMin": 38.37,
                                "temperatureMax": 38.37,
                                "windSpeed": 10.36,
                                "windDirection": 316.65,
                                "humidity": 57.45,
                                "pressureSeaLevel": 30.07,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 0.42
                            }
                        },
                        {
                            "startTime": "2021-11-14T02:00:00-08:00",
                            "values": {
                                "temperature": 37.98,
                                "temperatureApparent": 31.08,
                                "temperatureMin": 37.98,
                                "temperatureMax": 37.98,
                                "windSpeed": 10,
                                "windDirection": 321.41,
                                "humidity": 58.11,
                                "pressureSeaLevel": 30.07,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 2.58
                            }
                        },
                        {
                            "startTime": "2021-11-14T03:00:00-08:00",
                            "values": {
                                "temperature": 39.09,
                                "temperatureApparent": 33.37,
                                "temperatureMin": 39.09,
                                "temperatureMax": 39.09,
                                "windSpeed": 8.14,
                                "windDirection": 321.27,
                                "humidity": 56.37,
                                "pressureSeaLevel": 30.09,
                                "uvIndex": 0,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 52.64
                            }
                        },
                        {
                            "startTime": "2021-11-14T04:00:00-08:00",
                            "values": {
                                "temperature": 39.04,
                                "temperatureApparent": 33.44,
                                "temperatureMin": 39.04,
                                "temperatureMax": 39.04,
                                "windSpeed": 7.92,
                                "windDirection": 318.54,
                                "humidity": 56.46,
                                "pressureSeaLevel": 30.11,
                                "uvIndex": 0,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 59.07
                            }
                        },
                        {
                            "startTime": "2021-11-14T05:00:00-08:00",
                            "values": {
                                "temperature": 39.49,
                                "temperatureApparent": 34.54,
                                "temperatureMin": 39.49,
                                "temperatureMax": 39.49,
                                "windSpeed": 8.08,
                                "windDirection": 314.26,
                                "humidity": 55.68,
                                "pressureSeaLevel": 30.13,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 50.9
                            }
                        },
                        {
                            "startTime": "2021-11-14T06:00:00-08:00",
                            "values": {
                                "temperature": 42.28,
                                "temperatureApparent": 42.28,
                                "temperatureMin": 42.28,
                                "temperatureMax": 42.28,
                                "windSpeed": 6.49,
                                "windDirection": 311.61,
                                "humidity": 48.71,
                                "pressureSeaLevel": 30.12,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 30.17
                            }
                        },
                        {
                            "startTime": "2021-11-14T07:00:00-08:00",
                            "values": {
                                "temperature": 44.1,
                                "temperatureApparent": 44.1,
                                "temperatureMin": 44.1,
                                "temperatureMax": 44.1,
                                "windSpeed": 10.74,
                                "windDirection": 314.55,
                                "humidity": 43.65,
                                "pressureSeaLevel": 30.13,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 16.03
                            }
                        },
                        {
                            "startTime": "2021-11-14T08:00:00-08:00",
                            "values": {
                                "temperature": 46.89,
                                "temperatureApparent": 46.89,
                                "temperatureMin": 46.89,
                                "temperatureMax": 46.89,
                                "windSpeed": 9.75,
                                "windDirection": 311.28,
                                "humidity": 38.74,
                                "pressureSeaLevel": 30.12,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 15,
                                "cloudCover": 13.55
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