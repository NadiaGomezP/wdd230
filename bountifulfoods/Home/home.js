const tempF = document.querySelector('#tempF');
const windS = document.querySelector('#speed')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windch = document.querySelector('#windchill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&appid=5bc1660a21ac63b45bdbdb20b541d94d&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      windChill(data)
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function  displayResults(weatherData) {
  tempF.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  windS.innerHTML = weatherData.wind.speed;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.toUpperCase();
}

function windChill(weatherData) {

const temp = weatherData.main.temp
const speed = weatherData.wind.speed;

if(temp <= 50 && speed >3){
    let winch = 35.74 + 0.6215 * temp - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * temp * (Math.pow(speed, 0.16));
    windch.innerHTML= winch.toFixed(2) + ' F°';
}
else{            
    let winch = "N/A"
    windch.textContent= winch
}}


