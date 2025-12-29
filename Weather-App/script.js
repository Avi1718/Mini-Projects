const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "YOUR_API_URL_HERE";

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        let data = await response.json()

        document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector(".humidity").innerHTML = data.main.humidity +  "%"
    document.querySelector(".wind").innerHTML = data.wind.speed+ "km/h"

    if(data.weather[0].main ==="Clouds"){
        weatherIcon.src = 'images/clouds.png'
    }
    else if(data.weather[0].main ==="Clear"){
        weatherIcon.src = 'images/clear.png'
    }
    else if(data.weather[0].main ==="Rain"){
        weatherIcon.src = 'images/rain.png'
    }
    else if(data.weather[0].main ==="Mist"){
        weatherIcon.src = 'images/mist.png'
    }
    else if(data.weather[0].main ==="Drizzle"){
        weatherIcon.src = 'images/drizzle.png'
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }
}


searchBtn.addEventListener('click',()=>{
checkWeather(searchBox.value)
})

searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value)
    }
})