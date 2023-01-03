import { useState } from "react";
import Header from './components/Header'
import SearchBar from './components/Searchbar'
import WeatherContainer from './components/WeatherContainer'

function App() {
  const [city, setCity] = useState('London')
  const[country, setCountry] = useState('GB')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  return (
    <div className="App">
      <Header/>
      <SearchBar setCity={setCity} setCountry={setCountry} setLat={setLat} setLong={setLong}/>
      <WeatherContainer lat={lat} long={long} />
    </div>
  );
}

export default App;
