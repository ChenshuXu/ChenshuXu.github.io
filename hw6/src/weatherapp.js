'use strict';
function WeatherApp() {
    console.log('app started');
    document.getElementById("input-form").addEventListener("submit", function (e) {
        e.preventDefault();
    });
    document.getElementById("auto-detect-location").onchange = onAutoDetectLocationChange;

    document.getElementById("submit").addEventListener("click", onSubmitClick);
    document.getElementById("clear").addEventListener("click", onClearClick);
}

function onAutoDetectLocationChange () {
    if (document.getElementById("auto-detect-location").checked) {
        console.log("checked");
        document.getElementById("street").disabled = true;
        document.getElementById("city").disabled = true;
        document.getElementById("state").disabled = true;
    } else {
        console.log("not checked");
        document.getElementById("street").disabled = false;
        document.getElementById("city").disabled = false;
        document.getElementById("state").disabled = false;
    }
}

function onClearClick(event) {
    event.preventDefault();
    console.log("clear clicked");
    document.getElementById("street").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("table-1-area").innerHTML = "";
}

function onSubmitClick(event) {
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    if (document.getElementById("auto-detect-location").checked) {
        console.log("auto detect");
        $.ajax({
            type: "GET",
            url: "https://ipinfo.io/?token=5f8b30af9607e3",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                let loc = data.loc;
                let lat = parseFloat(loc.split(",")[0]);
                let lng = parseFloat(loc.split(",")[1]);
                let location = data.city + ", " + data.region + ", " + data.country
                RequestCurrentWeather(location, lat, lng);
            }
        });
    } else {
        if (street !== "" && city !== "" && state !== "") {
            console.log("search location");
            let address = street + '+' + city + '+' + state;
            let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                address +
                "&key=AIzaSyBmRnM9YBpvHa1SkTZYSZ55p5mB5v1_rFc";
            $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                success: function (data) {
                    // console.log(data);
                    let lat = parseFloat(data.results[0].geometry.location.lat);
                    let lng = parseFloat(data.results[0].geometry.location.lng);
                    let location = data.results[0].formatted_address;
                    RequestCurrentWeather(location, lat, lng);
                }
            });
        }
    }
}

function RequestCurrentWeather(location, lat, lng) {
    console.log("request current data", lat, lng);
    let url = "https://csci571-chenshu-app.azurewebsites.net/example/current";
    // let url = "https://csci571-chenshu-app.azurewebsites.net/current?lat="+lat+"&lng="+lng;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            console.log(data);
            DisplayCurrentWeather(location, data);
        }
    });
}

function DisplayCurrentWeather(location, data) {
    console.log("display current weather");
    let html;
    if (data !== null) {
        let values = data.data.timelines[0].intervals[0].values;
        console.log(values);
        let weatherCode = values.weatherCode;
        let weatherText = "none";
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
            case 4001:
                weatherText = "Rain";
                weatherImgSrc = "rain.svg";
                break;
            case 4201:
                weatherText = "Heavy Rain";
                weatherImgSrc = "rain_heavy.svg";
                break;
        }
        html = `
<div class="table-1">
    <div class="location">${location}</div>
    <div class="temperature-box">
        <div class="status-image">
            <img src="Images/Weather%20Symbols%20for%20Weather%20Codes/${weatherImgSrc}">
            <div>${weatherText}</div>
        </div>
        <div class="temperature">${values.temperature}°</div>
    </div>
    <div class="info-box">
        <div class="info-item">
            <div>Humidity</div>
            <img src="Images/humidity.png">
            <div>${values.humidity}%</div>
        </div>
        <div class="info-item">
            <div>Pressure</div>
            <img src="Images/Pressure.png">
            <div>${values.pressureSeaLevel}inHG</div>
        </div>
        <div class="info-item">
            <div>Wind Speed</div>
            <img src="Images/Wind_Speed.png">
            <div>${values.windSpeed}mph</div>
        </div>
        <div class="info-item">
            <div>Visibility</div>
            <img src="Images/Visibility.png">
            <div>${values.visibility}mi</div>
        </div>
        <div class="info-item">
            <div>Cloud Cover</div>
            <img src="Images/Cloud_Cover.png">
            <div>${values.cloudCover}%</div>
        </div>
        <div class="info-item">
            <div class="info-item-title">UV Level</div>
            <img src="Images/UV_Level.png">
            <div class="info-item-value">${values.uvIndex}</div>
        </div>
    </div>
</div>`;
    } else {
        html = `
        <div>No record</div>`;
    }

    document.getElementById("table-1-area").innerHTML = html;
}


function RequestTimelineWeather(lat, lng) {
    console.log("request weather data", lat, lng);
    let url = "https://csci571-chenshu-app.azurewebsites.net/example/timelines";
    // let url = "https://csci571-chenshu-app.azurewebsites.net/timelines?lat="+lat+"&lng="+lng;;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            console.log(data);
            DisplayTimelineWeather(data);
        }
    });
}

function DisplayTimelineWeather(data) {

}