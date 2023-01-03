import React from 'react'
import { useState } from 'react'

export default function SearchBar() {

const [newSearch, setNewSearch] = useState("")

console.log(newSearch)

const handleSubmit = (event) => {
    event.preventDefault()
    setNewSearch(newSearch)
    setNewSearch("")}


  return (
    <form onSubmit={handleSubmit}>
        <label>Search location</label>
        <input value={newSearch} onChange = {(event) => {setNewSearch(event.target.value)}}></input>
        <button>Search</button>
    </form>
  )
}