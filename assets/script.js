var defaultKey= "a53947f76a99feda746fa882e7d4ef45"
var cityKey= "42653fcad7f3685f0cfbf5d990ef0d44"
var searchButton= document.getElementById("get-weather-button");
const cityUrl= "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
const defaultUrl= "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
var inputEl= document.getElementById("search-bar");

// Get weather button event listener will run the getWeather function
searchButton.addEventListener("click", getWeather)

// getWeather function uses the city api, then we will use the lat and lon from that data
// and transfer it to another function called geoCoordinates, and getCurrent
function getWeather(event) {
    event.preventDefault();
    var city = inputEl.value;
    console.log("City", city);

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${cityKey}`)
    .then(response => response.json())
    .then(data => {
        console.log("Data", data)
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log("Lat", lat)
        console.log("Lon", lon)

        geoCoordinates(lat, lon);
        getCurrent(lat, lon)
    })
    .catch(error => {
        console.log("Error check",error);

    })
}

// The geoCoordinates function uses the lat and lon data from the getWeather fetch
// We use the lat and lon to fetch more data, and that is for the 5 day forecast
function geoCoordinates(lat, lon) {
    console.log("in new function", lat, lon);
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${defaultKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log("Data again", data);
        console.log("Humidity check", data.list[0].main.humidity);
        // Now we are going to transfer this data from the 5 day forecase to another
        // function called transferData
        transferData(data);
    })
}

// The getCurrent data takes the lat and lon from the getWeather data fetch
// We use those parameters to fetch more data, specifically the current day weather data
function getCurrent(lat, lon) {
    console.log("in new function", lat, lon);
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${defaultKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log("Data 3rd check", data);

        // Now we are going to transfer that data to a function
        // called transferCurrentData
        transferCurrentData(data)
    })
}

// The transferCurrentData function takes the data from the getCurrent function
// and this data is used to apply it to the textContent of our given id's
// now we can pull the data we want and apply it to our page
function transferCurrentData(data) {

    //render data, current day
    const currentIcon = document.getElementById("current-icon");
    const currentDay = document.getElementById("current-day")
    const currentTemp = document.getElementById("current-temp")
    const currentHumidity = document.getElementById("current-humidity")
    const currentWind = document.getElementById("current-windspeed")

    currentIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    currentDay.textContent = moment(data.dt * 1000).format("dddd, MMM D")
    currentTemp.textContent = "Temp: " + data.main.temp + " ° F"
    currentHumidity.textContent = "Humidity: " + data.main.humidity + " %"
    currentWind.textContent = "Wind Speed: " + data.wind.speed + " MPH"
}

// The transferData function takes data from the geoCoordinates function
// we use that data by putting in a const array
// then we are referencing the array and displaying the data we want in our given id's
function transferData(data) {
    console.log("Transfer data check", data);

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
    day1Temp.textContent = "Temp: " + selectedData[0].main.temp + " ° F"
    day1Humidity.textContent="Humidity: " + selectedData[0].main.humidity + " %"
    day1Wind.textContent="Wind Speed: " + selectedData[0].wind.speed + " MPH"

    // render the data, day 2
    const day2Day = document.getElementById("day2-day")
    const day2Icon = document.getElementById("day2-icon")
    const day2Temp = document.getElementById("day2-temp")
    const day2Humidity = document.getElementById("day2-humidity")
    const day2Wind = document.getElementById("day2-windspeed")
    
    day2Day.textContent = moment(selectedData[1].dt * 1000).format("dddd, MMM D")
    day2Icon.src = "https://openweathermap.org/img/wn/" + selectedData[1].weather[0].icon + "@2x.png"
    day2Temp.textContent = "Temp: " + selectedData[1].main.temp + " ° F"
    day2Humidity.textContent="Humidity: " + selectedData[1].main.humidity + " %"
    day2Wind.textContent="Wind Speed: " + selectedData[1].wind.speed + " MPH"

    // render the data, day 3
     const day3Day = document.getElementById("day3-day")
     const day3Icon = document.getElementById("day3-icon")
     const day3Temp = document.getElementById("day3-temp")
     const day3Humidity = document.getElementById("day3-humidity")
     const day3Wind = document.getElementById("day3-windspeed")
        
     day3Day.textContent = moment(selectedData[2].dt * 1000).format("dddd, MMM D")
     day3Icon.src = "https://openweathermap.org/img/wn/" + selectedData[2].weather[0].icon + "@2x.png"
     day3Temp.textContent = "Temp: " + selectedData[2].main.temp + " ° F"
     day3Humidity.textContent="Humidity: " + selectedData[2].main.humidity + " %"
     day3Wind.textContent="Wind Speed: " + selectedData[2].wind.speed + " MPH"

    // render the data, day 4
    const day4Day = document.getElementById("day4-day")
    const day4Icon = document.getElementById("day4-icon")
    const day4Temp = document.getElementById("day4-temp")
    const day4Humidity = document.getElementById("day4-humidity")
    const day4Wind = document.getElementById("day4-windspeed")
            
    day4Day.textContent = moment(selectedData[3].dt * 1000).format("dddd, MMM D")
    day4Icon.src = "https://openweathermap.org/img/wn/" + selectedData[3].weather[0].icon + "@2x.png"
    day4Temp.textContent = "Temp: " + selectedData[3].main.temp + " ° F"
    day4Humidity.textContent="Humidity: " + selectedData[3].main.humidity + " %"
    day4Wind.textContent="Wind Speed: " + selectedData[3].wind.speed + " MPH"

    // render the data, day 5
    const day5Day = document.getElementById("day5-day")
    const day5Icon = document.getElementById("day5-icon")
    const day5Temp = document.getElementById("day5-temp")
    const day5Humidity = document.getElementById("day5-humidity")
    const day5Wind = document.getElementById("day5-windspeed")
                
    day5Day.textContent = moment(selectedData[4].dt * 1000).format("dddd, MMM D")
    day5Icon.src = "https://openweathermap.org/img/wn/" + selectedData[4].weather[0].icon + "@2x.png"
    day5Temp.textContent = "Temp: " + selectedData[4].main.temp + " ° F"
    day5Humidity.textContent="Humidity: " + selectedData[4].main.humidity + " %"
    day5Wind.textContent="Wind Speed: " + selectedData[4].wind.speed + " MPH"

    // We are able to reference the data city name and apply it to the
    // selected city title
    var selectedCity= document.getElementById("selected-city-title");
    selectedCity.textContent=data.city.name;

    // Now we need to start local storage setting and getting
    var previousSelectedCity=localStorage.getItem('selectedCity');
    localStorage.setItem('selectedCity', selectedCity.textContent);

    console.log("Previous selected city check", previousSelectedCity);
    console.log("Selected city textContent check", selectedCity.textContent);

    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    searchHistory.push(data.city.name);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    console.log("Search history check", searchHistory);

    // Check if previous selected city is inside the history;
    if(previousSelectedCity === searchHistory.value) {
        return;
    } else {
        addCity();
    }
    // Now we need to start a function for the localStorage storing and display 
}

function addCity(){
    const savedCity = localStorage.getItem("selectedCity");
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("locations");
    const newH3 = document.createElement("h3");
    newH3.textContent = savedCity;
    newH3.addEventListener("click", renderCityHistory);
    
    newDiv.appendChild(newH3)
    const locationsContainer = document.getElementById("locations-container");
    locationsContainer.appendChild(newDiv)
}

function loadFromStorage() {

    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    for (var i = 0; i < searchHistory.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("locations");

        var newH3 = document.createElement("h3");
        newH3.textContent = searchHistory[i];
        newH3.addEventListener("click", renderCityHistory);

        newDiv.appendChild(newH3)
        const locationsContainer = document.getElementById("locations-container");
        locationsContainer.appendChild(newDiv)
    }
}

loadFromStorage();

// Var to clear searches
var clearSearch = document.getElementById("clear-search-button");

// Event listener for clear storage button
clearSearch.addEventListener("click", clearStorage);

// Clear storage function
function clearStorage() {
    localStorage.clear();
}

function renderCityHistory(event) {
    event.preventDefault();
    console.log("Event target textContent check", event.target.textContent)
    var cityHistory=event.target.textContent;
    getWeatherHistory(cityHistory);
}

function getWeatherHistory(cityHistory) {
    console.log("City history check", cityHistory);

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityHistory}&appid=${cityKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log("Lat again check", lat)
        console.log("Lon again check", lon)

        geoCoordinates(lat, lon);
        getCurrent(lat, lon)
    })
    .catch(error => {
        console.log("Error check again", error);
    })
}

//bugs:
//when you click the city history too many times, the formatting changes
//when you click city history, it creates another button for that city
//getWeatherHistory console log does not show up?
//renderCityHistory console log does not show up?