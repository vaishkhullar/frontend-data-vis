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
      <div><p>{cityWeather.main.temp}</p></div>
    )
  }
}