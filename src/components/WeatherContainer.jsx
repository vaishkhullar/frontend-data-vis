import React from 'react'
import { useState, useEffect } from 'react'

export default function WeatherContainer({lat, long}) {
  const [weather, setWeather] = useState("")

  useEffect(()=>{
    console.log(lat, long)
  })

  return (
    <div>weathercOUNTAINER</div>
  )
}