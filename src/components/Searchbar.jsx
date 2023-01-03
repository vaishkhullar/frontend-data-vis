import React from 'react'
import { useState, useEffect } from 'react'

export default function SearchBar({setCity, setCountry, setLat, setLong}) {

const [newCity, setNewCity] = useState("")
const [newCountry, setNewCountry] = useState("")
const [newLat, setNewLat] = useState("")
const [newLong, setNewLong] = useState("")
const apiKey = "415eb7d59acc60719a4091364e69a840"
console.log(newCity)
console.log(newCountry)

const handleSubmit = (event) => {
    event.preventDefault()
    setCity(newCity)
    setCountry(newCountry)
    setNewCity("")
    setNewCountry("")
    setNewLat("")
    setNewLong("")
  }

useEffect(()=>{
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${newCity},${newCountry}&limit={10}&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) =>{
    setLat(data.lat)
    setLong(data.long)
  })
},[newCity, newCountry])    


  return (
    <form onSubmit={handleSubmit}>
        <label>Search city</label>
        <input type='text' value={newCity} onChange = {(event) => {setNewCity(event.target.value)}}></input>
        <label id='country-select'>Select country</label>
        <select id="country-select" value={newCountry} onChange={(event)=>{setNewCountry(event.target.value)}}>
          <option value="">Please select a country</option>
          <option value="GB">United Kingdom</option>
          <option value="USA">USA</option>
        </select>
        <button>Search</button>
    </form>
  )
}