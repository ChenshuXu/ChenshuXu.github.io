var express = require('express');
var router = express.Router();
var axios = require('axios');

const fs = require('fs');

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
            // console.log(response.data);
            let intervals = response.data.data.timelines[0].intervals;
            var response_obj = [];
            for (let i = 0; i < intervals.length; i++) {
                let interval = intervals[i];
                let values = intervals[i].values;
                response_obj.push({
                    "startTime": interval.startTime,
                    "dateText": GetDateText(new Date(interval.startTime)),
                    "temperature": values.temperature,
                    "temperatureApparent": values.temperatureApparent,
                    "temperatureMin": values.temperatureMin,
                    "temperatureMax": values.temperatureMax,
                    "windSpeed": values.windSpeed,
                    "windDirection": values.windDirection,
                    "humidity": values.humidity,
                    "pressureSeaLevel": values.pressureSeaLevel,
                    "weatherCode": ConvertWeatherCode(values.weatherCode)[0],
                    "precipitationProbability": 0,
                    "precipitationType": ConvertPrecipitationType(values.precipitationType),
                    "visibility": values.visibility,
                    "cloudCover": values.cloudCover
                });
            }
            res.json({"data": response_obj});
        })
        .catch(function (error) {
            console.log(error);
            res.json({"error": error, "data": []});
        });
});

module.exports = router;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function GetDateText(datetime) {
    return `${days[datetime.getDay()]}, ${datetime.getDate()} ${months[datetime.getMonth()]} ${datetime.getFullYear()}`;
}

function ConvertWeatherCode(weatherCode) {
    let weatherText = "Unknown";
    let weatherImgSrc = "clear_day.svg";
    switch (weatherCode) {
        case 1000:
            weatherText = "Clear";
            weatherImgSrc = "clear_day.svg";
            break;
        case 1100:
            weatherText = "Mostly Clear";
            weatherImgSrc = "mostly_clear_day.svg";
            break;
        case 1101:
            weatherText = "Partly Cloudy";
            weatherImgSrc = "partly_cloudy_day.svg";
            break;
        case 1102:
            weatherText = "Mostly Cloudy";
            weatherImgSrc = "mostly_cloudy.svg";
            break;
        case 1001:
            weatherText = "Cloudy";
            weatherImgSrc = "cloudy.svg";
            break;
        case 2000:
            weatherText = "Fog";
            weatherImgSrc = "fog.svg";
            break;
        case 2100:
            weatherText = "Light Fog";
            weatherImgSrc = "fog_light.svg";
            break;
        case 8000:
            weatherText = "Thunderstorm";
            weatherImgSrc = "tstorm.svg";
            break;
        case 5001:
            weatherText = "Flurries";
            weatherImgSrc = "flurries.svg";
            break;
        case 5100:
            weatherText = "Light Snow";
            weatherImgSrc = "snow_light.svg";
            break;
        case 5000:
            weatherText = "Snow";
            weatherImgSrc = "snow.svg";
            break;
        case 5101:
            weatherText = "Heavy Snow";
            weatherImgSrc = "snow_heavy.svg";
            break;
        case 7102:
            weatherText = "Light Ice Pellets";
            weatherImgSrc = "ice_pellets_light.svg";
            break;
        case 7101:
            weatherText = "Heavy Ice Pellets";
            weatherImgSrc = "ice_pellets_heavy.svg";
            break;
        case 4000:
            weatherText = "Drizzle";
            weatherImgSrc = "drizzle.svg";
            break;
        case 6000:
            weatherText = "Freezing Drizzle";
            weatherImgSrc = "freezing_drizzle.svg";
            break;
        case 6200:
            weatherText = "Light Freezing Rain";
            weatherImgSrc = "freezing_rain_light.svg";
            break;
        case 6001:
            weatherText = "Freezing Rain";
            weatherImgSrc = "freezing_rain.svg";
            break;
        case 6201:
            weatherText = "Heavy Freezing Rain";
            weatherImgSrc = "freezing_rain_heavy.svg";
            break;
        case 4200:
            weatherText = "Light Rain";
            weatherImgSrc = "rain_light.svg";
            break;
        case 4001:
            weatherText = "Rain";
            weatherImgSrc = "rain.svg";
            break;
        case 4201:
            weatherText = "Heavy Rain";
            weatherImgSrc = "rain_heavy.svg";
            break;
    }
    return [weatherText, weatherImgSrc];
}

function ConvertPrecipitationType(code) {
    let text = "";
    switch (code) {
        case 0:
            text = "N/A";
            break;
        case 1:
            text = "Rain";
            break;
        case 2:
            text = "Snow";
            break;
        case 3:
            text = "Freezing Rain";
            break;
        case 4:
            text = "Ice Pellets";
            break;
    }
    return text;
}

router.get('/example', async (req, res, next) => {
    let rawdata = fs.readFileSync('./routes/hourlyExample.json');
    let json = JSON.parse(rawdata);
    res.json(json);
})