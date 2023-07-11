// API Call Function
async function getData(city_name) {
    const key = "940077a69e7b57b440fc82e5c8301591"


    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&units=imperial`);
        if (!response.ok) {
            throw new Error('Response was not Okay')
        }

        const data = await response.json()
        console.log(data)
        return data 

    } catch (error) {
        console.error('Error:', error)
    }
}

// Creates an object to hold the DOM elements
const DOMElements = {
    weatherList: '.weather-list'
}

// const createDisplay = async (city, high, low, forecast, humidity) => {

//     const html = `<ul>
//             <li>City: ${city}</li>
//             <li>High: ${high}</li>
//             <li>Low: ${low}</li>
//             <li>Forecast: ${forecast}</li>
//             <li>Humidity: ${humidity}</li> 
//         </ul>`

//     document.querySelector(DOMElements.weatherList).insertAdjacentHTML('beforeend', html)
// }

const createDisplay = async (city, high, low, forecast, humidity) => {
 
    document.getElementById("city").innerHTML = city
    document.getElementById("high").innerHTML = high
    document.getElementById("low").innerHTML = low
    document.getElementById("forecast").innerHTML = forecast
    document.getElementById("humidity").innerHTML = humidity
}

const loadData = async (event) => {

    event.preventDefault()

    let city_name = document.getElementById("userInputCity").value
    console.log(city_name)

    let weather = await getData(city_name)

    city = weather.name
    high = weather.main.temp_max
    low = weather.main.temp_min
    forecast = weather.weather[0].description
    humidity = weather.main.humidity

    createDisplay(city, high, low, forecast, humidity)
}





