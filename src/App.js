import { useState } from "react";
import Header from './components/Header'

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
