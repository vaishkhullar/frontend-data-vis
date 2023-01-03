import React from 'react'
import { useState, useEffect } from 'react'

export default function WeatherContainer({city, country}) {
  const [weather, setWeather] = useState("")

  useEffect(()=>{
    console.log(city, country)
  })

  return (
    <div>{country}</div>
  )
}