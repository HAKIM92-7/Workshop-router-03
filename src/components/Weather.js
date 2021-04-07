import axios from 'axios'
import React ,{useEffect , useState} from 'react'
import './Weather.css'

const Weather = () => {

useEffect(() => {
  
  fetch("http://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=cb996654923fa02faf2f29c548846158")
  .then((res) => res.json())
  .then ((data)=> setWeatherData(data))
  .catch ((err) => console.log(err))





}, [])


const [weatherData , setWeatherData] = useState (null)
const [city , setCity] = useState("")

    return (


        
        <div>

    <form  onSubmit={(e) => {
    e.preventDefault();
    
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb996654923fa02faf2f29c548846158`)
    .then ((res) => setWeatherData(res.data))
    .catch((err) => console.log(err))
 
    }}>

    <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} />
    <button type="submit">Get weather</button>

    </form>






    { weatherData ? 
        <div class="main container">
  <div class="row">
    <div class="col-xs-12">
      <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
        <div class="col-xs-6">
          <h2>{weatherData.name}<br/><small>{`${new Date().getDate().toString()}/${Number(new Date().getMonth().toString())+1}/${new Date().getFullYear().toString()}`}</small></h2>
          <p class="h3"><i class="mi mi-fw mi-lg mi-rain-heavy"></i> {weatherData.weather[0].description}</p>
        </div>
        <div class="col-xs-6 text-center">
          <div class="h1 temperature">
            <span>{Math.round(weatherData.main.temp - 273.15)} °C</span>
            <br/>
            <small>{Math.round(weatherData.main.temp_min - 273.15)}°C/ {Math.round(weatherData.main.temp_max - 273.15)}°C</small>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div> : <div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

    }










        </div>
    )
}

export default Weather
