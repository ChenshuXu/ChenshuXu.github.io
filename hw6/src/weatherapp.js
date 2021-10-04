'use strict';
function WeatherApp() {
    let that = this;
    console.log('app started');
    this.currentWeatherData = null;
    this.hourlyWeatherData = null;
    this.timelineWeatherData = null;

    document.getElementById("input-form").addEventListener("submit", function (e) {
        e.preventDefault();
    });
    document.getElementById("auto-detect-location").addEventListener("change", function (e) {
        that.onAutoDetectLocationChange();
    });

    document.getElementById("submit").addEventListener("click", function (e) {
        that.onSubmitClick(e);
    });
    document.getElementById("clear").addEventListener("click", function (e) {
        e.preventDefault();
        that.Clear();
    });
}

WeatherApp.prototype.onAutoDetectLocationChange = function () {
    let that = this;
    if (document.getElementById("auto-detect-location").checked) {
        console.log("checked");
        this.Clear();
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

WeatherApp.prototype.Clear = function () {
    console.log("clear");
    document.getElementById("street").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("table-1-area").innerHTML = "";
    document.getElementById("table-2-area").innerHTML = "";
}

WeatherApp.prototype.onSubmitClick = function (event) {
    let that = this;
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
                that.RequestCurrentWeather(location, lat, lng);
                that.RequestTimelineWeather(lat, lng);
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
                    that.RequestCurrentWeather(location, lat, lng);
                    that.RequestTimelineWeather(lat, lng);
                }
            });
        }
    }
}

WeatherApp.prototype.RequestCurrentWeather = function (location, lat, lng) {
    let that = this;
    console.log("request current data", lat, lng);
    let url = "https://csci571-chenshu-app.azurewebsites.net/example/current";
    // let url = "https://csci571-chenshu-app.azurewebsites.net/current?lat="+lat+"&lng="+lng;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            console.log(data);
            that.currentWeatherData = data;
            that.DisplayCurrentWeather(location, data);
        }
    });
}

WeatherApp.prototype.DisplayCurrentWeather = function (location, data) {
    console.log("display current weather");
    let html;
    if (data !== null) {
        let values = data.data.timelines[0].intervals[0].values;
        console.log(values);
        let weatherCode = values.weatherCode;
        let comb = ConvertWeatherCode(weatherCode);
        let weatherText = comb[0]
        let weatherImgSrc = comb[1];

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


WeatherApp.prototype.RequestTimelineWeather = function (lat, lng) {
    let that = this;
    console.log("request weather data", lat, lng);
    let url = "https://csci571-chenshu-app.azurewebsites.net/example/timelines";
    // let url = "https://csci571-chenshu-app.azurewebsites.net/timelines?lat="+lat+"&lng="+lng;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            console.log(data);
            that.timelineWeatherData = data;
            that.DisplayTimelineWeather(data);
        }
    });
}

WeatherApp.prototype.DisplayTimelineWeather = function (data) {
    let that = this;
    let tableDiv = document.createElement('div');
    tableDiv.classList.add("table-2");
    let tableArea = document.getElementById("table-2-area")
    tableArea.appendChild(tableDiv);
    let table = document.createElement("table");
    tableDiv.appendChild(table);

    // header
    let headerRow = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.textContent = "Date";
    let th2 = document.createElement("th");
    th2.textContent = "Status";
    let th3 = document.createElement("th");
    th3.textContent = "Temp High";
    let th4 = document.createElement("th");
    th4.textContent = "Temp Low";
    let th5 = document.createElement("th");
    th5.textContent = "Wind Speed";
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    headerRow.appendChild(th3);
    headerRow.appendChild(th4);
    headerRow.appendChild(th5);
    table.appendChild(headerRow);

    // table body
    let dayArray = data.data.timelines[0].intervals;
    for (let i=0; i<dayArray.length; i++) {
        let datetime = new Date(dayArray[i].startTime);
        let values = dayArray[i].values;
        let comb = ConvertWeatherCode(values.weatherCode);
        let weatherText = comb[0];
        let weatherImgSrc = comb[1];

        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = GetDateText(datetime);
        let td2 = document.createElement("td");
        let img = document.createElement("img");
        img.src = "Images/Weather%20Symbols%20for%20Weather%20Codes/" + weatherImgSrc;
        let a = document.createElement("a");
        a.textContent = weatherText;
        td2.appendChild(img);
        td2.appendChild(a);
        let td3 = document.createElement("td");
        td3.textContent = values.temperatureMax;
        let td4 = document.createElement("td");
        td4.textContent = values.temperatureMin;
        let td5 = document.createElement("td");
        td5.textContent = values.windSpeed;
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        table.appendChild(row);
        row.addEventListener("click", function () {that.onRowClick(dayArray[i])});
    }
}

WeatherApp.prototype.onRowClick = function (dayData) {
    let that = this;
    console.log("click row", dayData);
    console.log(this.currentWeatherData);
    this.Clear();

}

function GetDateText(datetime) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return `${days[datetime.getDay()]}, ${datetime.getDate()} ${months[datetime.getMonth()]} ${datetime.getFullYear()}`;
}

function ConvertWeatherCode(weatherCode) {
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
    return [weatherText, weatherImgSrc];
}