
//this function is for getting weather data
let weather = {
    apiKey: "0dd5077cf1e84f53efb58a023a70db22",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon } = data.weather[0];
      const { temp, humidity, pressure,feels_like, temp_max } = data.main;
      const { speed } = data.wind;
      const { visibility } = data;
      document.querySelector(".city").innerText = name;
      document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector("#temp").innerText = temp;
      document.querySelector(".humidity").innerText = humidity + "%";
      document.querySelector(".wind").innerText = speed + " km/h";
      document.querySelector(".visibility").innerText = visibility/1000;
      document.querySelector(".pressure").innerText = pressure/1000;
      document.querySelector(".feels-like").innerText = feels_like + "°C";
      document.querySelector(".temp-max").innerText = temp_max + "°C"
    },
    
    
};
//function for linking search bar to weather fetching function.
const searchForm = document.querySelector(".searchbar");
const search = document.querySelector("#query");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = search.value;
    if (city) {
      currentCity = city;
      weather.fetchWeather(city);
    }
  });

//function to get time and date
function getDateTime() {
    let now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      // 12 hours format
      hour = hour % 12;
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      let dayString = days[now.getDay()];
      return `${dayString}, ${hour}:${minute}`;
}

//updating date and time
const date = document.getElementById("date-time");
Date.innerText = getDateTime();
setInterval(() => {
    Date.innerText = getDateTime();
}, 1000);


//this function is for chaning light and dark theme

var modeIcon = document.getElementById("mode-icon");

        modeIcon.onclick = function(){
            document.body.classList.toggle("dark-mode");
            if(document.body.classList.contains("dark-mode")){
                modeIcon.src = "icons\icons8-sun-48.png";
            }else{
                modeIcon.src = "icons\icons8-moon-50.png";
            }
        }


//this function is for changing celsius to farenheit

var unit = document.getElementById("unit");

         unit.onclick = function(){
            return ((temp * 9) / 5 + 32).toFixed(1);
            unit.src = "icons\icons8-circled-c-50.png";
         }


