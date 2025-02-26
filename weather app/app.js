const apiKey = "e2d83b3be72a0809a54f07767fc00d44";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".button");
const weatherCondition = document.querySelector(".condition");



async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".head1").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + " % ";
  document.querySelector(".wind").innerHTML =
    data.wind.speed + " km/h ";

  if (data.weather[0].main == "clouds") {
    weatherCondition.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherCondition.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherCondition.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherCondition.src = "images/drizzle.png";
  } else weatherCondition.src = "images/mist.png";

  document.querySelector(".portion").style.display="block";
  document.querySelector(".icons").style.display="flex";
}

searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value)})




// var action = document.getElementById("icons");
// action.style.display = "none";

// var action1 = document.getElementById("portion");
// action1.style.display = "none";

// function visible() {

    
//     action1.style.display = "block";
//     action.style.display = "flex";

//   checkWeather(searchBox.value);

// }
