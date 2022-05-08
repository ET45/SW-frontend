import { Routes, Route } from "react-router-dom";
import "./App.css";
import CharactersPage from "./CharactersPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersPage />} />
      </Routes>
    </div>
  );
}

export default App;
