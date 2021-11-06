var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async (req, res, next) => {
    const lat = req.query.lat;
    const lng = req.query.lng;

    var config = {
        method: 'get',
        url: `https://api.tomorrow.io/v4/timelines?location=${lat},${lng}&fields=temperature&fields=temperatureApparent&fields=temperatureMin&fields=temperatureMax&fields=windSpeed&fields=windDirection&fields=humidity&fields=pressureSeaLevel&fields=uvIndex&fields=weatherCode&fields=precipitationProbability&fields=precipitationType&fields=visibility&fields=cloudCover&units=imperial&timesteps=current&timezone=America/Los_Angeles&apikey=yODx9w6WUkq27c1Vb3HlQsMiUlxcTVlC`,
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
                    "timestep": "current",
                    "startTime": "2021-11-06T08:18:00-07:00",
                    "endTime": "2021-11-06T08:18:00-07:00",
                    "intervals": [
                        {
                            "startTime": "2021-11-06T08:18:00-07:00",
                            "values": {
                                "temperature": 46.4,
                                "temperatureApparent": 46.4,
                                "temperatureMin": 46.4,
                                "temperatureMax": 46.4,
                                "windSpeed": 1.12,
                                "windDirection": 330.31,
                                "humidity": 69,
                                "pressureSeaLevel": 30.31,
                                "uvIndex": 2,
                                "weatherCode": 1000,
                                "precipitationProbability": 0,
                                "precipitationType": 0,
                                "visibility": 9.94
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