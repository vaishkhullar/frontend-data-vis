import React from 'react'
import { useState, useEffect } from 'react'

export default function WeatherContainer({lat, long}) {
  console.log(lat, long, 'initial state')
  const [weather, setWeather] = useState("")
  const [cityWeather, setCityWeather] = useState({})
  useEffect(()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=415eb7d59acc60719a4091364e69a840`)
    .then((response)=>{

      return response.json()
    })
    .then((data)=>{
      console.log(data, 'data')
      setCityWeather(data)
   
    })
  },[lat, long])

  if(cityWeather.hasOwnProperty("main")){
    console.log(Object.keys(cityWeather))
    console.log(cityWeather.main.temp, 'temp')
    return (
    <div>
      <h2 id='containerHeader'> {cityWeather.name}</h2>
      <div id='currentWeather'> Current Weather: {cityWeather.weather[0].description}</div>
      <box>
        <div> Current Temp. {tempConversion(cityWeather.main.temp)}</div>
        <div> Max. Temp. {tempConversion(cityWeather.main.temp_max)}</div>
        <div> Min. Temp. {tempConversion(cityWeather.main.temp_min)}</div>
      </box>
      <box>
        <div> Humidity: {cityWeather.main.humidity}</div>
        <div> Pressure: {cityWeather.main.pressure}</div>
      </box>
      <div> Sunrise: {unixConversion(cityWeather.sys.sunrise)}</div>
      <div> Sunset: {cityWeather.sys.sunset}</div>


    </div>


    )
  }
}

function tempConversion(temp) {
    return Math.round(temp - 273.15)
}
function unixConversion(time) {
    return Date(time*1000)
}