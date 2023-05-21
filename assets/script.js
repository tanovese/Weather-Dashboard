var defaultKey= "a53947f76a99feda746fa882e7d4ef45"
var cityKey= "42653fcad7f3685f0cfbf5d990ef0d44"
var searchButton= document.getElementById("get-weather-button");
const cityUrl= "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
const defaultUrl= "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"

searchButton.addEventListener("click", getWeather)

function getWeather() {
    var city= element.getTextContent()

    fetch('http://api.openweathermap.org/geo/1.0/direct?q={New York},{state code},{country code}&limit={limit}&appid={cityKey}')
    .then(response => response.json())
    console.log('http://api.openweathermap.org/geo/1.0/direct?q={New York},{state code},{country code}&limit={limit}&appid={cityKey}')
    .then(data => {
        var lat = data.lat;
        var lon = data.lon;
        return fetch(`api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={defaultKey}`)
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('city', JSON.stringify(data));
        transferData(data);
    })
}

function transferData(data) {
    console.log(data);
}
