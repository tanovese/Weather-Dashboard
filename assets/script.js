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
    // console.log('http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={42653fcad7f3685f0cfbf5d990ef0d44}')
    .then(data => {
        console.log(data)
        var lat = data.lat;
        var lon = data.lon;
        // return fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={a53947f76a99feda746fa882e7d4ef45}")
    })
    .catch(error => {
        console.log(error)
    })
    
    // .then(response => response.json())
    // .then(data => {
    //     localStorage.setItem('city', JSON.stringify(data));
    //     transferData(data);
    // })
}

function transferData(data) {
    console.log(data);
}
