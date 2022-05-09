import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import CharactersMovie1 from "./CharactersMovie1";
import CharactersMovie2 from "./CharactersMovie2";
import CharactersMovie3 from "./CharactersMovie3";
import CharactersMovie4 from "./CharactersMovie4";
import CharactersMovie5 from "./CharactersMovie5";
import CharactersMovie6 from "./CharactersMovie6";

function App() {
  return (
    <div className="App">
      <NavLink to="/1">Movie1 Characters</NavLink>/
      <NavLink to="/2">Movie2 Characters</NavLink>/
      <NavLink to="/3">Movie3 Characters</NavLink>/
      <NavLink to="/4">Movie4 Characters</NavLink>/
      <NavLink to="/5">Movie5 Characters</NavLink>/
      <NavLink to="/6">Movie6 Characters</NavLink>
      <Routes>
        <Route path="/1" element={<CharactersMovie1 />} />
        <Route path="/2" element={<CharactersMovie2 />} />
        <Route path="/3" element={<CharactersMovie3 />} />
        <Route path="/4" element={<CharactersMovie4 />} />
        <Route path="/5" element={<CharactersMovie5 />} />
        <Route path="/6" element={<CharactersMovie6 />} />
      </Routes>
    </div>
  );
}

export default App;
