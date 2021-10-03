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
                console.log(data);
                let loc = data.loc;
                let lat = parseFloat(loc.split(",")[0]);
                let lng = parseFloat(loc.split(",")[1]);
                RequestWeatherData(lat, lng);
            }
        });
    } else {
        if (street !== "" && city !== "" && state !== "") {
            console.log("search location");
            console.log(street);
            console.log(city);
            console.log(state);
            let address = street + '+' + city + '+' + state;
            let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                address +
                "&key=AIzaSyBmRnM9YBpvHa1SkTZYSZ55p5mB5v1_rFc";
            $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    let lat = parseFloat(data.results[0].geometry.location.lat);
                    let lng = parseFloat(data.results[0].geometry.location.lng);
                    RequestWeatherData(lat, lng);
                }
            });
        }
    }
}

function RequestWeatherData(lat, lng) {
    console.log("request weather data");
    console.log(lat);
    console.log(lng);
    let url = "https://csci571-chenshu-app.azurewebsites.net/example";
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
}