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
        getCurrent(lat, lon)
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
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${defaultKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.list[0].main.humidity);
        transferData(data);
    })
}

function getCurrent(lat, lon) {
    console.log("in new function", lat, lon);
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${defaultKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        transferCurrentData(data)
    })
}

function transferCurrentData(data) {

    //render data, current day
    const currentIcon = document.getElementById("current-icon");
    const currentDay = document.getElementById("current-day")
    const currentTemp = document.getElementById("current-temp")
    const currentHumidity = document.getElementById("current-humidity")
    const currentWind = document.getElementById("current-windspeed")

    currentIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    currentDay.textContent = moment(data.dt * 1000).format("dddd, MMM D")
    currentTemp.textContent = "Temp: " + data.main.temp + " Degrees F"
    currentHumidity.textContent = "Humidity: " + data.main.humidity
    currentWind.textContent = "Wind Speed: " + data.wind.speed
}

function transferData(data) {
    console.log("transfer data", data);

    const selectedData = [
        data.list[5],
        data.list[13],
        data.list[21],
        data.list[29],
        data.list[37]
    ]

    // render the data, day 1
    const day1Day = document.getElementById("day1-day")
    const day1Icon = document.getElementById("day1-icon")
    const day1Temp = document.getElementById("day1-temp")
    const day1Humidity = document.getElementById("day1-humidity")
    const day1Wind = document.getElementById("day1-windspeed")

    day1Day.textContent = moment(selectedData[0].dt * 1000).format("dddd, MMM D")
    day1Icon.src = "https://openweathermap.org/img/wn/" + selectedData[0].weather[0].icon + "@2x.png"
    day1Temp.textContent = "Temp: " + selectedData[0].main.temp + " Degrees F"
    day1Humidity.textContent="Humidity: " + selectedData[0].main.humidity
    day1Wind.textContent="Wind Speed: " + selectedData[0].wind.speed

    // render the data, day 2
    const day2Day = document.getElementById("day2-day")
    const day2Icon = document.getElementById("day2-icon")
    const day2Temp = document.getElementById("day2-temp")
    const day2Humidity = document.getElementById("day2-humidity")
    const day2Wind = document.getElementById("day2-windspeed")
    
    day2Day.textContent = moment(selectedData[1].dt * 1000).format("dddd, MMM D")
    day2Icon.src = "https://openweathermap.org/img/wn/" + selectedData[1].weather[0].icon + "@2x.png"
    day2Temp.textContent = "Temp: " + selectedData[1].main.temp + " Degrees F"
    day2Humidity.textContent="Humidity: " + selectedData[1].main.humidity
    day2Wind.textContent="Wind Speed: " + selectedData[1].wind.speed

    // render the data, day 3
     const day3Day = document.getElementById("day3-day")
     const day3Icon = document.getElementById("day3-icon")
     const day3Temp = document.getElementById("day3-temp")
     const day3Humidity = document.getElementById("day3-humidity")
     const day3Wind = document.getElementById("day3-windspeed")
        
     day3Day.textContent = moment(selectedData[2].dt * 1000).format("dddd, MMM D")
     day3Icon.src = "https://openweathermap.org/img/wn/" + selectedData[2].weather[0].icon + "@2x.png"
     day3Temp.textContent = "Temp: " + selectedData[2].main.temp + " Degrees F"
     day3Humidity.textContent="Humidity: " + selectedData[2].main.humidity
     day3Wind.textContent="Wind Speed: " + selectedData[2].wind.speed

    // render the data, day 4
    const day4Day = document.getElementById("day4-day")
    const day4Icon = document.getElementById("day4-icon")
    const day4Temp = document.getElementById("day4-temp")
    const day4Humidity = document.getElementById("day4-humidity")
    const day4Wind = document.getElementById("day4-windspeed")
            
    day4Day.textContent = moment(selectedData[3].dt * 1000).format("dddd, MMM D")
    day4Icon.src = "https://openweathermap.org/img/wn/" + selectedData[3].weather[0].icon + "@2x.png"
    day4Temp.textContent = "Temp: " + selectedData[3].main.temp + " Degrees F"
    day4Humidity.textContent="Humidity: " + selectedData[3].main.humidity
    day4Wind.textContent="Wind Speed: " + selectedData[3].wind.speed

    // render the data, day 5
    const day5Day = document.getElementById("day5-day")
    const day5Icon = document.getElementById("day5-icon")
    const day5Temp = document.getElementById("day5-temp")
    const day5Humidity = document.getElementById("day5-humidity")
    const day5Wind = document.getElementById("day5-windspeed")
                
    day5Day.textContent = moment(selectedData[4].dt * 1000).format("dddd, MMM D")
    day5Icon.src = "https://openweathermap.org/img/wn/" + selectedData[4].weather[0].icon + "@2x.png"
    day5Temp.textContent = "Temp: " + selectedData[4].main.temp + " Degrees F"
    day5Humidity.textContent="Humidity: " + selectedData[4].main.humidity
    day5Wind.textContent="Wind Speed: " + selectedData[4].wind.speed


    var selectedCity= document.getElementById("selected-city-title");
    selectedCity.textContent=data.city.name;
    localStorage.setItem('selectedCity', selectedCity.textContent);

    var searchHistory= document.querySelector(".locations");
    var input=localStorage.getItem('selectedCity');

    searchHistory.value=input;
    
    loadFromStorage();
}



function loadFromStorage () {
    const savedCity = localStorage.getItem("selectedCity");

    //<div class="locations">
    //    <h3>savedCity</h3>
    //</div>

    const newDiv = document.createElement("div");
    newDiv.classList.add("locations");

    const newH3 = document.createElement("h3");
    newH3.textContent = savedCity;

    newDiv.appendChild(newH3)

    const locationsContainer = document.getElementById("locations-container");
    locationsContainer.appendChild(newDiv)
}


loadFromStorage();