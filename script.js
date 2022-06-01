// fetch("https://api.openweathermap.org/data/2.5/weather?q=newark&units=imperial&APPID=209189943a26243e19e862011b35aa5e", {
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Select all required elements and assign them to variables
const cityText = $("#city");
const tempText = $("#temp");
const tempDescription = $("#tempDescription")
const humidityText = $("#humidity");
const windText = $("#wind");
const mainIcon =$("#mainIcon");
const cardsRow = $("#cardsRow");
const weatherForecast = $("#forecastRow");
const displayCard = $("#displayCard");
const uvIndexText = $("#uvIndex");
const buttonList = $("#buttonsList");
const forecastDate = {};
const forecastIcon = {};
const forecastTemp = {};
const forecastHum = {};
const today = moment().format('MM' + "/" + 'DD' + '/' + 'YYYY');
const APIKey = "&units=imperial&APPID=209189943a26243e19e862011b35aa5e";
const url =  "https://api.openweathermap.org/data/2.5/weather?q=";

// Display current weather of a city
function currentWeather(userInput) {
    mainIcon.empty(); // empty all child elements when function is ran
    const queryURL = url + userInput + APIKey;
    fetch (queryURL, { // fetch the city that was searched
    })
        .then(function(response){
            return response.json();
        })
        .then(function (data) { // grab the weather data from the API call
            let cityInfo = data.name;
            let country = data.sys.country; 
            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let wind = data.wind.speed;
            let description = data.weather[0].description;
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let icon = data.weather[0].icon;
            let uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + "&APPID=209189943a26243e19e862011b35aa5e"; // create uv index API url from the lat & lon data
            let mainImage = $("<img>").attr("class", "card-img-top").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png"); // create image URL via https://openweathermap.org/weather-conditions
            mainIcon.append(mainImage);
            cityText.text(cityInfo + ", " + country + " " + today);
            tempText.text("Temperature: " + Math.round(temp) + " ºF"); // Round the temperature for readability
            tempDescription.text(description);
            humidityText.text("Humidity: " + humidity + " %");
            windText.text("Wind Speed: " + wind + " MPH");
        });
        // fetch (uvIndexURL, { // fetch UV index from uvIndexURL
        // })
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function(uvIndex){
        //         let uv = uvIndex.value; // grab UV index value from API call
        //         let uvAlert = "";
        //         if (uv <= 3) { // UV minimal
        //             uvAlert = "green";
        //         } else if (uv >= 3 & uv <= 6) { // UV moderate
        //             uvAlert = "yellow";
        //         } else if (uv >= 6 & uv <= 8) { // UV High
        //             uvAlert = "orange";
        //         } else {
        //             uvAlert = "red"; // UV Very High
        //         }
        //         uvIndexText.empty();
        //         const uvText = $("<p>").attr("class", "card-text").text("UV Index: ");
        //         uvText.append($("<span>").attr("class", "uvindex").attr("style", ("background-color: " + uvAlert)).text(uv))
        //         uvIndexText.append(uvText);
        //         displayCard.attr("style", "display: flex; width: 98%");
        // });
}