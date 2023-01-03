import React from 'react'
import { useState, useEffect } from 'react'

export default function SearchBar({setLat, setLong}) {

const [city, setCity] = useState('London')
const [country, setCountry] = useState('GB')

const apiKey = "415eb7d59acc60719a4091364e69a840"
console.log(city)
console.log(country)

const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) =>{
    const cityData = data[0]
    console.log(cityData)
    setLat(cityData.lat)
    setLong(cityData.lon)
    setCity("")
    setCountry("")
  })
}

useEffect(()=>{
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) =>{
    const cityData = data[0]
    console.log(cityData)
    setLat(cityData.lat)
    setLong(cityData.lon)
  })
},[])  


  return (
    <form onSubmit={handleSubmit}>
        <label>Search city</label>
        <input type='text' value={city} onChange = {(event) => {setCity(event.target.value)}}></input>
        <label id='country-select'>Select country</label>
        <select id="country-select" value={country} onChange={(event)=>{setCountry(event.target.value)}}>
          <option value="">Please select a country</option>
          <option value="GB">United Kingdom</option>
          <option value="USA">USA</option>
        </select>
        <button>Search</button>
    </form>
  )
}