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
                    "startTime": "2021-11-05T20:00:00-07:00",
                    "endTime": "2021-11-19T19:00:00-08:00",
                    "intervals": [
                        {
                            "startTime": "2021-11-05T20:00:00-07:00",
                            "values": {
                                "temperature": -34.85,
                                "temperatureApparent": -58.47,
                                "temperatureMin": -45,
                                "temperatureMax": -34.85,
                                "windSpeed": 18.01,
                                "windDirection": 111.32,
                                "humidity": 67.39,
                                "pressureSeaLevel": 29.62,
                                "uvIndex": 9,
                                "weatherCode": 1001,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 9.94,
                                "moonPhase": 0,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-06T20:00:00-07:00",
                            "values": {
                                "temperature": -33.25,
                                "temperatureApparent": -60.97,
                                "temperatureMin": -46.66,
                                "temperatureMax": -33.25,
                                "windSpeed": 16.87,
                                "windDirection": 107.77,
                                "humidity": 63.59,
                                "pressureSeaLevel": 29.46,
                                "uvIndex": 8,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 9.94,
                                "moonPhase": 1,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-07T19:00:00-08:00",
                            "values": {
                                "temperature": -35.23,
                                "temperatureApparent": -62.28,
                                "temperatureMin": -47.51,
                                "temperatureMax": -35.23,
                                "windSpeed": 14.16,
                                "windDirection": 109.94,
                                "humidity": 66.61,
                                "pressureSeaLevel": 29.35,
                                "uvIndex": 7,
                                "weatherCode": 1001,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 9.94,
                                "moonPhase": 1,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-08T19:00:00-08:00",
                            "values": {
                                "temperature": -35.01,
                                "temperatureApparent": -59.39,
                                "temperatureMin": -42.66,
                                "temperatureMax": -35.01,
                                "windSpeed": 13.09,
                                "windDirection": 101.89,
                                "humidity": 67.71,
                                "pressureSeaLevel": 29.38,
                                "uvIndex": 8,
                                "weatherCode": 1001,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 9.94,
                                "moonPhase": 1,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-09T19:00:00-08:00",
                            "values": {
                                "temperature": -21.87,
                                "temperatureApparent": -21.87,
                                "temperatureMin": -52.85,
                                "temperatureMax": -21.87,
                                "windSpeed": 8.63,
                                "windDirection": 133.87,
                                "humidity": 70.39,
                                "pressureSeaLevel": 29.31,
                                "uvIndex": 8,
                                "weatherCode": 2100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 11.58,
                                "moonPhase": 2,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-10T19:00:00-08:00",
                            "values": {
                                "temperature": -26.54,
                                "temperatureApparent": -28.71,
                                "temperatureMin": -46.39,
                                "temperatureMax": -26.54,
                                "windSpeed": 6.13,
                                "windDirection": 187.56,
                                "humidity": 68.49,
                                "pressureSeaLevel": 29.38,
                                "weatherCode": 2100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 15,
                                "moonPhase": 2,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-11T19:00:00-08:00",
                            "values": {
                                "temperature": -24.63,
                                "temperatureApparent": -43.42,
                                "temperatureMin": -47.96,
                                "temperatureMax": -24.63,
                                "windSpeed": 17.61,
                                "windDirection": 84.28,
                                "humidity": 68.87,
                                "pressureSeaLevel": 29.42,
                                "weatherCode": 1001,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 4.89,
                                "moonPhase": 2,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-12T19:00:00-08:00",
                            "values": {
                                "temperature": -25.26,
                                "temperatureApparent": -57.05,
                                "temperatureMin": -42.09,
                                "temperatureMax": -25.26,
                                "windSpeed": 23.38,
                                "windDirection": 107.53,
                                "humidity": 68.06,
                                "pressureSeaLevel": 29.17,
                                "weatherCode": 2100,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 14.35,
                                "moonPhase": 2,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-13T19:00:00-08:00",
                            "values": {
                                "temperature": -13.85,
                                "temperatureApparent": -36.62,
                                "temperatureMin": -29.06,
                                "temperatureMax": -13.85,
                                "windSpeed": 21.07,
                                "windDirection": 65.27,
                                "humidity": 74.32,
                                "pressureSeaLevel": 28.97,
                                "weatherCode": 2100,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 4.86,
                                "moonPhase": 3,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-14T19:00:00-08:00",
                            "values": {
                                "temperature": -15.11,
                                "temperatureApparent": -30.86,
                                "temperatureMin": -39.48,
                                "temperatureMax": -15.11,
                                "windSpeed": 13.96,
                                "windDirection": 59.4,
                                "humidity": 75.2,
                                "pressureSeaLevel": 29.25,
                                "weatherCode": 2100,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 15,
                                "moonPhase": 3,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-15T19:00:00-08:00",
                            "values": {
                                "temperature": -21.23,
                                "temperatureApparent": -42.77,
                                "temperatureMin": -45.74,
                                "temperatureMax": -21.23,
                                "windSpeed": 17,
                                "windDirection": 120.3,
                                "humidity": 68,
                                "pressureSeaLevel": 29.18,
                                "weatherCode": 1100,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 15,
                                "moonPhase": 3,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-16T19:00:00-08:00",
                            "values": {
                                "temperature": -18.9,
                                "temperatureApparent": -46.93,
                                "temperatureMin": -38.9,
                                "temperatureMax": -18.9,
                                "windSpeed": 28.21,
                                "windDirection": 94.56,
                                "humidity": 68.23,
                                "pressureSeaLevel": 28.99,
                                "weatherCode": 1001,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 15,
                                "moonPhase": 3,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-17T19:00:00-08:00",
                            "values": {
                                "temperature": -16.44,
                                "temperatureApparent": -47.24,
                                "temperatureMin": -32.42,
                                "temperatureMax": -16.44,
                                "windSpeed": 29.08,
                                "windDirection": 104.73,
                                "humidity": 68.03,
                                "pressureSeaLevel": 29.04,
                                "weatherCode": 1001,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 15,
                                "moonPhase": 4,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-18T19:00:00-08:00",
                            "values": {
                                "temperature": -7.56,
                                "temperatureApparent": -28.17,
                                "temperatureMin": -26.45,
                                "temperatureMax": -7.56,
                                "windSpeed": 21.07,
                                "windDirection": 88.37,
                                "humidity": 77.42,
                                "pressureSeaLevel": 28.87,
                                "weatherCode": 2100,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 2.6,
                                "moonPhase": 4,
                                "cloudCover": 100
                            }
                        },
                        {
                            "startTime": "2021-11-19T19:00:00-08:00",
                            "values": {
                                "temperature": -5.28,
                                "temperatureApparent": -17.64,
                                "temperatureMin": -33.47,
                                "temperatureMax": -5.28,
                                "windSpeed": 10.33,
                                "windDirection": 192.02,
                                "humidity": 77.15,
                                "pressureSeaLevel": 29.24,
                                "weatherCode": 2100,
                                "precipitationProbability": 5,
                                "precipitationType": 2,
                                "sunriseTime": "0001-12-31T16:37:02+8752:07",
                                "sunsetTime": "0001-12-31T16:37:02+8752:07",
                                "visibility": 3.29,
                                "moonPhase": 4,
                                "cloudCover": 100
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
                    "from": "2021-11-05T18:30:00-07:00",
                    "to": "2021-11-10T19:03:04-08:00"
                }
            }
        ]
    };
    res.json(sampleJson);
});

module.exports = router;