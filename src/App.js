import { useState } from "react";
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherContainer from './components/WeatherContainer'

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <WeatherContainer/>
    </div>
  );
}

export default App;
