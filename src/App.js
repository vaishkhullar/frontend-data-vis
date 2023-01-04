import { useState } from "react";
import Header from './components/Header'
import SearchBar from './components/Searchbar'
import WeatherContainer from './components/WeatherContainer'

function App() {
  const [lat, setLat] = useState('51.5074')
  const [long, setLong] = useState('-0.1276474')
  return (
    <div className="App">
      <Header/>
      <SearchBar setLat={setLat} setLong={setLong}/>
      <WeatherContainer lat={lat} long={long} />
    </div>
  );
}

export default App;
