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