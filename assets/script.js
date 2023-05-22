var defaultKey= "a53947f76a99feda746fa882e7d4ef45"
var cityKey= "42653fcad7f3685f0cfbf5d990ef0d44"
var searchButton= document.getElementById("get-weather-button");
const cityUrl= "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
const defaultUrl= "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
var inputEl= document.getElementById("search-bar");
// var city = inputEl.value;
// console.log(city);

searchButton.addEventListener("click", getWeather)

function getWeather(event) {
    event.preventDefault();
    // var city= element.getTextContent()
    var city = inputEl.value;
    console.log(city);

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${cityKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(lat)
        console.log(lon)

        // return fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={a53947f76a99feda746fa882e7d4ef45}")
        geoCoordinates(lat, lon);
    })
    .catch(error => {
        console.log(error);

    })
    // .then(response => response.json())
    // .then(data => {
    //     localStorage.setItem('city', JSON.stringify(data));
    //     transferData(data);
    // })
}

function geoCoordinates(lat, lon) {
    console.log("in new function", lat, lon);
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${defaultKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.list[0].main.humidity);
        transferData(data);
    })
}

function transferData(data) {
    console.log("transfer data", data);
    var selectedCity= document.getElementById("selected-city-title");
    selectedCity.textContent=data.city.name;
    localStorage.setItem('selectedCity', selectedCity.textContent);

    var searchHistory= document.querySelector(".locations");
    var input=localStorage.getItem('selectedCity');

    searchHistory.children.value=input;


    //     transferData(data);
    // selectedCity.textContent=inputEl.value;
}


