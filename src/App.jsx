import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Personnages from "./pages/Personnages";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import "./App.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            element={<Personnages search={search} setSearch={setSearch} />}
          />
          <Route path={"/character/:characterId"} element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
