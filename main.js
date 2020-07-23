const api = {
    key:"9a80653ee49a705071899415f1a58d6b"
    base: "https://api.openweathermap.org/data/2.5/"
    }

    const searchbox = document.querySelector('.search-box');
    searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keycode == 13) {
  getResults(searchbox.value);
}
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innertext = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
  let temp = document.querySelector('.location .temp');
  date.innertext = dateBuilder(now);

  let date = document.querySelector('.current .date');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innertext = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innertext = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }