

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
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name,icon,description,temp,humidity,speed)
    }
    
}


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

         }

