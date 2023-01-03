import { useState } from "react";
import Header from './components/Header'
import SearchBar from './components/Searchbar'
import WeatherContainer from './components/WeatherContainer'

function App() {
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  return (
    <div className="App">
      <Header/>
      <SearchBar setLat={setLat} setLong={setLong}/>
      <WeatherContainer lat={lat} long={long} />
    </div>
  );
}

export default App;
