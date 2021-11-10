var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async (req, res, next) => {
    const lat = req.query.lat;
    const lng = req.query.lng;

    var config = {
        method: 'get',
        url: `https://api.tomorrow.io/v4/timelines?location=${lat},${lng}&fields=temperature&fields=temperatureApparent&fields=temperatureMin&fields=temperatureMax&fields=windSpeed&fields=windDirection&fields=humidity&fields=pressureSeaLevel&fields=uvIndex&fields=weatherCode&fields=precipitationProbability&fields=precipitationType&fields=sunriseTime&fields=sunsetTime&fields=visibility&fields=moonPhase&fields=cloudCover&units=imperial&timesteps=1d&timezone=America/Los_Angeles&apikey=yODx9w6WUkq27c1Vb3HlQsMiUlxcTVlC`,
        headers: { }
    };

    axios(config)
        .then(function (response) {
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
                    "timestep": "1d",
                    "startTime": "2021-11-09T03:00:00-08:00",
                    "endTime": "2021-11-24T03:00:00-08:00",
                    "intervals": [
                        {
                            "startTime": "2021-11-09T03:00:00-08:00",
                            "values": {
                                "temperature": 76.78,
                                "temperatureApparent": 76.78,
                                "temperatureMin": 40.1,
                                "temperatureMax": 76.78,
                                "windSpeed": 4.7,
                                "windDirection": 230.51,
                                "humidity": 96,
                                "pressureSeaLevel": 30.11,
                                "uvIndex": 4,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "2021-11-09T04:05:00-08:00",
                                "sunsetTime": "2021-11-09T14:38:20-08:00",
                                "visibility": 9.94,
                                "moonPhase": 1,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T03:00:00-08:00",
                            "values": {
                                "temperature": 73.09,
                                "temperatureApparent": 73.09,
                                "temperatureMin": 45.64,
                                "temperatureMax": 73.09,
                                "windSpeed": 6.69,
                                "windDirection": 187.65,
                                "humidity": 86.16,
                                "pressureSeaLevel": 30.06,
                                "uvIndex": 4,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-10T04:05:00-08:00",
                                "sunsetTime": "2021-11-10T14:40:00-08:00",
                                "visibility": 9.94,
                                "moonPhase": 2,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T03:00:00-08:00",
                            "values": {
                                "temperature": 66.47,
                                "temperatureApparent": 66.47,
                                "temperatureMin": 47.59,
                                "temperatureMax": 66.47,
                                "windSpeed": 15.75,
                                "windDirection": 232.41,
                                "humidity": 97.91,
                                "pressureSeaLevel": 29.93,
                                "uvIndex": 3,
                                "weatherCode": 4200,
                                "precipitationProbability": 40,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-11T04:05:00-08:00",
                                "sunsetTime": "2021-11-11T14:36:40-08:00",
                                "visibility": 9.94,
                                "moonPhase": 2,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-12T03:00:00-08:00",
                            "values": {
                                "temperature": 62.19,
                                "temperatureApparent": 62.19,
                                "temperatureMin": 44.89,
                                "temperatureMax": 62.19,
                                "windSpeed": 9.1,
                                "windDirection": 276.08,
                                "humidity": 97.16,
                                "pressureSeaLevel": 30,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-12T04:06:40-08:00",
                                "sunsetTime": "2021-11-12T14:36:40-08:00",
                                "visibility": 13.74,
                                "moonPhase": 2,
                                "cloudCover": 15.95
                            }
                        },
                        {
                            "startTime": "2021-11-13T03:00:00-08:00",
                            "values": {
                                "temperature": 56.79,
                                "temperatureApparent": 56.79,
                                "temperatureMin": 37.98,
                                "temperatureMax": 56.79,
                                "windSpeed": 12.48,
                                "windDirection": 314.3,
                                "humidity": 58.11,
                                "pressureSeaLevel": 29.94,
                                "uvIndex": 3,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "2021-11-13T04:06:40-08:00",
                                "sunsetTime": "2021-11-13T14:36:40-08:00",
                                "visibility": 15,
                                "moonPhase": 2,
                                "cloudCover": 3.04
                            }
                        },
                        {
                            "startTime": "2021-11-14T03:00:00-08:00",
                            "values": {
                                "temperature": 56.86,
                                "temperatureApparent": 56.86,
                                "temperatureMin": 39.04,
                                "temperatureMax": 56.86,
                                "windSpeed": 11.23,
                                "windDirection": 295.46,
                                "humidity": 56.46,
                                "pressureSeaLevel": 30.02,
                                "uvIndex": 0,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-14T04:10:00-08:00",
                                "sunsetTime": "2021-11-14T14:35:00-08:00",
                                "visibility": 15,
                                "moonPhase": 3,
                                "cloudCover": 59.07
                            }
                        },
                        {
                            "startTime": "2021-11-15T03:00:00-08:00",
                            "values": {
                                "temperature": 57.87,
                                "temperatureApparent": 57.87,
                                "temperatureMin": 42.03,
                                "temperatureMax": 57.87,
                                "windSpeed": 7.87,
                                "windDirection": 274.74,
                                "humidity": 69.98,
                                "pressureSeaLevel": 30.26,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "2021-11-15T04:10:00-08:00",
                                "sunsetTime": "2021-11-15T14:35:00-08:00",
                                "visibility": 15,
                                "moonPhase": 3,
                                "cloudCover": 99.96
                            }
                        },
                        {
                            "startTime": "2021-11-16T03:00:00-08:00",
                            "values": {
                                "temperature": 66.78,
                                "temperatureApparent": 66.78,
                                "temperatureMin": 45.99,
                                "temperatureMax": 66.78,
                                "windSpeed": 7.85,
                                "windDirection": 215.07,
                                "humidity": 57.62,
                                "pressureSeaLevel": 30.18,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "2021-11-16T04:11:40-08:00",
                                "sunsetTime": "2021-11-16T14:35:00-08:00",
                                "visibility": 15,
                                "moonPhase": 3,
                                "cloudCover": 8.21
                            }
                        },
                        {
                            "startTime": "2021-11-17T03:00:00-08:00",
                            "values": {
                                "temperature": 71.06,
                                "temperatureApparent": 71.06,
                                "temperatureMin": 52.11,
                                "temperatureMax": 71.06,
                                "windSpeed": 6.26,
                                "windDirection": 193.53,
                                "humidity": 71.08,
                                "pressureSeaLevel": 30.09,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "2021-11-17T04:11:40-08:00",
                                "sunsetTime": "2021-11-17T14:33:20-08:00",
                                "visibility": 15,
                                "moonPhase": 3,
                                "cloudCover": 35.09
                            }
                        },
                        {
                            "startTime": "2021-11-18T03:00:00-08:00",
                            "values": {
                                "temperature": 67.64,
                                "temperatureApparent": 67.64,
                                "temperatureMin": 53.19,
                                "temperatureMax": 67.64,
                                "windSpeed": 7.9,
                                "windDirection": 158.69,
                                "humidity": 98.32,
                                "pressureSeaLevel": 30.05,
                                "weatherCode": 1001,
                                "precipitationProbability": 75,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-18T04:13:20-08:00",
                                "sunsetTime": "2021-11-18T14:33:20-08:00",
                                "visibility": 15,
                                "moonPhase": 4,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-19T03:00:00-08:00",
                            "values": {
                                "temperature": 69.3,
                                "temperatureApparent": 69.3,
                                "temperatureMin": 56.53,
                                "temperatureMax": 69.3,
                                "windSpeed": 5.23,
                                "windDirection": 274.07,
                                "humidity": 97.96,
                                "pressureSeaLevel": 30.06,
                                "weatherCode": 1001,
                                "precipitationProbability": 85,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-19T04:13:20-08:00",
                                "sunsetTime": "2021-11-19T14:33:20-08:00",
                                "visibility": 15,
                                "moonPhase": 4,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-20T03:00:00-08:00",
                            "values": {
                                "temperature": 64.94,
                                "temperatureApparent": 64.94,
                                "temperatureMin": 54.7,
                                "temperatureMax": 64.94,
                                "windSpeed": 9.62,
                                "windDirection": 111.53,
                                "humidity": 86.6,
                                "pressureSeaLevel": 30.17,
                                "weatherCode": 1001,
                                "precipitationProbability": 5,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-20T04:16:40-08:00",
                                "sunsetTime": "2021-11-20T14:33:20-08:00",
                                "visibility": 15,
                                "moonPhase": 4,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-21T03:00:00-08:00",
                            "values": {
                                "temperature": 66.31,
                                "temperatureApparent": 66.31,
                                "temperatureMin": 51.3,
                                "temperatureMax": 66.31,
                                "windSpeed": 13.11,
                                "windDirection": 193.24,
                                "humidity": 87.84,
                                "pressureSeaLevel": 30.19,
                                "weatherCode": 1001,
                                "precipitationProbability": 20,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-21T04:16:40-08:00",
                                "sunsetTime": "2021-11-21T14:30:00-08:00",
                                "visibility": 15,
                                "moonPhase": 4,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-22T03:00:00-08:00",
                            "values": {
                                "temperature": 54.97,
                                "temperatureApparent": 54.97,
                                "temperatureMin": 42.82,
                                "temperatureMax": 54.97,
                                "windSpeed": 13,
                                "windDirection": 244.57,
                                "humidity": 71.86,
                                "pressureSeaLevel": 30.28,
                                "weatherCode": 1100,
                                "precipitationProbability": 5,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-22T04:16:40-08:00",
                                "sunsetTime": "2021-11-22T14:30:00-08:00",
                                "visibility": 15,
                                "moonPhase": 5,
                                "cloudCover": 89.63
                            }
                        },
                        {
                            "startTime": "2021-11-23T03:00:00-08:00",
                            "values": {
                                "temperature": 54.93,
                                "temperatureApparent": 54.93,
                                "temperatureMin": 40.91,
                                "temperatureMax": 54.93,
                                "windSpeed": 9.26,
                                "windDirection": 117.68,
                                "humidity": 57.4,
                                "pressureSeaLevel": 30.18,
                                "weatherCode": 1101,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "2021-11-23T04:18:20-08:00",
                                "sunsetTime": "2021-11-23T14:30:00-08:00",
                                "visibility": 15,
                                "moonPhase": 5,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-24T03:00:00-08:00",
                            "values": {
                                "temperature": 64.29,
                                "temperatureApparent": 64.29,
                                "temperatureMin": 43.74,
                                "temperatureMax": 64.29,
                                "windSpeed": 13.65,
                                "windDirection": 143.16,
                                "humidity": 72.11,
                                "pressureSeaLevel": 29.95,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 1,
                                "sunriseTime": "2021-11-24T04:18:20-08:00",
                                "sunsetTime": "2021-11-24T14:30:00-08:00",
                                "visibility": 15,
                                "moonPhase": 5,
                                "cloudCover": 97.78
                            }
                        }
                    ]
                }
            ]
        },
        "warnings": [
            {
                "code": 246001,
                "type": "Time Bounded Field",
                "message": "The following field is not supported for a time range: 'uvIndex'",
                "meta": {
                    "field": "uvIndex",
                    "from": "2021-11-09T01:30:00-08:00",
                    "to": "2021-11-14T08:39:03-08:00"
                }
            }
        ]
    };
    res.json(sampleJson);
});

module.exports = router;